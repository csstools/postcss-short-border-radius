# Installing PostCSS Short Border Radius

[PostCSS Short Border Radius] runs in all Node environments, with special instructions for:

| [Node](#node) | [PostCSS CLI](#postcss-cli) | [Webpack](#webpack) | [Create React App](#create-react-app) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- | --- |

## Node

Add [PostCSS Short Border Radius] to your project:

```bash
npm install postcss-short-border-radius --save-dev
```

Use [PostCSS Short Border Radius] to process your CSS:

```js
const postcssShortBorderRadius = require('postcss-short-border-radius');

postcssShortBorderRadius.process(YOUR_CSS /*, processOptions, pluginOptions */);
```

Or use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssShortBorderRadius = require('postcss-short-border-radius');

postcss([
  postcssShortBorderRadius(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

## PostCSS CLI

Add [PostCSS CLI] to your project:

```bash
npm install postcss-cli --save-dev
```

Use [PostCSS Short Border Radius] in your `postcss.config.js` configuration file:

```js
const postcssShortBorderRadius = require('postcss-short-border-radius');

module.exports = {
  plugins: [
    postcssShortBorderRadius(/* pluginOptions */)
  ]
}
```

## Webpack

Add [PostCSS Loader] to your project:

```bash
npm install postcss-loader --save-dev
```

Use [PostCSS Short Border Radius] in your Webpack configuration:

```js
const postcssShortBorderRadius = require('postcss-short-border-radius');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: {
            ident: 'postcss',
            plugins: () => [
              postcssShortBorderRadius(/* pluginOptions */)
            ]
          } }
        ]
      }
    ]
  }
}
```

## Create React App

Add [React App Rewired] and [React App Rewire PostCSS] to your project:

```bash
npm install react-app-rewired react-app-rewire-postcss --save-dev
```

Use [React App Rewire PostCSS] and [PostCSS Short Border Radius] in your
`config-overrides.js` file:

```js
const reactAppRewirePostcss = require('react-app-rewire-postcss');
const postcssShortBorderRadius = require('postcss-short-border-radius');

module.exports = config => reactAppRewirePostcss(config, {
  plugins: () => [
    postcssShortBorderRadius(/* pluginOptions */)
  ]
});
```

## Gulp

Add [Gulp PostCSS] to your project:

```bash
npm install gulp-postcss --save-dev
```

Use [PostCSS Short Border Radius] in your Gulpfile:

```js
const postcss = require('gulp-postcss');
const postcssShortBorderRadius = require('postcss-short-border-radius');

gulp.task('css', () => gulp.src('./src/*.css').pipe(
  postcss([
    postcssShortBorderRadius(/* pluginOptions */)
  ])
).pipe(
  gulp.dest('.')
));
```

## Grunt

Add [Grunt PostCSS] to your project:

```bash
npm install grunt-postcss --save-dev
```

Use [PostCSS Short Border Radius] in your Gruntfile:

```js
const postcssShortBorderRadius = require('postcss-short-border-radius');

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
  postcss: {
    options: {
      use: [
       postcssShortBorderRadius(/* pluginOptions */)
      ]
    },
    dist: {
      src: '*.css'
    }
  }
});
```

[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS CLI]: https://github.com/postcss/postcss-cli
[PostCSS Loader]: https://github.com/postcss/postcss-loader
[PostCSS Short Border Radius]: https://github.com/jonathantneal/postcss-short-border-radius
[React App Rewire PostCSS]: https://github.com/csstools/react-app-rewire-postcss
[React App Rewired]: https://github.com/timarney/react-app-rewired
