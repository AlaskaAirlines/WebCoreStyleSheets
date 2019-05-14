<img src="https://resource.alaskaair.net/-/media/2C1969F8FB244C919205CD48429C13AC" alt="Orion Design System Logo" title="Be the change you want to see" width="125" align="right" />

[![Build Status](https://travis-ci.org/AlaskaAirlines/OrionWebCoreStyleSheets.svg?branch=master)](https://travis-ci.org/AlaskaAirlines/OrionWebCoreStyleSheets)
![npm (scoped)](https://img.shields.io/npm/v/@alaskaairux/orion-web-core-style-sheets.svg?color=orange)
![NPM](https://img.shields.io/npm/l/@alaskaairux/orion-web-core-style-sheets.svg?color=blue)

# Orion Web Core Style Sheets

The core front-end framework for building experiences with the Orion Design System.

Orion Web Core Style sheets is a responsive, mobile-first collection of styles and tools designed to make it quick and simple for developers to create web experiences using the Orion Design Language.

## What's included

This repository is a library of core level styles, functions, and mixins that can be used for consistent front-end UI development.

## Current support

The current version of Orion Web Core Style Sheets supports:

1. `AS Circular` web font, font file resources and `@font-face` Sass -- [Install Instructions](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/blob/master/docs/howToUseFonts.md)
1. Orion defined breakpoint mixins
1. CSS Normalize
1. Orion baseline styles
1. Orion baselineLTE styles
1. Utility (functional) CSS classes
1. Experimental \<input /> styling

## Peer Dependencies

Orion Web Core Style Sheets has a project peer dependency on [Orion Design Tokens](https://github.com/AlaskaAirlines/OrionDesignTokens), as well as Sass and Style Dictionary. Orion Web Core Style Sheets is not a stand alone project, but is part of a specific dependency chain when building Orion based applications.

## Dependencies

When using OWCSS, there is a direct dependency on the `focus-visible` library. When using Orion Web Components, the inclusion of the `focus-visible` library is accounted for within the scope fo the component(s). With components, `focus-visible` is defined as a peer dependency.

If the use of OWCSS is not specifically with a component, including the `focus-visible.min.js` file will be required within the scope of the project. For example, the JS may be added to the head of a project:

```html
<script src="/node_modules/focus-visible/dist/focus-visible.min.js"></script>
```

or to the scope of any Node.js component architecture:

```javascript
import 'focus-visible/dist/focus-visible.min.js';
```

The `focus-visable` library is required for use with experimental a11y UI features

## Accessibility

Use of the the `focus-visible` library brings in the capability to be selective with the UI between clicking/tapping into a control versus tabbing to a control. In most cases, the a11y halo will only appear when a control is tabbed to. But in cases where there is a \<input /> element that supports text and/or triggers a virtual keyboard if a physical keyboard is not present, the focus-visible state will be triggered.

[Selectors Level 4 draft: 9.4. The Focus-Indicated Pseudo-class: :focus-visible](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo)

CSS to support this capability is within the `_baseline.scss` and `_baselineLTE.scss` files.

### Experimental styles

To help address the UI of \<input /> elements, there is an experimental style sheet located in the npm. Please refer to the documentation in this code for any information related to it's use.

```scss
@alaskaairux/orion-web-core-style-sheets/formElements/inputTypeText
```

DO NOT include Sass file without a parent wrapper as illustrated below:

```scss
.[parent-selector] {
  @import "./node_modules/@alaskaairux/orion-web-core-style-sheets/formElements/inputTypeText";
}
```

The use of the parent selector is to define a custom selector that will wrap these experimental input style as not to pollute the rest of the app's CSS.

## Getting started

All resources within this repository are distributed via npm and used as individual dependencies. Each resource can be called into your Sass pipeline within a `global.scss` file or individually referenced within UI components.

## Sass support

Orion Web Core Style Sheets consists of resources to be ingested a la carte. For example, you wish to use `breakpoints.scss` on an individual component or bring into a global Sass catch-all file, you would use the following example.

```
@import "@alaskaairux/orion-web-core-style-sheets/breakpoints";
```

## CSS writing conventions

The implementation of Orion Web Code Style Sheets uses a naming convention model that will be strictly adhered to throughout this library and compliance is expected for any contributed updates.

To learn more, please reference [this document](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/blob/master/docs/cssConventions.md).

## Tests

Prior to adding new Sass to this repo, please run the Sass-Lint tests to ensure that any new code is compliant with the set-forward standard. To run the tests, run the following command:

```
$ npm run sassLint
```

If there is an error, this will generate a `.html` file at the root of the project. To view this generated file, run the following command:

```
$ open sass-lint.html
```

This should open the file in your default browser.

This file is ignored and will not be added to the version control.
