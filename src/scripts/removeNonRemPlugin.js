const postcss = require('postcss');

const customPropertyRegExp = /^--[A-z][\w-]*$/;
// Remove all declarations that do not contain rems
module.exports = postcss.plugin('remove-non-rem', function (opts) {
    opts = opts || {};

    return function (css) {
        css.walkDecls(decl => {
            if (!decl.value.includes('rem') || customPropertyRegExp.test(decl.prop)) {
                decl.remove();
            }
        });

        css.walkRules(rule => {
            if (rule.nodes.length == 0) {
                rule.remove();
            }
        });

        css.walkAtRules(rule => {
            if (rule.nodes.length == 0) {
                rule.remove();
            }
        });

        css.wa
    };
});
