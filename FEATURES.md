# WCSS Features

For the full API, please see the [WCSS docs site](https://alaskaairlines.github.io/WebCoreStyleSheets/).

## Scoping

Be sure to see the [prefixing and scoping API](http://alaskaairlines.github.io/OrionWebCoreStyleSheets/#scope-prefix) in the documentation site.

When supporting legacy UIs there may be issues with importing a Sass file and its selectors. To enable scoping simply set the `$scope` variable to be `true` before importing any selectors that support this setting.

```scss
$scope: true;
@import "~@aurodesignsystem/webcorestylesheets/dist/ ... "
```

This setting will result in the following CSS selectors

```css
html.auro { ... }

.auro body,
.auro .baseType { ... }
```

## Prefixing

To enable prefixing simply set the `$prefix` variable to be `true` before importing any selectors that support this setting.

```scss
$prefix: true;
@import "~@aurodesignsystem/webcorestylesheets/dist/ ... "
```

This setting will result in the following CSS selectors

```css
html { ... }

body,
.auro_baseType { ... }
```

## Scoping and prefixing

If needed, both `$scope` and `prefix` can work in tandem. To enable, simply set both the `scope` and `prefix` variables as `true` before importing any selectors that support these settings.

```scss
$scope: true;
$prefix: true;
@import "~@aurodesignsystem/webcorestylesheets/dist/ ... "
```

This setting will result in the following CSS selectors

```css
html.auro { ... }

.auro body,
.auro .auro_baseType { ... }
```

## Importing utility classes and using the !important flag

When importing utility selectors developers have the option to invoke the `!important` CSS flag. Within WCSS the global `$important` variable is `null` by default. To change, simply change the value of the variable before importing any utility partials.

```scss
$important: true;
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

See !important [spec](http://alaskaairlines.github.io/OrionWebCoreStyleSheets/#utility-variable-important)


## layoutPropertiesGenerator

Importing this file will auto-generates all available utility selectors. Output can be configured by redefining default values before import. See the default value examples below.

```sass
none, xs, md, lg, xl
```

See [API](http://alaskaairlines.github.io/OrionWebCoreStyleSheets/#utility-layout-mixin-auro_layoutPropertiesGenerator)

## insetUtility selector generator

Importing this file will return a series of pre-defined inset (_the padding around an element where all sides are equal_) selectors based on the inset spacing design spec.

```sass
none, xxxs, xxs, xs, sm, md, lg, xl, xxl, xxxl
```

See [API](http://alaskaairlines.github.io/OrionWebCoreStyleSheets/#utility-layout-mixin-auro_inset)

## spacingUtility selector generator

Importing this file will return a series of pre-defined selectors based on the stack or inline spacing design specs

```sass
[inline, stack] inline - L/R, stack - top/bottom

none, xxxs, xxs, xs, sm, md, lg, xl, xxl, xxxl
```

See [API](http://alaskaairlines.github.io/OrionWebCoreStyleSheets/#utility-layout-mixin-auro_spacing)
