/**
 * Excluded Themes
 *
 * Themes present in AuroDesignTokens' THEME_DEFINITIONS that WebCoreStyleSheets
 * intentionally does NOT build. The theme list is otherwise derived wholesale
 * from design-tokens, so this is the single place to opt a theme out of every
 * build (theme codes, type bundles, and global theme CSS).
 */

// Theme directory names to skip when building.
export const EXCLUDED_THEMES = ['auro-2'];

/**
 * Filter a list of theme definitions (or dir names) down to the ones WCSS builds.
 * @param {Array<Object|string>} themes - THEME_DEFINITIONS entries or dir strings
 * @returns {Array} themes with excluded ones removed
 */
export function withoutExcludedThemes(themes) {
  return themes.filter(theme => {
    const dir = typeof theme === 'string' ? theme : theme.dir;
    return !EXCLUDED_THEMES.includes(dir);
  });
}
