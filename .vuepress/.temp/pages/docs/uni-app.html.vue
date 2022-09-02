<template><div><h1 id="📖-uni-app" tabindex="-1"><a class="header-anchor" href="#📖-uni-app" aria-hidden="true">#</a> 📖 uni-app</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">web-test</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├─ .hbuilderx</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│  └─ launch.json</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├─ App.vue     ---------   项目根组件，所有页面都是在 App.vue 下进行切换的，‘页面’的入口文件，可以调用‘应用的生命周期’</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├─ index.html</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├─ main.js     ---------   项目入口文件，主要作用是初始化 Vue 实例，并使用需要的插件...</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├─ manifest.json  ------   应用的配置文件，用于指定应用名称、图标、权限...</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├─ pages    ------------   存放 uni-app 的页面</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│  └─ index</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│     └─ index.vue</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├─ components  ---------   项目组件目录</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├─ pages.json     ------   用于 uni-app 的全局配置，决定页面文件的路径、窗口样式、原生的导航栏以及底部  |					    tabbar...</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├─ project.config.json</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├─ static   ------------   存放静态资源</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│  └─ logo.png</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├─ uni.scss    ---------   全局的样式文件，主要用于控制整体的应用风格，如按钮颜色、边框风格。默认已经预设一些 scss 变量预设</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">└─ unpackage   ---------   存放最终打包输出的文件( 安卓、H5、小程序... )</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">   └─ dist</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">      └─ dev</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">         ├─ .automator</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">         │  └─ mp-weixin</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">         │     └─ .automator.json</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">         ├─ .sourcemap</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">         │  └─ mp-weixin</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">         │     ├─ common</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">         │     │  ├─ main.js.map</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">         │     │  ├─ runtime.js.map</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">         │     │  └─ vendor.js.map</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">         │     └─ pages</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">         │        └─ index</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">         │           └─ index.js.map</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">         └─ mp-weixin</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            ├─ app.js</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            ├─ app.json</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            ├─ app.wxss</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            ├─ common</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            │  ├─ main.js</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            │  ├─ main.wxss</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            │  ├─ runtime.js</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            │  └─ vendor.js</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            ├─ pages</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            │  └─ index</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            │     ├─ index.js</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            │     ├─ index.json</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            │     ├─ index.wxml</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            │     └─ index.wxss</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            ├─ project.config.json</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            └─ static</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">               └─ logo.png</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开发规范" tabindex="-1"><a class="header-anchor" href="#开发规范" aria-hidden="true">#</a> 开发规范</h2>
<p>为了实现多端兼容,综合考虑编译速度,运行性能等因素,uni-app 约定了如下开发规范:</p>
<p>🦩 页面文件遵循  <a href="https://vue-loader.vuejs.org/zh/spec.html" target="_blank" rel="noopener noreferrer">Vue 单文件组件(SFC)规范<ExternalLinkIcon/></a></p>
<p>🦢 <strong>组件标签靠近小程序规范</strong>,详见  <a href="https://uniapp.dcloud.io/component/README" target="_blank" rel="noopener noreferrer">uni-app 组件规范<ExternalLinkIcon/></a></p>
<p>🐬 <strong>接口能力（JS API）靠近微信小程序规范</strong>,但需将前缀<strong>wx 替换为 uni</strong>，详见  <a href="https://uniapp.dcloud.io/api/README" target="_blank" rel="noopener noreferrer">uni-app 接口规范<ExternalLinkIcon/></a></p>
<p>🐙 数据绑定及事件处理同 Vue.js 规范，同时<strong>补充了 App 及页面的生命周期</strong></p>
<p>🦚 为兼容多端运行，建议<strong>使用 flex 布局进行开发</strong></p>
<h2 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h2>
<p><a href="https://uniapp.dcloud.io/collocation/pages.html#globalstyle" target="_blank" rel="noopener noreferrer">pages.json 详细文档<ExternalLinkIcon/></a></p>
<h4 id="配置项列表" tabindex="-1"><a class="header-anchor" href="#配置项列表" aria-hidden="true">#</a> 配置项列表</h4>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">平台兼容</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://uniapp.dcloud.io/collocation/pages#globalstyle" target="_blank" rel="noopener noreferrer">globalStyle<ExternalLinkIcon/></a></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left">设置默认页面的窗口表现</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://uniapp.dcloud.io/collocation/pages#pages" target="_blank" rel="noopener noreferrer">pages<ExternalLinkIcon/></a></td>
<td style="text-align:left">Object Array</td>
<td style="text-align:left">是</td>
<td style="text-align:left">设置页面路径及窗口表现</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://uniapp.dcloud.io/collocation/pages#easycom" target="_blank" rel="noopener noreferrer">easycom<ExternalLinkIcon/></a></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left">组件自动引入规则</td>
<td style="text-align:left">2.5.5+</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://uniapp.dcloud.io/collocation/pages#tabbar" target="_blank" rel="noopener noreferrer">tabBar<ExternalLinkIcon/></a></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left">设置底部 tab 的表现</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://uniapp.dcloud.io/collocation/pages#condition" target="_blank" rel="noopener noreferrer">condition<ExternalLinkIcon/></a></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left">启动模式配置</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://uniapp.dcloud.io/collocation/pages#subPackages" target="_blank" rel="noopener noreferrer">subPackages<ExternalLinkIcon/></a></td>
<td style="text-align:left">Object Array</td>
<td style="text-align:left">否</td>
<td style="text-align:left">分包加载配置</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://uniapp.dcloud.io/collocation/pages#preloadrule" target="_blank" rel="noopener noreferrer">preloadRule<ExternalLinkIcon/></a></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left">分包预下载规则</td>
<td style="text-align:left">微信小程序</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/workers.html" target="_blank" rel="noopener noreferrer">workers(opens new window)<ExternalLinkIcon/></a></td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left"><code v-pre>Worker</code> 代码放置的目录</td>
<td style="text-align:left">微信小程序</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://uniapp.dcloud.io/collocation/pages#leftwindow" target="_blank" rel="noopener noreferrer">leftWindow<ExternalLinkIcon/></a></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left">大屏左侧窗口</td>
<td style="text-align:left">H5</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://uniapp.dcloud.io/collocation/pages#topwindow" target="_blank" rel="noopener noreferrer">topWindow<ExternalLinkIcon/></a></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left">大屏顶部窗口</td>
<td style="text-align:left">H5</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://uniapp.dcloud.io/collocation/pages#rightwindow" target="_blank" rel="noopener noreferrer">rightWindow<ExternalLinkIcon/></a></td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left">大屏右侧窗口</td>
<td style="text-align:left">H5</td>
</tr>
</tbody>
</table>
<p>通过 pages.json - <strong>globalStyle</strong> 进行全局配置，用于设置应用的状态栏、导航条、标题、窗口背景色....</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">{</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-keyword)">&quot;pages&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-comment)">//pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		{</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			</span><span style="color: var(--shiki-token-keyword)">&quot;path&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;pages/index/index&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			</span><span style="color: var(--shiki-token-keyword)">&quot;style&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				</span><span style="color: var(--shiki-token-comment)">// &quot;navigationBarTitleText&quot;: &quot;uni-app&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-keyword)">&quot;globalStyle&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-keyword)">&quot;navigationBarTextStyle&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;white&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">// 导航栏标题颜色，仅支持 black/white</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-keyword)">&quot;navigationBarTitleText&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;🤖&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">// 导航栏标题，🦩页面的标题会把全局的覆盖掉</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-keyword)">&quot;navigationBarBackgroundColor&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;#067fd7&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-keyword)">&quot;backgroundColor&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;#2cc4d0&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">// 窗口背景色</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-keyword)">&quot;enablePullDownRefresh&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">// 开启下拉</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-keyword)">&quot;backgroundTextStyle&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;dark&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">// 下拉 loading 的样式</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-keyword)">&quot;onReachBottomDistance&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">25</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">// 页面上拉触底事件触发时距页面底部距离，只支持 px</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面配置" tabindex="-1"><a class="header-anchor" href="#页面配置" aria-hidden="true">#</a> 页面配置</h2>
<p>在 pages 文件夹下新建一个页面目录(文件夹)，在该目录下新建一个 <code v-pre>.vue文件</code>,✍️ 注意：需要在 pages.json - pages 下配置页面目录(路径)，在该目录对象下 <strong>style 对象中</strong> 配置页面<strong>独有的样式</strong>，并且可以自定义配置 H5、APP 等应用独有的样式</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-string-expression)">&quot;pages&quot;</span><span style="color: var(--shiki-color-text)">: [</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		{</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			</span><span style="color: var(--shiki-token-keyword)">&quot;path&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;pages/index/index&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			</span><span style="color: var(--shiki-token-keyword)">&quot;style&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				 </span><span style="color: var(--shiki-token-keyword)">&quot;navigationBarTitleText&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;页面单独标题&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-tabbar" tabindex="-1"><a class="header-anchor" href="#配置-tabbar" aria-hidden="true">#</a> 配置 tabBar</h3>
<p>在 pages.json 下，与 pages、globalStyle 同级，通过配置 tabBar 去实现底部 tab 栏以及 tab 切换页面的表现</p>
<blockquote>
<p>Tips：😊<strong>当设置 position：top 时，将不会显示 icon 图标</strong>（设置 top 为把 tab 栏置于顶部）</p>
<p>​ 😋<strong>tabBar 中的 list 是一个数组，tab 按顺序排序，配置最少 2 个-最多 5 个</strong></p>
</blockquote>
<p><strong>属性说明：</strong> <a href="https://uniapp.dcloud.io/collocation/pages.html#tabbar" target="_blank" rel="noopener noreferrer">详细参考<ExternalLinkIcon/></a></p>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">默认值</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">color</td>
<td style="text-align:left">HexColor</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">tab 上的文字默认颜色</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">selectedColor</td>
<td style="text-align:left">HexColor</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">tab 上的文字选中时的颜色</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">backgroundColor</td>
<td style="text-align:left">HexColor</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">tab 的背景色</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">borderStyle</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">black</td>
<td style="text-align:left">tabbar 上边框的颜色，可选值 black/white</td>
<td style="text-align:left">App 2.3.4+ 支持其他颜色值、H5 3.0.0+</td>
</tr>
<tr>
<td style="text-align:left">blurEffect</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">none</td>
<td style="text-align:left">iOS 高斯模糊效果，可选值 dark/extralight/light/none（参考:<a href="https://ask.dcloud.net.cn/article/36617" target="_blank" rel="noopener noreferrer">使用说明 (opens new window)<ExternalLinkIcon/></a>）</td>
<td style="text-align:left">App 2.4.0+ 支持、H5 3.0.0+（只有最新版浏览器才支持）</td>
</tr>
<tr>
<td style="text-align:left">list</td>
<td style="text-align:left">Array</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">tab 的列表，详见 list 属性说明，最少 2 个、最多 5 个 tab</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">position</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">bottom</td>
<td style="text-align:left">可选值 bottom、top</td>
<td style="text-align:left">top 值仅微信小程序支持</td>
</tr>
<tr>
<td style="text-align:left">fontSize</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">10px</td>
<td style="text-align:left">文字默认大小</td>
<td style="text-align:left">App 2.3.4+、H5 3.0.0+</td>
</tr>
<tr>
<td style="text-align:left">iconWidth</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">24px</td>
<td style="text-align:left">图标默认宽度（高度等比例缩放）</td>
<td style="text-align:left">App 2.3.4+、H5 3.0.0+</td>
</tr>
<tr>
<td style="text-align:left">spacing</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">3px</td>
<td style="text-align:left">图标和文字的间距</td>
<td style="text-align:left">App 2.3.4+、H5 3.0.0+</td>
</tr>
<tr>
<td style="text-align:left">height</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">50px</td>
<td style="text-align:left">tabBar 默认高度</td>
<td style="text-align:left">App 2.3.4+、H5 3.0.0+</td>
</tr>
<tr>
<td style="text-align:left">midButton</td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">中间按钮 仅在 list 项为偶数时有效</td>
<td style="text-align:left">App 2.3.4+、H5 3.0.0+</td>
</tr>
</tbody>
</table>
<p>其中 list 接收一个数组，数组中的每个项都是一个对象，其属性值如下：</p>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">pagePath</td>
<td style="text-align:left">String</td>
<td style="text-align:left">是</td>
<td style="text-align:left">页面路径，<strong>必须在 pages 中先定义</strong></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">text</td>
<td style="text-align:left">String</td>
<td style="text-align:left">是</td>
<td style="text-align:left">tab 上按钮文字，在 App 和 H5 平台为非必填。例如中间可放一个没有文字的+号图标</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">iconPath</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，当 position 为 top 时，此参数无效，不支持网络图片，不支持字体图标</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">selectedIconPath</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px ，当 position 为 top 时，此参数无效</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">visible</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">否</td>
<td style="text-align:left">该项是否显示，默认显示</td>
<td style="text-align:left">App (3.2.10+)、H5 (3.2.10)+</td>
</tr>
<tr>
<td style="text-align:left">iconfont</td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left">字体图标，优先级高于 iconPath</td>
<td style="text-align:left">App（3.4.4+）</td>
</tr>
</tbody>
</table>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-string-expression)">&quot;tabBar&quot;</span><span style="color: var(--shiki-color-text)">: {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-keyword)">&quot;color&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;#282c35&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-keyword)">&quot;selectedColor&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;#4d78cc&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-keyword)">&quot;borderStyle&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;white&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-keyword)">&quot;list&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			{	</span><span style="color: var(--shiki-token-comment)">// 路径不能以 ./ 开头</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				</span><span style="color: var(--shiki-token-keyword)">&quot;pagePath&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;pages/index/index&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				</span><span style="color: var(--shiki-token-keyword)">&quot;text&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;首页&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				</span><span style="color: var(--shiki-token-keyword)">&quot;iconPath&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;static/img/在校医保统计.png&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-comment)">// 仅支持 .png、.jpg、.jpeg 格式</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				</span><span style="color: var(--shiki-token-keyword)">&quot;selectedIconPath&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;static/img/创新班.png&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			}</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			{</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				</span><span style="color: var(--shiki-token-keyword)">&quot;pagePath&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;pages/about/about&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				</span><span style="color: var(--shiki-token-keyword)">&quot;text&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;关于&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				</span><span style="color: var(--shiki-token-keyword)">&quot;iconPath&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;static/img/我的待办.png&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				</span><span style="color: var(--shiki-token-keyword)">&quot;selectedIconPath&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;static/img/审阅抄送信息.png&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		]</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动模式配置" tabindex="-1"><a class="header-anchor" href="#启动模式配置" aria-hidden="true">#</a> 启动模式配置</h3>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-string-expression)">&quot;condition&quot;</span><span style="color: var(--shiki-color-text)"> : { </span><span style="color: var(--shiki-token-comment)">//启动模式配置，仅开发期间生效，用于模拟启动【直达页面】的场景</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-keyword)">&quot;current&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">0</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">//当前激活的模式(list 的索引项)</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-keyword)">&quot;list&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			{</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				</span><span style="color: var(--shiki-token-keyword)">&quot;name&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;关于&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">//模式名称</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				</span><span style="color: var(--shiki-token-keyword)">&quot;path&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;pages/about/about&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">//启动页面，必选</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				</span><span style="color: var(--shiki-token-keyword)">&quot;query&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;id=3&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">//启动参数，在页面的onLoad函数里面得到</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		]</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205210956233.gif" alt="" loading="lazy"></p>
<h2 id="组件基本使用" tabindex="-1"><a class="header-anchor" href="#组件基本使用" aria-hidden="true">#</a> 组件基本使用</h2>
<p>uni-app 的基本组件，像 div、p、span 标签一样，用于搭建页面的基本结构。<a href="https://uniapp.dcloud.io/component/#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6" target="_blank" rel="noopener noreferrer">详细参考<ExternalLinkIcon/></a></p>
<blockquote>
<p><strong>Tips</strong>：✍️ 虽然不推荐使用 HTML 标签，但实际上如果开发者写了<code v-pre>div</code>等标签，在编译到非 H5 平台时也会被编译器转换为<code v-pre>view</code>标签，类似的还有<code v-pre>span</code>转<code v-pre>text</code>、<code v-pre>a</code>转<code v-pre>navigator</code>等，包括 css 里的元素选择器也会转。但为了管理方便、策略统一，新写代码时仍然建议使用 view 等组件。</p>
</blockquote>
<h4 id="公共属性列表" tabindex="-1"><a class="header-anchor" href="#公共属性列表" aria-hidden="true">#</a> 公共属性列表</h4>
<p>每个组件都有各自定义的属性，但所有 uni-app 的组件，都有如下属性：</p>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">注解</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">String</td>
<td style="text-align:left">组件的唯一标示</td>
<td style="text-align:left">一般用于获取组件上下文对象（如：<a href="https://uniapp.dcloud.io/api/media/video-context" target="_blank" rel="noopener noreferrer">VideoContext<ExternalLinkIcon/></a>），需要保持整个页面唯一</td>
</tr>
<tr>
<td style="text-align:left">ref</td>
<td style="text-align:left">String</td>
<td style="text-align:left">vue 中组件的唯一标示</td>
<td style="text-align:left">用来给子组件注册引用信息，详见 <a href="https://uniapp.dcloud.io/vue-components#ref" target="_blank" rel="noopener noreferrer">Vue 文档<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">class</td>
<td style="text-align:left">String</td>
<td style="text-align:left">组件的样式类</td>
<td style="text-align:left">在对应的 css 中定义的样式类</td>
</tr>
<tr>
<td style="text-align:left">style</td>
<td style="text-align:left">String</td>
<td style="text-align:left">组件的内联样式</td>
<td style="text-align:left">可以动态设置的内联样式</td>
</tr>
<tr>
<td style="text-align:left"><strong>hidden</strong></td>
<td style="text-align:left"><strong>Boolean</strong></td>
<td style="text-align:left"><strong>组件是否隐藏</strong></td>
<td style="text-align:left"><strong>所有组件默认是显示的</strong></td>
</tr>
<tr>
<td style="text-align:left">data-*</td>
<td style="text-align:left">Any</td>
<td style="text-align:left">自定义属性</td>
<td style="text-align:left">组件上触发的事件时，会发送给事件处理函数</td>
</tr>
<tr>
<td style="text-align:left">@*</td>
<td style="text-align:left">EventHandler</td>
<td style="text-align:left">组件的事件</td>
<td style="text-align:left">详见各组件详细文档，事件绑定参考 <a href="https://uniapp.dcloud.io/tutorial/vue-basics#%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%99%A8" target="_blank" rel="noopener noreferrer">事件处理器<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<p>除了上述公共属性，还有一类特殊属性以<code v-pre>v-</code>开头，称之为 vue 指令，如 v-if、v-else、v-for、v-model。详见<a href="https://uniapp.dcloud.io/tutorial/vue-api#%E6%A8%A1%E6%9D%BF%E6%8C%87%E4%BB%A4" target="_blank" rel="noopener noreferrer">vue 指令<ExternalLinkIcon/></a></p>
<h3 id="text-文本组件" tabindex="-1"><a class="header-anchor" href="#text-文本组件" aria-hidden="true">#</a> text 文本组件</h3>
<p>用于包裹文本内容。</p>
<p><strong>属性说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">默认值</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">selectable</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">false</td>
<td style="text-align:left">文本是否可选</td>
<td style="text-align:left">App、H5、快手小程序</td>
</tr>
<tr>
<td style="text-align:left">user-select</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">false</td>
<td style="text-align:left">文本是否可选</td>
<td style="text-align:left">微信小程序</td>
</tr>
<tr>
<td style="text-align:left">space</td>
<td style="text-align:left">String</td>
<td style="text-align:left"></td>
<td style="text-align:left">显示连续空格</td>
<td style="text-align:left">App、H5、微信小程序</td>
</tr>
<tr>
<td style="text-align:left">decode</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">false</td>
<td style="text-align:left">是否解码</td>
<td style="text-align:left">App、H5、微信小程序</td>
</tr>
</tbody>
</table>
<p><strong>space 值说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ensp</td>
<td style="text-align:left">中文字符空格一半大小</td>
</tr>
<tr>
<td style="text-align:left">emsp</td>
<td style="text-align:left">中文字符空格大小</td>
</tr>
<tr>
<td style="text-align:left">nbsp</td>
<td style="text-align:left">根据字体设置的空格大小</td>
</tr>
</tbody>
</table>
<p><strong>Tips</strong></p>
<ul>
<li><strong>🐬<code v-pre>&lt;text&gt;</code> 组件内只支持嵌套 <code v-pre>&lt;text&gt;</code>，不支持其它组件或自定义组件否则会引发在不同平台的渲染差异。</strong></li>
<li>在 app-nvue 下，只有<code v-pre>&lt;text&gt;</code>才能包裹文本内容。无法在<code v-pre>&lt;view&gt;</code>组件包裹文本。</li>
<li>decode 可以解析的有 <img src="https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205211019774.png" style="zoom:78%;" /></li>
<li>各个操作系统的空格标准并不一致。</li>
<li><strong>💻 除了文本节点以外的其他节点都无法长按选中。</strong></li>
<li>支持 <code v-pre>\n</code> 方式换行。</li>
<li>如果使用 <code v-pre>&lt;span&gt;</code> 组件编译时会被转换为 <code v-pre>&lt;text&gt;</code>。</li>
</ul>
<h3 id="view-视图容器组件" tabindex="-1"><a class="header-anchor" href="#view-视图容器组件" aria-hidden="true">#</a> view 视图容器组件</h3>
<p>它类似于传统 html 中的 div，用于包裹各种元素内容。</p>
<p><strong>属性说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">默认值</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">hover-class</td>
<td style="text-align:left">String</td>
<td style="text-align:left">none</td>
<td style="text-align:left">指定按下去的样式类。当 hover-class=&quot;none&quot; 时，没有点击态效果</td>
</tr>
<tr>
<td style="text-align:left">hover-stop-propagation</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">false</td>
<td style="text-align:left">指定是否阻止本节点的祖先节点出现点击态，App、H5、支付宝小程序、百度小程序不支持（支付宝小程序、百度小程序文档中都有此属性，实测未支持）</td>
</tr>
<tr>
<td style="text-align:left">hover-start-time</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">50</td>
<td style="text-align:left">按住后多久出现点击态，单位毫秒</td>
</tr>
<tr>
<td style="text-align:left">hover-stay-time</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">400</td>
<td style="text-align:left">手指松开后点击态保留时间，单位毫秒</td>
</tr>
</tbody>
</table>
<h3 id="image-图片组件" tabindex="-1"><a class="header-anchor" href="#image-图片组件" aria-hidden="true">#</a> image 图片组件</h3>
<p><strong>注意：🦚HTML 中为 img ，uni-app 为 image</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">默认值</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">src</td>
<td style="text-align:left">String</td>
<td style="text-align:left"></td>
<td style="text-align:left">图片资源地址</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><strong>mode🦢</strong></td>
<td style="text-align:left"><strong>String</strong></td>
<td style="text-align:left"><strong>'scaleToFill'</strong></td>
<td style="text-align:left"><strong>图片裁剪、缩放的模式</strong></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><strong>lazy-load</strong></td>
<td style="text-align:left"><strong>Boolean</strong></td>
<td style="text-align:left"><strong>false</strong></td>
<td style="text-align:left"><strong>图片懒加载。只针对 page 与 scroll-view 下的 image 有效</strong></td>
<td style="text-align:left">微信小程序、百度小程序、字节跳动小程序、飞书小程序</td>
</tr>
<tr>
<td style="text-align:left">fade-show</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">true</td>
<td style="text-align:left">图片显示动画效果</td>
<td style="text-align:left">仅 App-nvue 2.3.4+ Android 有效</td>
</tr>
<tr>
<td style="text-align:left">webp</td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">false</td>
<td style="text-align:left">默认不解析 webP 格式，只支持网络资源</td>
<td style="text-align:left">微信小程序 2.9.0</td>
</tr>
<tr>
<td style="text-align:left">show-menu-by-longpress</td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">false</td>
<td style="text-align:left">开启长按图片显示识别小程序码菜单</td>
<td style="text-align:left">微信小程序 2.7.0</td>
</tr>
<tr>
<td style="text-align:left">draggable</td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">true</td>
<td style="text-align:left">是否能拖动图片</td>
<td style="text-align:left">H5 3.1.1+、App（iOS15+）</td>
</tr>
<tr>
<td style="text-align:left">@error</td>
<td style="text-align:left">HandleEvent</td>
<td style="text-align:left"></td>
<td style="text-align:left" errMsg:="" something="" wrong="">当错误发生时，发布到 AppService 的事件名，事件对象 event.detail =</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">@load</td>
<td style="text-align:left">HandleEvent</td>
<td style="text-align:left"></td>
<td style="text-align:left">当图片载入完毕时，发布到 AppService 的事件名，事件对象 event.detail = {<strong>height:'图片高度 px', width:'图片宽度 px</strong>'}</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p><strong>Tips</strong></p>
<ul>
<li>✍️**<code v-pre>&lt;image&gt;</code> 组件默认宽度 300px、高度 225px**；<code v-pre>app-nvue平台，暂时默认为屏幕宽度</code></li>
<li><code v-pre>src</code> 仅支持相对路径、绝对路径，支持 base64 码；</li>
<li>🦋<strong>页面结构复杂，css 样式太多的情况，使用 image 可能导致样式生效较慢，出现 “闪一下” 的情况，此时设置 <code v-pre>image{will-change: transform}</code> ,可优化此问题。</strong></li>
<li>自定义组件里面使用 <code v-pre>&lt;image&gt;</code>时，若 <code v-pre>src</code> 使用相对路径可能出现路径查找失败的情况，故【<strong>建议使用绝对路径</strong>】</li>
<li>webp 格式的图片在 Android 上是内置支持的。iOS 上不同平台不一样，具体如下：app-vue 下，iOS 不支持；app-nvue 下，iOS 支持；微信小程序 2.9.0 起，iOS 支持。</li>
<li>🐙svg 格式的图片在不同的平台支持情况不同。具体为：app-nvue 不支持 svg 格式的图片，【<strong>小程序上 svg 只支持网络地址</strong>】</li>
</ul>
<p><strong>mode 有效值：</strong></p>
<p>✍️ 个人观点：综合下述，<strong><span style="color:#037cd5">aspectFit 、widthFix</span>属性值应该是最常用的，或者自定义修改样式</strong></p>
<p>mode 有 14 种模式，其中 5 种是缩放模式，9 种是裁剪模式。</p>
<table>
<thead>
<tr>
<th style="text-align:left">模式</th>
<th style="text-align:left">值</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">缩放</td>
<td style="text-align:left">scaleToFill</td>
<td style="text-align:left">不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素</td>
</tr>
<tr>
<td style="text-align:left">缩放</td>
<td style="text-align:left">aspectFit</td>
<td style="text-align:left">保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。</td>
</tr>
<tr>
<td style="text-align:left">缩放</td>
<td style="text-align:left">aspectFill</td>
<td style="text-align:left">保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。</td>
</tr>
<tr>
<td style="text-align:left">缩放</td>
<td style="text-align:left">widthFix</td>
<td style="text-align:left">宽度不变，高度自动变化，保持原图宽高比不变</td>
</tr>
<tr>
<td style="text-align:left">缩放</td>
<td style="text-align:left">heightFix</td>
<td style="text-align:left">高度不变，宽度自动变化，保持原图宽高比不变 <strong>App 和 H5 平台 HBuilderX 2.9.3+ 支持、微信小程序需要基础库 2.10.3</strong></td>
</tr>
<tr>
<td style="text-align:left">裁剪</td>
<td style="text-align:left">top</td>
<td style="text-align:left">不缩放图片，只显示图片的顶部区域</td>
</tr>
<tr>
<td style="text-align:left">裁剪</td>
<td style="text-align:left">bottom</td>
<td style="text-align:left">不缩放图片，只显示图片的底部区域</td>
</tr>
<tr>
<td style="text-align:left">裁剪</td>
<td style="text-align:left">center</td>
<td style="text-align:left">不缩放图片，只显示图片的中间区域</td>
</tr>
<tr>
<td style="text-align:left">裁剪</td>
<td style="text-align:left">left</td>
<td style="text-align:left">不缩放图片，只显示图片的左边区域</td>
</tr>
<tr>
<td style="text-align:left">裁剪</td>
<td style="text-align:left">right</td>
<td style="text-align:left">不缩放图片，只显示图片的右边区域</td>
</tr>
<tr>
<td style="text-align:left">裁剪</td>
<td style="text-align:left">top left</td>
<td style="text-align:left">不缩放图片，只显示图片的左上边区域</td>
</tr>
<tr>
<td style="text-align:left">裁剪</td>
<td style="text-align:left">top right</td>
<td style="text-align:left">不缩放图片，只显示图片的右上边区域</td>
</tr>
<tr>
<td style="text-align:left">裁剪</td>
<td style="text-align:left">bottom left</td>
<td style="text-align:left">不缩放图片，只显示图片的左下边区域</td>
</tr>
<tr>
<td style="text-align:left">裁剪</td>
<td style="text-align:left">bottom right</td>
<td style="text-align:left">不缩放图片，只显示图片的右下边区域</td>
</tr>
</tbody>
</table>
<h2 id="uni-app-中的样式" tabindex="-1"><a class="header-anchor" href="#uni-app-中的样式" aria-hidden="true">#</a> uni-app 中的样式</h2>
<p><code v-pre>uni-app</code> 支持的通用 css 单位包括 px、rpx <a href="https://uniapp.dcloud.io/tutorial/syntax-css.html#css-%E6%94%AF%E6%8C%81" target="_blank" rel="noopener noreferrer">详细参考<ExternalLinkIcon/></a></p>
<ul>
<li>
<p>px 即屏幕像素</p>
</li>
<li>
<p>🍺rpx 即<strong>响应式 px</strong>，一种根据屏幕宽度自适应的动态单位。以 750 宽的屏幕为基准，750rpx 恰好为屏幕宽度。屏幕变宽，rpx 实际显示效果会等比放大，具体配置参考：<a href="https://uniapp.dcloud.io/collocation/pages#globalstyle" target="_blank" rel="noopener noreferrer">rpx 计算配置<ExternalLinkIcon/></a> 。</p>
</li>
<li>
<p><code v-pre>uni-app</code> 规定屏幕基准宽度 750rpx</p>
</li>
<li>
<p>若设计稿宽度为 750px，元素 A 在设计稿上的宽度为 100px，那么元素 A 在 <code v-pre>uni-app</code> 里面的宽度应该设为：<code v-pre>750 * 100 / 750</code>，结果为：100rpx</p>
<p>开发者可以通过设计稿基准宽度计算页面元素 rpx 值，设计稿 1px 与框架样式 1rpx 转换公式如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">设计稿 1px / 设计稿基准宽度 = 框架样式 1rpx / 750rpx</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>换言之，页面元素宽度在 <code v-pre>uni-app</code> 中的宽度计算公式：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">🍸：750 * 元素在设计稿中的宽度 / 设计稿基准宽度</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<p>vue 页面支持下面这些普通 H5 单位，但在 nvue 里不支持：</p>
<ul>
<li>rem 根字体大小可以通过 <a href="https://uniapp.dcloud.io/component/page-meta#page-meta" target="_blank" rel="noopener noreferrer">page-meta<ExternalLinkIcon/></a> 配置</li>
<li>vh ，视窗高度，1vh 等于视窗高度的 1%</li>
<li>vw ，视窗宽度，1vw 等于视窗宽度的 1%</li>
</ul>
<p>使用<code v-pre> @import url('');</code>语句可以导入外联样式文件，<code v-pre>@import </code>后面跟着导入文件的【<strong>相对路径</strong>】，使用<code v-pre>;</code>表示语句的结束</p>
<h4 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h4>
<blockquote>
<p><strong>🧦 支持基本常用的 class、id、元素 选择器</strong></p>
<p><strong>🌵 在 uni-app 不支持使用 * 选择器</strong></p>
<p><strong>🧃page 相当于 body 节点</strong></p>
</blockquote>
<h4 id="字体文件" tabindex="-1"><a class="header-anchor" href="#字体文件" aria-hidden="true">#</a> 字体文件</h4>
<p>与 web 开发相似，注意：</p>
<blockquote>
<p><strong>🗺️ 文件小于 40kb uni-app 自动转化为 base64 格式</strong></p>
<p><strong>🌴 大于等于 40kb 需要开发者手动转化，否则不生效</strong></p>
<p><strong>🧃 推荐使用<code v-pre>~@</code>开头的绝对路径</strong></p>
</blockquote>
<h4 id="scss-预编译" tabindex="-1"><a class="header-anchor" href="#scss-预编译" aria-hidden="true">#</a> Scss 预编译</h4>
<p>只需要在 HBuilderX 插件市场安装该插件即可</p>
<h4 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h4>
<p>开发者可以在<code v-pre>uni.scss</code>全局文件中定义 scss 样式变量，在其它地方使用即可</p>
<h2 id="数据绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定" aria-hidden="true">#</a> 数据绑定</h2>
<p>🗺️ 数据绑定及事件处理同 Vue.js 规范</p>
<h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2>
<h3 id="应用生命周期" tabindex="-1"><a class="header-anchor" href="#应用生命周期" aria-hidden="true">#</a> 应用生命周期</h3>
<p><code v-pre>uni-app</code> 支持如下应用生命周期函数( <strong>在 App.vue 文件中定义</strong> )：<a href="https://uniapp.dcloud.io/tutorial/page.html#%E9%A1%B5%E9%9D%A2%E7%AE%80%E4%BB%8B" target="_blank" rel="noopener noreferrer">详细参考<ExternalLinkIcon/></a></p>
<table>
<thead>
<tr>
<th>函数名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>onLaunch</td>
<td>当<code v-pre>uni-app</code>初始化完成时触发( 全局只触发一次 )</td>
</tr>
<tr>
<td>onShow</td>
<td>当<code v-pre>uni-app</code>启动，或从前台进入后台显示</td>
</tr>
<tr>
<td>onHide</td>
<td>当<code v-pre>uni-app</code>从前台进入后台隐藏</td>
</tr>
<tr>
<td>onError</td>
<td>当<code v-pre>uni-app</code>报错时触发</td>
</tr>
</tbody>
</table>
<h3 id="页面生命周期" tabindex="-1"><a class="header-anchor" href="#页面生命周期" aria-hidden="true">#</a> 页面生命周期</h3>
<p><code v-pre>uni-app</code> 支持如下页面生命周期函数：</p>
<table>
<thead>
<tr>
<th style="text-align:left">函数名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">onLoad</td>
<td style="text-align:left">监听页面加载，<strong>其参数为上个页面传递的数据，参数类型为 Object（用于页面传参）</strong>，参考<a href="https://uniapp.dcloud.io/api/router#navigateto" target="_blank" rel="noopener noreferrer">示例<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onShow</td>
<td style="text-align:left">监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onReady</td>
<td style="text-align:left">监听页面<strong>初次渲染完成</strong>。注意如果渲染速度快，会在页面进入动画完成前触发</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onHide</td>
<td style="text-align:left">监听页面隐藏</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onUnload</td>
<td style="text-align:left">监听页面卸载</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onResize</td>
<td style="text-align:left">监听窗口尺寸变化</td>
<td style="text-align:left">App、微信小程序、快手小程序</td>
</tr>
<tr>
<td style="text-align:left">onPullDownRefresh</td>
<td style="text-align:left">监听用户下拉动作，一般用于下拉刷新</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onReachBottom</td>
<td style="text-align:left">页面滚动到底部的事件（不是 scroll-view 滚到底），<strong>常用于下拉下一页数据</strong></td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<blockquote>
<p>🌵**<code v-pre>onReachBottom</code>使用注意 可在 pages.json 里定义具体页面底部的触发距离<a href="https://uniapp.dcloud.io/collocation/pages#globalstyle" target="_blank" rel="noopener noreferrer">onReachBottomDistance<ExternalLinkIcon/></a>，比如设为 50，那么滚动页面到距离底部 50px 时，就会触发 onReachBottom 事件**</p>
<p>🍐<strong>onShow 与 onHide 会触发多次</strong></p>
</blockquote>
<h5 id="下拉刷新" tabindex="-1"><a class="header-anchor" href="#下拉刷新" aria-hidden="true">#</a> 下拉刷新</h5>
<p>1、可在 pages.json-pages 下自定义该页面的下拉刷新配置</p>
<p>2、uni.startPullDownRefresh({})，开启下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。</p>
<blockquote>
<p>🥬 当处理完数据刷新后，<code v-pre>uni.stopPullDownRefresh</code> 可以停止当前页面的下拉刷新。</p>
</blockquote>
<h2 id="网络请求" tabindex="-1"><a class="header-anchor" href="#网络请求" aria-hidden="true">#</a> 网络请求</h2>
<h3 id="uni-request-option" tabindex="-1"><a class="header-anchor" href="#uni-request-option" aria-hidden="true">#</a> uni.request({option})</h3>
<blockquote>
<p>在各个小程序平台运行时，网络相关的 API 在使用前需要配置域名白名单</p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205211331685.png" alt="" loading="lazy"></p>
</blockquote>
<p><strong>option 参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">默认值</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">url</td>
<td style="text-align:left">String</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">开发者服务器接口地址</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">data</td>
<td style="text-align:left">Object/String/ArrayBuffer</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">请求的参数</td>
<td style="text-align:left">App 3.3.7 以下不支持 ArrayBuffer 类型</td>
</tr>
<tr>
<td style="text-align:left">header</td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">设置请求的 header，header 中不能设置 Referer。</td>
<td style="text-align:left">App、H5 端会自动带上 cookie，且 H5 端不可手动修改</td>
</tr>
<tr>
<td style="text-align:left">method</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">有效值详见下方说明</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">timeout</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">否</td>
<td style="text-align:left">60000</td>
<td style="text-align:left">超时时间，单位 ms</td>
<td style="text-align:left">H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序</td>
</tr>
<tr>
<td style="text-align:left">dataType</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">json</td>
<td style="text-align:left">如果设为 json，会尝试对返回的数据做一次 JSON.parse</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">responseType</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">text</td>
<td style="text-align:left">设置响应的数据类型。合法值：text、arraybuffer</td>
<td style="text-align:left">支付宝小程序不支持</td>
</tr>
<tr>
<td style="text-align:left">sslVerify</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">否</td>
<td style="text-align:left">true</td>
<td style="text-align:left">验证 ssl 证书</td>
<td style="text-align:left">仅 App 安卓端支持（HBuilderX 2.3.3+），不支持离线打包</td>
</tr>
<tr>
<td style="text-align:left">withCredentials</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">否</td>
<td style="text-align:left">false</td>
<td style="text-align:left">跨域请求时是否携带凭证（cookies）</td>
<td style="text-align:left">仅 H5 支持（HBuilderX 2.6.15+）</td>
</tr>
<tr>
<td style="text-align:left">firstIpv4</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">否</td>
<td style="text-align:left">false</td>
<td style="text-align:left">DNS 解析时优先使用 ipv4</td>
<td style="text-align:left">仅 App-Android 支持 (HBuilderX 2.8.0+)</td>
</tr>
<tr>
<td style="text-align:left">success</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">收到开发者服务器成功返回的回调函数</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">fail</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">接口调用失败的回调函数</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">complete</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">接口调用结束的回调函数（调用成功、失败都会执行）</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<h2 id="数据缓存" tabindex="-1"><a class="header-anchor" href="#数据缓存" aria-hidden="true">#</a> 数据缓存</h2>
<h3 id="uni-setstorage" tabindex="-1"><a class="header-anchor" href="#uni-setstorage" aria-hidden="true">#</a> uni.setStorage({})</h3>
<p>将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，<strong>这是一个异步接口</strong></p>
<p><strong>option 参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">key</td>
<td style="text-align:left">String</td>
<td style="text-align:left">是</td>
<td style="text-align:left">本地缓存中的指定的 key</td>
</tr>
<tr>
<td style="text-align:left">data</td>
<td style="text-align:left">Any</td>
<td style="text-align:left">是</td>
<td style="text-align:left">需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象</td>
</tr>
<tr>
<td style="text-align:left">success</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用成功的回调函数</td>
</tr>
<tr>
<td style="text-align:left">fail</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用失败的回调函数</td>
</tr>
<tr>
<td style="text-align:left">complete</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用结束的回调函数（调用成功、失败都会执行）</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-constant)">uni</span><span style="color: var(--shiki-token-function)">.setStorage</span><span style="color: var(--shiki-color-text)">({</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	key</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;storage_key&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	data</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;[{1},{2},{3}]&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-function)">success</span><span style="color: var(--shiki-color-text)">() {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-constant)">console</span><span style="color: var(--shiki-token-function)">.log</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;success&#39;</span><span style="color: var(--shiki-color-text)">);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	}</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-setstoragesync" tabindex="-1"><a class="header-anchor" href="#uni-setstoragesync" aria-hidden="true">#</a> uni.setStorageSync()</h3>
<p>将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，<strong>这是一个同步接口</strong></p>
<p><strong>参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">key</td>
<td style="text-align:left">String</td>
<td style="text-align:left">是</td>
<td style="text-align:left">本地缓存中的指定的 key</td>
</tr>
<tr>
<td style="text-align:left">data</td>
<td style="text-align:left">Any</td>
<td style="text-align:left">是</td>
<td style="text-align:left">需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-keyword)">try</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-constant)">uni</span><span style="color: var(--shiki-token-function)">.setStorageSync</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;storage_key&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;hello&#39;</span><span style="color: var(--shiki-color-text)">);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">} </span><span style="color: var(--shiki-token-keyword)">catch</span><span style="color: var(--shiki-color-text)"> (e) {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-comment)">// error</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-getstoragev" tabindex="-1"><a class="header-anchor" href="#uni-getstoragev" aria-hidden="true">#</a> uni.getStoragev({})</h3>
<p>从本地缓存中异步获取指定 key 对应的内容</p>
<p><strong>option 参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">key</td>
<td style="text-align:left">String</td>
<td style="text-align:left">是</td>
<td style="text-align:left">本地缓存中的指定的 key</td>
</tr>
<tr data:="" key="" 对应的内容="">
<td style="text-align:left">success</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">是</td>
<td style="text-align:left">接口调用的回调函数，res =</td>
</tr>
<tr>
<td style="text-align:left">fail</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用失败的回调函数</td>
</tr>
<tr>
<td style="text-align:left">complete</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用结束的回调函数（调用成功、失败都会执行）</td>
</tr>
</tbody>
</table>
<p><strong>success 返回参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">data</td>
<td style="text-align:left">Any</td>
<td style="text-align:left">key 对应的内容</td>
</tr>
</tbody>
</table>
<p>其它的 API 使用方法基本同上</p>
<h3 id="uni-getstoragesync" tabindex="-1"><a class="header-anchor" href="#uni-getstoragesync" aria-hidden="true">#</a> uni.getStorageSync</h3>
<h3 id="uni-removestorage" tabindex="-1"><a class="header-anchor" href="#uni-removestorage" aria-hidden="true">#</a> uni.removeStorage</h3>
<h3 id="uni-removestoragesync" tabindex="-1"><a class="header-anchor" href="#uni-removestoragesync" aria-hidden="true">#</a> uni.removeStorageSync</h3>
<h2 id="图片的上传与预览" tabindex="-1"><a class="header-anchor" href="#图片的上传与预览" aria-hidden="true">#</a> 图片的上传与预览</h2>
<p><a href="https://uniapp.dcloud.io/api/media/image.html" target="_blank" rel="noopener noreferrer">🌵 详细参考<ExternalLinkIcon/></a></p>
<h3 id="uni-chooseimage-option" tabindex="-1"><a class="header-anchor" href="#uni-chooseimage-option" aria-hidden="true">#</a> uni.chooseImage({option})</h3>
<p>从本地相册选择图片或使用相机拍照</p>
<p><strong>参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">count</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">否</td>
<td style="text-align:left">最多可以选择的图片张数，默认 9</td>
<td style="text-align:left">见下方说明</td>
</tr>
<tr>
<td style="text-align:left"><strong>sizeType</strong>🧃</td>
<td style="text-align:left"><strong><code v-pre>Array&lt;String&gt;</code></strong></td>
<td style="text-align:left"><strong>否</strong></td>
<td style="text-align:left"><strong>original 原图，compressed 压缩图，默认二者都有</strong></td>
<td style="text-align:left">App、微信小程序、支付宝小程序、百度小程序</td>
</tr>
<tr>
<td style="text-align:left">extension</td>
<td style="text-align:left"><code v-pre>Array&lt;String&gt;</code></td>
<td style="text-align:left">否</td>
<td style="text-align:left">根据文件拓展名过滤，每一项都不能是空字符串。默认不过滤。</td>
<td style="text-align:left">H5(HBuilder X2.9.9+)</td>
</tr>
<tr>
<td style="text-align:left"><strong>sourceType</strong>🌴</td>
<td style="text-align:left"><strong><code v-pre>Array&lt;String&gt;</code></strong></td>
<td style="text-align:left"><strong>否</strong></td>
<td style="text-align:left"><strong>album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项</strong></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">crop</td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left">图像裁剪参数，设置后 sizeType 失效</td>
<td style="text-align:left">App 3.1.19+</td>
</tr>
<tr>
<td style="text-align:left">success</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">是</td>
<td style="text-align:left"><strong>成功则返回图片的本地文件路径列表 tempFilePaths</strong></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">fail</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用失败的回调函数</td>
<td style="text-align:left">小程序、App</td>
</tr>
<tr>
<td style="text-align:left">complete</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用结束的回调函数（调用成功、失败都会执行）</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p><strong>crop 参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">quality</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">否</td>
<td style="text-align:left">取值范围为 1-100，数值越小，质量越低（<strong>仅对 jpg 格式有效</strong>）。默认值为 80。</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">width</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">是</td>
<td style="text-align:left">裁剪的宽度，单位为 px，用于计算裁剪宽高比。</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">height</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">是</td>
<td style="text-align:left">裁剪的高度，单位为 px，用于计算裁剪宽高比。</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">resize</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否将 width 和 height 作为裁剪保存图片真实的像素值。默认值为 true。注：设置为 false 时在裁剪编辑界面显示图片的像素值，设置为 true 时不显示</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p><strong>Tips</strong></p>
<ul>
<li>🥃 可以通过用户授权 API 来判断用户是否给应用授予相册或摄像头的访问权限<a href="https://uniapp.dcloud.io/api/other/authorize" target="_blank" rel="noopener noreferrer">详情参考<ExternalLinkIcon/></a></li>
<li>🍺 选择照片大多为了上传，uni ui 封装了更完善的<a href="https://ext.dcloud.net.cn/plugin?id=4079" target="_blank" rel="noopener noreferrer">uni-file-picker 组件<ExternalLinkIcon/></a>，文件选择、上传到 uniCloud 的免费存储和 cdn 中，一站式集成。强烈推荐使用。</li>
</ul>
<p><strong>注：文件的临时路径，在应用本次启动期间可以正常使用，如需持久保存，需在主动调用 <a href="https://uniapp.dcloud.io/api/file/file#savefile" target="_blank" rel="noopener noreferrer">uni.saveFile<ExternalLinkIcon/></a>，在应用下次启动时才能访问得到。</strong></p>
<p><strong>success 返回参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">tempFilePaths</td>
<td style="text-align:left"><code v-pre>Array&lt;String&gt;</code></td>
<td style="text-align:left">图片的本地文件路径列表</td>
</tr>
<tr>
<td style="text-align:left">tempFiles</td>
<td style="text-align:left"><code v-pre>Array&lt;Object&gt;、Array&lt;File&gt;</code></td>
<td style="text-align:left">图片的本地文件列表，每一项是一个 File 对象</td>
</tr>
</tbody>
</table>
<p><strong>File 对象结构如下</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">path</td>
<td style="text-align:left">String</td>
<td style="text-align:left">本地文件路径</td>
</tr>
<tr>
<td style="text-align:left">size</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">本地文件大小，单位：B</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">String</td>
<td style="text-align:left">包含扩展名的文件名称，仅 H5 支持</td>
</tr>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">String</td>
<td style="text-align:left">文件类型，仅 H5 支持</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-constant)">uni</span><span style="color: var(--shiki-token-function)">.chooseImage</span><span style="color: var(--shiki-color-text)">({</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	count</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">6</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">//默认9</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	sizeType</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> [</span><span style="color: var(--shiki-token-string-expression)">&#39;original&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;compressed&#39;</span><span style="color: var(--shiki-color-text)">]</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">//可以指定是原图还是压缩图，默认二者都有</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	sourceType</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> [</span><span style="color: var(--shiki-token-string-expression)">&#39;album&#39;</span><span style="color: var(--shiki-color-text)">]</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">//从相册选择</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-function)">success</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">function</span><span style="color: var(--shiki-color-text)"> (res) {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-constant)">console</span><span style="color: var(--shiki-token-function)">.log</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">JSON</span><span style="color: var(--shiki-token-function)">.stringify</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">res</span><span style="color: var(--shiki-color-text)">.tempFilePaths));</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	}</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-previewimage-option" tabindex="-1"><a class="header-anchor" href="#uni-previewimage-option" aria-hidden="true">#</a> uni.previewImage({option})</h3>
<p>预览图片</p>
<p><strong>option 参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">current</td>
<td style="text-align:left">String/Number</td>
<td style="text-align:left">详见下方说明</td>
<td style="text-align:left">详见下方说明</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">urls</td>
<td style="text-align:left"><code v-pre>Array&lt;String&gt;</code></td>
<td style="text-align:left">是</td>
<td style="text-align:left">需要预览的图片链接列表</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">indicator</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">图片指示器样式，可取值：&quot;default&quot; - 底部圆点指示器； &quot;number&quot; - 顶部数字指示器； &quot;none&quot; - 不显示指示器。</td>
<td style="text-align:left">App</td>
</tr>
<tr>
<td style="text-align:left">loop</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否可循环预览，默认值为 false</td>
<td style="text-align:left">App</td>
</tr>
<tr>
<td style="text-align:left">longPressActions</td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left">长按图片显示操作菜单，如不填默认为<strong>保存相册</strong></td>
<td style="text-align:left">App 1.9.5+</td>
</tr>
<tr>
<td style="text-align:left">success</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用成功的回调函数</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">fail</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用失败的回调函数</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">complete</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用结束的回调函数（调用成功、失败都会执行）</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<h2 id="条件注释-跨端兼容" tabindex="-1"><a class="header-anchor" href="#条件注释-跨端兼容" aria-hidden="true">#</a> 条件注释-跨端兼容</h2>
<p><strong>条件编译是用特殊的注释作为标记，在编译时根据这些特殊注释，将注释里面的代码编译到不同平台</strong></p>
<p>🛤️<strong>写法</strong>：以 <code v-pre>#ifdef</code>加平台标识开头，以<code v-pre>endif</code>结尾</p>
<p>🥃**写法：**以 <code v-pre>#ifdef</code> 或 <code v-pre>#ifndef</code>加 <code v-pre>%PLATFORM%</code> 开头，以 <code v-pre>#endif </code>结尾。</p>
<ul>
<li>#ifdef：if defined 仅在某平台存在</li>
<li>#ifndef：if not defined 除了某平台均存在</li>
<li><strong>%PLATFORM%</strong>：平台名称</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-comment)">&lt;!-- #ifdef H5 --&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">view</span><span style="color: var(--shiki-color-text)">&gt; 仅在H5中显示🎲 &lt;/</span><span style="color: var(--shiki-token-string-expression)">view</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-token-comment)">&lt;!-- #endif --&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-comment)">// #ifdef H5</span></span>
<span class="line"><span style="color: var(--shiki-token-constant)">console</span><span style="color: var(--shiki-token-function)">.log</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;H5🥬&#39;</span><span style="color: var(--shiki-color-text)">);</span></span>
<span class="line"><span style="color: var(--shiki-token-comment)">// #endif</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong></p>
<ul>
<li>条件编译是利用注释实现的，在不同语法里注释写法不一样，js 使用 <code v-pre>// 注释</code>、css 使用 <code v-pre>/* 注释 */</code>、vue/nvue 模板里使用 <code v-pre>&lt;!-- 注释 --&gt;</code>；</li>
<li>条件编译 APP-PLUS 包含 APP-NVUE 和 APP-VUE，APP-PLUS-NVUE 和 APP-NVUE 没什么区别，为了简写后面出了 APP-NVUE ；</li>
<li>使用条件编译请保证<code v-pre>编译前</code>和<code v-pre>编译后</code>文件的正确性，比如 json 文件中不能有多余的逗号；</li>
<li><code v-pre>VUE3</code> 需要在项目的 <code v-pre>manifest.json</code> 文件根节点配置 <code v-pre>&quot;vueVersion&quot; : &quot;3&quot;</code></li>
</ul>
<table>
<thead>
<tr>
<th>条件编译写法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>#ifdef <strong>APP-PLUS</strong> 需条件编译的代码 #endif</td>
<td>仅出现在 App 平台下的代码</td>
</tr>
<tr>
<td>#ifndef <strong>H5</strong> 需条件编译的代码 #endif</td>
<td>除了 H5 平台，其它平台均存在的代码</td>
</tr>
<tr>
<td>#ifdef <strong>H5</strong> || <strong>MP-WEIXIN</strong> 需条件编译的代码 #endif</td>
<td>在 H5 平台或微信小程序平台存在的代码（这里只有||，不可能出现&amp;&amp;，因为没有交集）</td>
</tr>
</tbody>
</table>
<p><strong>%PLATFORM%</strong> <strong>可取值如下：</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">生效条件</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">VUE3</td>
<td style="text-align:left">HBuilderX 3.2.0+ <a href="https://ask.dcloud.net.cn/article/37834" target="_blank" rel="noopener noreferrer">详情(opens new window)<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">APP-PLUS</td>
<td style="text-align:left">App</td>
</tr>
<tr>
<td style="text-align:left">APP-PLUS-NVUE 或 APP-NVUE</td>
<td style="text-align:left">App nvue</td>
</tr>
<tr>
<td style="text-align:left">H5</td>
<td style="text-align:left">H5</td>
</tr>
<tr>
<td style="text-align:left">MP-WEIXIN</td>
<td style="text-align:left">微信小程序</td>
</tr>
<tr>
<td style="text-align:left">MP-ALIPAY</td>
<td style="text-align:left">支付宝小程序</td>
</tr>
<tr>
<td style="text-align:left">MP-BAIDU</td>
<td style="text-align:left">百度小程序</td>
</tr>
<tr>
<td style="text-align:left">MP-TOUTIAO</td>
<td style="text-align:left">字节跳动小程序</td>
</tr>
<tr>
<td style="text-align:left">MP-LARK</td>
<td style="text-align:left">飞书小程序</td>
</tr>
<tr>
<td style="text-align:left">MP-QQ</td>
<td style="text-align:left">QQ 小程序</td>
</tr>
<tr>
<td style="text-align:left">MP-KUAISHOU</td>
<td style="text-align:left">快手小程序</td>
</tr>
<tr>
<td style="text-align:left">MP-JD</td>
<td style="text-align:left">京东小程序</td>
</tr>
<tr>
<td style="text-align:left">MP-360</td>
<td style="text-align:left">360 小程序</td>
</tr>
<tr>
<td style="text-align:left">MP</td>
<td style="text-align:left">微信小程序/支付宝小程序/百度小程序/字节跳动小程序/飞书小程序/QQ 小程序/360 小程序</td>
</tr>
<tr>
<td style="text-align:left">QUICKAPP-WEBVIEW</td>
<td style="text-align:left">快应用通用(包含联盟、华为)</td>
</tr>
<tr>
<td style="text-align:left">QUICKAPP-WEBVIEW-UNION</td>
<td style="text-align:left">快应用联盟</td>
</tr>
<tr>
<td style="text-align:left">QUICKAPP-WEBVIEW-HUAWEI</td>
<td style="text-align:left">快应用华为</td>
</tr>
</tbody>
</table>
<p><strong>支持的文件</strong></p>
<ul>
<li>.vue</li>
<li>.js</li>
<li>.css</li>
<li>pages.json</li>
<li>各预编译语言文件，如：.scss、.less、.stylus、.ts、.pug</li>
</ul>
<h2 id="导航跳转-and-传参" tabindex="-1"><a class="header-anchor" href="#导航跳转-and-传参" aria-hidden="true">#</a> 导航跳转 and 传参</h2>
<h3 id="navigator-声明式跳转" tabindex="-1"><a class="header-anchor" href="#navigator-声明式跳转" aria-hidden="true">#</a> navigator-声明式跳转</h3>
<p>该组件类似 HTML 中的<code v-pre>&lt;a&gt;</code>组件，<strong>但只能跳转本地页面，目标页面必须在<code v-pre>pages.json</code>中注册</strong></p>
<p>该组件的功能有 API 方式，另见：<a href="https://uniapp.dcloud.io/api/router?id=navigateto" target="_blank" rel="noopener noreferrer">详细参考<ExternalLinkIcon/></a></p>
<p><strong>属性说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">默认值</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">url</td>
<td style="text-align:left">String</td>
<td style="text-align:left"></td>
<td style="text-align:left">应用内的跳转链接，值为相对路径或绝对路径，如：&quot;../first/first&quot;，&quot;/pages/first/first&quot;，注意不能加 <code v-pre>.vue</code> 后缀</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">open-type</td>
<td style="text-align:left">String</td>
<td style="text-align:left">navigate</td>
<td style="text-align:left">跳转方式</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">delta</td>
<td style="text-align:left">Number</td>
<td style="text-align:left"></td>
<td style="text-align:left">当 open-type 为 'navigateBack' 时有效，表示回退的层数</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">animation-type</td>
<td style="text-align:left">String</td>
<td style="text-align:left">pop-in/out</td>
<td style="text-align:left">当 open-type 为 navigate、navigateBack 时有效，窗口的显示/关闭动画效果，详见：<a href="https://uniapp.dcloud.io/api/router#animation" target="_blank" rel="noopener noreferrer">窗口动画<ExternalLinkIcon/></a></td>
<td style="text-align:left">App</td>
</tr>
<tr>
<td style="text-align:left">animation-duration</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">300</td>
<td style="text-align:left">当 open-type 为 navigate、navigateBack 时有效，窗口显示/关闭动画的持续时间。</td>
<td style="text-align:left">App</td>
</tr>
<tr>
<td style="text-align:left">hover-class</td>
<td style="text-align:left">String</td>
<td style="text-align:left">navigator-hover</td>
<td style="text-align:left">指定点击时的样式类，当 hover-class=&quot;none&quot;时，没有点击态效果</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">hover-stop-propagation</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">false</td>
<td style="text-align:left">指定是否阻止本节点的祖先节点出现点击态</td>
<td style="text-align:left">微信小程序</td>
</tr>
<tr>
<td style="text-align:left">hover-start-time</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">50</td>
<td style="text-align:left">按住后多久出现点击态，单位毫秒</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">hover-stay-time</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">600</td>
<td style="text-align:left">手指松开后点击态保留时间，单位毫秒</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">target</td>
<td style="text-align:left">String</td>
<td style="text-align:left">self</td>
<td style="text-align:left">在哪个小程序目标上发生跳转，默认当前小程序，值域 self/miniProgram</td>
<td style="text-align:left">微信 2.0.7+、百度 2.5.2+、QQ</td>
</tr>
</tbody>
</table>
<p><strong>open-type 有效值</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">navigate</td>
<td style="text-align:left">对应 uni.navigateTo 的功能</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">redirect🥬</td>
<td style="text-align:left">对应 uni.redirectTo 的功能( 没有退回按钮<code v-pre>&lt;</code>卸载页面)</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">switchTab</td>
<td style="text-align:left">对应 uni.switchTab 的功能</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">reLaunch</td>
<td style="text-align:left">对应 uni.reLaunch 的功能</td>
<td style="text-align:left">字节跳动小程序与飞书小程序不支持</td>
</tr>
<tr>
<td style="text-align:left">navigateBack</td>
<td style="text-align:left">对应 uni.navigateBack 的功能</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">exit🥦</td>
<td style="text-align:left">退出小程序，target=&quot;miniProgram&quot;时生效</td>
<td style="text-align:left">微信 2.1.0+、百度 2.5.2+、QQ1.4.7+</td>
</tr>
</tbody>
</table>
<p><strong>注意</strong></p>
<ul>
<li>🥃 跳转 tabbar 页面，必须设置<code v-pre>open-type=&quot;switchTab&quot;</code></li>
<li>navigator-hover 默认为 {background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}, <code v-pre>&lt;navigator&gt;</code> 的子节点背景色应为透明色。</li>
<li>navigator-<code v-pre>open-type</code>属性 如果使用对应的值，则对应值的功能会高于对应跳转路径。</li>
<li><a href="https://ext.dcloud.net.cn/plugin?id=1182" target="_blank" rel="noopener noreferrer">uLink 组件 (opens new window)<ExternalLinkIcon/></a>是 navigator 组件的增强版，样式上自带下划线，功能上支持打开在线网页、其他 App 的 schema、mailto 发邮件、tel 打电话。</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	&lt;</span><span style="color: var(--shiki-token-string-expression)">view</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		&lt;</span><span style="color: var(--shiki-token-string-expression)">view</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">class</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;page-body&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			&lt;</span><span style="color: var(--shiki-token-string-expression)">view</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">class</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;btn-area&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				&lt;</span><span style="color: var(--shiki-token-string-expression)">navigator</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">					</span><span style="color: var(--shiki-token-function)">url</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;nav/navigate?title=navigate&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">					</span><span style="color: var(--shiki-token-function)">hover-class</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;navigator-hover&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">					&lt;</span><span style="color: var(--shiki-token-string-expression)">button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;default&quot;</span><span style="color: var(--shiki-color-text)">&gt;跳转到新页面&lt;/</span><span style="color: var(--shiki-token-string-expression)">button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				&lt;/</span><span style="color: var(--shiki-token-string-expression)">navigator</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				&lt;</span><span style="color: var(--shiki-token-string-expression)">navigator</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">					</span><span style="color: var(--shiki-token-function)">url</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;redirect/redirect?title=redirect&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">					</span><span style="color: var(--shiki-token-function)">open-type</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;redirect&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">					&lt;</span><span style="color: var(--shiki-token-string-expression)">button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;default&quot;</span><span style="color: var(--shiki-color-text)">&gt;在当前页打开&lt;/</span><span style="color: var(--shiki-token-string-expression)">button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				&lt;/</span><span style="color: var(--shiki-token-string-expression)">navigator</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				// 需要开启 switchTab 才能跳转 tab 页面</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				&lt;</span><span style="color: var(--shiki-token-string-expression)">navigator</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">					</span><span style="color: var(--shiki-token-function)">url</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;/pages/tabBar/extUI/extUI&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">					</span><span style="color: var(--shiki-token-function)">open-type</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;switchTab&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">					&lt;</span><span style="color: var(--shiki-token-string-expression)">button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;default&quot;</span><span style="color: var(--shiki-color-text)">&gt;跳转tab页面&lt;/</span><span style="color: var(--shiki-token-string-expression)">button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				&lt;/</span><span style="color: var(--shiki-token-string-expression)">navigator</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			&lt;/</span><span style="color: var(--shiki-token-string-expression)">view</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		&lt;/</span><span style="color: var(--shiki-token-string-expression)">view</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	&lt;/</span><span style="color: var(--shiki-token-string-expression)">view</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-comment)">// navigate.vue页面接受参数</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-function)">onLoad</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">function</span><span style="color: var(--shiki-color-text)"> (option) {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			</span><span style="color: var(--shiki-token-comment)">//option为object类型，会序列化上个页面传递的参数</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			</span><span style="color: var(--shiki-token-constant)">console</span><span style="color: var(--shiki-token-function)">.log</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">option</span><span style="color: var(--shiki-color-text)">.id); </span><span style="color: var(--shiki-token-comment)">//打印出上个页面传递的参数。</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			</span><span style="color: var(--shiki-token-constant)">console</span><span style="color: var(--shiki-token-function)">.log</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">option</span><span style="color: var(--shiki-color-text)">.name); </span><span style="color: var(--shiki-token-comment)">//打印出上个页面传递的参数。</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		}</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	};</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🧪url 有长度限制，太长的字符串会传递失败，可使用<a href="https://uniapp.dcloud.io/tutorial/page.html#emit" target="_blank" rel="noopener noreferrer">窗体通信<ExternalLinkIcon/></a>、<a href="https://ask.dcloud.net.cn/article/35021" target="_blank" rel="noopener noreferrer">全局变量 <ExternalLinkIcon/></a>，或<code v-pre>encodeURIComponent</code>等多种方式解决，如下为<code v-pre>encodeURIComponent</code>示例。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">navigator</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-function)">:url</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;&#39;/pages/navigate/navigate?item=&#39;+ encodeURIComponent(JSON.stringify(item))&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-string-expression)">navigator</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">// navigate.vue页面接受参数 onLoad: function (option) { const item =</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">JSON.parse(decodeURIComponent(option.item)); }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编程式跳转" tabindex="-1"><a class="header-anchor" href="#编程式跳转" aria-hidden="true">#</a> 编程式跳转</h3>
<p><a href="https://uniapp.dcloud.io/api/router.html#navigateto" target="_blank" rel="noopener noreferrer">详情参考<ExternalLinkIcon/></a></p>
<p><a href="https://uniapp.dcloud.io/api/router.html#navigateto" target="_blank" rel="noopener noreferrer">uni.navigateTo({})<ExternalLinkIcon/></a>，<strong>保留当前页面</strong>，跳转到应用内的某个页面，使用<code v-pre>uni.navigateBack</code>可以返回到原页面。</p>
<p><a href="https://uniapp.dcloud.io/api/router.html#redirectto" target="_blank" rel="noopener noreferrer">uni.redirectTo({})<ExternalLinkIcon/></a>，<strong>关闭当前页面</strong>，跳转到应用内的某个页面</p>
<p><a href="https://uniapp.dcloud.io/api/router.html#relaunch" target="_blank" rel="noopener noreferrer">uni.reLaunch({})<ExternalLinkIcon/></a>，<strong>关闭所有页面</strong>，打开到应用内的某个页面。</p>
<p><a href="https://uniapp.dcloud.io/api/router.html#switchtab" target="_blank" rel="noopener noreferrer">uni.switchTab({})<ExternalLinkIcon/></a>，<strong>跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。</strong></p>
<p><a href="https://uniapp.dcloud.io/api/router.html#navigateback" target="_blank" rel="noopener noreferrer">uni.navigateBack({})<ExternalLinkIcon/></a>，<strong>关闭当前页面，返回上一页面或多级页面。可通过 <code v-pre>getCurrentPages()</code> 获取当前的页面栈，决定需要返回几层。</strong></p>
<p><strong>option 参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">默认值</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">url</td>
<td style="text-align:left">String</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&amp;分隔；如 'path?key=value&amp;key2=value2'，path 为下一个页面的路径，下一个页面的 onLoad 函数可得到传递的参数</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">animationType</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">pop-in</td>
<td style="text-align:left">窗口显示的动画效果，详见：<a href="https://uniapp.dcloud.io/api/router#animation" target="_blank" rel="noopener noreferrer">窗口动画<ExternalLinkIcon/></a></td>
<td style="text-align:left">App</td>
</tr>
<tr>
<td style="text-align:left">animationDuration</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">否</td>
<td style="text-align:left">300</td>
<td style="text-align:left">窗口动画持续时间，单位为 ms</td>
<td style="text-align:left">App</td>
</tr>
<tr>
<td style="text-align:left">events</td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">页面间通信接口，用于监听被打开页面发送到当前页面的数据。2.8.9+ 开始支持。</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">success</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">接口调用成功的回调函数</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">fail</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">接口调用失败的回调函数</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">complete</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">接口调用结束的回调函数（调用成功、失败都会执行）</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p><strong>object.success 回调函数</strong></p>
<p><strong>参数</strong></p>
<p><strong>Object res</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>eventChannel</strong>👑</td>
<td style="text-align:left"><strong><a href="https://uniapp.dcloud.io/api/router#event-channel" target="_blank" rel="noopener noreferrer">EventChannel<ExternalLinkIcon/></a></strong></td>
<td style="text-align:left"><strong>和被打开页面进行通信</strong></td>
</tr>
</tbody>
</table>
<h3 id="传参" tabindex="-1"><a class="header-anchor" href="#传参" aria-hidden="true">#</a> 传参</h3>
<p>🧦 通过生命周期函数 <code v-pre>onLoad</code>形参可接受上一个页面传递过来的参数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-function)">onLoad</span><span style="color: var(--shiki-color-text)">(option){}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="组件创建" tabindex="-1"><a class="header-anchor" href="#组件创建" aria-hidden="true">#</a> 组件创建</h2>
<p>uni-app 组件的创建与 Vue 基本一样</p>
<p>uni-app 组件的生命周期函数与 Vue 基本一样</p>
<p>注意：🌴 需要分清楚应用、页面、组件的各自生命周期</p>
<h2 id="uni-app-组件通讯" tabindex="-1"><a class="header-anchor" href="#uni-app-组件通讯" aria-hidden="true">#</a> uni-app 组件通讯</h2>
<h3 id="uni-emit-eventname-object" tabindex="-1"><a class="header-anchor" href="#uni-emit-eventname-object" aria-hidden="true">#</a> uni.$emit(eventName,OBJECT)</h3>
<p>触发全局的自定义事件，附加参数都会传给监听器回调函数。</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>eventName</td>
<td>String</td>
<td>事件名</td>
</tr>
<tr>
<td>OBJECT</td>
<td>Object</td>
<td>触发事件携带的附加参数</td>
</tr>
</tbody>
</table>
<p><strong>代码示例</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-constant)">uni</span><span style="color: var(--shiki-token-function)">.$emit</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;update&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> { msg</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;页面更新&#39;</span><span style="color: var(--shiki-color-text)"> });</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="uni-on-eventname-callback" tabindex="-1"><a class="header-anchor" href="#uni-on-eventname-callback" aria-hidden="true">#</a> <a href="https://uniapp.dcloud.io/api/window/communication.html#on" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>uni.$on(eventName,callback)</h3>
<p>监听全局的自定义事件，事件由 <code v-pre>uni.$emit</code> 触发，回调函数会接收事件触发函数的传入参数。</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>eventName</td>
<td>String</td>
<td>事件名</td>
</tr>
<tr>
<td>callback</td>
<td>Function</td>
<td>事件的回调函数</td>
</tr>
</tbody>
</table>
<p><strong>代码示例</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-constant)">uni</span><span style="color: var(--shiki-token-function)">.$on</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;update&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">function</span><span style="color: var(--shiki-color-text)"> (data) {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-constant)">console</span><span style="color: var(--shiki-token-function)">.log</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;监听到事件来自 update ，携带参数 msg 为：&#39;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">+</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">data</span><span style="color: var(--shiki-color-text)">.msg);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-once-eventname-callback" tabindex="-1"><a class="header-anchor" href="#uni-once-eventname-callback" aria-hidden="true">#</a> <a href="https://uniapp.dcloud.io/api/window/communication.html#once" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>uni.$once(eventName,callback)</h3>
<p>监听全局的自定义事件，事件由 <code v-pre>uni.$emit</code> 触发，但仅触发一次，在第一次触发之后移除该监听器。</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>eventName</td>
<td>String</td>
<td>事件名</td>
</tr>
<tr>
<td>callback</td>
<td>Function</td>
<td>事件的回调函数</td>
</tr>
</tbody>
</table>
<p><strong>代码示例</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-constant)">uni</span><span style="color: var(--shiki-token-function)">.$once</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;update&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">function</span><span style="color: var(--shiki-color-text)"> (data) {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-constant)">console</span><span style="color: var(--shiki-token-function)">.log</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;监听到事件来自 update ，携带参数 msg 为：&#39;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">+</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">data</span><span style="color: var(--shiki-color-text)">.msg);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-off-eventname-callback" tabindex="-1"><a class="header-anchor" href="#uni-off-eventname-callback" aria-hidden="true">#</a> <a href="https://uniapp.dcloud.io/api/window/communication.html#off" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>uni.$off([eventName, callback])</h3>
<p>移除全局自定义事件监听器。</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>eventName</td>
<td>Array ＜ String ＞</td>
<td>事件名</td>
</tr>
<tr>
<td>callback</td>
<td>Function</td>
<td>事件的回调函数</td>
</tr>
</tbody>
</table>
<p><strong>Tips</strong></p>
<ul>
<li>如果 uni.$off 没有传入参数，则移除 App 级别的所有事件监听器；</li>
<li>如果只提供了事件名（eventName），则移除该事件名对应的所有监听器；</li>
<li>如果同时提供了事件与回调，则只移除这个事件回调的监听器；</li>
<li>提供的回调必须跟$on 的回调为同一个才能移除这个回调的监听器；</li>
</ul>
<p><strong>代码示例</strong></p>
<p><code v-pre>$emit</code>、<code v-pre>$on</code>、<code v-pre>$off</code>常用于跨页面、跨组件通讯，这里为了方便演示放在同一个页面</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	&lt;</span><span style="color: var(--shiki-token-string-expression)">view</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">class</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;content&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		&lt;</span><span style="color: var(--shiki-token-string-expression)">view</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">class</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;data&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			&lt;</span><span style="color: var(--shiki-token-string-expression)">text</span><span style="color: var(--shiki-color-text)">&gt;{{val}}&lt;/</span><span style="color: var(--shiki-token-string-expression)">text</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		&lt;/</span><span style="color: var(--shiki-token-string-expression)">view</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		&lt;</span><span style="color: var(--shiki-token-string-expression)">button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;primary&quot;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">@click</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;comunicationOff&quot;</span><span style="color: var(--shiki-color-text)">&gt;结束监听&lt;/</span><span style="color: var(--shiki-token-string-expression)">button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	&lt;/</span><span style="color: var(--shiki-token-string-expression)">view</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-function)">data</span><span style="color: var(--shiki-color-text)">() {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			</span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				val</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">0</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			};</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		}</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-function)">onLoad</span><span style="color: var(--shiki-color-text)">() {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			</span><span style="color: var(--shiki-token-function)">setInterval</span><span style="color: var(--shiki-color-text)">(() </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				</span><span style="color: var(--shiki-token-constant)">uni</span><span style="color: var(--shiki-token-function)">.$emit</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;add&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">					data</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">2</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				});</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			}</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1000</span><span style="color: var(--shiki-color-text)">);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			</span><span style="color: var(--shiki-token-constant)">uni</span><span style="color: var(--shiki-token-function)">.$on</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;add&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">this</span><span style="color: var(--shiki-color-text)">.add);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		}</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		methods</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			</span><span style="color: var(--shiki-token-function)">comunicationOff</span><span style="color: var(--shiki-color-text)">() {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				</span><span style="color: var(--shiki-token-constant)">uni</span><span style="color: var(--shiki-token-function)">.$off</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;add&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">this</span><span style="color: var(--shiki-color-text)">.add);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			}</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			</span><span style="color: var(--shiki-token-function)">add</span><span style="color: var(--shiki-color-text)">(e) {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">				</span><span style="color: var(--shiki-token-constant)">this</span><span style="color: var(--shiki-color-text)">.val </span><span style="color: var(--shiki-token-keyword)">+=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">e</span><span style="color: var(--shiki-color-text)">.data;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			}</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		}</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	};</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-function)">.content</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-constant)">display</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">flex</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-constant)">flex-direction</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">column</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-constant)">align-items</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">center</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-constant)">justify-content</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">center</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-function)">.data</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-constant)">text-align</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">center</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-constant)">line-height</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">40</span><span style="color: var(--shiki-token-keyword)">px</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-constant)">margin-top</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">40</span><span style="color: var(--shiki-token-keyword)">px</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-string-expression)">button</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-constant)">width</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">200</span><span style="color: var(--shiki-token-keyword)">px</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-constant)">margin</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">20</span><span style="color: var(--shiki-token-keyword)">px</span><span style="color: var(--shiki-token-constant)"> 0</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	}</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">style</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意事项</strong></p>
<ul>
<li>
<p><strong>以上触发的事件都是 App 全局级别的，跨任意组件，页面，nvue，vue 等</strong></p>
</li>
<li>
<p>使用时，注意及时销毁事件监听</p>
</li>
</ul>
<h2 id="扩展组件" tabindex="-1"><a class="header-anchor" href="#扩展组件" aria-hidden="true">#</a> 扩展组件</h2>
<h3 id="uni-ui" tabindex="-1"><a class="header-anchor" href="#uni-ui" aria-hidden="true">#</a> uni-ui</h3>
<p><a href="https://uniapp.dcloud.io/component/uniui/uni-ui.html" target="_blank" rel="noopener noreferrer">详细参考<ExternalLinkIcon/></a></p>
<h2 id="注意笔记" tabindex="-1"><a class="header-anchor" href="#注意笔记" aria-hidden="true">#</a> 注意笔记</h2>
<blockquote>
<p><strong>🎲 API 回调函数 success、fail、complete 等，this 指向问题：需要使用<code v-pre>()=&gt;{}</code> 解决</strong></p>
</blockquote>
</div></template>
