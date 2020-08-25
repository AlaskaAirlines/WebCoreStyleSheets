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

       NOTE: Review deprecation alerts in the
     README file. Next Major release coming soon.

                You have been warned!

                `) +  chalk.hex('#00cff0').bold.underline(`https://git.io/JvqIV`) + chalk.hex('#f26135')(`

╰─────────────────────────────── ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─╯
`)
);
