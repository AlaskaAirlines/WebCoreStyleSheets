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
 * @returns {string} - The processed CSS text
 */
export function processFontFamilies(cssText) {
  // Process custom properties first
  let processedCSS = cssText.replace(
    /(--[\w-]+?-family:\s*)(.*?)(;)/g,
    (match, propStart, fontList, end) => {
      // Process each font in the comma-separated list
      const processedFontList = formatFontList(fontList);
      return `${propStart}${processedFontList}${end}`;
    }
  );
  
  // Process font-family declarations with var() fallbacks
  processedCSS = processedCSS.replace(
    /(font-family:\s*var\([^)]+?,\s*)(.*?)(\))/g,
    (match, varStart, fallbackFonts, varEnd) => {
      // Process the fallback fonts list
      const processedFallbacks = formatFontList(fallbackFonts);
      return `${varStart}${processedFallbacks}${varEnd}`;
    }
  );
  
  // Process regular font-family declarations (without var)
  processedCSS = processedCSS.replace(
    /(font-family:\s*(?!var\())(.*?)(;)/g,
    (match, propStart, fontList, end) => {
      // Process each font in the comma-separated list
      const processedFontList = formatFontList(fontList);
      return `${propStart}${processedFontList}${end}`;
    }
  );
  
  return processedCSS;
}

/**
 * Helper function to format a comma-separated list of fonts
 * @param {string} fontList - Comma-separated list of font names
 * @returns {string} - Processed font list with proper quotes
 */
function formatFontList(fontList) {
  return fontList.split(',').map(font => {
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
