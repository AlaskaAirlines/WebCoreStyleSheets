'use strict';

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const pjson = require('../package.json');

// Raw ANSI truecolor escapes replace chalk so this install-time script ships
// no runtime dependency (chalk.hex('#f26135') / chalk.hex('#ffd200').bold).
const RESET = '\x1b[0m';
const orange = (text) => `\x1b[38;2;242;97;53m${text}${RESET}`;
const yellowBold = (text) => `\x1b[1m\x1b[38;2;255;210;0m${text}${RESET}`;

console.log(orange(`
 _______                   __           __ __
|     __|.---.-.--.--.    |  |--.-----.|  |  |.-----.
|__     ||  _  |  |  |    |     |  -__||  |  ||  _  |
|_______||___._|___  |    |__|__|_____||__|__||_____|
               |_____|
 __              _______                    __
|  |_.-----.    |   _   |.--.--.----.-----.|  |
|   _|  _  |    |       ||  |  |   _|  _  ||__|
|____|_____|    |___|___||_____|__| |_____||__|
`)
+
orange(`
╭ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ──────────────────────────────╮

       Thanks for installing the latest version
               of `) + yellowBold(`WC Stylesheets v${pjson.version}.`) + orange(`

            Requires Design Tokens ${pjson.dependencies["@aurodesignsystem/design-tokens"]}
      npm i @aurodesignsystem/design-tokens@latest

╰─────────────────────────────── ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─╯
`));
