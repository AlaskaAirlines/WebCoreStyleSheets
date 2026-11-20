const fs = require('fs')
const path = require('path')

// Post-build guard for AB#1683083 (test fonts via a separate Fastly staging map).
//
// `npm run build` writes each standard theme twice:
//   dist/bundled/themes/<theme>.global(.min).css      fonts from resource.alaskaair.net
//   dist/bundled/themes/<theme>-stg.global(.min).css  fonts from test.alaskaair.com
//
// Font file names and paths are identical on both hosts, so the only permitted
// difference between a staging bundle and its production twin is the host.
// dist/ is committed and CI verifies it matches a fresh build, so this runs
// against the real build output.

const THEMES_DIR = path.resolve(process.cwd(), 'dist/bundled/themes')
const PRODUCTION_HOST = 'https://resource.alaskaair.net'
const STAGING_HOST = 'https://test.alaskaair.com'
const THEMES = ['alaska', 'alaska-classic', 'atmos', 'hawaiian']
const EXTENSIONS = ['.global.css', '.global.min.css']

const FONT_URL = /https:\/\/[^"')\s/]+\/[a-z]{2}-[a-z]{2}\/assets\/font\/[^"')\s]+/g
const read = (file) => fs.readFileSync(path.join(THEMES_DIR, file), 'utf8')

const pairs = THEMES.flatMap((theme) =>
  EXTENSIONS.map((ext) => [`${theme}${ext}`, `${theme}-stg${ext}`])
)

describe('staging theme bundles (AB#1683083)', () => {
  it('holds only the expected theme files', () => {
    const expected = THEMES.flatMap((theme) =>
      EXTENSIONS.flatMap((ext) => [`${theme}${ext}`, `${theme}-stg${ext}`])
    ).sort()
    expect(fs.readdirSync(THEMES_DIR).sort()).toEqual(expected)
  })

  describe.each(pairs)('%s / %s', (productionFile, stagingFile) => {
    let production
    let staging

    beforeAll(() => {
      production = read(productionFile)
      staging = read(stagingFile)
    })

    it('production loads every font from the production host', () => {
      const urls = production.match(FONT_URL) || []
      expect(urls.length).toBeGreaterThan(0)
      urls.forEach((url) => expect(url.startsWith(`${PRODUCTION_HOST}/`)).toBe(true))
    })

    it('staging loads every font from the staging host', () => {
      const urls = staging.match(FONT_URL) || []
      expect(urls.length).toBe((production.match(FONT_URL) || []).length)
      urls.forEach((url) => expect(url.startsWith(`${STAGING_HOST}/`)).toBe(true))
    })

    it('staging is identical to production apart from the host', () => {
      expect(staging.replaceAll(STAGING_HOST, PRODUCTION_HOST)).toBe(production)
    })

    it('no font file name carries an environment suffix', () => {
      const urls = [...(production.match(FONT_URL) || []), ...(staging.match(FONT_URL) || [])]
      urls.forEach((url) => expect(url).not.toMatch(/-(test|qa|stg)\.woff2$/))
    })
  })
})
