# 🛠️ Webpack

### 基础细节

> 🌅 默认的配置文件名称是 webpack.config,js
> 🏜️ webpack.config.js 是以 Common JS 规范进行组织的
> 🌄 使用 Webpack 的过程，大部分就是跟配置文件打交道的过程

> 注意整个配置中我们使用 Node 内置的 path 模块，并在它前面加上 [\_\_dirname](https://nodejs.org/docs/latest/api/globals.html#globals_dirname)这个全局变量。**可以防止不同操作系统之间的文件路径问题**，并且可以使相对路径按照预期工作。
>
> \_\_dirname：当前文件绝对路径
>
> join 与 resolve 区别：
>
> 🪂 `path.join('/a', '/b'); 输出：/a/b`
>
> ​ `path.resolve('/a', '/b'); 输出： /b`
>
> ⛵ **join 是把各个 path 片段连接在一起， resolve 把‘／’当成根目录**
>
> 🍟 resolve 在传入非/路径时，会自动`加上当前目录`形成一个绝对路径，而 join `仅仅用于路径拼接`
>
> 🛵 join 与 resolve 的操作类似于 cd 命令

> module (模块配置，不同类型文件的配置 `loader 配置`)

> 指定规则配置有三种方式，按照加载先后顺序，依次是：
> 🛰️ 在 package.json 中的 stylelint 属性指定规则
> 🚀 在 .stylelintrc 中指定规则
> 🏹 在 stylelint.config.js 中指定规则

> 配置 webpack develop server 后，默认会将打包的内容保存到内存当中(提高打包读写数据效率)

```javascript
module.exports = {
	//...
	devServer: {
		client: {
			progress: true, // 在浏览器中以百分比显示编译进度
			reconnect: true, // 尝试重新连接客户端的次数。为 true 时，将无限次尝试重新连接。
		},
		webSocketServer: 'ws', // 'ws' | 'sockjs' 为客户端单独选择当前的 devServer 传输模式，或者提供自定义的客户端实现。这允许指定浏览器或其他客户端与 devServer 的通信方式。
	},
};
```

### 区分环境

###### 通过环境变量区分

> 通过命令行读取环境变量 `webpack--env.production`，通过环境变量区分不同的打包环境
>
> ```js
> webpack.config.js,函数式写法
> module.exports = (env,argv) => {
> //开发
> const config =
> mode:'development'.
> // 生产
> if (env.production){
> config.mode 'production'
> // 更多配置...
> return config
> }
> ```

###### 通过配置文件区分

> **`webpack.dev.conf.js、webpack.prod.conf.js`**
> 命令执行打包时，指定配置文件 ( `webpack-config webpack.[dev|prod).conf.js` )

###### 抽取公共配置对不同环境的配置进行合并

> 声明公共的配置文件，如 `webpack.base.conf.js`，通过 `webpack-merge`包，将多个配置合并；
>
> `webpack.prod.conf.js + webpack.base.conf.js`
>
> `webpack.dev.conf.js + webpack.base.conf.js`
>
> ```javascript
> const merge = require('webpack-merge');
> const baseWebpackConfig = require('./webpack.base.conf');
> const devWebpackConfig = merge(baseWebpackConfig, {
> 	// ...开发环境配置
> });
>
> module.exports = devWebpackConfig;
> ```

###### 通过 DefinePlugin 创建(注入)全局变量

> **`Webpack DefinePlugin`**
>
> DefinePlugin
>
> 🧫 为配置注入全局变量
>
> 🛹 开发环境和生产环境的接口地址不同
>
> ```js
> const webpack = require('webpack');
> // webpack.config.js
> module.exports = {
> 	// ...
> 	plugins: [
> 		new webpack.Defineplugin({
> 			// 变量值(value)要求是一个代码片段,直接赋值字符串类型时，打包后并不是一个字符		串类型的值，需要通过`JSON.stringify`转化⛵
> 			API_BASE_URL: JSON.stringify('https://api.example.com'),
> 		}),
> 	],
> };
>
> // 在项目代码中
> console.log(API_BASE_URL);
> ```

### 自定义插件 Plugin

> 当现有的插件满足不了实际开发的需求时候，需要自定义 Plugin
>
> **`Webpack 插件是一个具有 appy 方法的 JavaScript 对象`**apply 方法会被 webpack compiler 调用，**并且在整个编译生命周期都可以访问 compiler 对象。**
>
> **原理**
> 通过在生命周期的钩子中挂载函数，来实现功能扩展
>
> ​ **钩子**
>
> ​ 钩子是**提前在可能增加功能的地方，埋好(预设)一个函数**

> **常用钩子(总共有 50 个左右钩子)**
>
> ![](/img/webpack.png)

> 注意：emit 是修改内容的最后机会(输出之前)⛵
>
> 示例代码：
>
> ```js
> // 自定义定义插件
> class Plugin{
> 	constructor(options){
>         // 插件插入的配置选项
> 		console,log('插件选项：'，options)
> 	}
>
>     // 必须要有apply方法
>     apply(compiler）{
>         // 选择调用的钩子(如 emit)
>     	compiler.hooks.emit.tap('插件名称'，(compilation)=>{
>         	// 通过 compilation(此次打包的上下文)
>         	console.Log('webpack构建过程开始！'，compilation);
>
>         	// 通过 compilation.assets[文件名].source() 获取文件内容
>         	// 通过正则等方式修改内容
>         	// 将替换完成后的内容归原位
>         	compilation.assets[文件名]={
>                 source: () => 替换后内容,
>                 size: 替换后内容.length
>             }
>         })
>     }
> }
> ```

`endsWith()` **判断字符串后面是否以参数是相同的结尾**

### 自定义 loader

> loader **`本质上就是一个 ESModel 模块(一个函数)`**，它导出一个函数，在**`函数中对打包资源进行转化`**
>
> 🛹 webpack 调用 loader 的时机在触发 compilation 的 buildModule 钩子之后
>
> 🛹 它的核心步骤是从文件原始内容中取得序列化的字符串，修复 JSON 序列化特殊字符时的 bug，添加导出语句，使其成为 JavaScript 模块
>
> 注意：**`在转化过程当中，要求最终转化(最后一个 loader)的必须为 JavaScript 代码字符串，否则报错`** 'consloe.log("YYYYY")'、`'model.export=${JSON.stringify(html)}'`
>
> 使用 `JSON.stringify()`原因是输出内容可能存在字符串引号相同导致的 bug 错误，JavaScript 代码中字符串引号包裹问题 " "" " ❌ " '' "💯

> ES Modules 是 2015 年推出的，语言层面的模块化规范，与运行环境无关，服务器和浏览器中都能使用。
>
> 在 html 中，**`通过给 script 添加 type = module 的属性，就可以用 ES Module 的标准执行其中的 JS 代码`**
>
> 每个 ES Module 都是运行在单独的私有作用域中，不会有全局作用域污染的问题。

> 🛵 `loader-utils` 与 `schema-utils`，可以使获取及验证传递给 loader 的参数配置项的工作简单化
>
> ```js
> const { getoptions } = require('loader-utils');
> const { validate } = require("schema-utils");
>
> const marked = require('marked');
>
> // 自定义loader，source：要处理的内容
> module.exports = function(source){
>     // 获取loader配置选项🪂 注意 loader 函数不能写成【箭头函数(this 指向问题)】
>     const options = getoptions(this);
>     // 对输入内容进行处理🏹
>     const html = marked(source)
>
>     //  通过 this.callback 可以返回除内容以外的其他信息(如 sourcemap)
>     // 【返还始下一个 loader 处理】🏜️ 转换内容后，可以通过 return 或调用 this.callback 返回结果
>     return html
> }
>
> 使用：
> {
>     test:/\.md$/, // 匹配
>     use:'loader 名称 || 忘记文件路径'
> }
> ```
>
> **`通过 this.async 可以获取异步操作的回调函数，并在回调函数中返回结果`**
>
> ```js
> export default function (content, map, meta) {
> 	const callback = this.async();
> 	someAsyncOperation(content, (err, result, sourceMaps, meta) => {
> 		if (err) return callback(err);
> 		callback(null, result, sourceMaps, meta);
> 	});
> }
> ```
>
> 除非计算很小，否则对于 Node.js 这种单线程环境，尽可能使用异步 loader。

```js
// 因为 babel 的 preset-env 会将 ES6 module 转化为 Common.js 的形式，会导致 webpack 中 tree-shaking 特性失效，所有将 modules 置为 false,交给webpack 自身处理
modules: false; // 通常会在配置 loader 将 modules 置为 false
```

> loader-utils 主要有以下工具方法：
>
> -   `parseQuery`：解析 loader 的 query 参数，返回一个对象。
>
> -   `stringifyRequest`：将请求的资源转换为可以在 loader 生成的代码中 require 或 import 使用的相对路径字符串，同时避免绝对路径导致重新计算 hash 值
>
>     ```js
>     loaderUtils.stringifyRequest(this, './test.js'); // "\"./test.js\""
>     ```
>
> -   `urlToRequest`：将请求的资源路径转换成 webpack 可以处理的形式
>
>     ```js
>     const url = '~path/to/module.js';
>     const request = loaderUtils.urlToRequest(url); // "path/to/module.js"
>     ```
>
> -   `interpolateName`：对文件名模板进行插值。
>
>     ```js
>     // loaderContext.resourcePath = "/absolute/path/to/app/js/hzfe.js"
>     loaderUtils.interpolateName(loaderContext, "js/[hash].script.[ext]", { content: ... });
>     // => js/9473fdd0d880a43c21b7778d34872157.script.js
>     ```
>
> -   `getHashDigest`：获取文件内容的 hash 值。
>
> -
>
> 在编写 loader 的过程中，还可以利用 loaderContext 对象来获取 loader 的相关信息和进行一些高级的操作，常见的属性和方法有：
>
> -   `this.addDependency`：加入一个文件，作为 loader 产生的结果的依赖，使其在有任何变化时可以被监听到，从而触发重新编译
> -   `this.async`：告诉 loader-runner 这个 loader 将会异步的执行回调
> -   `this.cacheable`：默认情况下，将 loader 的处理结果标记为可缓存。传入 false 可以关闭 loader 处理结果的缓存能力
> -   `this.fs`：用于访问 compilation 的 inputFileSystem 属性
> -   `this.getOptions`：提取 loader 的配置选项。从 webpack 5 开始，可以获取到 loader 上下文对象，用于替代 `loader-utils` 中的 getOptions 方法
> -   `this.mode`： webpack 的运行模式，可以是 “development” 或 “production”
> -   `this.query`：如果 loader 配置了 options 对象，则指向这个对象。如果 loader 没有 options，而是以 query 字符串作为参数，query 则是一个以 `?` 开头的字符串
