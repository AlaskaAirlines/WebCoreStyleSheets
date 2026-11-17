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

// Standard themes
// These will use the template file and generate individual theme CSS files
export const basePrefix = '';

// Font environments (AB#1683083)
// Every standard theme is built once per environment. `null` is production and
// writes to `themes/<theme>.global.css` with unsuffixed font URLs (unchanged).
// Each named environment writes to `themes/<theme>-<env>.global.css` with font
// URLs suffixed `-<env>` (e.g. `ASCircularWeb-Light-test.woff2`). Keep the names
// in sync with `$font-envs` in src/utilityVariables/_fontUtils.scss.
export const PRODUCTION_FONT_ENV = null;
export const FONT_ENVIRONMENTS = ['test', 'qa'];

/**
 * Output path (relative to dist/bundled) for a standard theme in a font environment.
 * @param {string} themeDir - Theme directory name (e.g. `alaska`)
 * @param {string|null} fontEnv - Font environment, or null for production
 * @returns {string}
 */
export function standardThemeDest(themeDir, fontEnv = PRODUCTION_FONT_ENV) {
  const suffix = fontEnv ? `-${fontEnv}` : '';
  return `themes/${themeDir}${suffix}.${OUTPUT_EXT}`;
}

// Standard themes
export const standardThemes = withoutExcludedThemes(THEME_DEFINITIONS).flatMap(theme =>
  [PRODUCTION_FONT_ENV, ...FONT_ENVIRONMENTS].map(fontEnv => ({
    src: `themes/theme.global.template.scss`,
    dest: standardThemeDest(theme.dir, fontEnv),
    name: theme.dir,
    fontEnv
  }))
);

// Legacy themes
export const legacyThemes = [
  { src: `legacy/auro-classic.${SOURCE_EXT}`, dest: `legacy/auro-classic.${OUTPUT_EXT}` },
  { src: `legacy/auro-classic+fv.${SOURCE_EXT}`, dest: `legacy/auro-classic+fv.${OUTPUT_EXT}` }
];
