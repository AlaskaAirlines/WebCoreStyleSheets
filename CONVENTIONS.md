# CSS writing conventions

The implementation of WCSS uses a naming convention model that will be strictly adhered to throughout this library and compliance is expected for any contributed updates.

## Utility

Universally applicable selectors in cases where applying this style is not an appropriate responsibility of another selector. These selectors are typically considered UI trump cards as they may use the `!important` flag.

To learn more about how the `!important` flag can be used with WCSS, please [see the API spec](https://alaskaairlines.github.io/OrionWebCoreStyleSheets/#variable-important).

(may define shape or layout without direct context to any element, component or object)

```css
.util_hidden {
  display: none;
}

.util_hiddenVisually {
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
```

## Auro supporting styles

Auro web component styles are a special class of utility selectors where common UIs that are mainly addressed in Auro web components are needed in situations where web components cannot be used.

These selectors will be visible by the `.auro_` prefix in the selector name, for example;


```css
.auro_roleButton { ... }

.auro_hyperlink { ... }
```

**NOTE:** The `auro_` prefix will be appended to an Auro supporting selector regardless of the `$prefix` flag setting. Also, the `auro_` prefix will not be duplicated if the `$prefix` flag is set `true`.

## Additional documentation

To learn more about Auro standards in CSS selector conventions, please see [this document](https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/blob/master/staticDocs/cssConventions.md).
