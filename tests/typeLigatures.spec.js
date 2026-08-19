const path = require('path')
const sass = require('sass')

// Regression coverage for AB#1608258 ("Disable font ligatures across all
// typography classes and themes"). Alaska Air Group brand guidelines prohibit
// ligatures across every brand typeface, so `generate-body-classes`
// (src/type/partials/_body.scss) and `generate-fluid-type-classes`
// (src/type/mixins/_fluid-type.scss) must emit `font-variant-ligatures: none`
// on every generated class — `.body-*`, `.display-*`, `.heading-*`, `.accent-*`.
//
// Both mixins run through theme configs, so we compile the real class generators
// (which invoke them with production configs) and assert on the emitted CSS.
// Compiling the actual generators — for both the CSS-variable and the Alaska
// static-fallback branches of the mixins — is what makes these true regression
// guards: dropping the declaration from either mixin fails here.

const loadPaths = [path.resolve(process.cwd(), 'node_modules'), process.cwd()]

/** Compile a partial standalone and return its CSS with runs of whitespace
 *  collapsed, so assertions are independent of Sass's formatting. */
function compileCss(relPath) {
  const { css } = sass.compile(path.resolve(process.cwd(), relPath), { loadPaths })
  return css.replace(/\s+/g, ' ').trim()
}

const FAMILIES = ['body', 'display', 'heading', 'accent']

const GENERATORS = {
  'modern typography classes (CSS-variable branch)':
    'src/type/mixins/_type-classes-generator.scss',
  'Alaska static-fallback classes': 'src/type/mixins/_type-classes-alaska-generator.scss',
}

describe.each(Object.entries(GENERATORS))(
  'font-variant-ligatures — %s (AB#1608258)',
  (_label, relPath) => {
    let css
    beforeAll(() => {
      css = compileCss(relPath)
    })

    it.each(FAMILIES)('emits font-variant-ligatures: none on every .%s-* class', (family) => {
      // Match each generated class selector for the family and confirm it opens
      // with the ligature-suppression declaration.
      const selector = new RegExp(`\\.${family}-[a-z0-9-]+ \\{ font-variant-ligatures: none;`, 'g')
      const matches = css.match(selector) || []
      expect(matches.length).toBeGreaterThan(0)
    })

    it('never emits a ligature-enabling value', () => {
      expect(css).not.toMatch(/font-variant-ligatures:\s*(common-ligatures|normal)\b/)
    })
  }
)
