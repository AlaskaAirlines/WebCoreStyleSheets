'use strict';

const chalk = require('chalk');
const pjson = require('../package.json');

console.log(chalk.hex('#f26135')(`
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
chalk.hex('#f26135')(`
╭ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ──────────────────────────────╮

       Thanks for installing the latest version
               of `) + chalk.hex('#ffd200').bold(`WC Stylesheets v${pjson.version}.`) + chalk.hex('#f26135')(`

            Requires Design Tokens ${pjson.peerDependencies["@alaskaairux/design-tokens"]}
         npm i @alaskaairux/design-tokens@latest

╰─────────────────────────────── ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─╯
`) + chalk.hex('#ffd200').bold(`
Any references to ASCircularWeb-Book, ASCircularWeb-Medium,
or ASCircularWeb-Light would be considered redundant and
you should remove those legacy references.

Any references to ASCircularWeb-Bold or any other
ASCircularWeb- style font family is not supported
and these references are considered fully deprecated.
`)
);
