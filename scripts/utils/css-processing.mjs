/**
 * CSS Processing Utilities
 * 
 * Shared functions for processing CSS content during build processes
 */

/**
 * Properly formats font-family values in CSS text
 * Ensures font names with spaces are properly quoted while leaving
 * single-word fonts and already-quoted fonts unchanged
 * 
 * @param {string} cssText - The CSS text to process
 * @param {RegExp} [pattern] - Optional regex pattern to match font-family properties (defaults to custom property pattern)
 * @returns {string} - The processed CSS text
 */
export function processFontFamilies(cssText, pattern = /(--[\w-]+?-family:\s*)(.*?)(;)/g) {
  return cssText.replace(
    pattern,
    (match, propStart, fontList, end) => {
      // Process each font in the comma-separated list
      const processedFontList = fontList.split(',').map(font => {
        const trimmed = font.trim();
        // Skip if it's already quoted
        if (trimmed.startsWith('"') || trimmed.startsWith("'")) {
          return trimmed;
        }
        
        // Only quote font names that contain spaces
        if (trimmed.includes(' ')) {
          return `"${trimmed}"`;
        }
        
        // Return unquoted for single words and system fonts with hyphens like -apple-system
        return trimmed;
      }).join(', ');
      
      return `${propStart}${processedFontList}${end}`;
    }
  );
}

/**
 * Removes quotes from numeric values in CSS
 * 
 * @param {string} cssText - The CSS text to process
 * @param {RegExp} [pattern] - Optional regex pattern to match quoted numeric values
 * @returns {string} - The processed CSS text
 */
export function removeQuotesFromNumericValues(cssText, pattern = /:\s*"([0-9.]+(?:rem|em|px|vh|vw|%|s|ms|deg|turn|rad)?)"(?=\s*[;,}])/g) {
  return cssText.replace(pattern, ': $1');
}
