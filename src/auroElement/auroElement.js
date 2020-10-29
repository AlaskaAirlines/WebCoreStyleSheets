// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit-element";
import styleCss from './auroElement-css.js';

/**
 * @attr {Boolean} hidden - If present, the component will be hidden both visually and from screen readers
 * @attr {Boolean} hiddenVisually - If present, the component will be hidden visually, but still read by screen readers
 * @attr {Boolean} hiddenAudible - If present, the component will be hidden from screen readers, but seen visually
 * @attr {Boolean} fixed - uses px values instead of rem
 */

export default class AuroElement extends LitElement {

  // function to define props used within the scope of this component
  static get properties() {
    return {
      fixed:          { type: Boolean },
      hidden:         { type: Boolean,
                        reflect: true },
      hiddenVisually: { type: Boolean,
                        reflect: true },
      hiddenAudible:  { type: Boolean,
                        reflect: true },
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  /**
   * @private Function that determines state of aria-hidden
   */
  hideAudible(value) {
    if (value) {
      return 'true'
    }

    return 'false'
  };

    /**
   * Function to inject fixed CSS styles `${this.getFixedStyles(this.fixed, styleCssFixed)}`
   * @param {boolean} isFixed - Boolean value to determine addition of fixed CSS
   * @param {string} style - Value for CSS reference
   * @returns {string} - CSS
   */
  getFixedStyles(isFixed, style) {
    if (isFixed) {
      return html`<style>${style}</style>`
    }

    return null
  };
}
