# Shorthand Border Radius

<a href="https://github.com/postcss/postcss"><img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="80" height="80" align="right"></a>

[![NPM Version][npm-img]][npm] [![Build Status][ci-img]][ci]

[Shorthand Border Radius] lets you use the shorthand `border-top-radius`, `border-right-radius`, `border-bottom-radius`, and `border-left-radius` properties in CSS, following the [1-to-2 syntax].


```css
/* before */

.border-top {
	border-top-radius: 10px;
}

.border-top-right {
	border-top-radius: * 5px;
}

/* after */

.border-top {
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
}

.border-top-right {
	border-top-right-radius: 5px;
}
```

## Usage

Add [Shorthand Border Radius] to your build tool:

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

Load [Shorthand Border Radius] as a PostCSS plugin:

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

Enable [Shorthand Border Radius] within your Gulpfile:

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

Enable [Shorthand Border Radius] within your Gruntfile:

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

## Options

#### `prefix`

Type: `String`  
Default: `null`

Specifies a prefix to be surrounded by dashes before the declaration (e.g. `-x-border-top-radius`).

[ci]:      https://travis-ci.org/jonathantneal/postcss-short-border-radius
[ci-img]:  https://img.shields.io/travis/jonathantneal/postcss-short-border-radius.svg
[npm]:     https://www.npmjs.com/package/postcss-short-border-radius
[npm-img]: https://img.shields.io/npm/v/postcss-short-border-radius.svg

[Gulp PostCSS]:  https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]:       https://github.com/postcss/postcss

[1-to-2 syntax]: https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#Tricky_edge_cases

[Shorthand Border Radius]: https://github.com/jonathantneal/postcss-short-border-radius
