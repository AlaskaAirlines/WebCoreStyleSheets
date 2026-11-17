# WC Style Sheets

WC Style Sheets(WCSS) is a responsive, mobile-first collection of styles and tools designed to make it quick and simple for developers to create web experiences using the Auro Design Language.

## What's included

This repository is a library of core level styles, functions, and mixins that can be used for consistent front-end UI development. This will include full descriptions of CSS selectors, mixins and any other supporting functions or tools.

## Documentation

Please see the [documentation site](https://alaskaairlines.github.io/WebCoreStyleSheets/) for all information related to WC Style Sheets.

## Upgrading to v12 (Sass modules)

WCSS `v12.0.0` migrates from the deprecated Sass `@import` system to the
[Sass module system](https://sass-lang.com/documentation/at-rules/use/)
(`@use` / `@forward`). This is a breaking change for consumers. See the
[Migration Guide](./MIGRATION.md) for the required `@use` syntax and the new
`@use ... with (...)` form for scope, prefix, and `!important` configuration.

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

There are no core files to import, rather WCSS is an à la carte solution allowing for users to load what they want and when they want it. WCSS ships as Sass modules — load a file with `@use` as illustrated below:

```scss
@use "./../node_modules/@aurodesignsystem/webcorestylesheets/src/ ... " as *;
```

### Multi-Theme Support

WebCoreStyleSheets provides multi-theme support for various brands in the Alaska Air Group. Each theme includes its own font definitions and styling.

#### Available Themes

For more information on the available themes and how to use them, please see the [Auro Design Tokens documentation](https://auro.alaskaair.com/getting-started/developers/design-tokens).

#### Using a Theme

To use a specific theme in your project, load the corresponding theme file.

For example:

```scss
/* Alaska Airlines theme (Auro default) */
@use "./../node_modules/@aurodesignsystem/webcorestylesheets/src/essentials-as" as *;
```

Additional themes are available in the `src` directory.

#### Bundled Theme Resources

Each theme also has a bundled version in the `dist/bundles` directory that includes essentials for quick implementation:

For example:

```css
/* Alaska Airlines theme (Auro default) */
dist/bundles/essentials-as.css
```

#### Test and QA font environments

Each global theme stylesheet in `dist/bundled/themes` also has a test and a QA version. They load environment-specific copies of the font files (the English brand fonts and the Japanese and Korean Noto Sans fonts) so you can try a new font version in test or QA without changing what production loads.

| Environment | Stylesheet | Example font file URL |
| --- | --- | --- |
| Production | `dist/bundled/themes/alaska.global.css` | `…/en-us/assets/font/ASCircularWeb-Light.woff2` |
| Test | `dist/bundled/themes/alaska-test.global.css` | `…/en-us/assets/font/ASCircularWeb-Light-test.woff2` |
| QA | `dist/bundled/themes/alaska-qa.global.css` | `…/en-us/assets/font/ASCircularWeb-Light-qa.woff2` |

The Japanese and Korean fonts follow the same pattern, for example `…/ja-jp/assets/font/noto-sans-jp-v54-japanese-300-test.woff2`.

Every theme (`alaska`, `alaska-classic`, `atmos`, `hawaiian`) and its `.min.css` file follow the same pattern, such as `alaska-test.global.min.css`. To switch environments, add `-test` or `-qa` after the theme name in the stylesheet file name:

```html
<!-- Test environment -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@aurodesignsystem/webcorestylesheets@latest/dist/bundled/themes/alaska-test.global.min.css">
```

The environment versions differ from production only in the font file name: `-test` or `-qa` comes right before `.woff2`. A test that runs on every pull request fails if any other difference appears. Every font URL is suffixed: English, Japanese, and Korean.

> **Note:** The `-test` and `-qa` font files must be on the font host before you switch to these stylesheets. If they're missing, the fonts fail to load and the page falls back to system fonts. If you serve fonts from your own host by overriding `$i18n-font-base-path-en` or the Japanese and Korean path settings, your host needs matching `-test` and `-qa` file names too.

When you build from Sass source, set the environment with the `$font-env` setting. Load it before any WCSS font module:

```scss
@use "@aurodesignsystem/webcorestylesheets/src/utilityVariables/fontUtils" with ($font-env: "test"); // or "qa"; null (default) = production
```

To set the environment for a single font, pass `$env` to the `font-face` mixin (English fonts) or the `font-face-i18n` mixin (Japanese and Korean fonts). `$env` takes `null`, `test`, or `qa`, and any other value is a compile error:

```scss
@use "@aurodesignsystem/webcorestylesheets/src/utilityMixins/fontFace";

@include fontFace.font-face("AS Circular", 300, "ASCircularWeb-Light", $env: qa);
// src: url(".../ASCircularWeb-Light-qa.woff2")
```

## Development

To develop against WCSS run both `npm run watch` and `npm run serve` in separate terminals.

The `watch` command will run a Sass linter, process a test file from Sass to CSS and run a post CSS linter. This will ensure the quality of all new Sass added to the repo.

If additional selectors or scenarios are needed, please update the `./scripts/testBuild.scss` file to test your code.

Running the `serve` command will open the Sassdoc view. Please review all changes as Sassdoc produces all documentation.

### Committed build output

Two sets of files are **generated and committed** to the repo:

- **`dist/`** — the pre-processed bundles consumed by downstream users.
- **`src/type/mixins/_theme-codes.scss`** — a generated Sass partial (`@use "theme-codes"`) written by `scripts/theme-codes.build.mjs` from the AuroDesignTokens theme definitions. Because it is committed, a direct `sass` invocation compiles without any prebuild step.

Both are produced by `npm run build` (which runs `build:theme-codes` first). Do **not** hand-edit them — `_theme-codes.scss` is regenerated from design-tokens, and `dist/` from `src/`. CI enforces that the committed output matches a fresh build, so **whenever you change `src/` or bump `@aurodesignsystem/design-tokens`, run `npm run build` and commit the resulting changes** or the PR build will fail.

To regenerate just the theme-codes partial:

```shell
$ npm run build:theme-codes
```
