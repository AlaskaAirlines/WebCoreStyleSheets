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
 * 5. Creates an Alaska-themed version with hardcoded fallback values for use as an optional Auro default
 */

import path from 'path';
import { fileURLToPath } from 'url';
import { THEME_DEFINITIONS } from '@aurodesignsystem/design-tokens/src/config/themes.js';
import { withoutExcludedThemes } from './excluded-themes.mjs';
import {
  ensureDirectoryExists,
  processSassToCSS,
  createBuildReporter
} from './utils/build-utils.mjs';

// Get dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base directories
const srcDir = path.join(__dirname, '../src/type');
const bundledTypeSrcDir = path.join(__dirname, '../src/bundled/type');
const distDir = path.join(__dirname, '../dist/bundled/type');

// Ensure output directories exist
ensureDirectoryExists(distDir);
ensureDirectoryExists(path.join(distDir, 'themes'));

// Create build reporter
const reporter = createBuildReporter('typography classes CSS file');

// Build configurations
const buildConfigs = [
  {
    name: 'Main Typography Classes',
    srcPath: path.join(srcDir, 'mixins/_type-classes-generator.scss'),
    destPath: path.join(distDir, 'classes.css'),
    minDestPath: path.join(distDir, 'classes.min.css'),
    sassOptions: {
      loadPaths: [
        path.join(__dirname, '../src'), 
        path.join(__dirname, '../node_modules')
      ]
    },
    addCharset: true
  },
  {
    name: 'Alaska Fallback Classes',
    srcPath: path.join(srcDir, 'mixins/_type-classes-alaska-generator.scss'),
    destPath: path.join(distDir, 'classes.alaska.css'),
    minDestPath: path.join(distDir, 'classes.alaska.min.css'),
    sassOptions: {
      loadPaths: [
        path.join(__dirname, '../src'),
        path.join(__dirname, '../node_modules')
      ]
    },
    addCharset: true
  }
];

// Per-theme multi-theme type custom property bundles (AB#1612078).
// Each theme's entry file emits its own type vars under `:root` plus its
// data-aag-theme attribute selectors, and every other theme's vars under their
// attribute selectors only — so a single stylesheet supports runtime theme
// switching via the data-aag-theme attribute. Sourced from design-tokens'
// THEME_DEFINITIONS so the theme list stays drift-free.
for (const { dir } of withoutExcludedThemes(THEME_DEFINITIONS)) {
  buildConfigs.push({
    name: `Type Theme Bundle (${dir})`,
    srcPath: path.join(bundledTypeSrcDir, 'themes', `${dir}.scss`),
    destPath: path.join(distDir, 'themes', `${dir}.css`),
    minDestPath: path.join(distDir, 'themes', `${dir}.min.css`),
    sassOptions: {
      loadPaths: [
        path.join(__dirname, '../src'),
        path.join(__dirname, '../node_modules')
      ]
    },
    addCharset: true
  });
}

// Start build process
reporter.start();

// Process each configuration sequentially
async function buildTypographyClasses() {
  try {
    for (const config of buildConfigs) {
      const { name, srcPath, destPath, minDestPath, sassOptions, addCharset } = config;
      
      // Report progress
      const relativeSrc = path.relative(path.join(__dirname, '../'), srcPath);
      const relativeDest = path.relative(path.join(__dirname, '../'), destPath);
      reporter.processing(relativeSrc, relativeDest, '(+ minified)');
      
      // Process SASS to CSS
      const success = await processSassToCSS({
        srcPath,
        destPath,
        minDestPath,
        sassOptions,
        addCharset
      });
      
      if (!success) {
        reporter.error(`Failed to build ${name}.`);
        process.exit(1);
      }
      
      console.log(`${name} built successfully!`);
    }
    
    reporter.success();
  } catch (error) {
    reporter.processError(error);
    process.exit(1);
  }
}

// Execute build
buildTypographyClasses();
