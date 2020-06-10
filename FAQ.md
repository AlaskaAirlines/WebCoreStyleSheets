# F.A.Q.

The following are frequently asked questions.

## I updated my version and am now getting a missing variable error?

When you update to v2.8, if you get an error that there are missing Sass variables with the Auro namespace, e.g. `$auro- ...` simply import the new Auro Sass variables generated from the tokens.

```scss
@import "~@alaskaairux/orion-design-tokens/dist/tokens/SCSSVariables";
```

## I updated my version, now some utility selectors are no longer there?

If you have been using selectors from the now deprecated `_layoutProperties.scss` file, you may be missing the following selectors from your CSS output

```css
.util_[margin/padding][Top/Right/Bottom/Left]--[none/xs/md/lg/xl]
```

The easy fix is to import the new layout properties generator file that will fill this gap.

```scss
@import "./node_modules/@alaskaairux/orion-web-core-style-sheets/dist/utilityMixins/layoutPropertiesGenerator";
```

For full details on this generator, please see the [generator documentation](https://alaskaairlines.github.io/OrionWebCoreStyleSheets/#utility-layout-mixin-auro_layoutPropertiesGenerator).
