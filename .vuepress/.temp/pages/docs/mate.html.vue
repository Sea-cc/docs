<template><div><h1 id="👑-新的-vue-项目" tabindex="-1"><a class="header-anchor" href="#👑-新的-vue-项目" aria-hidden="true">#</a> 👑 新的 Vue 项目</h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<blockquote>
<p><strong>前端 🤿</strong></p>
<p>一个使用 <code v-pre>webpack</code> + <code v-pre>vue3</code> + <code v-pre>pinia</code> + <code v-pre>Element-Plus</code> + <code v-pre>typescript</code> 完整技术路线开发的项目，新的<code v-pre>vue3 composition api</code> 结合 <code v-pre>setup</code>纵享丝滑般的开发体验、全新的 pinia<code v-pre>状态管理器和优秀的设计体验（</code>1k<code v-pre>的大小）、</code>饿了么无障碍过渡使用 UI 组件库 <code v-pre>Element-Plus(熟悉的配方熟悉的味道)</code>、<code v-pre>可配置的系统系统主题色、</code>安全高效的 <code v-pre>typescript</code>类型支持、代码规范验证、多级别的权限管理~</p>
<p><strong>后端</strong>🪵</p>
<p>基于 <code v-pre>Express</code> + <code v-pre>Mongodb</code> 构建的后台系统,整个项目管理接口，共 20 多个。涉及登陆、注册、角色、菜单、文件的添加展示查询删除、用户权限验证、验证码发送，邮箱信息发送等</p>
<p>基于 RBAC 模型权限控制开发，前后端分离，JWT 身份认证，内置模块有<code v-pre>用户</code>、<code v-pre>角色</code>、<code v-pre>菜单</code>和<code v-pre>文件上传</code>等模块，后期还会继续添加</p>
</blockquote>
<h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2>
<ul>
<li>✨ 脚手架工具：高效、稳定、完美生态的 <strong>webpack(vue-cli)</strong></li>
<li>🔥 前端框架：眼下最时髦的 <strong>Vue3</strong></li>
<li>🍍 状态管理器：<code v-pre>vue3</code>新秀 <strong>Pinia</strong>，良好的开发体验，友好的 api 和异步处理</li>
<li>🏆 开发语言：政治正确 <strong>TypeScript</strong></li>
<li>🎉UI 组件：<code v-pre>Element-Plus</code>开发者无障碍过渡使用，熟悉的配方熟悉的味道</li>
<li>🎨css 样式：<strong>scss</strong> 、<code v-pre>postcss</code></li>
<li>📖 代码规范：<strong>Eslint</strong>、<strong>Prettier</strong>、<strong>Commitlint</strong></li>
<li>🔒 权限管理：页面级、菜单级、角色级、接口级</li>
<li>✊ 依赖按需加载：<strong>unplugin-auto-import</strong>，可自动导入使用到的<code v-pre>vue</code>、<code v-pre>vue-router</code>等依赖</li>
<li>💪 组件按需导入：<strong>unplugin-vue-components</strong>，无论是第三方 UI 组件还是自定义组件都可实现自动按需导入以及<code v-pre>TS</code>语法提示</li>
<li>📦 快速低代码创建开发模板：<strong>plopJS</strong>，通过命令行自动生成 <code v-pre>api</code>、<code v-pre>router</code>、<code v-pre>page</code>、<code v-pre>store</code>等模板，高效率开发</li>
</ul>
<h3 id="项目目录-前端" tabindex="-1"><a class="header-anchor" href="#项目目录-前端" aria-hidden="true">#</a> 项目目录(前端)</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">├── .husky                              // husky git hooks配置目录</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ├── _                               // husky 脚本生成的目录文件</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ├── commit-msg                      // commit-msg钩子，用于验证 message格式</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ├── pre-commit                      // pre-commit钩子，主要是和eslint配合</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">└── src                                 // 源码目录</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ├── api                             // 接口相关</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ├── assets                          // 公共的文件（如image、css、font等）</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ├── components                      // 项目组件</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ├── router                          // 路由</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ├── store                           // 状态管理器</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ├── utils                           // 工具库</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ├── pages                           // 页面模块目录</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        ├── ...</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ├── App.vue                         // vue顶层文件</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ├── auto-imports.d.ts               // unplugin-auto-import 插件生成</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ├── components.d.d.ts               // unplugin-vue-components 插件生成</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ├── main.ts                         // 项目入口文件</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ├── shimes-vue.d.ts                 // vite默认ts类型文件</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    ├── types                           // 项目type类型定义文件夹</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├── .editorconfig                       // 格式规范</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├── .eslintignore                       // eslint忽略</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├── .eslintrc                           // eslint配置文件</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├── .gitignore                          // git忽略</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├── .prettierignore                     // prettierc忽略</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├── .prettierrc                         // prettierc配置文件</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├── index.html                          // 入口文件</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├── package.json                        // package</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├── README.md                           // README</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├── tsconfig.json                       // typescript配置文件</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">└── vue.config.ts                      // vite</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="项目目录-后端" tabindex="-1"><a class="header-anchor" href="#项目目录-后端" aria-hidden="true">#</a> 项目目录(后端)</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">server-mate</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├─ app.js --------- 配置文件</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├─ bin ------------ 项目的入口文件 www</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│  └─ www</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├─ package.json --- 依赖配置文件</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├─ README.md ------ 项目开发文档</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├─ routes --------- API路由规划</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│  ├─ index.js</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">│  └─ users.js</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├─ utils ---------- 工具箱</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├─ models --------- Schemay,数据模型</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">├─ config --------- 数据库...配置文件</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">└─ yarn.lock</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>项目地址(前端)：<a href="https://github.com/Kiyan-a/web-mate" target="_blank" rel="noopener noreferrer">https://github.com/Kiyan-a/web-mate<ExternalLinkIcon/></a></strong></p>
<p><strong>项目地址(后端)：<a href="https://gitee.com/li-yu-feng/server-mate" target="_blank" rel="noopener noreferrer">https://gitee.com/li-yu-feng/server-mate<ExternalLinkIcon/></a></strong></p>
<p><strong>demo：<a href="https://web-mate.vercel.app/login" target="_blank" rel="noopener noreferrer">https://web-mate.vercel.app/login<ExternalLinkIcon/></a></strong></p>
<h3 id="效果展示" tabindex="-1"><a class="header-anchor" href="#效果展示" aria-hidden="true">#</a> 效果展示</h3>
<h4 id="登录注册😁" tabindex="-1"><a class="header-anchor" href="#登录注册😁" aria-hidden="true">#</a> 登录注册😁</h4>
<p><img src="/img/登录.gif" alt="/img/登录.gif" loading="lazy"></p>
<h4 id="系统主题色😁" tabindex="-1"><a class="header-anchor" href="#系统主题色😁" aria-hidden="true">#</a> 系统主题色😁</h4>
<p><img src="/img/主题色.gif" alt="" loading="lazy"></p>
<h4 id="系统rbac权限管理😁" tabindex="-1"><a class="header-anchor" href="#系统rbac权限管理😁" aria-hidden="true">#</a> 系统RBAC权限管理😁</h4>
<p><img src="/img/权限管理.gif" alt="" loading="lazy"></p>
<h4 id="tabs路由管理以及右键菜单操作😁" tabindex="-1"><a class="header-anchor" href="#tabs路由管理以及右键菜单操作😁" aria-hidden="true">#</a> tabs路由管理以及右键菜单操作😁</h4>
<p><img src="/img/tabs.gif" alt="" loading="lazy"></p>
</div></template>
