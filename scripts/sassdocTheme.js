const replace = require('replace-in-file');

const results = replace.sync({
  files: './docs/assets/css/*.css',
  from: [
    /5c4863/g,
    /dd5a6f/g,
    /c00/g,
    `:not(pre)>code{color:#0074c8;white-space:nowrap;font-weight:normal}`,
    `transition:0.15s;text-decoration:none;`,
    `item__name{color:#0074c8}`,
    `.sidebar__title`
  ],
  to: [
    '222222',
    '0074c8',
    'df0b37',
    ':not(pre)>code{color:#b82b47;white-space:nowrap;font-weight:normal;font-size:1.25rem}',
    'transition:0.15s;text-decoration:underline;',
    'item__name{color:#0074c8;text-decoration:none}',
    '[href*="https://"]::after{content:" (external link)";font-size:0.75rem}.sidebar__title'
  ],
});

console.log(results);
