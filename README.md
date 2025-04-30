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
![ESM supported](https://img.shields.io/badge/ESM-compatible-FFE900?style=for-the-badge)

### Pre-processed bundled resources

At a limited scale, some files have been pre-processed to CSS so that it can be delivered via CDN and used in environments where this rendered resource is required.

**API Note**: First supporting version `v2.9.0`

**NOTICE!** Use `@latest` **at your own risk**. This will not restrict updates and will allow instant access to **MAJOR** releases that will contain **BREAKING CHANGES**. You have been warned!

| resource | CDN URL |
|---|---
| essentials.scss<br>fonts.scss|[https://cdn.jsdelivr.net/npm/@aurodesignsystem/<br>webcorestylesheets@latest/dist/bundled/essentials.css](https://cdn.jsdelivr.net/npm/@aurodesignsystem/webcorestylesheets@latest/dist/bundled/essentials.css)|
| focus-visible.scss<br>essentials.scss<br>fonts.scss|[https://cdn.jsdelivr.net/npm/@aurodesignsystem/<br>webcorestylesheets@latest/dist/bundled/essentials+fv.css](https://cdn.jsdelivr.net/npm/@aurodesignsystem/webcorestylesheets@latest/dist/bundled/essentials+fv.css)|

### Using the files in Sass from npm resource

```bash
$ npm i @aurodesignsystem/webcorestylesheets
```

There are no core files to import, rather WCSS is an à la carte solution allowing for users to import what they want and when they want it. In most cases you can simply import the Sass file as illustrated below:

```scss
@import "./../node_modules/@aurodesignsystem/webcorestylesheets/src/ ... ";
```

### Multi-Theme Support

WebCoreStyleSheets provides multi-theme support for various brands in the Alaska Air Group. Each theme includes its own font definitions and styling.

#### Available Themes

For more information on the available themes and how to use them, please see the [Auro Design Tokens documentation](https://auro.alaskaair.com/getting-started/developers/design-tokens).

#### Using a Theme

To use a specific theme in your project, import the corresponding theme file.

For example:

```scss
/* Alaska Airlines theme (Auro default) */
@import "./../node_modules/@aurodesignsystem/webcorestylesheets/src/essentials-as";
```

Additional themes are available in the `src` directory.

#### Bundled Theme Resources

Each theme also has a bundled version in the `dist/bundles` directory that includes essentials for quick implementation:

For example:

```css
/* Alaska Airlines theme (Auro default) */
dist/bundles/essentials-as.css
```

## Development

To develop against WCSS run both `npm run watch` and `npm run serve` in separate terminals.

The `watch` command will run a Sass linter, process a test file from Sass to CSS and run a post CSS linter. This will ensure the quality of all new Sass added to the repo.

If additional selectors or scenarios are needed, please update the `./scripts/testBuild.scss` file to test your code.

Running the `serve` command will open the Sassdoc view. Please review all changes as Sassdoc produces all documentation.
