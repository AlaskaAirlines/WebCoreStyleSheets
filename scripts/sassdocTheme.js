const replace = require('replace-in-file');

const results = replace.sync({
  files: './docs/assets/css/*.css',
  from: [/5c4863/g, /dd5a6f/g],
  to: ['222222', '0074c8'],
});

console.log(results);
