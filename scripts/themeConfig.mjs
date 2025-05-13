/**
 * Theme Configuration
 * Contains theme definitions for WebCoreStyleSheets build process
 */

// Import theme codes from design tokens
import { THEME_DIRECTORIES } from '@aurodesignsystem/design-tokens/src/config/themes.js';

// Extract theme codes
export const themeCodes = THEME_DIRECTORIES.map(theme => theme.code);

// Standard themes
// These will use the pattern: `essentials-${themeCode}.scss` -> `essentials-${themeCode}.css`
export const basePrefix = 'essentials-';

// Standard themes - using the extracted themeCodes
export const standardThemes = themeCodes.map(theme => ({
  src: `${basePrefix}${theme}.scss`,
  dest: `${basePrefix}${theme}.css`
}));

// Legacy themes
export const legacyThemes = [
  { src: 'essentials-ac.scss', dest: 'essentials.css' },
  { src: 'essentials+fv.scss', dest: 'essentials+fv.css' }
];
