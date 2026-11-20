#!/usr/bin/env node

/**
 * Verify Font URLs (AB#1683083)
 *
 * Requests every font URL found in the built theme bundles and fails if any is
 * missing or misconfigured. Run it after uploading fonts to the test/QA folder
 * (staging) and again after promoting them to production. It makes network
 * requests, so it is intentionally not part of `npm test` or CI.
 *
 *   npm run verify:fonts            staging bundles (<theme>-stg.global.css)
 *   npm run verify:fonts -- --prod  production bundles (<theme>.global.css)
 *
 * Each URL must return 200, a font content type, and an
 * access-control-allow-origin header.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { STAGING_SUFFIX } from './theme.global.css.config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const themesDir = path.join(__dirname, '../dist/bundled/themes');

const production = process.argv.includes('--prod');
const FONT_URL = /https:\/\/[^"')\s/]+\/[a-z]{2}-[a-z]{2}\/assets\/font\/[^"')\s]+\.woff2/g;
const FONT_TYPE = /font|woff|octet-stream/i;
const ORIGIN = 'https://www.alaskaair.com';
const CONCURRENCY = 8;

const files = fs.readdirSync(themesDir)
  .filter(file => file.endsWith('.global.min.css'))
  .filter(file => file.includes(`${STAGING_SUFFIX}.`) !== production);

if (files.length === 0) {
  console.error(`No ${production ? 'production' : 'staging'} bundles found in dist/bundled/themes. Run npm run build:theme-css first.`);
  process.exit(1);
}

// url -> bundles that load it
const urls = new Map();
for (const file of files) {
  const css = fs.readFileSync(path.join(themesDir, file), 'utf8');
  for (const url of new Set(css.match(FONT_URL) || [])) {
    urls.set(url, [...(urls.get(url) || []), file]);
  }
}

async function check(url) {
  const problems = [];
  try {
    const res = await fetch(url, { method: 'HEAD', headers: { Origin: ORIGIN }, redirect: 'follow' });
    const type = res.headers.get('content-type') || '';
    if (res.status !== 200) problems.push(`status ${res.status}`);
    else {
      if (!FONT_TYPE.test(type)) problems.push(`content-type "${type}" is not a font`);
      if (!res.headers.get('access-control-allow-origin')) problems.push('missing access-control-allow-origin');
    }
  } catch (error) {
    problems.push(`request failed: ${error.cause?.code || error.message}`);
  }
  return { url, problems };
}

const queue = [...urls.keys()];
const results = [];
await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
  while (queue.length) results.push(await check(queue.shift()));
}));

const failures = results.filter(result => result.problems.length);
console.log(`Checked ${results.length} unique font URLs from ${files.length} ${production ? 'production' : 'staging'} bundles.`);
for (const { url, problems } of failures) {
  console.error(`FAIL ${url}\n     ${problems.join('; ')}\n     used by: ${urls.get(url).join(', ')}`);
}
if (failures.length) {
  console.error(`${failures.length} of ${results.length} font URLs failed.`);
  process.exit(1);
}
console.log('All font URLs returned 200 with a font content type and CORS header.');
