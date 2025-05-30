#!/usr/bin/env node

/**
 * Build Essentials Sass Files
 * 
 * Compiles the SCSS theme files (standard and legacy) from src/bundled to CSS in dist/bundled.
 * 
 * 1. Processes both standard themes (defined in design tokens) and legacy themes (Auro Classic)
 * 2. Transforms SCSS to CSS
 * 3. Creates both expanded and minified versions of each CSS file
 * 4. Adds proper license headers
 */

import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import postcss from 'postcss';
import cssnano from 'cssnano';
import * as sass from 'sass';
import { standardThemes, legacyThemes } from './themeConfig.mjs';

// Get dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base directories
const srcDir = path.join(__dirname, '../src/bundled');
const distDir = path.join(__dirname, '../dist/bundled');

// Check output directories exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Make sure legacy directory exists too
const legacyDistDir = path.join(distDir, 'legacy');
if (!fs.existsSync(legacyDistDir)) {
  fs.mkdirSync(legacyDistDir, { recursive: true });
}

// Combined themes array
const themes = [...standardThemes, ...legacyThemes];

// Process arguments
const args = process.argv.slice(2);
const buildSpecific = args.length > 0;
const buildTypes = {
  standard: args.includes('standard') || (!buildSpecific),
  legacy: args.includes('legacy') || (!buildSpecific)
};

console.log('\nBuilding Essentials Sass files...' + (buildSpecific ? ` (${args.join(', ')})` : ''));

// Insert the standard license for minified files
const standardLicense = `/*
 * Copyright (c) Alaska Air. All rights reserved. Licensed under the Apache-2.0 license
 * See LICENSE in the project root for license information.
 */`;

// Process SASS to CSS
async function processSass(srcPath, destPath, minDestPath) {
  try {
    // Compile SASS
    const sassResult = sass.compile(srcPath, {
      style: "expanded",
      sourceMap: false
    });
    
    // Handle quotes in font-family
    let cssText = sassResult.css;
    
    // Check if this is a legacy theme
    const isLegacy = srcPath.includes('/legacy/');
    
    // Skip legacy themes to preserve their original format
    if (!isLegacy) {
      // For modern themes, add quotes to font-family values that don't already have them
      cssText = cssText.replace(
        /font-family:\s*var\(--([^,]+),\s*([^"'][^)]+[^"'])\)/g, 
        (match, varName, fontValue) => {
          // Only add quotes if the string doesn't already have them
          if (fontValue.trim().startsWith('"') || fontValue.trim().startsWith("'")) {
            // If it already has quotes, leave it as is
            return match;
          }
          return `font-family: var(--${varName}, "${fontValue}")`;
        }
      );
    }
    
    // Write to destination
    fs.writeFileSync(destPath, cssText);
    
    // Process with cssnano
    const minifiedResult = await postcss([cssnano({
      preset: ['default', {
        minifyFontValues: {
          // Preserve font-family quotes
          removeQuotes: false
        }
      }]
    })])
    .process(cssText, { 
      // Prevents source map generation
      from: undefined,
    });
    
    // Add standard license to minified content
    const minifiedWithLicense = `${standardLicense}\n${minifiedResult.css}`;
    
    // Write to minified file
    fs.writeFileSync(minDestPath, minifiedWithLicense);
    
    return true;
  } catch (error) {
    console.error(`Error processing ${srcPath}: ${error.message}`);
    return false;
  }
}

// Process each theme
const buildPromises = themes.map(async (theme) => {
  const isLegacy = legacyThemes.some(lt => lt.src === theme.src);
  
  // Skip if theme doesn't match requested build criteria
  if (buildSpecific && 
      !args.some(arg => theme.src.includes(arg)) && 
      !((isLegacy && buildTypes.legacy) || (!isLegacy && buildTypes.standard))) {
    return;
  }

  const srcPath = path.join(srcDir, theme.src);
  const destPath = path.join(distDir, theme.dest);
  const minDestPath = destPath.replace(/\.css$/, '.min.css');
  
  console.log(`- [${isLegacy ? 'LEGACY' : 'STANDARD'}] ${theme.src} → ${theme.dest} (+ minified)`);
  
  // Process SASS to CSS and create minified version
  return processSass(srcPath, destPath, minDestPath);
});

// Wait for all processing to complete
Promise.all(buildPromises)
  .then(results => {
    if (results.every(result => result !== false)) {
      console.log('Sass build and minification completed successfully!');
    } else {
      console.error('Some files failed to build or minify.');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error(`Build process error: ${error.message}`);
    process.exit(1);
  });
