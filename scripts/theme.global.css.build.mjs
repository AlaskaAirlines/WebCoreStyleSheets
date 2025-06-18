#!/usr/bin/env node

/**
 * Build Theme Global Sass Files
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
import { standardThemes, legacyThemes } from './theme.global.css.config.mjs';

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

// Make sure subdirectories exist
const subDirs = ['legacy', 'themes'];
subDirs.forEach(dir => {
  const subDir = path.join(distDir, dir);
  if (!fs.existsSync(subDir)) {
    fs.mkdirSync(subDir, { recursive: true });
  }
});

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
async function processSass(srcPath, destPath, minDestPath, theme) {
  try {
    // Check if this is a template file
    const isTemplate = srcPath.includes('template');
    
    let sassResult;
    
    if (isTemplate) {
      // For template files, replace THEME_NAME with actual theme name
      const templateContent = fs.readFileSync(srcPath, 'utf8');
      const themeName = theme.name || theme.src.split('/').pop().replace('.global.scss', '');
      const processedContent = templateContent.replace(/THEME_NAME/g, themeName);

      sassResult = sass.compileString(processedContent, {
        style: "expanded",
        sourceMap: false,
        loadPaths: [path.dirname(srcPath), path.join(__dirname, '../node_modules')]
      });
    } else {
      // For regular SCSS files, compile directly
      sassResult = sass.compile(srcPath, {
        style: "expanded",
        sourceMap: false,
        loadPaths: [path.dirname(srcPath), path.join(__dirname, '../node_modules')]
      });
    }
    
    // Handle quotes in CSS
    let cssText = sassResult.css;
    
    // Check if this is a legacy theme
    const isLegacy = srcPath.includes('/legacy/');
    
    // Skip legacy themes to preserve their original format
    if (!isLegacy) {
      // Remove quotes from numeric values
      cssText = cssText.replace(
        /:\s*"([0-9.]+(?:rem|em|px|vh|vw|%|s|ms|deg|turn|rad)?)"(?=\s*[;,}])/g, 
        ': $1'
      );
      
      // Only process font-family properties - add quotes to font-family values in CSS custom properties
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
      
      // Also handle direct font-family assignments (not in variables)
      cssText = cssText.replace(
        /font-family:\s*([^;"{][^;]*[^;"}])\s*;/g,
        (match, fontValue) => {
          // Skip if already quoted or contains var()
          if (fontValue.trim().startsWith('"') || 
              fontValue.trim().startsWith("'") || 
              fontValue.includes('var(')) {
            return match;
          }
          return `font-family: "${fontValue.trim()}";`;
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
  return processSass(srcPath, destPath, minDestPath, theme);
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
