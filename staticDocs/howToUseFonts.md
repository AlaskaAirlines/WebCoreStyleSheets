# How to use Orion Web Fonts

All Orion's web fonts are to be used directly from this npm package, not manually copied to the individual project. Copying files directly to an individual project would violate use compliance and the maintainers of this resource will not be responsible for any issues that may arise.

When using these web fonts, be sure to add this Sass reference of the `@font-face` rules to your `global.scss` file.

```sass
@import "@alaskaairux/orion-web-core-style-sheets/dist/fonts";
```

## Include in Webpack pipeline

Webpack offers a few different solutions to make using web fonts easy.

**NOTE:** Again, please **DO NOT** manually copy these files to your local project and add to version control. It is important that these font files are referenced from the npm package for proper versioning and distribution.

### This all depends ...

When using this npm resource, the need to copy the `fonts/` dir to your local `./src` directory all depends on your personal setup. In many cases, the copying of font files to the local `./src` directory will make things easer. In other configurations, (namely the current release of create-react-app), the React setup will be able to read resources directly from the npm and not require these resources to be in the local `./src` dir.

#### Fonts from CDN

The issues with font copying and location resource location will be resolved once all the fonts are located in a CDN. Work that is slotted in the near future.

#### The fonts location Token

In the fonts Sass file, there is a variable reference defined by this [Design Token](https://github.com/AlaskaAirlines/OrionDesignTokens/blob/master/src/asset/font.json#L6). If at any time you need to over-ride this location Token, usign something like the following will allow you to do so:

```scss
$asset-font-circular-dir: 'fonts/';
@import "~@alaskaairux/orion-web-core-style-sheets/dist/fonts";
```

Doing this, the Token value of `../fonts/` will be updated to `fonts/` prior to the loading of the `fonts.scss` file.

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
