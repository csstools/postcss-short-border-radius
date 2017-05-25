# Border Radius Shorthand [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Windows Build Status][win-img]][win-url]
[![Gitter Chat][git-img]][git-url]

[Border Radius Shorthand] lets you use `border-top-radius`, `border-right-radius`, `border-bottom-radius`, and `border-left-radius` properties in CSS, following the [1-to-2 syntax].


```css
/* before */

.example-1 {
  border-top-radius: 10px;
}

.example-2 {
  border-top-radius: 10px 5px;
}

/* after */

.example-1 {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.example-2 {
  border-top-left-radius: 10px;
  border-top-right-radius: 5px;
}
```

## Options

#### `prefix`

Type: `String`  
Default: `""`

Adds an optional prefix to the `size` property (e.g. `"x"` for `-x-size`). Wrapping dashes (`-`) are automatically applied.

#### `skip`

Type: `String`  
Default: `"*"`

Specifies the skip token used to ignore a length.

## Usage

Add [Border Radius Shorthand] to your build tool:

```bash
npm install postcss-short-border-radius --save-dev
```

#### Node

```js
require('postcss-short-border-radius').process(YOUR_CSS, { /* options */ });
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Load [Border Radius Shorthand] as a PostCSS plugin:

```js
postcss([
  require('postcss-short-border-radius')({ /* options */ })
]).process(YOUR_CSS, /* options */);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Enable [Border Radius Shorthand] within your Gulpfile:

```js
var postcss = require('gulp-postcss');

gulp.task('css', function () {
  return gulp.src('./src/*.css').pipe(
    postcss([
      require('postcss-short-border-radius')({ /* options */ })
    ])
  ).pipe(
    gulp.dest('.')
  );
});
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Enable [Border Radius Shorthand] within your Gruntfile:

```js
grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
  postcss: {
    options: {
      use: [
        require('postcss-short-border-radius')({ /* options */ })
      ]
    },
    dist: {
      src: '*.css'
    }
  }
});
```

[npm-url]: https://www.npmjs.com/package/postcss-short-border-radius
[npm-img]: https://img.shields.io/npm/v/postcss-short-border-radius.svg
[cli-url]: https://travis-ci.org/jonathantneal/postcss-short-border-radius
[cli-img]: https://img.shields.io/travis/jonathantneal/postcss-short-border-radius.svg
[win-url]: https://ci.appveyor.com/project/jonathantneal/postcss-short-border-radius
[win-img]: https://img.shields.io/appveyor/ci/jonathantneal/postcss-short-border-radius.svg
[git-url]: https://gitter.im/postcss/postcss
[  git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[Border Radius Shorthand]: https://github.com/jonathantneal/postcss-short-border-radius
[1-to-2 syntax]: https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#Tricky_edge_cases
[PostCSS]: https://github.com/postcss/postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
