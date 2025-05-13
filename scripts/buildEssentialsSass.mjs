#!/usr/bin/env node

import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { standardThemes, legacyThemes } from './themeConfig.mjs';

// Get dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to local node_modules sass
const sassPath = path.join(__dirname, '../node_modules/.bin/sass');

// Base directories
const srcDir = path.join(__dirname, '../src/bundled');
const distDir = path.join(__dirname, '../dist/bundled');

// Ensure the output directory exists
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

// Process each theme
themes.forEach(theme => {
  const isLegacy = legacyThemes.some(lt => lt.src === theme.src);
  
  // Skip if theme doesn't match requested build criteria
  if (buildSpecific && 
      !args.some(arg => theme.src.includes(arg)) && 
      !((isLegacy && buildTypes.legacy) || (!isLegacy && buildTypes.standard))) {
    return;
  }

  const srcPath = path.join(srcDir, theme.src);
  const destPath = path.join(distDir, theme.dest);
  
  console.log(`- [${isLegacy ? 'LEGACY' : 'STANDARD'}] ${theme.src} → ${theme.dest}`);
  
  try {
    execSync(`${sassPath} --no-source-map ${srcPath}:${destPath}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error: ${theme.src} - ${error.message}`);
    process.exit(1);
  }
});

console.log('Sass build completed successfully!\n');
