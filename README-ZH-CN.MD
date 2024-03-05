# eslint-config-gnostix

[English](./README.MD) | 简体中文

> [GnostixJS风格指南](https://dev.gnostix.app/styleguide/jsguide.html) (简称G3) 的 ESLint [共享配置](http://eslint.org/docs/developer-guide/shareable-configs.html)

***如果你在为Gnostix或其相关软件开发插件或贡献代码，你应确认你的代码符合这份风格指南的要求***

## 安装

```bash
npm install --save-dev eslint eslint-config-gnostix
```

## 使用

`eslint-config-gnostix`安装后，你可以通过简单地在你项目根目录的 [`eslint.config.js` 文件](https://eslint.org/docs/latest/use/configure/configuration-files-new) 中导入并导出此共享配置来启用 *GnostixJS风格指南* 的格式检查：

```js
// eslint.config.js
import config from "eslint-config-gnostix";
export default config
```

如果你想修改或覆盖部分内容（当你在为Gnostix开发时不建议这么做），你可以使用[展开语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax):

```js
// eslint.config.js
import gnostix from "eslint-config-gnostix";
export default [
  ...gnostix,
  // Some Other Config to extend or overwrite gnostix syntax
]
```

### eslint-config-gnostix 的组成

`eslint-config-gnostix` 由以下内容组成：

+ ESLint建议配置：`eslint:recommended`
+ JSDoc建议配置：`plugin:jsdoc/recommended`
+ 谷歌JS风格指南：`eslint-config-google`
+ 强制使用 `ECMAScript2022` 和 `ESModule` 开发
+ 少量细节调整
