# ð ï¸ Webpack

### åºç¡ç»è

> ð é»è®¤çéç½®æä»¶åç§°æ¯ webpack.config,js
> ðï¸ webpack.config.js æ¯ä»¥ Common JS è§èè¿è¡ç»ç»ç
> ð ä½¿ç¨ Webpack çè¿ç¨ï¼å¤§é¨åå°±æ¯è·éç½®æä»¶æäº¤éçè¿ç¨

> æ³¨ææ´ä¸ªéç½®ä¸­æä»¬ä½¿ç¨ Node åç½®ç path æ¨¡åï¼å¹¶å¨å®åé¢å ä¸ [\_\_dirname](https://nodejs.org/docs/latest/api/globals.html#globals_dirname)è¿ä¸ªå¨å±åéã**å¯ä»¥é²æ­¢ä¸åæä½ç³»ç»ä¹é´çæä»¶è·¯å¾é®é¢**ï¼å¹¶ä¸å¯ä»¥ä½¿ç¸å¯¹è·¯å¾æç§é¢æå·¥ä½ã
>
> \_\_dirnameï¼å½åæä»¶ç»å¯¹è·¯å¾
>
> join ä¸ resolve åºå«ï¼
>
> ðª `path.join('/a', '/b'); è¾åºï¼/a/b`
>
> â `path.resolve('/a', '/b'); è¾åºï¼ /b`
>
> âµ **join æ¯æåä¸ª path çæ®µè¿æ¥å¨ä¸èµ·ï¼ resolve æâï¼âå½ææ ¹ç®å½**
>
> ð resolve å¨ä¼ å¥é/è·¯å¾æ¶ï¼ä¼èªå¨`å ä¸å½åç®å½`å½¢æä¸ä¸ªç»å¯¹è·¯å¾ï¼è join `ä»ä»ç¨äºè·¯å¾æ¼æ¥`
>
> ðµ join ä¸ resolve çæä½ç±»ä¼¼äº cd å½ä»¤

> module (æ¨¡åéç½®ï¼ä¸åç±»åæä»¶çéç½® `loader éç½®`)

> æå®è§åéç½®æä¸ç§æ¹å¼ï¼æç§å è½½ååé¡ºåºï¼ä¾æ¬¡æ¯ï¼
> ð°ï¸ å¨ package.json ä¸­ç stylelint å±æ§æå®è§å
> ð å¨ .stylelintrc ä¸­æå®è§å
> ð¹ å¨ stylelint.config.js ä¸­æå®è§å

> éç½® webpack develop server åï¼é»è®¤ä¼å°æåçåå®¹ä¿å­å°åå­å½ä¸­(æé«æåè¯»åæ°æ®æç)

```javascript
module.exports = {
	//...
	devServer: {
		client: {
			progress: true, // å¨æµè§å¨ä¸­ä»¥ç¾åæ¯æ¾ç¤ºç¼è¯è¿åº¦
			reconnect: true, // å°è¯éæ°è¿æ¥å®¢æ·ç«¯çæ¬¡æ°ãä¸º true æ¶ï¼å°æ éæ¬¡å°è¯éæ°è¿æ¥ã
		},
		webSocketServer: 'ws', // 'ws' | 'sockjs' ä¸ºå®¢æ·ç«¯åç¬éæ©å½åç devServer ä¼ è¾æ¨¡å¼ï¼æèæä¾èªå®ä¹çå®¢æ·ç«¯å®ç°ãè¿åè®¸æå®æµè§å¨æå¶ä»å®¢æ·ç«¯ä¸ devServer çéä¿¡æ¹å¼ã
	},
};
```

### åºåç¯å¢

###### éè¿ç¯å¢åéåºå

> éè¿å½ä»¤è¡è¯»åç¯å¢åé `webpack--env.production`ï¼éè¿ç¯å¢åéåºåä¸åçæåç¯å¢
>
> ```js
> webpack.config.js,å½æ°å¼åæ³
> module.exports = (env,argv) => {
> //å¼å
> const config =
> mode:'development'.
> // çäº§
> if (env.production){
> config.mode 'production'
> // æ´å¤éç½®...
> return config
> }
> ```

###### éè¿éç½®æä»¶åºå

> **`webpack.dev.conf.jsãwebpack.prod.conf.js`**
> å½ä»¤æ§è¡æåæ¶ï¼æå®éç½®æä»¶ ( `webpack-config webpack.[dev|prod).conf.js` )

###### æ½åå¬å±éç½®å¯¹ä¸åç¯å¢çéç½®è¿è¡åå¹¶

> å£°æå¬å±çéç½®æä»¶ï¼å¦ `webpack.base.conf.js`ï¼éè¿ `webpack-merge`åï¼å°å¤ä¸ªéç½®åå¹¶ï¼
>
> `webpack.prod.conf.js + webpack.base.conf.js`
>
> `webpack.dev.conf.js + webpack.base.conf.js`
>
> ```javascript
> const merge = require('webpack-merge');
> const baseWebpackConfig = require('./webpack.base.conf');
> const devWebpackConfig = merge(baseWebpackConfig, {
> 	// ...å¼åç¯å¢éç½®
> });
>
> module.exports = devWebpackConfig;
> ```

###### éè¿ DefinePlugin åå»º(æ³¨å¥)å¨å±åé

> **`Webpack DefinePlugin`**
>
> DefinePlugin
>
> ð§« ä¸ºéç½®æ³¨å¥å¨å±åé
>
> ð¹ å¼åç¯å¢åçäº§ç¯å¢çæ¥å£å°åä¸å
>
> ```js
> const webpack = require('webpack');
> // webpack.config.js
> module.exports = {
> 	// ...
> 	plugins: [
> 		new webpack.Defineplugin({
> 			// åéå¼(value)è¦æ±æ¯ä¸ä¸ªä»£ç çæ®µ,ç´æ¥èµå¼å­ç¬¦ä¸²ç±»åæ¶ï¼æååå¹¶ä¸æ¯ä¸ä¸ªå­ç¬¦		ä¸²ç±»åçå¼ï¼éè¦éè¿`JSON.stringify`è½¬åâµ
> 			API_BASE_URL: JSON.stringify('https://api.example.com'),
> 		}),
> 	],
> };
>
> // å¨é¡¹ç®ä»£ç ä¸­
> console.log(API_BASE_URL);
> ```

### èªå®ä¹æä»¶ Plugin

> å½ç°æçæä»¶æ»¡è¶³ä¸äºå®éå¼åçéæ±æ¶åï¼éè¦èªå®ä¹ Plugin
>
> **`Webpack æä»¶æ¯ä¸ä¸ªå·æ appy æ¹æ³ç JavaScript å¯¹è±¡`**apply æ¹æ³ä¼è¢« webpack compiler è°ç¨ï¼**å¹¶ä¸å¨æ´ä¸ªç¼è¯çå½å¨æé½å¯ä»¥è®¿é® compiler å¯¹è±¡ã**
>
> **åç**
> éè¿å¨çå½å¨æçé©å­ä¸­æè½½å½æ°ï¼æ¥å®ç°åè½æ©å±
>
> â **é©å­**
>
> â é©å­æ¯**æåå¨å¯è½å¢å åè½çå°æ¹ï¼åå¥½(é¢è®¾)ä¸ä¸ªå½æ°**

> **å¸¸ç¨é©å­(æ»å±æ 50 ä¸ªå·¦å³é©å­)**
>
> ![](/img/webpack.png)

> æ³¨æï¼emit æ¯ä¿®æ¹åå®¹çæåæºä¼(è¾åºä¹å)âµ
>
> ç¤ºä¾ä»£ç ï¼
>
> ```js
> // èªå®ä¹å®ä¹æä»¶
> class Plugin{
> 	constructor(options){
>         // æä»¶æå¥çéç½®éé¡¹
> 		console,log('æä»¶éé¡¹ï¼'ï¼options)
> 	}
>
>     // å¿é¡»è¦æapplyæ¹æ³
>     apply(compilerï¼{
>         // éæ©è°ç¨çé©å­(å¦ emit)
>     	compiler.hooks.emit.tap('æä»¶åç§°'ï¼(compilation)=>{
>         	// éè¿ compilation(æ­¤æ¬¡æåçä¸ä¸æ)
>         	console.Log('webpackæå»ºè¿ç¨å¼å§ï¼'ï¼compilation);
>
>         	// éè¿ compilation.assets[æä»¶å].source() è·åæä»¶åå®¹
>         	// éè¿æ­£åç­æ¹å¼ä¿®æ¹åå®¹
>         	// å°æ¿æ¢å®æåçåå®¹å½åä½
>         	compilation.assets[æä»¶å]={
>                 source: () => æ¿æ¢ååå®¹,
>                 size: æ¿æ¢ååå®¹.length
>             }
>         })
>     }
> }
> ```

`endsWith()` **å¤æ­å­ç¬¦ä¸²åé¢æ¯å¦ä»¥åæ°æ¯ç¸åçç»å°¾**

### èªå®ä¹ loader

> loader **`æ¬è´¨ä¸å°±æ¯ä¸ä¸ª ESModel æ¨¡å(ä¸ä¸ªå½æ°)`**ï¼å®å¯¼åºä¸ä¸ªå½æ°ï¼å¨**`å½æ°ä¸­å¯¹æåèµæºè¿è¡è½¬å`**
>
> ð¹ webpack è°ç¨ loader çæ¶æºå¨è§¦å compilation ç buildModule é©å­ä¹å
>
> ð¹ å®çæ ¸å¿æ­¥éª¤æ¯ä»æä»¶åå§åå®¹ä¸­åå¾åºååçå­ç¬¦ä¸²ï¼ä¿®å¤ JSON åºååç¹æ®å­ç¬¦æ¶ç bugï¼æ·»å å¯¼åºè¯­å¥ï¼ä½¿å¶æä¸º JavaScript æ¨¡å
>
> æ³¨æï¼**`å¨è½¬åè¿ç¨å½ä¸­ï¼è¦æ±æç»è½¬å(æåä¸ä¸ª loader)çå¿é¡»ä¸º JavaScript ä»£ç å­ç¬¦ä¸²ï¼å¦åæ¥é`** 'consloe.log("YYYYY")'ã`'model.export=${JSON.stringify(html)}'`
>
> ä½¿ç¨ `JSON.stringify()`åå æ¯è¾åºåå®¹å¯è½å­å¨å­ç¬¦ä¸²å¼å·ç¸åå¯¼è´ç bug éè¯¯ï¼JavaScript ä»£ç ä¸­å­ç¬¦ä¸²å¼å·åè£¹é®é¢ " "" " â " '' "ð¯

> ES Modules æ¯ 2015 å¹´æ¨åºçï¼è¯­è¨å±é¢çæ¨¡ååè§èï¼ä¸è¿è¡ç¯å¢æ å³ï¼æå¡å¨åæµè§å¨ä¸­é½è½ä½¿ç¨ã
>
> å¨ html ä¸­ï¼**`éè¿ç» script æ·»å  type = module çå±æ§ï¼å°±å¯ä»¥ç¨ ES Module çæ åæ§è¡å¶ä¸­ç JS ä»£ç `**
>
> æ¯ä¸ª ES Module é½æ¯è¿è¡å¨åç¬çç§æä½ç¨åä¸­ï¼ä¸ä¼æå¨å±ä½ç¨åæ±¡æçé®é¢ã

> ðµ `loader-utils` ä¸ `schema-utils`ï¼å¯ä»¥ä½¿è·ååéªè¯ä¼ éç» loader çåæ°éç½®é¡¹çå·¥ä½ç®åå
>
> ```js
> const { getoptions } = require('loader-utils');
> const { validate } = require("schema-utils");
>
> const marked = require('marked');
>
> // èªå®ä¹loaderï¼sourceï¼è¦å¤ççåå®¹
> module.exports = function(source){
>     // è·åloaderéç½®éé¡¹ðª æ³¨æ loader å½æ°ä¸è½åæãç®­å¤´å½æ°(this æåé®é¢)ã
>     const options = getoptions(this);
>     // å¯¹è¾å¥åå®¹è¿è¡å¤çð¹
>     const html = marked(source)
>
>     //  éè¿ this.callback å¯ä»¥è¿åé¤åå®¹ä»¥å¤çå¶ä»ä¿¡æ¯(å¦ sourcemap)
>     // ãè¿è¿å§ä¸ä¸ä¸ª loader å¤çãðï¸ è½¬æ¢åå®¹åï¼å¯ä»¥éè¿ return æè°ç¨ this.callback è¿åç»æ
>     return html
> }
>
> ä½¿ç¨ï¼
> {
>     test:/\.md$/, // å¹é
>     use:'loader åç§° || å¿è®°æä»¶è·¯å¾'
> }
> ```
>
> **`éè¿ this.async å¯ä»¥è·åå¼æ­¥æä½çåè°å½æ°ï¼å¹¶å¨åè°å½æ°ä¸­è¿åç»æ`**
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
> é¤éè®¡ç®å¾å°ï¼å¦åå¯¹äº Node.js è¿ç§åçº¿ç¨ç¯å¢ï¼å°½å¯è½ä½¿ç¨å¼æ­¥ loaderã

```js
// å ä¸º babel ç preset-env ä¼å° ES6 module è½¬åä¸º Common.js çå½¢å¼ï¼ä¼å¯¼è´ webpack ä¸­ tree-shaking ç¹æ§å¤±æï¼ææå° modules ç½®ä¸º false,äº¤ç»webpack èªèº«å¤ç
modules: false; // éå¸¸ä¼å¨éç½® loader å° modules ç½®ä¸º false
```

> loader-utils ä¸»è¦æä»¥ä¸å·¥å·æ¹æ³ï¼
>
> -   `parseQuery`ï¼è§£æ loader ç query åæ°ï¼è¿åä¸ä¸ªå¯¹è±¡ã
>
> -   `stringifyRequest`ï¼å°è¯·æ±çèµæºè½¬æ¢ä¸ºå¯ä»¥å¨ loader çæçä»£ç ä¸­ require æ import ä½¿ç¨çç¸å¯¹è·¯å¾å­ç¬¦ä¸²ï¼åæ¶é¿åç»å¯¹è·¯å¾å¯¼è´éæ°è®¡ç® hash å¼
>
>     ```js
>     loaderUtils.stringifyRequest(this, './test.js'); // "\"./test.js\""
>     ```
>
> -   `urlToRequest`ï¼å°è¯·æ±çèµæºè·¯å¾è½¬æ¢æ webpack å¯ä»¥å¤ççå½¢å¼
>
>     ```js
>     const url = '~path/to/module.js';
>     const request = loaderUtils.urlToRequest(url); // "path/to/module.js"
>     ```
>
> -   `interpolateName`ï¼å¯¹æä»¶åæ¨¡æ¿è¿è¡æå¼ã
>
>     ```js
>     // loaderContext.resourcePath = "/absolute/path/to/app/js/hzfe.js"
>     loaderUtils.interpolateName(loaderContext, "js/[hash].script.[ext]", { content: ... });
>     // => js/9473fdd0d880a43c21b7778d34872157.script.js
>     ```
>
> -   `getHashDigest`ï¼è·åæä»¶åå®¹ç hash å¼ã
>
> -
>
> å¨ç¼å loader çè¿ç¨ä¸­ï¼è¿å¯ä»¥å©ç¨ loaderContext å¯¹è±¡æ¥è·å loader çç¸å³ä¿¡æ¯åè¿è¡ä¸äºé«çº§çæä½ï¼å¸¸è§çå±æ§åæ¹æ³æï¼
>
> -   `this.addDependency`ï¼å å¥ä¸ä¸ªæä»¶ï¼ä½ä¸º loader äº§ççç»æçä¾èµï¼ä½¿å¶å¨æä»»ä½ååæ¶å¯ä»¥è¢«çå¬å°ï¼ä»èè§¦åéæ°ç¼è¯
> -   `this.async`ï¼åè¯ loader-runner è¿ä¸ª loader å°ä¼å¼æ­¥çæ§è¡åè°
> -   `this.cacheable`ï¼é»è®¤æåµä¸ï¼å° loader çå¤çç»ææ è®°ä¸ºå¯ç¼å­ãä¼ å¥ false å¯ä»¥å³é­ loader å¤çç»æçç¼å­è½å
> -   `this.fs`ï¼ç¨äºè®¿é® compilation ç inputFileSystem å±æ§
> -   `this.getOptions`ï¼æå loader çéç½®éé¡¹ãä» webpack 5 å¼å§ï¼å¯ä»¥è·åå° loader ä¸ä¸æå¯¹è±¡ï¼ç¨äºæ¿ä»£ `loader-utils` ä¸­ç getOptions æ¹æ³
> -   `this.mode`ï¼ webpack çè¿è¡æ¨¡å¼ï¼å¯ä»¥æ¯ âdevelopmentâ æ âproductionâ
> -   `this.query`ï¼å¦æ loader éç½®äº options å¯¹è±¡ï¼åæåè¿ä¸ªå¯¹è±¡ãå¦æ loader æ²¡æ optionsï¼èæ¯ä»¥ query å­ç¬¦ä¸²ä½ä¸ºåæ°ï¼query åæ¯ä¸ä¸ªä»¥ `?` å¼å¤´çå­ç¬¦ä¸²
