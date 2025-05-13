#!/usr/bin/env node

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

// Check output directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
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
    
    // Write to destination
    fs.writeFileSync(destPath, sassResult.css);
    
    // Process with cssnano
    const minifiedResult = await postcss([cssnano({
      preset: 'default',
    })])
    .process(sassResult.css, { 
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
