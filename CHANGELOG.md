# Semantic Release Automated Changelog

## [10.1.3](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v10.1.2...v10.1.3) (2025-10-20)


### Bug Fixes

* adjust demo styles table selector to only ignore auro-table ([2ddf698](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/2ddf698a883724cc1b79b99e3be90a75de282cf9)), closes [AlaskaAirlines/auro-table#132](https://github.com/AlaskaAirlines/auro-table/issues/132)

## [10.1.2](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v10.1.1...v10.1.2) (2025-10-16)


### Bug Fixes

* [#265](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/265) , AlaskaAirlines/auro-table[#132](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/132) - update table style selector to only target API tables ([4b997be](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/4b997be751055d73317ed12c730cc5c90a90ac90))

## [10.1.1](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v10.1.0...v10.1.1) (2025-09-30)


### Bug Fixes

* disable font-face optimizations during minification ([889e577](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/889e577f6d5c416e9863ba968b423b3859a960aa))
* don't attempt to optimize unicode-range in minified files ([e474ea8](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/e474ea8962e2f7d15a460a3d64ef795fbfbd3e06))
* typescript errors ([294a933](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/294a93311764f4b2f5289598a2e2d631678b3a43))

# [10.1.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v10.0.4...v10.1.0) (2025-09-29)


### Features

* adding i18n font support ([797ce73](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/797ce7387e8cfd0a402ede6cc64417e3a595d6f8))

## [10.0.4](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v10.0.3...v10.0.4) (2025-08-15)


### Bug Fixes

* update auro-1 & 2 to use as circular book ([4ffba90](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/4ffba901544ed13290629e3be5230bcbc979709c))

## [10.0.3](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v10.0.2...v10.0.3) (2025-08-05)


### Bug Fixes

* auro-1 & auro-2 should reference their design tokens ([5aea89d](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/5aea89d3f3034e6ae582b8dd506156cfe67f1856))
* type fallbacks ([e162492](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/e162492191151df43d02bd756bfa80232bcb0d03))


### Performance Improvements

* update design token repo ([f702cad](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/f702cad3db0e82744c2eb91121cac2a538abdf0b))
* update design tokens ([43d96d8](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/43d96d847bf35fa6d004f5fb79b5503f565213f7))

## [10.0.2](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v10.0.1...v10.0.2) (2025-07-19)


### Bug Fixes

* update design tokens with new line-height values ([e0b8b79](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/e0b8b791b9e182c0b50fb9b3daa171aad63f51c8))

## [10.0.1](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v10.0.0...v10.0.1) (2025-07-09)


### Bug Fixes

* add text-transfrom to accent type classes ([4a4e2b3](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/4a4e2b3e18b3be63f3ce7c0cd19807512dc4e511))

# [10.0.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v9.0.3...v10.0.0) (2025-07-01)


* feat!: export type styles as css variables ([ee4eee3](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/ee4eee398fc721013f4d0345ee44db44314afd25))


### Features

* consolidate build processing ([2cdae18](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/2cdae18696bdc117b1cb7e0331ac9834f8311810))


### BREAKING CHANGES

* - The type styles are now exported as CSS variables

## [9.0.3](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v9.0.2...v9.0.3) (2025-06-26)


### Bug Fixes

* update font webhost to avoid cors errors ([05cab7e](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/05cab7ece299b528003da154257421ae110154ca))

## [9.0.2](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v9.0.1...v9.0.2) (2025-06-18)


### Bug Fixes

* remove design token import from theme typography import [#238](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/238) ([b33004f](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/b33004f6b25990000d63e563698147b7f6eb1836))
* update SCSS import paths for design tokens in Auro type configs ([7781357](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/77813573719b271071ecd28bd02310b6a477bbd9))


### Performance Improvements

* add namespacing to design tokens for component use ([86fa73e](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/86fa73ebde5264890b027f0050751f0576b8ae67))
* make import files for all typography styles ([d3997e3](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/d3997e307c36d36f49ec4acd4a20ecb9039a0267))
* refactor SCSS import paths and add type theme helper files ([5ec63a7](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/5ec63a7ad5ea82ca3d8ba6a359dd5adafbbe73e0))
* Update type theme configs to use namespace and fix end of file new line. ([8557baf](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/8557baf06f8558e39f009c2ae79eda89d0de4b8d))

## [9.0.1](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v9.0.0...v9.0.1) (2025-06-17)


### Bug Fixes

* scss type files in component import ([e528b2b](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/e528b2b32f38cfeb420929b362ad11f7aabac471))

# [9.0.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v8.1.1...v9.0.0) (2025-06-16)


* feat(type)!: add typography classes to support themable design tokens ([36126cb](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/36126cb8203effd3e664036cede1e2f3e834493b))


### BREAKING CHANGES

* Adds fluid type classes to support themable design tokens.

New Features

- Introduce SCSS type configuration files and variable maps
- Add fluid-type generator mixins/functions to produce responsive type classes per theme
- Add a new theme.globals.css.build.mjs script to compile global theme CSS from a shared template
- Add CSS @layer priority

Updates

- Reorganize SCSS configurations into a centralized config structure
- Add robust typography-based theming support with fluid type generators
- Replace the legacy build script with a template-driven tool
- Restructure the theme and essentials directories under src/config and update import paths accordingly
- Improve the font-face mixin to use a configurable webFontHost and ensure proper quoting of font-family
- Remove obsolete imports and rename the core build script and its references in package.json

## [8.1.1](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v8.1.0...v8.1.1) (2025-06-09)


### Performance Improvements

* change import to use for breakpoints ([d74702b](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/d74702b76833dc0644ab4d054674acb807b617e4))

# [8.1.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v8.0.1...v8.1.0) (2025-06-09)


### Features

* update import paths to v8 tokens ([29371bf](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/29371bf5d624116f69991bf628fc07bced74488a))

## [8.0.1](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v8.0.0...v8.0.1) (2025-06-04)


### Performance Improvements

* change styles of demo wrapper ([1afc6fc](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/1afc6fc48de51cc92b614eb20ae1d79acbf341d8))

# [8.0.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v7.0.0...v8.0.0) (2025-06-03)


* refactor(styles)!: consolidate font and theme partials ([90e89ad](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/90e89ad33434716cd5385856e48d640c80de681e))


### BREAKING CHANGES

* Restructure SCSS by splitting fonts, themes, essentials, and legacy partials into dedicated directories.

- Centralized token logic into a shared Sass map and utility function to reduce manual duplication
- Extracted common parts of Essentials and font partials
- Created a font-face mixin
- Removed redundant theme font partials
- Created a singular _base partial for themes
- Created an essentials-base() mixin for themes
- Moved legacy themes (e.g., Auro Classic) to /legacy/ folders
- Created a /themes/ directory with prop maps
- Simplified themeConfig
- Moved font files to an /assets/fonts/ folder
- Renamed files to accurately reflect theme names instead of abbreviations ("alaska-classic" rather than "asc")
- Changed the dist output file names from “essentials” to “global” to reflect production usage

# [7.0.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v6.6.2...v7.0.0) (2025-06-02)


* refactor(tokens)!: update type design tokens ([945b883](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/945b883ce094442a41afb5d2f5faef16578f78eb))


### Bug Fixes

* remove font mixin ([30e58fd](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/30e58fdb6adbb51e47cafbd0b1df641ad2ad30e4))


### BREAKING CHANGES

* - Updates type to v6 of design tokens
- Naming conventions have changed
- Essentials updated to use new type tokens
- Essentials naming conventions updated for Alaska theme

## [6.6.2](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v6.6.1...v6.6.2) (2025-05-14)


### Bug Fixes

* preserve quotes in font-family names during minification ([d1a1fb8](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/d1a1fb800dffbc3692ef08d63477bb311e1ff089))
* remove redundant postinstall font warning ([1a621e2](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/1a621e22fe622a5160037dc48cdcbf17fec5d212))

## [6.6.1](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v6.6.0...v6.6.1) (2025-05-14)


### Bug Fixes

* simplify theme pattern and import ([d3e9cdb](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/d3e9cdbaf19f7de8d87cf88b4b216623f8cd79d0))


### Performance Improvements

* minify essentials files ([b5dccfa](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/b5dccfa2d3e9f4b2d8524f971d5e0b4444f8cf4f))

# [6.6.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v6.5.0...v6.6.0) (2025-05-13)


### Features

* add auro-1 & auro-2 themes ([5c6626d](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/5c6626dc08647691c5f5d1598c141013cbcb9a42))

# [6.5.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v6.4.0...v6.5.0) (2025-05-07)


### Features

* enable variant specification in font mixin ([4b7e71f](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/4b7e71f4516d1654c143e4273341a43d8d2e1f71))

# [6.4.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v6.3.1...v6.4.0) (2025-05-06)


### Features

* add font mixin for design tokens ([d368a1a](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/d368a1ad9a33f508179a5af3c17e21fec9d06cff))

## [6.3.1](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v6.3.0...v6.3.1) (2025-05-02)


### Bug Fixes

* new example wrapper colors for themes ([7aef006](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/7aef0066154526b035683b20cf1708ebd039ed14))

# [6.3.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v6.2.0...v6.3.0) (2025-05-02)


### Features

* update font vars with new themeing tokens ([1736d87](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/1736d874ed61958c3e53fb55f46f1222690ecae5))


### Performance Improvements

* add font-weight ([dae21c4](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/dae21c46ea480e4b977f42237747675d98e2e8e1))
* update color values ([0b78f2e](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/0b78f2eb21a340ec38d7d975969c7e3b30a402f9))

# [6.2.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v6.1.0...v6.2.0) (2025-05-01)


### Features

* add v5 theme fonts ([6583a9c](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/6583a9cec1689ca019d4fa2f1cb7b11b04075de4))

# [6.1.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v6.0.2...v6.1.0) (2025-02-28)


### Features

* update eslint config to latest version ([8ecc7b4](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/8ecc7b4fb81563299a285b558208ce4e17e72fdb))

## [6.0.2](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v6.0.1...v6.0.2) (2025-02-08)


### Performance Improvements

* update dependencies ([c430afc](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/c430afc76307242429be75ddc5735ebe513d28f6))

## [6.0.1](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v6.0.0...v6.0.1) (2025-01-31)


### Performance Improvements

* update to support node 22 [#203](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/203) ([3194fcf](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/3194fcf27b8dd792473b786de94af0d30b780451))

# [6.0.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v5.1.2...v6.0.0) (2024-10-01)


### Features

* **color:** use new design tokens for color theme support [#197](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/197) ([aed72fa](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/aed72fab01685e572df47d369ecc0de6388a851d))


### Performance Improvements

* remove label colors from github settings ([4132d2a](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/4132d2ac5b6ce27e7d6f074c3ba321bf75193e00))


### BREAKING CHANGES

* force major release for last beta merge
* **color:** all previously deprecated code has been removed and will no longer be supported

# [6.0.0-beta.1](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v5.1.2...v6.0.0-beta.1) (2024-08-26)


### Features

* **color:** use new design tokens for color theme support [#197](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/197) ([704ecad](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/704ecad74b5a74f8b9a00f37f79b59c29f8a2bf7))


### BREAKING CHANGES

* **color:** all previously deprecated code has been removed and will no longer be supported

## [5.1.2](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v5.1.1...v5.1.2) (2024-07-25)


### Performance Improvements

* update repo dependencies ([a63bb6d](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/a63bb6dacf1fdb8a4c5f8b85f6815a9cb8855f88))

## [5.1.1](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v5.1.0...v5.1.1) (2024-05-08)


### Performance Improvements

* remove unused breakpoint mixins [#193](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/193) ([d349086](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/d349086c7c8c0bdd627b242ab7ab1c6d90ac5b4d))

# [5.1.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v5.0.8...v5.1.0) (2024-03-05)


### Features

* a11y focus-visible default halo [#183](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/183) ([3952acd](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/3952acddba1cb4f9d03c12fbd5f32d59db62d400))

## [5.0.8](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v5.0.7...v5.0.8) (2024-02-10)


### Performance Improvements

* add duplicate .mjs file for SSR support ([b3bbda9](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/b3bbda9a04c3110bce474e7e753191fb388c5f29))

## [5.0.7](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v5.0.6...v5.0.7) (2024-02-09)


### Performance Improvements

* update CDN web font refs [#187](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/187) ([37047c4](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/37047c42563ead378c26897583be990442922889))

## [5.0.6](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v5.0.5...v5.0.6) (2024-01-25)


### Performance Improvements

* update utilities to support fallbacks [#184](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/184) ([06a42de](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/06a42de713cf8ec2dc0405ff064c89330ff67f37))

## [5.0.5](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v5.0.4...v5.0.5) (2023-11-10)


### Performance Improvements

* update to support Node dependency policy ([333e35b](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/333e35b2d1a2b0a782981b465580c207a357f363))

## [5.0.4](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v5.0.3...v5.0.4) (2023-10-11)


### Bug Fixes

* update utility import reference ([7ad32c2](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/7ad32c2c46026c82c3b947243549d0e1e6f96db0))

## [5.0.3](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v5.0.2...v5.0.3) (2023-10-04)


### Bug Fixes

* remove CSS custom selector ref for font-family ([a7c1b55](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/a7c1b55cb836c85faf13bf5a61d75f6cd1ec0c1b))

## [5.0.2](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v5.0.1...v5.0.2) (2023-09-26)


### Bug Fixes

* address typo in variable ref ([f20fb26](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/f20fb2642c3e5d0a2b750c4bc9ead9dfe0ae1a2b))

## [5.0.1](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v5.0.0...v5.0.1) (2023-09-25)


### Bug Fixes

* update typo in variable CSS references ([34b174c](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/34b174cf79bac0eccb5b53b96d1bbf5f905b4b66))

# [5.0.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v4.8.0...v5.0.0) (2023-09-25)


### Features

* remove all deprecated references [#169](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/169) ([711d729](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/711d7298ff368a48f25b72dbe7694876881c54ff))
* update to use CSS variables with fallback [#134](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/134) ([9546be4](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/9546be475d241520cbd14c240ad7c04da342b8e0))


### Performance Improvements

* **deps:** update repo to support Node 18 [#155](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/155) ([c208bad](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/c208bad02a3885c2b35179055001c5c35509725f))
* **tokens:** update to design tokens 4.x [#134](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/134) ([8f17359](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/8f173595b976b1dfae8a355e93e4187228d41f44))
* update all references from auro- to ds- [#169](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/169) ([57831ef](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/57831eff71cf636eea6788c4a4730cb7afb691c0))
* update insetUtility to maintain current support ([a136b9d](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/a136b9d5b55356804d25166264dc3b04f7d07164))
* update package config [#171](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/171) ([4ca4e7d](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/4ca4e7dc4f1ea2fe70cf9efdbd5ef1f83d4016f7))


### BREAKING CHANGES

* This commit updates the .npmignore package config to
reduce the scope of the packaged files and directories

This commit also removes the necessity of copying all the src files to a
dist dir and instead allows the src dir to be added to the package.
Consumers will have to update dir references from ./dist to ./src in
most import cases.

Processed files are still located in the ./dist dir.

Changes to be committed:
modified:   .github/workflows/testPublish.yml
modified:   .npmignore
modified:   README.md
modified:   package.json
* This commit removes the legacy insetUtility mixin and
replaces it with a static output of the generated legacy values from the
previous version of WCSS and design tokens.

Users will not get a failure when importing the file reference
src/utilityMixins/_insetUtility.scss but instead of the mixin generating
a subset of selectors, all the static selectors will be added to the
project's CSS output.

This legacy feature has also been designated as DEPRECATED and should be
deleted with the next MAJOR release.
* This commit will require all consumers to update their
app to use @aurodesignsystem/design-tokens v4.x

All references in documentation and code has been updated from `auro-`
to `ds-` per the new design token specification.

Changes to be committed:
modified:   FAQ.md
modified:   README.md
modified:   demo/3col.html
modified:   packageScripts/postinstall.js
modified:   src/*
modified:   tests/*
* **tokens:** This commit updates the repo's dependency on the newly
released Auro Design Tokens 4.x.

Changes to be committed:
modified:   package-lock.json
modified:   package.json

# [4.8.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v4.7.0...v4.8.0) (2023-08-04)


### Features

* **3col:** add support for new layout [#149](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/149) ([731f708](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/731f708c4ca0ca6827f233ca3f3d0f01e34f747d))

# [4.7.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v4.6.1...v4.7.0) (2023-07-31)


### Features

* **2col:** add support for 2 column layout [#130](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/130) ([420365d](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/420365dc9a08ac57e1fdf7823fda2dd5ce1e8e5f))

## [4.6.1](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v4.6.0...v4.6.1) (2023-07-11)


### Performance Improvements

* **auroElement:** update to reference Lit [#161](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/161) ([d2bbc7c](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/d2bbc7c8e3ea1ce86518b6c8152a8255608b72a3))

# [4.6.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v4.5.0...v4.6.0) (2023-06-12)


### Features

* add new classes and styling for 2 column layout [#130](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/130) ([cc2d255](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/cc2d2559649a8d1d7cd35181a4757aca3c634193))
* add support for breadcrumb in 2 column layout [#130](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/130) ([1361712](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/136171241b68ce72c07496c26cceff684dc60a49))
* **grid breakpoint:** add support for new grid breakpoint ([4a2cf13](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/4a2cf139cf3a9483067fe03c417ffa87afeb755b))
* use extend scss rule for 2 column layout [#130](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/130) ([ead5452](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/ead5452ef58f330e0e4ba9975503fe5b573ed9cf))

# [4.5.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v4.4.0...v4.5.0) (2023-05-23)


### Features

* **breakpoint:** add new auro breakpoints [#146](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/146) ([3f15e34](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/3f15e34568400cf3e9a1a90936895a95d19e07e2))

# [4.4.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v4.3.1...v4.4.0) (2023-05-18)


### Features

* **grid mixin:** add support for new grid mixin [#129](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/129) ([00ecfd2](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/00ecfd2486dc96f3e9b050733331bf04ffb2c36c))

## [4.3.1](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v4.3.0...v4.3.1) (2023-04-25)


### Bug Fixes

* **styles:** fix the auro capitalize function [#148](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/148) ([7f75b30](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/7f75b3060be2b67328e1d48bb360f91a8c2b7569))

# [4.3.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v4.2.0...v4.3.0) (2023-02-07)


### Features

* **size:** use new and deprecate legacy size tokens [#128](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/128) ([1eaede6](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/1eaede60be591d81d8f6d587b4c2f185f302a0ea))

# [4.2.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v4.1.2...v4.2.0) (2022-12-20)


### Bug Fixes

* replace css variables ([3f670a3](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/3f670a3b70f093360b88841c9d5ab16960f33b08))


### Features

* design features [#115](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/115) ([72d0ff0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/72d0ff0a60e4fe00ec73a80ff1170e7690dcde74))
* new list styles ([b09fee3](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/b09fee3a74552404c818a23b41c00ddaa9a83e03))

## [4.1.2](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v4.1.1...v4.1.2) (2022-11-30)


### Bug Fixes

* upgrade sass from 1.55.0 to 1.56.0 ([cf18f0c](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/cf18f0cc4e8df9d9bfaf16da4523e13d5ad3f356))

## [4.1.1](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v4.1.0...v4.1.1) (2022-10-06)


### Bug Fixes

* **demo:** address incorrect value for max-width on the body ([fd0de6b](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/fd0de6b9435ed505b366c0253779e2b2387467f1))

# [4.1.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v4.0.0...v4.1.0) (2022-10-06)


### Features

* **size tokens:** update for deprecated tokens [#121](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/121) ([5022890](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/5022890665fbc6dbff711fc720626073003fa9ad))

# [4.0.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v3.7.3...v4.0.0) (2022-06-08)


### Code Refactoring

* **namespace:** change to aurodesignsystem namespace ([9a2d7a4](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/9a2d7a411bed8443a94cd2ed601e53f689b6738a))
* remove .focus-visible [#105](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/105) ([db8abb3](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/db8abb347873b510fc8ca9e484deb7121f5f4cbb))


### BREAKING CHANGES

* **namespace:** This commit updates the npm namespace.
* focus-visible polyfill dependency has been removed.

If the end user of WCSS still requires the focus-visible polyfill
for their project, please install this as a peer dependency.

https://github.com/WICG/focus-visible

## [3.7.3](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v3.7.2...v3.7.3) (2021-12-06)


### Bug Fixes

* **core:** fire transition events for reduced motion [#42](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/42) ([4bcbc38](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/4bcbc38d388e7cd4db581efb0523d747c79125d8))

## [3.7.2](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v3.7.1...v3.7.2) (2021-10-21)


### Bug Fixes

* **fineprint:** add missed color spec [#109](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/109) ([5dce17e](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/5dce17e3720064967743f8bdf4379e7ab58fd589))

## [3.7.1](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v3.7.0...v3.7.1) (2021-10-15)


### Bug Fixes

* add \!important flag to address margin specificity [#107](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/107) ([7f7e023](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/7f7e023cbbf8e1eb9a3db45f63d64104b35d7b3b))

# [3.7.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v3.6.3...v3.7.0) (2021-10-12)


### Bug Fixes

* **sass:** update to dart sass [#47](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/47) ([72c97a8](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/72c97a8ca35e864dd3fdbfb52e43eae1568ce8fe))
* **styles:** correct selector based on review ([786e583](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/786e583461eb253c641e9c26d02ab2c5dda8754d))


### Features

* **fineprint:** add new auro_fineprint class ([0b1c35e](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/0b1c35e4490fe7d695de18b9099dabfe78632a1b))
* **web fonts:** include all 3 ASCircular font families [#99](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/99) ([7cbbe2b](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/7cbbe2b6910d9adf58e38f8e0aa4e39c2881052d))

## [3.6.3](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v3.6.2...v3.6.3) (2021-08-27)


### Bug Fixes

* **demo css:** add missed code selector for ce demo pages ([2ba2149](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/2ba2149f09f85a31bb5399bfbe61d2ea33492042))

## [3.6.2](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v3.6.1...v3.6.2) (2021-08-12)


### Bug Fixes

* **demo css:** remove page wrapper styles from demo styles ([5865731](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/5865731b7c451a65584ee18ee31b4ae79dd7b221))

## [3.6.1](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v3.6.0...v3.6.1) (2021-08-10)


### Bug Fixes

* **build:** include build of buildDemoCss into pipeline ([c544d6c](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/c544d6c82e77df972a7811f5ce19a4f875519d3d))

# [3.6.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v3.5.1...v3.6.0) (2021-08-10)


### Bug Fixes

* remove sassdoc from precommit [#83](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/83) ([a400560](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/a40056087405d0313c3a22a63316b2c21b565b1b))


### Features

* create standard demo page Sass file ([8783d0e](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/8783d0e4b860a7dcd83e93a31de000ee8d2ae7f4))

## [3.5.1](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v3.5.0...v3.5.1) (2021-08-07)


### Bug Fixes

* **build:** add automated index file to semantic-release merge back process ([66d9a7c](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/66d9a7c52c3d5a0371fda5b7ddde43807ad0e61e))

# [3.5.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v3.4.0...v3.5.0) (2021-08-07)


### Features

* add support for blockquote base UI ([9c9f66d](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/9c9f66db9df6fa8459cd07197f68c9793953906e))

# [3.4.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v3.3.2...v3.4.0) (2021-05-20)


### Features

* add support for font-variant-ligatures to essentials file [#80](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/80) ([916c3a7](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/916c3a746e637a2346d808365c40456b077e287c))

## [3.3.2](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v3.3.1...v3.3.2) (2021-05-13)


### Bug Fixes

* remove comment that was throwing code error ([ed41312](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/ed41312411100f521cb69a41a0533dd8e6de6e51))

## [3.3.1](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v3.3.0...v3.3.1) (2021-05-13)


### Bug Fixes

* update readme and triggers patch release per style updates ([c0608b2](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/c0608b23a7dffa4e8652f7c5fa9bc1decc8ff7a9))

# [3.3.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v3.2.0...v3.3.0) (2021-05-10)


### Features

* default support for :focus-visible [#74](https://github.com/AlaskaAirlines/WebCoreStyleSheets/issues/74) ([7806525](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/7806525920c8dbc46c92e842417075b1c8613fab))
* update to support pseudo-class focus-visible ([dcc9c1c](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/dcc9c1c8c94893bef899feb63b296ddcfb150e40))

# [3.2.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v3.1.0...v3.2.0) (2021-03-05)


### Features

* only remove focus styles when focus-visible ([0c56e56](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/0c56e560372559264ed26cd3f20c7519410608aa))
* remove -moz pseudo-elements ([45e0755](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/45e07557034d88a6cd9b0cf5e97424a8157facc2))

# [3.1.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v3.0.0...v3.1.0) (2021-02-26)


### Features

* add support for picture > img opinion ([90b04b7](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/90b04b7f390d1f9f8a288b034c5dbd399c12a666))

# [3.0.0](https://github.com/AlaskaAirlines/WebCoreStyleSheets/compare/v2.12.2...v3.0.0) (2020-11-14)


### Bug Fixes

* add margin opinion on body selector ([19a1f42](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/19a1f4277dbe279f817a728c5c7098cbca786fa3))


### Performance Improvements

* remove additional deprecated selectors ([ed9c719](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/ed9c719a279fb1ff89c47d490274811dbfdf439b))
* remove deprecated selectors ([440e86b](https://github.com/AlaskaAirlines/WebCoreStyleSheets/commit/440e86b91ba0c454372a3eb96a1f0d394bb724cd))


### BREAKING CHANGES

* This commit removes additional selectors that were marked as deprecated
* This update will remove all legacy Orion selectors

## [2.12.2](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.12.1...v2.12.2) (2020-11-11)


### Bug Fixes

* show focus outline for High-Contrast Mode ([3482525](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/34825254f8547cc024ba470de957a3c8586a8122))

## [2.12.1](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.12.0...v2.12.1) (2020-09-23)


### Bug Fixes

* update JSDoc syntax to remove internal method from rendered docs ([8ecce4d](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/8ecce4d46b81ff6907852812360a1e698f4d2982))

# [2.12.0](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.11.0...v2.12.0) (2020-08-25)


### Bug Fixes

* travis script ([99c9234](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/99c9234874a8be39f7d6f4220e257130117e1e44))


### Features

* add support for remove auroElement dependency ([96e70bc](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/96e70bca824bfed94d0526d6bf39b9afb60168ad))

# [2.11.0](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.10.3...v2.11.0) (2020-08-24)


### Features

* add new type properties feature ([21addd5](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/21addd5580159be354160e377d608dc5d208111d))

## [2.10.3](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.10.2...v2.10.3) (2020-07-23)


### Bug Fixes

* [#53](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/issues/53) address misssing utility classes from api doc ([58fb3bf](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/58fb3bf440abcb727a89038dba00e304daf93f85))

## [2.10.2](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.10.1...v2.10.2) (2020-07-08)


### Bug Fixes

* update utility-font [@if](https://github.com/if) wrapper ([8fb809d](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/8fb809d3db9dbcaac596dc0dbfc249fdccf01c27))

## [2.10.1](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.10.0...v2.10.1) (2020-07-01)


### Bug Fixes

* add additional checks for versions of tokens ([8d9bfaa](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/8d9bfaa71bf55fdd44b4e61d1f4db6aa25758df8))

# [2.10.0](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.9.5...v2.10.0) (2020-06-13)


### Features

* update roleButton mixin to mod display type ([c09fb05](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/c09fb0530324ddd045bcb0ea57050bbf9671a006))

## [2.9.5](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.9.4...v2.9.5) (2020-06-03)


### Bug Fixes

* add support for auro_table component support ([1e29a8d](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/1e29a8d6b96c003c37ef52b84c227b64860cd5de))

## [2.9.4](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.9.3...v2.9.4) (2020-05-19)


### Bug Fixes

* [#47](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/issues/47) Unsafe removal of focus outline ([607cc1b](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/607cc1b383b0473c7f99084a56617d737f50f097))
* typography layout [#46](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/issues/46) ([37b4989](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/37b49893485c02cde711efa871dfac3a108f5810))

## [2.9.3](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.9.2...v2.9.3) (2020-05-08)


### Bug Fixes

* update short URL in deprecated feedback ([4261ec9](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/4261ec923ad302b98b7d51e9c77e315221f097b6))

## [2.9.2](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.9.1...v2.9.2) (2020-04-30)


### Bug Fixes

* padding issue with auro-hyperlink default style ([246d44f](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/246d44f4e014c45dacd88f645332856738f0f436))

## [2.9.1](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.9.0...v2.9.1) (2020-04-14)


### Bug Fixes

* add support for legacy baseline CSS ([c017a59](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/c017a59f7a80f974a4a6ce816077e466ad778de5))

# [2.9.0](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.8.14...v2.9.0) (2020-04-10)


### Features

* add support for CDN pre-processed resources ([cd00dcd](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/cd00dcd74434ab038193a2638dbf4e413db686ba))

## [2.8.14](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.8.13...v2.8.14) (2020-04-01)


### Bug Fixes

* [#41](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/issues/41) address a11y for reduced-motion ([20456dd](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/20456dd))

## [2.8.13](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.8.12...v2.8.13) (2020-03-24)


### Bug Fixes

* [#37](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/issues/37) address deprecation issues ([4885844](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/4885844))

## [2.8.12](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.8.11...v2.8.12) (2020-02-28)


### Bug Fixes

* [#35](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/issues/35) address case when deprecated variables are requested ([009ceb5](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/009ceb5))

## [2.8.11](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.8.10...v2.8.11) (2020-02-28)


### Bug Fixes

* [#33](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/issues/33) incorrect reference to deprecated mixin ([00d2c23](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/00d2c23))

## [2.8.10](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.8.9...v2.8.10) (2020-02-04)


### Bug Fixes

* move deprecation notices from output CSS to CLI ([8ee6330](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/8ee6330))

## [2.8.9](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.8.8...v2.8.9) (2020-01-31)


### Bug Fixes

* update tokens package ([8e5ed42](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/8e5ed42))

## [2.8.8](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.8.7...v2.8.8) (2020-01-24)


### Bug Fixes

* address support for postinstall commo ([9521137](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/9521137))

## [2.8.7](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.8.6...v2.8.7) (2020-01-23)


### Bug Fixes

* address issue with auro hyperlink ([384942f](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/384942f))

## [2.8.6](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.8.5...v2.8.6) (2020-01-23)


### Bug Fixes

* style update to auro button mixin ([3e50985](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/3e50985))

## [2.8.5](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.8.4...v2.8.5) (2020-01-17)


### Bug Fixes

* update default type line-heights ([e08a5ee](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/e08a5ee))

## [2.8.4](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.8.3...v2.8.4) (2020-01-16)


### Bug Fixes

* update default type line-heights ([fb91fe3](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/fb91fe3))

## [2.8.3](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.8.2...v2.8.3) (2020-01-09)


### Bug Fixes

* update hyperlink to support focus-visible ([2f008a5](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/2f008a5))

## [2.8.2](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.8.1...v2.8.2) (2020-01-08)


### Bug Fixes

* address variable use in inset mixin ([aa138e4](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/aa138e4))

## [2.8.1](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.8.0...v2.8.1) (2020-01-08)


### Bug Fixes

* address missing typography styles ([0727723](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/0727723))

# [2.8.0](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.7.2...v2.8.0) (2020-01-07)


### Features

* add scope and prefix options to selector ([fa7b1b2](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/fa7b1b2)), closes [#22](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/issues/22) [#21](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/issues/21)

## [2.7.2](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.7.1...v2.7.2) (2019-12-19)


### Bug Fixes

* resolve issue [#20](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/issues/20) ([0c56610](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/0c56610))

## [2.7.1](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.7.0...v2.7.1) (2019-11-13)


### Bug Fixes

* update baseline img to max-width ([9a75f02](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/9a75f02))

# [2.7.0](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.6.14...v2.7.0) (2019-11-13)


### Features

* update to default image property ([e13a261](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/e13a261))

## [2.6.14](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.6.13...v2.6.14) (2019-11-12)


### Bug Fixes

* update default img value; create new responsive img selector ([4e7c69b](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/4e7c69b))

## [2.6.13](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.6.12...v2.6.13) (2019-10-14)


### Bug Fixes

* update html selector to remove size-adjust feature ([4c3fb30](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/4c3fb30))

## [2.6.12](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.6.11...v2.6.12) (2019-10-11)


### Bug Fixes

* update to support button 3.0 updates ([e10ac23](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/e10ac23))

## [2.6.11](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.6.10...v2.6.11) (2019-09-23)


### Bug Fixes

* address bug between heading--xl and util_type--xl ([8193f2e](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/8193f2e))

## [2.6.10](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.6.9...v2.6.10) (2019-09-20)


### Bug Fixes

* address incorrect selector property ([e671222](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/e671222))

## [2.6.9](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.6.8...v2.6.9) (2019-09-12)


### Bug Fixes

* address line-height issue with role=button use ([90a02ec](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/90a02ec))

## [2.6.8](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.6.7...v2.6.8) (2019-09-12)


### Bug Fixes

* update button a11y state ([9b913ff](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/9b913ff))

## [2.6.7](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.6.6...v2.6.7) (2019-09-03)


### Bug Fixes

* update incorrect property ([3ec2378](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/3ec2378))

## [2.6.6](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.6.5...v2.6.6) (2019-09-03)


### Bug Fixes

* add utility classes padding top, left, right and left to none ([e2334b5](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/e2334b5))

## [2.6.5](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.6.4...v2.6.5) (2019-09-03)


### Bug Fixes

* update layout utility classes to have margin left and right 0 options ([b2bb3cb](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/b2bb3cb))

## [2.6.4](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.6.3...v2.6.4) (2019-08-23)


### Bug Fixes

* update baseline.scss to remove default body margin ([6f1c082](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/6f1c082))

## [2.6.3](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.6.2...v2.6.3) (2019-08-01)


### Bug Fixes

* remove unnecessary IE 10 support from normalize ([88b9b56](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/88b9b56))

## [2.6.2](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.6.1...v2.6.2) (2019-07-11)


### Bug Fixes

* update breakpoint interaction with tablist UI ([e56ae5e](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/e56ae5e))

## [2.6.1](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.6.0...v2.6.1) (2019-07-11)


### Bug Fixes

* update role=tab shape ([e50ed65](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/e50ed65))

# [2.6.0](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.5.2...v2.6.0) (2019-07-09)


### Features

* add font-weight book lib ([a4426fc](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/a4426fc))

## [2.5.2](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.5.1...v2.5.2) (2019-07-08)


### Bug Fixes

* update baseline to remove obsolete utility header selector ([ea7aaef](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/ea7aaef))
* update unset to inherit for legacy browser support ([89fbb8d](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/89fbb8d))

## [2.5.1](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.5.0...v2.5.1) (2019-07-08)


### Bug Fixes

* update responsive order in ods-containedButtons ([d675da7](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/d675da7))

# [2.5.0](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.4.2...v2.5.0) (2019-07-04)


### Features

* add support for contained button ui ([d5a4efc](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/d5a4efc))

## [2.4.2](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.4.1...v2.4.2) (2019-06-25)


### Bug Fixes

* broken sass reference ([6125aec](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/6125aec))

## [2.4.1](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.4.0...v2.4.1) (2019-06-25)


### Bug Fixes

* correct issue with box-sizing value ([2ec0657](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/2ec0657))

# [2.4.0](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.3.0...v2.4.0) (2019-06-24)


### Features

* address support for button a11y ([adeea98](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/adeea98))

# [2.3.0](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.2.1...v2.3.0) (2019-06-14)


### Features

* add support for tablist component ([f13ae0c](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/f13ae0c))

## [2.2.1](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.2.0...v2.2.1) (2019-06-14)


### Bug Fixes

* address missed work with hyperlink darktheme ([9a050fc](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/9a050fc))

# [2.2.0](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.1.1...v2.2.0) (2019-06-14)


### Features

* update support for hyperlink component; update semantic release ([4daab88](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/4daab88))

## [2.1.1](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.1.0...v2.1.1) (2019-06-14)


### Bug Fixes

* update package lock ([55adc66](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/55adc66))

# [2.1.0](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v2.0.0...v2.1.0) (2019-06-07)


### Features

* refactor support focus-visible state ([15066f6](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/15066f6))

# [2.0.0](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v1.1.1...v2.0.0) (2019-05-23)


### Performance Improvements

* **semantic-release:** resource files moved to dist/ dir ([f72de86](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/f72de86))


### BREAKING CHANGES

* **semantic-release:** Moving to semantic-release meant updating build and publish process, so all useable assets are now in dist/ dir whereas they were previously at the root level of the dir

## [1.1.1](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/compare/v1.1.0...v1.1.1) (2019-05-22)


### Bug Fixes

* update semantic-release process ([0a9ae35](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/commit/0a9ae35))
