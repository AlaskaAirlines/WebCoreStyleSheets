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
// These will use the template file and generate individual theme CSS files
export const basePrefix = '';

// Standard themes
export const standardThemes = THEME_DEFINITIONS.map(theme => ({
  src: `themes/theme.global.template.scss`,
  dest: `themes/${theme.dir}.${OUTPUT_EXT}`,
  name: theme.dir
}));

// Legacy themes
export const legacyThemes = [
  { src: `legacy/auro-classic.${SOURCE_EXT}`, dest: `legacy/auro-classic.${OUTPUT_EXT}` },
  { src: `legacy/auro-classic+fv.${SOURCE_EXT}`, dest: `legacy/auro-classic+fv.${OUTPUT_EXT}` }
];
