/**
 * Theme Configuration
 * Contains theme definitions for WebCoreStyleSheets build process
 */

// Import theme codes from design tokens
import { THEME_DEFINITIONS } from '@aurodesignsystem/design-tokens/src/config/themes.js';
import { withoutExcludedThemes } from './excluded-themes.mjs';

// File extensions
export const SOURCE_EXT = 'global.scss';
export const OUTPUT_EXT = 'global.css';

// These will use the template file and generate individual theme CSS files
export const basePrefix = '';

// Font hosts (AB#1683083)
// Every standard theme is built twice: once for production and once for staging.
// Both load identically named font files from the same paths; only the host
// differs. Production writes to `themes/<theme>.global.css`, staging to
// `themes/<theme>-stg.global.css`.
export const PRODUCTION_FONT_HOST = 'https://resource.alaskaair.net';
export const STAGING_FONT_HOST = 'https://test.alaskaair.com';
export const STAGING_SUFFIX = '-stg';

export const fontBuilds = [
  { suffix: '', fontHost: PRODUCTION_FONT_HOST },
  { suffix: STAGING_SUFFIX, fontHost: STAGING_FONT_HOST }
];

// Standard themes
export const standardThemes = withoutExcludedThemes(THEME_DEFINITIONS).flatMap(theme =>
  fontBuilds.map(({ suffix, fontHost }) => ({
    src: `themes/theme.global.template.scss`,
    dest: `themes/${theme.dir}${suffix}.${OUTPUT_EXT}`,
    name: theme.dir,
    fontHost
  }))
);

// Legacy themes
export const legacyThemes = [
  { src: `legacy/auro-classic.${SOURCE_EXT}`, dest: `legacy/auro-classic.${OUTPUT_EXT}` },
  { src: `legacy/auro-classic+fv.${SOURCE_EXT}`, dest: `legacy/auro-classic+fv.${OUTPUT_EXT}` }
];
