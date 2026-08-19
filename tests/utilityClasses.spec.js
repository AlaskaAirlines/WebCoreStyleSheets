const path = require('path')
const sass = require('sass')

// Regression coverage for the two utility-class output fixes in commit 799c24b
// ("fix: correct lg breakpoint token and font-weight custom property in utility
// classes #294"). Both files in src/utilityClasses/ emit their rules at the
// top level (on `@use`), not through a mixin, so sass-true's output/expect blocks
// can't isolate them — instead we compile the real source file and assert on the
// emitted CSS. Testing the actual file (not a reconstruction) is what makes these
// true regression guards: reintroducing the original bug fails the compile-output
// assertion below.

const loadPaths = [path.resolve(process.cwd(), 'node_modules'), process.cwd()]

/** Compile a utility-class partial standalone and return its CSS with runs of
 *  whitespace collapsed, so assertions are independent of Sass's formatting. */
function compileCss(relPath) {
  const { css } = sass.compile(path.resolve(process.cwd(), relPath), { loadPaths })
  return css.replace(/\s+/g, ' ').trim()
}

describe('utilityClasses/responsive — .util_is-lgOnly (799c24b)', () => {
  // Bug: the class guarded on / referenced the non-existent `$ds-breakpoint-lg`
  // token (correct token: `$ds-grid-breakpoint-lg`), so the `@media` rule was
  // never emitted and `.util_is-lgOnly` had no effect above the lg breakpoint.
  let css
  beforeAll(() => {
    css = compileCss('src/utilityClasses/_responsive.scss')
  })

  it('emits the base hidden state', () => {
    expect(css).toContain('.util_is-lgOnly { display: none;')
  })

  it('emits the lg (min-width: 1024px) media rule that was previously missing', () => {
    expect(css).toMatch(
      /@media screen and \(min-width: 1024px\) \{ \.util_is-lgOnly \{ display: block;/
    )
  })

  it('emits the --inline variant media rule as inline-block', () => {
    expect(css).toMatch(
      /@media screen and \(min-width: 1024px\) \{ \.util_is-lgOnly--inline \{ display: inline-block;/
    )
  })

  it('resolves the lg breakpoint from the correct grid token (no stale $ds-breakpoint-lg)', () => {
    // The corrected token compiles to 1024px; the old token would not resolve.
    expect(css).toContain('min-width: 1024px')
  })
})

describe('utilityClasses/fontStyles — .util_fontWeightDefault (799c24b)', () => {
  // Bug: the declaration was written `var(--$ds-text-body-default-weight)` — a
  // `$`-prefixed name. Sass interpolates the variable's VALUE into the custom-
  // property name, so it compiled to the malformed `var(-- 500)` (a property
  // named `-- 500`) rather than a real reference. Fix uses the literal
  // `var(--ds-text-body-default-weight, $ds-text-body-default-weight)` — a valid
  // custom property with a Sass fallback.
  let css
  beforeAll(() => {
    css = compileCss('src/utilityClasses/_fontStyles.scss')
  })

  it('emits a valid custom property with a token fallback', () => {
    expect(css).toContain(
      '.util_fontWeightDefault { font-weight: var(--ds-text-body-default-weight, 500);'
    )
  })

  it('never emits the malformed custom-property name from the interpolated $-variable', () => {
    // The old bug produced `var(-- 500)`; guard against any `var(--` immediately
    // followed by whitespace or a digit (i.e. an interpolated value, not a name).
    expect(css).not.toMatch(/var\(--\s*\d/)
  })
})
