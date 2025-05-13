/**
 * Theme Configuration
 * Contains theme definitions for WebCoreStyleSheets build process
 */

// Theme codes for standard themes
// Sourced from @aurodesignsystem/design-tokens
export const themeCodes = ['as', 'a1', 'a2', 'asc', 'ha'];

// Standard themes
// These will use the pattern: `essentials-${themeCode}.scss` -> `essentials-${themeCode}.css`
export const standardThemePattern = {
  srcPrefix: 'essentials-',
  srcSuffix: '.scss',
  destPrefix: 'essentials-',
  destSuffix: '.css'
};

// Standard themes
export const standardThemes = themeCodes.map(theme => ({
  src: `${standardThemePattern.srcPrefix}${theme}${standardThemePattern.srcSuffix}`,
  dest: `${standardThemePattern.destPrefix}${theme}${standardThemePattern.destSuffix}`
}));

// Legacy themes
export const legacyThemes = [
  { src: 'essentials-ac.scss', dest: 'essentials.css' },
  { src: 'essentials+fv.scss', dest: 'essentials+fv.css' }
];
