# WC Style Sheets

WC Style Sheets(WCSS) is a responsive, mobile-first collection of styles and tools designed to make it quick and simple for developers to create web experiences using the Auro Design Language.

## What's included

This repository is a library of core level styles, functions, and mixins that can be used for consistent front-end UI development. This will include full descriptions of CSS selectors, mixins and any other supporting functions or tools.

## Documentation

Please see the [documentation site](https://alaskaairlines.github.io/WebCoreStyleSheets/) for all information related to WC Style Sheets.

## Design tokens and legacy component support

Upgrading to WCSS `v5.x` requires `@aurodesignsystem/design-tokens@4.x`.

When upgrading your project it may be required to also retain `@aurodesignsystem/design-tokens@v3.15.5` in order to support Auro custom elements have not been updated to support the [new design token naming convention](https://github.com/AlaskaAirlines/AuroDesignTokens/issues/118).

Please also see Auro design tokens [migration from 3.x to 4.x](https://github.com/AlaskaAirlines/aurodesignTokens/#migration-from-3x-to-4x) for additional information. 

## Install

[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/webcorestylesheets/testPublish.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/webcorestylesheets/actions/workflows/testPublish.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/webcorestylesheets.svg?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/webcorestyleSheets)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/webcorestylesheets.svg?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)
[![issues](https://img.shields.io/github/issues-raw/AlaskaAirlines/WebCoreStyleSheets?style=for-the-badge)](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues)

```bash
$ npm i @aurodesignsystem/webcorestylesheets
```

### Using the files in Sass

There are no core files to import, rather WCSS is an à la carte solution allowing for users to import what they want and when they want it. In most cases you can simply import the Sass file as illustrated below:

```scss
@import "~@aurodesignsystem/webcorestylesheets/src/ ... "
```

### Tokens Dependency

WCSS uses Sass and has a dependency on the `SCSSVariables.scss` file from [Design Tokens](https://github.com/AlaskaAirlines/OrionDesignTokens) package. This reference needs to be imported before any reference of a WCSS partial.

```scss
@import "~@aurodesignsystem/design-tokens/dist/tokens/SCSSVariables";
@import "~@aurodesignsystem/webcorestylesheets/src/ ... ";
```

### Install the essentials

While WCSS is an à la carte solution, there are things that should be considered when adding WCSS to your project. For example, if the project has little or no legacy CSS, it is suggested to set the following foundation:

```scss
// baseline design tokens as Sass variables
@import "~@aurodesignsystem/design-tokens/src/tokens/SCSSVariables";

// globally add the mixins so that any future reference will be addressed
@import '~@aurodesignsystem/design-tokens/src/tokens/breakpoints';

// it's typically best practice to load the @font-face rules prior to any reference of the custom web fonts
@import '~@aurodesignsystem/design-tokens/src/tokens/fonts';

// set a baseline browser normalize
@import '~@aurodesignsystem/design-tokens/src/tokens/normalize';

// essentials setup baseline primitive selectors for any UI development
@import '~@aurodesignsystem/design-tokens/src/tokens/essentials';
```

For an example of setting up a master file that imports all of WCSS's resources, see the [styleTest.scss](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/blob/master/tests/styleTest.scss) in the project.

### Web font dependency

WC style sheets has full support for Auro's web fonts, ASCircular. When importing `~@aurodesignsystem/design-tokens/dist/tokens/fonts` this will import the (3) Auro web fonts that are loaded from our CDN for `light`, `medium`, and `book` weights.

Any references to `ASCircularWeb-Book`, `ASCircularWeb-Medium`, or `ASCircularWeb-Light` would be considered redundant and you should remove those legacy references.

Any references to `ASCircularWeb-Bold` or any other `ASCircularWeb-` style font family is not supported and these references are considered fully deprecated.


## Pre-processed bundled resources

At a limited scale, some files have been pre-processed to CSS so that it can be delivered via CDN and used in environments where this rendered resource is required.

**API Note**: First supporting version `v2.9.0`

| resource | CDN URL |
|---|---
| essentials.scss<br>fonts.scss|https://cdn.jsdelivr.net/npm/@aurodesignsystem/webcorestylesheets@latest/dist/bundled/essentials.css|

## Development

To develop against WCSS run both `npm run watch` and `npm run serve` in separate terminals.

The `watch` command will run a Sass linter, process a test file from Sass to CSS and run a post CSS linter. This will ensure the quality of all new Sass added to the repo.

If additional selectors or scenarios are needed, please update the `./scripts/testBuild.scss` file to test your code.

Running the `serve` command will open the Sassdoc view. Please review all changes as Sassdoc produces all documentation.

WCSS fully supports idiomatic CSS, be sure to review the [auro docs site](https://auro.alaskaair.com/webcorestylesheets/idiomatic-css) for more information.
