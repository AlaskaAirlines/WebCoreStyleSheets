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
const distDir = path.join(__dirname, '../dist/bundled/type');

// Ensure output directory exists
ensureDirectoryExists(distDir);

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
