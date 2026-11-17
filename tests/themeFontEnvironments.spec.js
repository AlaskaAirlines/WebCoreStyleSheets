const fs = require('fs')
const path = require('path')
const sass = require('sass')

// Post-build guard for AB#1683083 ("Add test and QA environment suffixes to font
// file URLs and verify theme CSS builds match").
//
// `npm run build` writes each standard theme once per font environment:
//   dist/bundled/themes/<theme>.global(.min).css        production, unsuffixed font URLs
//   dist/bundled/themes/<theme>-<env>.global(.min).css  font URLs suffixed `-<env>`
//
// What is tested in test/QA must match what ships in production, so the only
// permitted difference between a production file and its environment twin is
// the font file name (EN brand fonts and Japanese/Korean Noto Sans fonts). This
// suite strips the environment suffix from each environment file's font URLs and
// asserts the rest is byte-identical to production.
//
// dist/ is committed and CI verifies it matches a fresh build, so this runs
// against the real build output in both `npm test` and the CI Test job.

const THEMES_DIR = path.resolve(process.cwd(), 'dist/bundled/themes')

// Keep in sync with FONT_ENVIRONMENTS (scripts/theme.global.css.config.mjs) and
// $font-envs (src/utilityVariables/_fontUtils.scss).
const FONT_ENVIRONMENTS = ['test', 'qa']

// Font URLs emitted by the font-face (EN, /en-us/) and font-face-i18n (Japanese
// /ja-jp/, Korean /ko-kr/) mixins. Every one must be environment-suffixed.
const FONT_URL = /\/[a-z]{2}-[a-z]{2}\/assets\/font\/[^"')\s]+\.woff2/g

/** Font URLs whose file name ends in `-<env>.woff2`. */
function envSuffixedUrl(env) {
  return new RegExp(`(/[a-z]{2}-[a-z]{2}/assets/font/[^"')\\s]+)-${env}\\.woff2`, 'g')
}

const ENV_FILE = new RegExp(`-(${FONT_ENVIRONMENTS.join('|')})\\.global\\.`)

const allThemeFiles = fs
  .readdirSync(THEMES_DIR)
  .filter((file) => file.endsWith('.global.css') || file.endsWith('.global.min.css'))
  .sort()

const productionFiles = allThemeFiles.filter((file) => !ENV_FILE.test(file))

/** `alaska.global.min.css` → `alaska-test.global.min.css` */
const envFileName = (file, env) => file.replace('.global.', `-${env}.global.`)

const read = (file) => fs.readFileSync(path.join(THEMES_DIR, file), 'utf8')

describe('theme font environment builds (AB#1683083)', () => {
  it('builds production theme stylesheets', () => {
    expect(productionFiles.length).toBeGreaterThan(0)
  })

  it('outputs only production stylesheets and their environment twins', () => {
    const expected = productionFiles
      .flatMap((file) => [file, ...FONT_ENVIRONMENTS.map((env) => envFileName(file, env))])
      .sort()

    expect(allThemeFiles).toEqual(expected)
  })

  it('outputs no environment subdirectories', () => {
    const dirs = fs.readdirSync(THEMES_DIR, { withFileTypes: true }).filter((entry) => entry.isDirectory())
    expect(dirs).toEqual([])
  })

  describe.each(FONT_ENVIRONMENTS)('%s environment', (env) => {
    it('has a twin for every production theme stylesheet (expanded and minified)', () => {
      productionFiles.forEach((file) => {
        expect(fs.existsSync(path.join(THEMES_DIR, envFileName(file, env)))).toBe(true)
      })
    })

    describe.each(productionFiles)('%s', (file) => {
      let production
      let environment

      beforeAll(() => {
        production = read(file)
        environment = read(envFileName(file, env))
      })

      it('production loads only unsuffixed font URLs', () => {
        const urls = production.match(FONT_URL) || []
        expect(urls.some((url) => url.includes('/en-us/'))).toBe(true)
        expect(urls.some((url) => url.includes('/ja-jp/'))).toBe(true)
        expect(urls.some((url) => url.includes('/ko-kr/'))).toBe(true)
        FONT_ENVIRONMENTS.forEach((name) => {
          urls.forEach((url) => expect(url).not.toMatch(new RegExp(`-${name}\\.woff2$`)))
        })
      })

      it(`suffixes every font URL (EN, Japanese, Korean) with -${env}`, () => {
        const productionUrls = production.match(FONT_URL) || []
        const suffixedUrls = environment.match(envSuffixedUrl(env)) || []
        const allUrls = environment.match(FONT_URL) || []

        expect(suffixedUrls.length).toBe(productionUrls.length)
        expect(allUrls.length).toBe(suffixedUrls.length)
      })

      it('is identical to production apart from the font file URL', () => {
        const normalized = environment.replace(envSuffixedUrl(env), '$1.woff2')
        expect(normalized).toBe(production)
      })
    })
  })
})

describe('font-face $font-env setting (AB#1683083)', () => {
  const loadPaths = [path.resolve(process.cwd(), 'node_modules'), process.cwd()]

  const compile = (source) =>
    sass.compileString(source, { loadPaths, url: new URL(`file://${process.cwd()}/tests/inline.scss`) }).css

  it('applies the configured environment as the mixin default', () => {
    const css = compile(`
      @use "../src/utilityVariables/fontUtils" with ($font-env: "qa");
      @use "../src/utilityMixins/fontFace";
      @include fontFace.font-face("AS Circular", 300, "ASCircularWeb-Light");
    `)
    expect(css).toContain('/ASCircularWeb-Light-qa.woff2')
  })

  it('applies the configured environment to font-face-i18n', () => {
    const css = compile(`
      @use "../src/utilityVariables/fontUtils" with ($font-env: "test");
      @use "../src/utilityMixins/fontFaceI18n";
      @include fontFaceI18n.font-face-i18n("AS Circular", 300, fontUtils.$i18n-font-kr-300-path, fontUtils.$unicode-range-kr);
    `)
    expect(css).toContain('/ko-kr/assets/font/noto-sans-kr-v38-korean-300-test.woff2')
  })

  it('lets an explicit $env override the configured environment', () => {
    const css = compile(`
      @use "../src/utilityVariables/fontUtils" with ($font-env: "qa");
      @use "../src/utilityMixins/fontFace";
      @include fontFace.font-face("AS Circular", 300, "ASCircularWeb-Light", $env: null);
    `)
    expect(css).toContain('/ASCircularWeb-Light.woff2')
  })

  it('rejects an unsupported environment in font-face-i18n', () => {
    expect(() =>
      compile(`
        @use "../src/utilityMixins/fontFaceI18n";
        @include fontFaceI18n.font-face-i18n("AS Circular", 300, "noto", U+3000-303F, $env: "staging");
      `)
    ).toThrow(/Unsupported font environment `staging`/)
  })

  it('rejects an unsupported environment', () => {
    expect(() =>
      compile(`
        @use "../src/utilityMixins/fontFace";
        @include fontFace.font-face("AS Circular", 300, "ASCircularWeb-Light", $env: "prod");
      `)
    ).toThrow(/Unsupported font environment `prod`/)
  })
})
