# How to use Orion Web Fonts

All Orion's web fonts are to be used directly from this npm package, not copied to the individual project. Copying files directly to an individual project would violate use compliance and the maintainers of this resource will not be responsible for any issues that may arise.

When using these web fonts, be sure to add this Sass reference of the `@font-face` rules to your `global.scss` file.

```sass
@import "@alaskaairux/orion-web-core-style-sheets/dist/fonts";
```

## Include in Webpack pipeline

Webpack offers a few different solutions to make using web fonts easy.

**NOTE:** Again, please **DO NOT** manually copy these files to your local project and add to version control. It is important that these font files are referenced from the npm package for proper versioning and distribution.

### With full access to Webpack

If using the `public` directory as a dev/build resource of assets, it is suggested that you use the `copy-webpack-plugin` plugin. 

To install:

```
$ npm i -D copy-webpack-plugin
```

In `webpack.config.js` file add the following dependency:

```
const copyWebpackPlugin = require("copy-webpack-plugin");
```

Within the plugins section of the webpack.config.js file, add the following reference:

```
plugins: [
  // This plugin will copy resources from the npm package and use them within
  // the accessible asset directories in the app
  new copyWebpackPlugin([
    {
      from: "./node_modules/@alaskaair/orion-web-core-style-sheets/fonts",
      to: "./src/fonts",
      toType: "dir"
    }
  ]),
],
```

### Without direct to Webpack

If the project is using a `build.js` process and have not ejected your Webpack configurations, please add the following to the project's `package.json` file:

```js
$ npm i copyfiles -D
```

```
"scripts": {
  "copyfiles": "copyfiles -f ./node_modules/@alaskaairux/orion-web-core-style-sheets/dist/fonts/*.* ./src/fonts"
}
```

## CSS/Sass support 

Using Orion Design System fonts has a dependency on [Orion Design Tokens](https://www.npmjs.com/package/@alaskaairux/orion-design-tokens) and [Sass](https://sass-lang.com). Please see the [instal](https://github.com/AlaskaAirlines/OrionDesignTokens#install) instructions for any questions regarding Orion Design Tokens.

To install supporting Sass into your project add the following lines to the project's main Sass stylesheet:

```scss
@import "~@alaskaairux/orion-icons/dist/fonts";
@import "~@alaskaairux/orion-icons/dist/baseline";
```

## Need more help?

If you require additional development assistance in order to consume these fonts, please reach out to the `E-comm XD&R` Teams team.
