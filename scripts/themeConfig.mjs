/**
 * Theme Configuration
 * Contains theme definitions for WebCoreStyleSheets build process
 */

// Import theme codes from design tokens
import { THEME_DEFINITIONS } from '@aurodesignsystem/design-tokens/src/config/themes.js';

// File extensions
export const SOURCE_EXT = 'global.scss';
export const OUTPUT_EXT = 'global.css';

// Standard themes
// These will use the pattern: `{themeName}.global.scss` -> `{themeName}.global.css`
// Where themeName is the directory name like 'alaska', 'alaska-classic', etc.
export const basePrefix = '';

// Standard themes
export const standardThemes = THEME_DEFINITIONS.map(theme => ({
  src: `${theme.dir}.${SOURCE_EXT}`,
  dest: `${theme.dir}.${OUTPUT_EXT}`
}));

// Legacy themes
export const legacyThemes = [
  { src: `legacy/auro-classic.${SOURCE_EXT}`, dest: `legacy/auro-classic.${OUTPUT_EXT}` },
  { src: `legacy/auro-classic+fv.${SOURCE_EXT}`, dest: `legacy/auro-classic+fv.${OUTPUT_EXT}` }
];
