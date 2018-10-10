# PostCSS Short Border Radius [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[PostCSS Short Border Radius] lets you use `border-top-radius`,
`border-right-radius`, `border-bottom-radius`, and `border-left-radius`
properties in CSS, following the [1-to-2 syntax].

```pcss
.example-1 {
  border-top-radius: 10px;
}

.example-2 {
  border-top-radius: 10px 5px;
}

/* becomes */

.example-1 {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.example-2 {
  border-top-left-radius: 10px;
  border-top-right-radius: 5px;
}
```

## Usage

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

[PostCSS Short Border Radius] runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [PostCSS CLI](INSTALL.md#postcss-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- | --- |

## Options

#### prefix

The `prefix` option defines a prefix required by properties being transformed.
Wrapping dashes are automatically applied, so that `x` would transform
`-x-border-top-radius`.

```js
postcssShortBorderRadius({ prefix: 'x' });
```

```pcss
.example-1 {
  -x-border-top-radius: 10px;
}

/* becomes */

.example-1 {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
```

#### skip

The `skip` option defines the skip token used to ignore portions of the
shorthand.

```js
postcssShortBorderRadius({ skip: '-' });
```

```pcss
.example-1 {
  -x-border-top-radius: - 10px;
}

/* becomes */

.example-1 {
  border-top-right-radius: 10px;
}
```

[cli-img]: https://img.shields.io/travis/jonathantneal/postcss-short-border-radius.svg
[cli-url]: https://travis-ci.org/jonathantneal/postcss-short-border-radius
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/postcss-short-border-radius.svg
[npm-url]: https://www.npmjs.com/package/postcss-short-border-radius

[1-to-2 syntax]: https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#Tricky_edge_cases
[PostCSS]: https://github.com/postcss/postcss
[PostCSS Short Border Radius]: https://github.com/jonathantneal/postcss-short-border-radius
