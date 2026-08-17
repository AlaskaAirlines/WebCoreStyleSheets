# Migration Guide

## v11.x → v12.0.0 — Sass module system (`@use`/`@forward`)

WebCoreStyleSheets v12 replaces the legacy Sass `@import` system with the
[Sass module system](https://sass-lang.com/documentation/at-rules/use/)
(`@use` / `@forward`). Dart Sass has deprecated `@import` and will remove it in
Dart Sass 3.0.0; this release moves WCSS — and, by extension, your project — off
the deprecation path.

This is a **breaking change**. The shipped `src/` (and compiled `dist/`) partials
are the package's public API, and that API is now module-based. Read the sections
below that apply to how you consume WCSS.

---

### 1. Load files with `@use`, not `@import`

Replace every `@import` of a WCSS partial with `@use`.

```scss
// Before (v11)
@import "~@aurodesignsystem/webcorestylesheets/dist/normalize";

// After (v12)
@use "~@aurodesignsystem/webcorestylesheets/dist/normalize" as *;
```

`as *` pulls the module's members into the global namespace, matching the old
`@import` behavior most closely. If you prefer namespaced access (recommended by
Sass for clarity), drop `as *` and reference members through the namespace:

```scss
@use "~@aurodesignsystem/webcorestylesheets/dist/animation";

.foo {
  @include animation.auro_transition;
}
```

Key differences from `@import` to be aware of:

- **Members are namespaced by default.** Without `as *`, mixins/functions/variables
  are accessed as `<namespace>.<member>`.
- **`@use` is not transitive.** A module's members are only available in the file
  that `@use`s it. Each file that needs a helper must `@use` it directly.
- **A module is only loaded once.** Repeated `@use` of the same file resolves to a
  single shared instance — no duplicated CSS output.

### 2. Scope / prefix configuration (`manageScope`)

Previously you set the global `$scope` / `$prefix` variables **before** importing
selectors. Under the module system, globals no longer flow into a module — you must
configure the `manageScope` module explicitly with `@use ... with (...)`.

```scss
// Before (v11)
$scope: true;
$prefix: true;
@import "~@aurodesignsystem/webcorestylesheets/dist/componentSupport/table";

// After (v12)
@use "~@aurodesignsystem/webcorestylesheets/dist/libSupport/manageScope" with (
  $scope: true,
  $prefix: true
);
@use "~@aurodesignsystem/webcorestylesheets/dist/componentSupport/table";
```

**Ordering matters.** Module configuration must happen at the *first* load of
`manageScope` in the compilation. Put the configured `@use` of `manageScope`
**before** any `@use` of a selector partial that depends on it, or Sass will report
that the module was already loaded.

> ⚠️ If you keep using the old `$scope: true; @import ...` form, the `@import` will
> still resolve (with a deprecation warning) but the scope/prefix will **silently
> stop applying** — your global no longer reaches the module. Switch to the
> `@use ... with (...)` form.

### 3. `!important` configuration (`important`)

Same pattern as scope/prefix — configure the `important` module rather than setting
a global.

```scss
// Before (v11)
$important: true;
@import "~@aurodesignsystem/webcorestylesheets/dist/utilityClasses/displayProperties";

// After (v12)
@use "~@aurodesignsystem/webcorestylesheets/dist/utilityVariables/important" with (
  $important: true
);
@use "~@aurodesignsystem/webcorestylesheets/dist/utilityClasses/displayProperties";
```

### 4. Design tokens are now an explicit dependency

Several partials previously relied on you injecting Auro design-token variables into
the global scope (via a bare `@import` of the token SCSS) and detected them with
`meta.variable-exists()`. Under the module system those globals never reach the
module, so WCSS now `@use`s the tokens directly from
`@aurodesignsystem/design-tokens`.

- `@aurodesignsystem/design-tokens` is a direct dependency of WCSS, so it is
  installed automatically alongside the package — you do not need to add it yourself.
- You no longer need to pre-import the token SCSS before WCSS partials for token
  defaults to resolve — WCSS loads them itself.
- If you were relying on overriding token values by injecting your own globals ahead
  of the WCSS import, that path no longer works; theme via the design-tokens package
  instead.

### 5. Writing tests (`sass-true`)

Test files now use the module API as well:

```scss
// Before (v11)
@import 'true';
@import '[path to function]';

// After (v12)
@use 'true' as *;
@use '[path to function]' as *;
```

For partials that take configuration, use `@use ... as * with (...)`:

```scss
@use 'true' as *;
@use '../src/utilityMixins/spacingUtility' as * with (
  $ds-spacing-types: inline,
  $ds-spacing-options: (25, 1000)
);
```

### 6. Paragraph margin opt-in (`$paragraph`)

The `<p>` element margin is still **opt-in and off by default** (unchanged behavior),
but the flag is configured through the module rather than a shared global. The
`essentials` entry point forwards the `$paragraph` flag from its Auro Classic
essentials copy, so configure it there:

```scss
// Before (v11)
$paragraph: true;
@import "~@aurodesignsystem/webcorestylesheets/dist/essentials";

// After (v12)
@use "~@aurodesignsystem/webcorestylesheets/dist/essentials" with (
  $paragraph: true
);
```

If you load a **per-theme** essentials bundle (e.g. `essentials/themes/alaska`)
rather than the top-level `essentials` entry point, the flag no longer flows in
through a global. The per-theme bundles emit their `p` rule from the shared
`essentials/base` module, so configure that module **first** — before the
per-theme `@use` loads it — so the base singleton is configured when it is
generated:

```scss
// Before (v11)
$paragraph: true;
@import "~@aurodesignsystem/webcorestylesheets/dist/essentials/themes/alaska";

// After (v12)
@use "~@aurodesignsystem/webcorestylesheets/dist/essentials/base" with (
  $paragraph: true
);
@use "~@aurodesignsystem/webcorestylesheets/dist/essentials/themes/alaska";
```

### 7. Type theme bundles moved to a per-theme file

The old per-theme bundled sub-directories (e.g.
`src/bundled/type/themes/auro-1/body.scss`,
`.../auro-2/accent.scss`, and the individual per-part files under each theme dir)
have been removed. Each theme is now a single bundle file:

```scss
// Before (v11)
@import ".../bundled/type/themes/auro-1/body";

// After (v12) — one file emits the whole theme's type custom properties
@use ".../bundled/type/themes/atmos";
```

Note the `auro-1` / `auro-2` theme names are gone: design-tokens now ships
`atmos` (code `atm`) in place of the former `auro-1`, and `auro-2` is no longer
built.

The same rename applies to the **theme-level global** stylesheets under
`dist/bundled/themes/`. The bundle is now named for the theme's directory, so
the former `auro-1` global file has been replaced by `atmos`:

```scss
// Before (v11)
@import ".../bundled/themes/auro-1.global.css";

// After (v12)
@use ".../bundled/themes/atmos.global.css";
```

Consumers loading a global stylesheet by the old `auro-1` name must repoint to
`atmos.global.css` (there is no `auro-1.global.css` in the v12 dist).

The `src/type/themes/auro-1/index.scss` partial is preserved only as a compat
shim: it now emits **Atmos** (`atm`) type custom properties, not Auro 1. Anyone
`@use`-ing that path directly (rather than a bundled global) should migrate to
the bundled multi-theme file, which emits Atmos as the `:root` default:

```scss
@use ".../src/bundled/type/themes/atmos";
```

There is no `src/type/themes/atmos/` single-theme partial; if you require a
single-theme direct path and accept the shim's side-effects, the `auro-1` compat
path is the only option for now. The `auro-1` path may be removed in a future
release.

#### Type mixin signature change (`generate-theme-type-css-vars`)

If you call the type generator mixins directly, note that
`generate-theme-type-css-vars` now takes a second positional argument, the theme
name, used to build its data-attribute scope selector:

```scss
// Before (v11) — loaded via `@import`, so the mixin was called unnamespaced
@include generate-theme-type-css-vars($theme-configs);

// After (v12) — loaded via `@use`, so the mixin is called through its namespace
@include type-generator.generate-theme-type-css-vars($theme-configs, $theme-name);
```

---

### Quick reference

| v11 (`@import`)                              | v12 (`@use`)                                                            |
| -------------------------------------------- | ----------------------------------------------------------------------- |
| `@import ".../normalize";`                   | `@use ".../normalize" as *;`                                            |
| `$scope: true; @import ".../table";`         | `@use ".../libSupport/manageScope" with ($scope: true);` then `@use ".../table";` |
| `$prefix: true; @import ...;`                | `@use ".../libSupport/manageScope" with ($prefix: true);` then `@use ...;` |
| `$important: true; @import ...;`             | `@use ".../utilityVariables/important" with ($important: true);` then `@use ...;` |
| `@import 'true'; @import '[partial]';`       | `@use 'true' as *; @use '[partial]' as *;`                              |

For the full API, see the [WCSS docs site](https://alaskaairlines.github.io/WebCoreStyleSheets/).
