# eslint-config-gnostix

English | [简体中文](./README-ZH-CN.MD)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [*Gnostix* Version of *Google* JavaScript Style *Guide*](https://dev.gnostix.app/styleguide/jsguide.html), or simply put, 'G3'

***If you are developing plugins or contributing code for gnostix or its related software, you should ensure that the code meets the requirements of the original content of this Style Guide.***

## Installation

```bash
npm install --save-dev eslint eslint-config-gnostix
```

## Usage

Once the `eslint-config-gnostix` package is installed, you can use it by importing then export it in your [`eslint.config.js` file](https://eslint.org/docs/latest/use/configure/configuration-files-new), nice any easy:

```js
import config from "eslint-config-gnostix";
export default config
```

If you want to add more into it (not recommended if you are developing for Gnostix), you can use [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax):

```js
import gnostix from "eslint-config-gnostix";
export default [
  ...gnostix,
  // Some Other Config to extend or overwrite gnostix syntax
]
```

### Components of eslint-config-gnostix

`eslint-config-gnostix` is the sum of:

+ `eslint:recommended`
+ `plugin:jsdoc/recommended`
+ `eslint-config-google`
+ Enforced `ECMAScript2022` and `ESModule`
+ Some Other Minor Features
