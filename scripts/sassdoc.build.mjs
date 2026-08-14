#!/usr/bin/env node

/**
 * Build SassDoc Documentation
 *
 * Runs SassDoc against ./src and outputs to ./docs. SassDoc cleans the entire
 * destination directory on each run, which would otherwise remove hand-authored
 * content such as the docs/post-mortem write-ups. This wrapper preserves those
 * directories across the regeneration:
 *
 * 1. Moves the protected directories out of ./docs to a temp location
 * 2. Runs SassDoc (which wipes and rebuilds ./docs)
 * 3. Restores the protected directories back into ./docs
 */

import fs from 'fs';
import os from 'os';
import path from 'path';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, '..');
const docsDir = path.join(rootDir, 'docs');
const binDir = path.join(rootDir, 'node_modules', '.bin');

// Directories inside ./docs that SassDoc must not remove.
const protectedDirs = ['post-mortem'];

// Move protected directories to a temp holding area so SassDoc can't delete them.
const backupDir = fs.mkdtempSync(path.join(os.tmpdir(), 'wcss-docs-'));
const preserved = [];

for (const name of protectedDirs) {
  const source = path.join(docsDir, name);
  if (fs.existsSync(source)) {
    const backup = path.join(backupDir, name);
    fs.cpSync(source, backup, { recursive: true });
    preserved.push(name);
  }
}

try {
  // Run SassDoc via its local bin (works on Windows via .cmd shim).
  const isWindows = process.platform === 'win32';
  const sassdocBin = path.join(binDir, isWindows ? 'sassdoc.cmd' : 'sassdoc');
  execFileSync(sassdocBin, ['./src', '-d', './docs'], {
    cwd: rootDir,
    stdio: 'inherit',
    shell: isWindows
  });
} finally {
  // Restore preserved directories regardless of SassDoc's outcome.
  for (const name of preserved) {
    const backup = path.join(backupDir, name);
    const destination = path.join(docsDir, name);
    fs.cpSync(backup, destination, { recursive: true });
  }
  fs.rmSync(backupDir, { recursive: true, force: true });
}
