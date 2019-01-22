# How to use Orion Web Fonts

All Orion's web fonts are to be used directly from this npm package, not copied to the individual project. Copying files directly to an individual project would violate use compliance and the maintainers of this resource will not be responsible for any issues that may arise.

When using these web fonts, be sure to add this Sass reference of the `@font-face` rules to your `global.scss` file.

```sass
@import "@alaskaair/orion-web-core-style-sheets/fonts";
```

## Include in Webpack pipeline

When using Webpack there are a few different ways that these files can be referenced. The end goal is that the resource files need to be referenced for local development and packaged for production builds. See the following scenarios for instructions.

**NOTE:** Again, please **DO NOT** manually copy these files to your local project and add to version control. It is important that these font files are referenced from the npm package for proper version control and distribution.

### With full access to Webpack

When using the `public` directory as a dev/build resource of assets, it is suggested that you use the `copy-webpack-plugin` plugin. To install in your project, run the following code:

```
$ npm i -D copy-webpack-plugin
```

In your `webpack.config.js` file at the following dependency:

```
const copyWebpackPlugin = require("copy-webpack-plugin");
```

Within the plugins section of the webpack.config.js file, at the following reference:

```
plugins: [
  // This plugin will copy resources from the npm package and use them within
  // the accessible asset directories in the app
  new copyWebpackPlugin([
    {
      from: "./node_modules/@alaskaair/orion-web-core-style-sheets/fonts",
      to: "./assets/fonts",
      toType: "dir"
    }
  ]),
],
```

### Without Webpack (no-ejection Create-React-App)

No need to eject webpack! Simply add configuration to package.json

```
"scripts": {
  "sass": "node-sass --include-path scss src -o src/css"
}
```

## Include in Gulp pipeline

more to come ...

## Need more help?

If you require additional development assistance in order to consume these fonts, please reach out to the `E-comm XD&R` Teams team.
