# WCSS Features

For the full API, please see the [WCSS docs site](https://alaskaairlines.github.io/WebCoreStyleSheets/).

## Scoping

Be sure to see the [prefixing and scoping API](https://alaskaairlines.github.io/WebCoreStyleSheets/#scope-prefix) in the documentation site.

When supporting legacy UIs there may be issues with importing a Sass file and its selectors. Under the Sass module system, configure the `$scope` value via `@use ... with (...)` on the `manageScope` module. This must be done **before** loading any selectors that support this setting (the first `@use` of `manageScope` is the one that carries configuration).

```scss
@use "~@aurodesignsystem/webcorestylesheets/dist/libSupport/manageScope" with ($scope: true);
@use "~@aurodesignsystem/webcorestylesheets/dist/ ... ";
```

This setting will result in the following CSS selectors

```css
html.auro { ... }

.auro body,
.auro .baseType { ... }
```

## Prefixing

To enable prefixing, configure the `$prefix` value via `@use ... with (...)` on the `manageScope` module, **before** loading any selectors that support this setting.

```scss
@use "~@aurodesignsystem/webcorestylesheets/dist/libSupport/manageScope" with ($prefix: true);
@use "~@aurodesignsystem/webcorestylesheets/dist/ ... ";
```

This setting will result in the following CSS selectors

```css
html { ... }

body,
.auro_baseType { ... }
```

## Scoping and prefixing

If needed, both `$scope` and `$prefix` can work in tandem. Configure both on the `manageScope` module in a single `@use ... with (...)`, **before** loading any selectors that support these settings.

```scss
@use "~@aurodesignsystem/webcorestylesheets/dist/libSupport/manageScope" with ($scope: true, $prefix: true);
@use "~@aurodesignsystem/webcorestylesheets/dist/ ... ";
```

This setting will result in the following CSS selectors

```css
html.auro { ... }

.auro body,
.auro .auro_baseType { ... }
```

## Importing utility classes and using the !important flag

When importing utility selectors developers have the option to invoke the `!important` CSS flag. Within WCSS the `$important` variable is `null` by default. To change it, configure the `important` module via `@use ... with (...)` **before** loading any utility partials.

```scss
@use "~@aurodesignsystem/webcorestylesheets/dist/utilityVariables/important" with ($important: true);
@use "~@aurodesignsystem/webcorestylesheets/dist/utilityClasses/ ... ";
```

The output of default selector

```css
.util_is-lgOnly {
  display: none;
}
```

The output with `$important: true`

```css
.util_is-lgOnly {
  display: none !important;
}
```

See !important [spec](https://alaskaairlines.github.io/WebCoreStyleSheets/#utility-variable-important)


## layoutPropertiesGenerator

Importing this file will auto-generates all available utility selectors. Output can be configured by redefining default values before import. See the default value examples below.

```sass
none, xs, md, lg, xl
```

See [API](https://alaskaairlines.github.io/WebCoreStyleSheets/#utility-layout-mixin-auro_layoutPropertiesGenerator)

## insetUtility selector generator

Importing this file will return a series of pre-defined inset (_the padding around an element where all sides are equal_) selectors based on the inset spacing design spec.

```sass
none, xxxs, xxs, xs, sm, md, lg, xl, xxl, xxxl
```

See [API](https://alaskaairlines.github.io/WebCoreStyleSheets/#utility-inset)

## spacingUtility selector generator

Importing this file will return a series of pre-defined selectors based on the stack or inline spacing design specs

```sass
[inline, stack] inline - L/R, stack - top/bottom

none, xxxs, xxs, xs, sm, md, lg, xl, xxl, xxxl
```

See [API](https://alaskaairlines.github.io/WebCoreStyleSheets/#utility-layout-mixin-auro_spacing)
