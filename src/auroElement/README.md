# What is auroElement?

The concept of auroElement is that it is an extension of the base litElement class. When your component imports auroElement you are inheriting new base functionality.

## Accessibility

When building a component with the auroElement base class you will inherit a simple API for accessibility support.

| Property         | Attribute        | Type      | Description                                      |
|------------------|------------------|-----------|--------------------------------------------------|
| `hidden`         | `hidden`         | `Boolean` | If present, the component will be hidden both visually and from screen readers |
| `hiddenAudible`  | `hiddenAudible`  | `Boolean` | If present, the component will be hidden from screen readers, but seen visually |
| `hiddenVisually` | `hiddenVisually` | `Boolean` | If present, the component will be hidden visually, but still read by screen readers |

### Install

The auroElement.js is already included with the base setup of a web component within the WCSS package. Installing requires a few modifications to the structure of the component.

Find the following

```js
import { LitElement, html, css } from "lit-element";
```

Update to the following

```js
import { html, css } from "lit-element";
import AuroElement from '@alaskaairux/webcorestylesheets/dist/auroElement/auroElement';
```

### Add supporting styles

To complete the install, be sure to add the following to the `./src/styles.scss` file

```scss
@import "./node_modules/@alaskaairux/webcorestylesheets/dist/auroElement/auroElement";
```

### Update class

In the component's JS file, find the following

```js
class [Namespace][Name] extends LitElement { ... }
```

Update to

```js
class [Namespace][Name] extends AuroElement { ... }
```

### Update properties

In the component's class, find the following

```js
static get properties() {
  return {

  };
}
```

And update to include the `super` keyword is used to access and call functions on an object's parent.

```js
static get properties() {
  return {
    ...super.properties,
  };
}
```

### Update HTML template

Within the auroElement will be the `hideAudible()` method. In order to make full use of auroElement's accessibility features, be sure to add the following to the HTML element(s) you wish to hide from screen readers.

```html
aria-hidden="${this.hideAudible(this.hiddenAudible)}"
```

This completes the install of auroElement and all its supported features.
