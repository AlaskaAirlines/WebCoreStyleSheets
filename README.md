# WC Style Sheets

[![Build Status](https://travis-ci.org/AlaskaAirlines/OrionWebCoreStyleSheets.svg?branch=master)](https://travis-ci.org/AlaskaAirlines/OrionWebCoreStyleSheets)
![npm (scoped)](https://img.shields.io/npm/v/@alaskaairux/orion-web-core-style-sheets.svg?color=orange)
![NPM](https://img.shields.io/npm/l/@alaskaairux/orion-web-core-style-sheets.svg?color=blue)

The core front-end framework for building experiences with the  Design System.

WC Style sheets is a responsive, mobile-first collection of styles and tools designed to make it quick and simple for developers to create web experiences using the Orion Design Language.

## What's included

This repository is a library of core level styles, functions, and mixins that can be used for consistent front-end UI development.

## WCSS Supports ...

See [https://alaskaairlines.github.io/](https://alaskaairlines.github.io/OrionWebCoreStyleSheets/) for automated documentation build.

The current version of WC Style Sheets supports:

1. `AS Circular` web font, font file resources and `@font-face` Sass -- [Install Instructions](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/blob/master/staticDocs/howToUseFonts.md)
1. Defined breakpoint mixins
1. CSS Normalize
1. Baseline styles
1. BaselineLTE styles
1. Utility (functional) CSS classes
1. Experimental `<input />` styling

### WC Style Sheets Normalize

While there are many versions of a normalize style sheet, the normalized used in WC Style Sheets has been specifically engineered to meet the design direction of the Alaska Air UX and Design standards.

To review, please see [./src/normalize.scss](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/blob/master/src/_normalize.scss) for any specific use notation.

### baseline.scss versus baselineLTE.scss?

In the repository are two versions of the baseline styles. The reason for this is simply to support HTML Web Components. Due to the encapsulation model, not all selectors that would be needed for larger scale app development is needed are required for Web Components.

For global scope projects, the use of `baseline.scss` would be preferred over `baselineLTE.scss`.

`baselineLTE.scss` is a dependency of `baseline.scss`.

### Utility Classes / Functional CSS

WC Style Sheets supports an ever evolving array of functional single-responsibility selectors.

These selectors are NOT imported by default, to install whole set:

```scss
@import "./node_modules/@alaskaairux/orion-web-core-style-sheets/dist/utilityClass";
```

To see individual families of utility classes, see [.src/utilityClasses/](src/utilityClasses).

Definitions of all utility classes can also be found in the [CSS docs](https://alaskaairlines.github.io/OrionWebCoreStyleSheets/) site.

### Importing utility classes and using the !important flag

When using the Utility Classes, there are two ways to include them. Either subscribe to each family of functional selectors individually, or include all families in a single request.

```scss
// import all functional selectors
@import "./node_modules/@alaskaairux/orion-web-core-style-sheets/dist/utilityClasses";

or ...

// impoorting individual selector families
@import "./node_modules/@alaskaairux/orion-web-core-style-sheets/dist/utilityClasses/displayProperties";
@import "./node_modules/@alaskaairux/orion-web-core-style-sheets/dist/utilityClasses/responsive";
```

In the event that the `!important` flag is needed for the functional selectors, simply define this variable prior to importing the Utility Class files.

```scss
// import all functional selectors
$important: !important;
@import "./node_modules/@alaskaairux/orion-web-core-style-sheets/dist/utilityClasses";

or ...

// impoorting individual selector families
$important: !important;
@import "./node_modules/@alaskaairux/orion-web-core-style-sheets/dist/utilityClasses/displayProperties";
@import "./node_modules/@alaskaairux/orion-web-core-style-sheets/dist/utilityClasses/responsive";
```


## Peer Dependencies

WC Style Sheets has a project peer dependency on [Design Tokens](https://github.com/AlaskaAirlines/OrionDesignTokens), as well as Sass and Style Dictionary. WCSS is not a stand alone project, but is part of a specific dependency chain when building a Design System based applications.

## Dependencies

When using WCSS, there is a direct dependency on the `focus-visible` library. When using Web Components, the inclusion of the `focus-visible` library is accounted for within the scope fo the component(s). With components, `focus-visible` is defined as a peer dependency.

If the use of WCSS is not specifically with a component, including the `focus-visible.min.js` file will be required within the scope of the project. For example, the JS may be added to the head of a project:

```html
<script src="/node_modules/focus-visible/dist/focus-visible.min.js"></script>
```

or to the scope of any Node.js component architecture:

```javascript
import 'focus-visible/dist/focus-visible.min.js';
```

The `focus-visable` library is required for use with experimental a11y UI features

## Accessibility

Use of the the `focus-visible` library brings in the capability to be selective with the UI between clicking/tapping into a control versus tabbing to a control. In most cases, the a11y halo will only appear when a control is tabbed to. But in cases where there is a `<input />` element that supports text and/or triggers a virtual keyboard if a physical keyboard is not present, the `focus-visible` state will be triggered.

[Selectors Level 4 draft: 9.4. The Focus-Indicated Pseudo-class: :focus-visible](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo)

CSS to support this capability is within the `_baseline.scss` and `_baselineLTE.scss` files.

## Experimental styles

To help address the UI of `<input />` elements, there is an experimental style sheet located in the npm. Please refer to the documentation in this code for any information related to it's use.

```scss
@alaskaairux/orion-web-core-style-sheets/dist/formElements/inputTypeText
```

DO NOT include Sass file without a parent wrapper as illustrated below:

```scss
.[parent-selector] {
  @import "./node_modules/@alaskaairux/orion-web-core-style-sheets/dist/formElements/inputTypeText";
}
```

The use of the parent selector is to define a custom selector that will wrap these experimental input style as not to pollute the rest of the app's CSS.

## Getting started

All resources within this repository are distributed via npm and used as individual dependencies. Each resource can be called into your Sass pipeline within a `global.scss` file or individually referenced within UI components.

## Sass support

WCSS consists of resources to be ingested a la carte. For example, you wish to use `breakpoints.scss` on an individual component or bring into a global Sass catch-all file, you would use the following example.

```
@import "@alaskaairux/orion-web-core-style-sheets/dist/breakpoints";
```

## CSS writing conventions

The implementation of WCSS uses a naming convention model that will be strictly adhered to throughout this library and compliance is expected for any contributed updates.

To learn more, please reference [this document](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/blob/master/staticDocs/cssConventions.md).

## Linters

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


##

<footer>
Alaska Airlines Orion Design System<br>
Copyright 2019 Alaska Airlines, Inc. or its affiliates. All Rights Reserved.
</footer>
