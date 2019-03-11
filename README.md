# Orion Web Core Style Sheets

[![Build Status](https://travis-ci.org/AlaskaAirlines/OrionWebCoreStyleSheets.svg?branch=master)](https://travis-ci.org/AlaskaAirlines/OrionWebCoreStyleSheets)
![npm (scoped)](https://img.shields.io/npm/v/@alaskaairux/orion-web-core-style-sheets.svg?color=orange)
![NPM](https://img.shields.io/npm/l/@alaskaairux/orion-web-core-style-sheets.svg?color=blue)

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

## Dependencies

Orion Web Core Style Sheets has a direct project dependency on [Orion Design Tokens](https://github.com/AlaskaAirlines/OrionDesignTokens), as well as Sass and Style Dictionary. Orion Web Core Style Sheets is not a stand alone project, but is part of a specific dependency chain when building Orion based applications.

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
