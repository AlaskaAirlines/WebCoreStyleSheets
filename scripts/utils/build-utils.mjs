/**
 * Build Utilities
 * 
 * Shared functions for CSS/SASS build processes
 */

import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import cssnano from 'cssnano';
import * as sass from 'sass';
import { processFontFamilies, removeQuotesFromNumericValues } from './css-processing.mjs';

/**
 * Standard license header for minified files
 */
export const STANDARD_LICENSE = `/*
 * Copyright (c) Alaska Air. All rights reserved. Licensed under the Apache-2.0 license
 * See LICENSE in the project root for license information.
 */`;

/**
 * Ensures directory exists, creating it recursively if needed
 * @param {string} dirPath - Directory path to ensure exists
 */
export function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Ensures multiple directories exist
 * @param {string[]} dirPaths - Array of directory paths to ensure exist
 */
export function ensureDirectoriesExist(dirPaths) {
  dirPaths.forEach(ensureDirectoryExists);
}

/**
 * Default SASS compilation options
 */
const DEFAULT_SASS_OPTIONS = {
  style: "expanded",
  sourceMap: false
};

/**
 * Default PostCSS/cssnano options
 */
const DEFAULT_CSSNANO_OPTIONS = {
  preset: ['default', {
    minifyFontValues: {
      // Preserve font-family quotes
      removeQuotes: false
    }
  }]
};

/**
 * Compiles SASS to CSS with standard processing
 * @param {string} srcPath - Source SASS file path
 * @param {Object} options - Compilation options
 * @param {string[]} [options.loadPaths] - Additional load paths for SASS
 * @param {boolean} [options.isTemplate] - Whether this is a template file
 * @param {Object} [options.templateData] - Data for template replacement
 * @param {boolean} [options.skipProcessing] - Skip CSS processing (for legacy themes)
 * @returns {Promise<string>} Compiled CSS text
 */
export async function compileSass(srcPath, options = {}) {
  const {
    loadPaths = [],
    isTemplate = false,
    templateData = {},
    skipProcessing = false
  } = options;

  try {
    let sassResult;
    
    if (isTemplate) {
      // For template files, replace placeholders with actual values
      const templateContent = fs.readFileSync(srcPath, 'utf8');
      let processedContent = templateContent;
      
      // Replace template placeholders
      Object.entries(templateData).forEach(([key, value]) => {
        const placeholder = new RegExp(key, 'g');
        processedContent = processedContent.replace(placeholder, value);
      });

      sassResult = sass.compileString(processedContent, {
        style: "expanded",
        sourceMap: false,
        loadPaths: [path.dirname(srcPath), ...loadPaths]
      });
    } else {
      // For regular SCSS files, compile directly
      sassResult = sass.compile(srcPath, {
        style: "expanded",
        sourceMap: false,
        loadPaths: [path.dirname(srcPath), ...loadPaths]
      });
    }
    
    let cssText = sassResult.css;
    
    // Skip processing for legacy themes to preserve original format
    if (!skipProcessing) {
      // Remove quotes from numeric values
      cssText = removeQuotesFromNumericValues(cssText);
      
      // Process font-family values
      cssText = processFontFamilies(cssText);
    }
    
    return cssText;
  } catch (error) {
    throw new Error(`SASS compilation failed for ${srcPath}: ${error.message}`);
  }
}

/**
 * Minifies CSS using PostCSS and cssnano
 * @param {string} cssText - CSS text to minify
 * @param {Object} [options] - cssnano options
 * @returns {Promise<string>} Minified CSS text
 */
export async function minifyCSS(cssText, options = DEFAULT_CSSNANO_OPTIONS) {
  try {
    const result = await postcss([cssnano(options)]).process(cssText, {
      from: undefined, // Prevents source map generation
    });
    
    return result.css;
  } catch (error) {
    throw new Error(`CSS minification failed: ${error.message}`);
  }
}

/**
 * Writes CSS content to file with optional license header
 * @param {string} filePath - Destination file path
 * @param {string} cssContent - CSS content to write
 * @param {boolean} [addLicense] - Whether to add license header
 * @param {boolean} [addCharset] - Whether to add @charset directive
 */
export function writeCSS(filePath, cssContent, addLicense = false, addCharset = false) {
  let finalContent = cssContent;
  
  if (addLicense) {
    finalContent = `${STANDARD_LICENSE}\n${cssContent}`;
  }
  
  if (addCharset) {
    finalContent = `@charset "UTF-8";\n${finalContent}`;
  }
  
  fs.writeFileSync(filePath, finalContent);
}

/**
 * Complete SASS to CSS processing pipeline
 * Compiles SASS, processes CSS, creates both regular and minified versions
 * @param {Object} config - Processing configuration
 * @param {string} config.srcPath - Source SASS file path
 * @param {string} config.destPath - Destination CSS file path
 * @param {string} config.minDestPath - Destination minified CSS file path
 * @param {Object} [config.sassOptions] - SASS compilation options
 * @param {Object} [config.minifyOptions] - Minification options
 * @param {boolean} [config.addCharset] - Add @charset to main CSS file
 * @returns {Promise<boolean>} Success status
 */
export async function processSassToCSS(config) {
  const {
    srcPath,
    destPath,
    minDestPath,
    sassOptions = {},
    minifyOptions = DEFAULT_CSSNANO_OPTIONS,
    addCharset = false
  } = config;

  try {
    // Compile SASS to CSS
    const cssText = await compileSass(srcPath, sassOptions);
    
    // Write main CSS file
    const cssWithLicense = addCharset 
      ? `@charset "UTF-8";\n${STANDARD_LICENSE}\n\n${cssText}`
      : cssText;
    writeCSS(destPath, cssWithLicense);
    
    // Minify CSS
    const minifiedCSS = await minifyCSS(cssText, minifyOptions);
    
    // Write minified CSS file with license
    writeCSS(minDestPath, minifiedCSS, true);
    
    return true;
  } catch (error) {
    console.error(`Error processing ${srcPath}: ${error.message}`);
    return false;
  }
}

/**
 * Processes multiple SASS files concurrently
 * @param {Array} configs - Array of processing configurations
 * @param {Function} [progressCallback] - Optional callback for progress updates
 * @returns {Promise<boolean[]>} Array of success statuses
 */
export async function processSassFiles(configs, progressCallback) {
  const promises = configs.map(async (config, index) => {
    if (progressCallback) {
      progressCallback(config, index);
    }
    
    return processSassToCSS(config);
  });
  
  return Promise.all(promises);
}

/**
 * Creates a standardized build reporter
 * @param {string} buildName - Name of the build process
 * @returns {Object} Reporter object with logging methods
 */
export function createBuildReporter(buildName) {
  return {
    start: (message = '') => {
      console.log(`\nBuilding ${buildName}...${message ? ` ${message}` : ''}`);
    },
    
    processing: (src, dest, extra = '') => {
      console.log(`- Processing ${src} → ${dest}${extra ? ` ${extra}` : ''}`);
    },
    
    success: (message = '') => {
      console.log(`${buildName} built successfully!${message ? ` ${message}` : ''}`);
    },
    
    error: (message) => {
      console.error(`Failed to build ${buildName}. ${message}`);
    },
    
    processError: (error) => {
      console.error(`Build process error: ${error.message}`);
    }
  };
}
