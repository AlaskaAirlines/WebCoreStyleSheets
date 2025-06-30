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
import { fileURLToPath } from 'url';
import { standardThemes, legacyThemes } from './theme.global.css.config.mjs';
import { 
  ensureDirectoriesExist,
  processSassFiles,
  createBuildReporter
} from './utils/build-utils.mjs';

// Get dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base directories
const srcDir = path.join(__dirname, '../src/bundled');
const distDir = path.join(__dirname, '../dist/bundled');

// Ensure output directories exist
ensureDirectoriesExist([
  distDir,
  path.join(distDir, 'legacy'),
  path.join(distDir, 'themes')
]);

// Combined themes array
const themes = [...standardThemes, ...legacyThemes];

// Process arguments
const args = process.argv.slice(2);
const buildSpecific = args.length > 0;
const buildTypes = {
  standard: args.includes('standard') || (!buildSpecific),
  legacy: args.includes('legacy') || (!buildSpecific)
};

// Create build reporter
const buildTypeInfo = buildSpecific ? ` (${args.join(', ')})` : '';
const reporter = createBuildReporter(`Global Theme Sass files${buildTypeInfo}`);

/**
 * Creates build configuration for a theme
 * @param {Object} theme - Theme configuration
 * @param {boolean} isLegacy - Whether this is a legacy theme
 * @returns {Object} Build configuration
 */
function createThemeConfig(theme, isLegacy) {
  const srcPath = path.join(srcDir, theme.src);
  const destPath = path.join(distDir, theme.dest);
  const minDestPath = destPath.replace(/\.css$/, '.min.css');
  
  // Check if this is a template file
  const isTemplate = theme.src.includes('template');
  
  return {
    srcPath,
    destPath,
    minDestPath,
    sassOptions: {
      loadPaths: [path.join(__dirname, '../node_modules')],
      isTemplate,
      templateData: isTemplate ? {
        'THEME_NAME': theme.name || theme.src.split('/').pop().replace('.global.scss', '')
      } : {},
      skipProcessing: isLegacy // Skip processing for legacy themes
    },
    theme,
    isLegacy
  };
}

// Filter themes based on build criteria and create configurations
const buildConfigs = themes
  .filter(theme => {
    const isLegacy = legacyThemes.some(lt => lt.src === theme.src);
    
    // Skip if theme doesn't match requested build criteria
    if (buildSpecific && 
        !args.some(arg => theme.src.includes(arg)) && 
        !((isLegacy && buildTypes.legacy) || (!isLegacy && buildTypes.standard))) {
      return false;
    }
    
    return true;
  })
  .map(theme => {
    const isLegacy = legacyThemes.some(lt => lt.src === theme.src);
    return createThemeConfig(theme, isLegacy);
  });

// Progress callback for reporting
function progressCallback(config) {
  const { theme, isLegacy } = config;
  const typeLabel = isLegacy ? 'LEGACY' : 'STANDARD';
  reporter.processing(`[${typeLabel}] ${theme.src}`, theme.dest, '(+ minified)');
}

// Start build process
reporter.start();

// Process all theme configurations
processSassFiles(buildConfigs, progressCallback)
  .then(results => {
    if (results.every(result => result !== false)) {
      reporter.success();
    } else {
      reporter.error('Some files failed to build or minify.');
      process.exit(1);
    }
  })
  .catch(error => {
    reporter.processError(error);
    process.exit(1);
  });
