#!/usr/bin/env node

/**
 * Build Type Classes CSS File
 * 
 * Compiles the common typography classes from SCSS to CSS for use across all themes.
 * 
 * 1. Processes the type-classes-generator.scss file to generate common typography classes
 * 2. Transforms SCSS to CSS
 * 3. Creates both expanded and minified versions
 * 4. Adds proper license headers
 * 5. Creates an Alaska fallback version with hardcoded values for browsers without CSS custom properties
 */

import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import postcss from 'postcss';
import cssnano from 'cssnano';
import * as sass from 'sass';
import { processFontFamilies, removeQuotesFromNumericValues } from './utils/css-processing.mjs';

// Get dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base directories
const srcDir = path.join(__dirname, '../src/type');
const distDir = path.join(__dirname, '../dist/bundled/type');

// Check output directories exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

console.log('\nBuilding typography classes CSS file...');

// Insert the standard license for minified files
const standardLicense = `/*
 * Copyright (c) Alaska Air. All rights reserved. Licensed under the Apache-2.0 license
 * See LICENSE in the project root for license information.
 */`;

// Process SASS to CSS
async function processSass(srcPath, destPath, minDestPath) {
  try {
    const sassResult = sass.compile(srcPath, {
      style: "expanded",
      sourceMap: false,
      loadPaths: [path.join(__dirname, '../src'), path.join(__dirname, '../node_modules')]
    });
    
    // Handle quotes in CSS
    let cssText = sassResult.css;
    
    // Remove quotes from numeric values
    cssText = removeQuotesFromNumericValues(cssText);
    
    // Process font-family values to ensure proper quoting
    cssText = processFontFamilies(cssText, /(font-family:\s*)(.*?)(;)/g);
    
    // Add license header to CSS
    const cssWithLicense = `@charset "UTF-8";\n${standardLicense}\n\n${cssText}`;
    
    // Write to CSS file
    fs.writeFileSync(destPath, cssWithLicense);
    
    // Minify CSS
    const minResult = await postcss([cssnano({ preset: 'default' })]).process(cssText, {
      from: undefined,
    });
    
    // Add license header to minified CSS
    const minifiedWithLicense = `${standardLicense}\n${minResult.css}`;
    
    // Write to minified file
    fs.writeFileSync(minDestPath, minifiedWithLicense);
    
    return true;
  } catch (error) {
    console.error(`Error processing ${srcPath}: ${error.message}`);
    return false;
  }
}

// Source and destination file paths
const srcPath = path.join(srcDir, 'mixins/_type-classes-generator.scss');
const destPath = path.join(distDir, 'classes.css');
const minDestPath = path.join(distDir, 'classes.min.css');

// Alaska fallback file paths
const alaskaSrcPath = path.join(srcDir, 'mixins/_type-classes-alaska-generator.scss');
const alaskaDestPath = path.join(distDir, 'classes.alaska.css');
const alaskaMinDestPath = path.join(distDir, 'classes.alaska.min.css');

console.log(`- Processing ${srcPath} → ${destPath} (+ minified)`);

// Process SASS to CSS and create minified version
processSass(srcPath, destPath, minDestPath)
  .then(result => {
    if (result !== false) {
      console.log('Typography classes built successfully!');
      
      // Now build the Alaska fallback version
      console.log(`- Processing ${alaskaSrcPath} → ${alaskaDestPath} (+ minified)`);
      return processSass(alaskaSrcPath, alaskaDestPath, alaskaMinDestPath);
    } else {
      console.error('Failed to build typography classes file.');
      process.exit(1);
    }
  })
  .then(result => {
    if (result !== false) {
      console.log('Alaska fallback classes built successfully!');
    } else {
      console.error('Failed to build Alaska fallback classes file.');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error(`Build process error: ${error.message}`);
    process.exit(1);
  });
