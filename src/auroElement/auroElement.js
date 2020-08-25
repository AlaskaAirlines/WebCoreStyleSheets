// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement } from "lit-element";

/**
 * @attr {Boolean} hidden - If present, the component will be hidden both visually and from screen readers
 * @attr {Boolean} hiddenVisually - If present, the component will be hidden visually, but still read by screen readers
 * @attr {Boolean} hiddenAudible - If present, the component will be hidden from screen readers, but seen visually
 */

export default class AuroElement extends LitElement {

  // function to define props used within the scope of this component
  static get properties() {
    return {
      hidden:         { type: Boolean,
                        reflect: true },
      hiddenVisually: { type: Boolean,
                        reflect: true },
      hiddenAudible:  { type: Boolean,
                        reflect: true },
    };
  }

  /**
   * Function that determines state of aria-hidden
   */
  hideAudible(value) {
    if (value) {
      return 'true'
    }

    return 'false'
  }
}
