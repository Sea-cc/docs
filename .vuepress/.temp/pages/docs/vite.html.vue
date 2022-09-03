<template><div><h1 id="📖-vite-基本使用" tabindex="-1"><a class="header-anchor" href="#📖-vite-基本使用" aria-hidden="true">#</a> 📖 Vite 基本使用</h1>
<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h1>
<blockquote>
<p>现在浏览器已经支持 es module 语法，在使用的时候，只需要在 script 标签里加上 type=‘module’ 即可</p>
<p><strong>Vite 不支持 CommonJS 语法(require)，需通过插件实现支持</strong>📦</p>
<p>Vite 利用浏览器对 es module 语法的支持，让浏览器去解析基本文件；✍️ 为什么还需要 Vite？</p>
<p>如 less、vue、ts 等文件浏览器是不支持的，当使用 es module 引入一个如 lodash 的工具时，浏览器把 lodash 所有依赖都加载(对浏览器发送请求是巨大的消耗)</p>
</blockquote>
<p>🦫Webpack 依赖 express 服务器</p>
<p>🦈Vite1.x 依赖 Koa 服务器</p>
<p>🐐Vite2.x 依赖 Connect 服务器</p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202207231816610.png" alt="" loading="lazy"></p>
<h2 id="vite-对-css-的支持" tabindex="-1"><a class="header-anchor" href="#vite-对-css-的支持" aria-hidden="true">#</a> Vite 对 css 的支持</h2>
<ul>
<li>vite 可以直接支持 css 的处理，可以直接支持 css 预处理器(需要安装依赖)</li>
</ul>
<p><code v-pre>npm install less -D</code></p>
<ul>
<li>vite 直接支持 postcss 的转换(需要安装依赖)，<strong>并且配置 <code v-pre>postcss.config.js</code> 的配置文件即可</strong></li>
</ul>
<p><code v-pre>npm install postcss postcss-preset-env -D</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-comment)">/* postcss.config.js */</span></span>
<span class="line"><span style="color: var(--shiki-token-constant)">module</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">exports</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	plugins</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> [</span><span style="color: var(--shiki-token-function)">require</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;postcss-preset-env&#39;</span><span style="color: var(--shiki-color-text)">)]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vite-对-typescript-的支持" tabindex="-1"><a class="header-anchor" href="#vite-对-typescript-的支持" aria-hidden="true">#</a> Vite 对 TypeScript 的支持</h2>
<ul>
<li>vite 对 TypeScript 默认原生支持(无需安装依赖)，直接使用 ESBuild 来完成编译</li>
</ul>
<h2 id="vite-对-vue-的支持" tabindex="-1"><a class="header-anchor" href="#vite-对-vue-的支持" aria-hidden="true">#</a> Vite 对 vue 的支持</h2>
<ul>
<li>
<p>vite 对 vue 提供一级优先支持(需要安装依赖<code v-pre>vue@next</code>，<strong>并且配置 <code v-pre>vite.config.js</code> 的配置文件</strong>)【同为一个作者】</p>
</li>
<li>
<p>Vue 3 单文件组件支持：<code v-pre>@vitejs/plugin-vue</code></p>
</li>
<li>
<p>Vue 3 JSX 支持：<code v-pre>@vitejs/plugin-vue-jsx</code></p>
</li>
<li>
<p>Vue 2 支持：<code v-pre>vite-plugin-vue2</code></p>
</li>
</ul>
<p>安装对<code v-pre>.vue</code>文件的支持插件 <code v-pre>@vue/compiler-sfs</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-comment)">/* vite.config.js */</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> vue form </span><span style="color: var(--shiki-token-string-expression)">&#39;@vue/compiler-sfs&#39;</span><span style="color: var(--shiki-token-comment)">/* ES 语法也可以 */</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">const vue = requrie(</span><span style="color: var(--shiki-token-string-expression)">&#39;@vue/compiler-sfs&#39;</span><span style="color: var(--shiki-color-text)">) </span><span style="color: var(--shiki-token-comment)">/* 使用CommonJS语法引入依赖(vite.config.js为node执行的代码),vue为一个函数(no构造函数) */</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">module.exports = {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	plugins: [vue()]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vite-优化" tabindex="-1"><a class="header-anchor" href="#vite-优化" aria-hidden="true">#</a> Vite 优化</h2>
<blockquote>
<p>Vite 在构建工程时、，会将 npm 模块依赖(如 lodash、Vue 等依赖)<strong>预打包</strong>生成在 node_modules 文件夹下的 <code v-pre>.vite</code> 下，当开发者再次打包构建工程时直接从 <code v-pre>.vite</code>下加载预打包的依赖文件，大大提升了构建时间</p>
</blockquote>
<h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h2>
<p>可通过<code v-pre>npx vite build</code>直接对项目进行打包，<code v-pre>npx vite preview</code>直接对项目进行预览</p>
<h2 id="esbuild-解析" tabindex="-1"><a class="header-anchor" href="#esbuild-解析" aria-hidden="true">#</a> ESBuild 解析</h2>
<ul>
<li>超快的构建速度，并且不需要缓存(不同于 babel)</li>
<li>支持 ES6 和 CommonJS 的模块化</li>
<li><strong>支持 ES6 的 Tree Shaking</strong></li>
<li>支持 Go、JavaScript 的 API(ESBuild 基于 GO 语言实现)</li>
<li>支持 TypeScript、JSX 等语法编译</li>
<li>支持 SourceMap</li>
<li>支持代码压缩</li>
<li>支持扩展其他插件</li>
</ul>
<p>ESBuild 为什么这么快？</p>
<p>ESBuild 基于 GO 语言实现，Go 语言可以直接转换成机械语言，而无需经过字节码</p>
<h2 id="vite-脚手架" tabindex="-1"><a class="header-anchor" href="#vite-脚手架" aria-hidden="true">#</a> Vite 脚手架</h2>
<ul>
<li><code v-pre>npm init @vitejs/app</code> === <code v-pre>npm install @vitejs/create-app</code></li>
</ul>
</div></template>
