# 📖 Vite 基本使用

#

> 现在浏览器已经支持 es module 语法，在使用的时候，只需要在 script 标签里加上 type=‘module’ 即可
>
> **Vite 不支持 CommonJS 语法(require)，需通过插件实现支持**📦
>
> Vite 利用浏览器对 es module 语法的支持，让浏览器去解析基本文件；✍️ 为什么还需要 Vite？
>
> 如 less、vue、ts 等文件浏览器是不支持的，当使用 es module 引入一个如 lodash 的工具时，浏览器把 lodash 所有依赖都加载(对浏览器发送请求是巨大的消耗)

🦫Webpack 依赖 express 服务器

🦈Vite1.x 依赖 Koa 服务器

🐐Vite2.x 依赖 Connect 服务器

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202207231816610.png)

## Vite 对 css 的支持

-   vite 可以直接支持 css 的处理，可以直接支持 css 预处理器(需要安装依赖)

`npm install less -D`

-   vite 直接支持 postcss 的转换(需要安装依赖)，**并且配置 `postcss.config.js` 的配置文件即可**

`npm install postcss postcss-preset-env -D`

```js
/* postcss.config.js */
module.exports = {
	plugins: [require('postcss-preset-env')],
};
```

## Vite 对 TypeScript 的支持

-   vite 对 TypeScript 默认原生支持(无需安装依赖)，直接使用 ESBuild 来完成编译

## Vite 对 vue 的支持

-   vite 对 vue 提供一级优先支持(需要安装依赖`vue@next`，**并且配置 `vite.config.js` 的配置文件**)【同为一个作者】

-   Vue 3 单文件组件支持：`@vitejs/plugin-vue`

-   Vue 3 JSX 支持：`@vitejs/plugin-vue-jsx`
-   Vue 2 支持：`vite-plugin-vue2`

安装对`.vue`文件的支持插件 `@vue/compiler-sfs`

```js
/* vite.config.js */
import vue form '@vue/compiler-sfs'/* ES 语法也可以 */
const vue = requrie('@vue/compiler-sfs') /* 使用CommonJS语法引入依赖(vite.config.js为node执行的代码),vue为一个函数(no构造函数) */
module.exports = {
	plugins: [vue()],
};
```

## Vite 优化

> Vite 在构建工程时、，会将 npm 模块依赖(如 lodash、Vue 等依赖)**预打包**生成在 node_modules 文件夹下的 `.vite` 下，当开发者再次打包构建工程时直接从 `.vite`下加载预打包的依赖文件，大大提升了构建时间

## 其它

可通过`npx vite build`直接对项目进行打包，`npx vite preview`直接对项目进行预览

## ESBuild 解析

-   超快的构建速度，并且不需要缓存(不同于 babel)
-   支持 ES6 和 CommonJS 的模块化
-   **支持 ES6 的 Tree Shaking**
-   支持 Go、JavaScript 的 API(ESBuild 基于 GO 语言实现)
-   支持 TypeScript、JSX 等语法编译
-   支持 SourceMap
-   支持代码压缩
-   支持扩展其他插件

ESBuild 为什么这么快？

ESBuild 基于 GO 语言实现，Go 语言可以直接转换成机械语言，而无需经过字节码

## Vite 脚手架

-   `npm init @vitejs/app` === `npm install @vitejs/create-app`
