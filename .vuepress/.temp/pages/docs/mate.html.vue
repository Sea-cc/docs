<template><div><h1 id="ð-æ°ç-vue-é¡¹ç®" tabindex="-1"><a class="header-anchor" href="#ð-æ°ç-vue-é¡¹ç®" aria-hidden="true">#</a> ð æ°ç Vue é¡¹ç®</h1>
<h2 id="ä»ç»" tabindex="-1"><a class="header-anchor" href="#ä»ç»" aria-hidden="true">#</a> ä»ç»</h2>
<blockquote>
<p><strong>åç«¯ ð¤¿</strong></p>
<p>ä¸ä¸ªä½¿ç¨ <code v-pre>webpack</code> + <code v-pre>vue3</code> + <code v-pre>pinia</code> + <code v-pre>Element-Plus</code> + <code v-pre>typescript</code> å®æ´ææ¯è·¯çº¿å¼åçé¡¹ç®ï¼æ°ç<code v-pre>vue3 composition api</code> ç»å <code v-pre>setup</code>çºµäº«ä¸æ»è¬çå¼åä½éªãå¨æ°ç pinia<code v-pre>ç¶æç®¡çå¨åä¼ç§çè®¾è®¡ä½éªï¼</code>1k<code v-pre>çå¤§å°ï¼ã</code>é¥¿äºä¹æ éç¢è¿æ¸¡ä½¿ç¨ UI ç»ä»¶åº <code v-pre>Element-Plus(çæçéæ¹çæçå³é)</code>ã<code v-pre>å¯éç½®çç³»ç»ç³»ç»ä¸»é¢è²ã</code>å®å¨é«æç <code v-pre>typescript</code>ç±»åæ¯æãä»£ç è§èéªè¯ãå¤çº§å«çæéç®¡ç~</p>
<p><strong>åç«¯</strong>ðªµ</p>
<p>åºäº <code v-pre>Express</code> + <code v-pre>Mongodb</code> æå»ºçåå°ç³»ç»,æ´ä¸ªé¡¹ç®ç®¡çæ¥å£ï¼å± 20 å¤ä¸ªãæ¶åç»éãæ³¨åãè§è²ãèåãæä»¶çæ·»å å±ç¤ºæ¥è¯¢å é¤ãç¨æ·æééªè¯ãéªè¯ç åéï¼é®ç®±ä¿¡æ¯åéç­</p>
<p>åºäº RBAC æ¨¡åæéæ§å¶å¼åï¼ååç«¯åç¦»ï¼JWT èº«ä»½è®¤è¯ï¼åç½®æ¨¡åæ<code v-pre>ç¨æ·</code>ã<code v-pre>è§è²</code>ã<code v-pre>èå</code>å<code v-pre>æä»¶ä¸ä¼ </code>ç­æ¨¡åï¼åæè¿ä¼ç»§ç»­æ·»å </p>
</blockquote>
<h2 id="ç¹æ§" tabindex="-1"><a class="header-anchor" href="#ç¹æ§" aria-hidden="true">#</a> ç¹æ§</h2>
<ul>
<li>â¨ èææ¶å·¥å·ï¼é«æãç¨³å®ãå®ç¾çæç <strong>webpack(vue-cli)</strong></li>
<li>ð¥ åç«¯æ¡æ¶ï¼ç¼ä¸ææ¶é«¦ç <strong>Vue3</strong></li>
<li>ð ç¶æç®¡çå¨ï¼<code v-pre>vue3</code>æ°ç§ <strong>Pinia</strong>ï¼è¯å¥½çå¼åä½éªï¼åå¥½ç api åå¼æ­¥å¤ç</li>
<li>ð å¼åè¯­è¨ï¼æ¿æ²»æ­£ç¡® <strong>TypeScript</strong></li>
<li>ðUI ç»ä»¶ï¼<code v-pre>Element-Plus</code>å¼åèæ éç¢è¿æ¸¡ä½¿ç¨ï¼çæçéæ¹çæçå³é</li>
<li>ð¨css æ ·å¼ï¼<strong>scss</strong> ã<code v-pre>postcss</code></li>
<li>ð ä»£ç è§èï¼<strong>Eslint</strong>ã<strong>Prettier</strong>ã<strong>Commitlint</strong></li>
<li>ð æéç®¡çï¼é¡µé¢çº§ãèåçº§ãè§è²çº§ãæ¥å£çº§</li>
<li>â ä¾èµæéå è½½ï¼<strong>unplugin-auto-import</strong>ï¼å¯èªå¨å¯¼å¥ä½¿ç¨å°ç<code v-pre>vue</code>ã<code v-pre>vue-router</code>ç­ä¾èµ</li>
<li>ðª ç»ä»¶æéå¯¼å¥ï¼<strong>unplugin-vue-components</strong>ï¼æ è®ºæ¯ç¬¬ä¸æ¹ UI ç»ä»¶è¿æ¯èªå®ä¹ç»ä»¶é½å¯å®ç°èªå¨æéå¯¼å¥ä»¥å<code v-pre>TS</code>è¯­æ³æç¤º</li>
<li>ð¦ å¿«éä½ä»£ç åå»ºå¼åæ¨¡æ¿ï¼<strong>plopJS</strong>ï¼éè¿å½ä»¤è¡èªå¨çæ <code v-pre>api</code>ã<code v-pre>router</code>ã<code v-pre>page</code>ã<code v-pre>store</code>ç­æ¨¡æ¿ï¼é«æçå¼å</li>
</ul>
<h3 id="é¡¹ç®ç®å½-åç«¯" tabindex="-1"><a class="header-anchor" href="#é¡¹ç®ç®å½-åç«¯" aria-hidden="true">#</a> é¡¹ç®ç®å½(åç«¯)</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">âââ .husky                              // husky git hookséç½®ç®å½</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    âââ _                               // husky èæ¬çæçç®å½æä»¶</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    âââ commit-msg                      // commit-msgé©å­ï¼ç¨äºéªè¯ messageæ ¼å¼</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    âââ pre-commit                      // pre-commité©å­ï¼ä¸»è¦æ¯åeslintéå</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">âââ src                                 // æºç ç®å½</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    âââ api                             // æ¥å£ç¸å³</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    âââ assets                          // å¬å±çæä»¶ï¼å¦imageãcssãfontç­ï¼</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    âââ components                      // é¡¹ç®ç»ä»¶</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    âââ router                          // è·¯ç±</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    âââ store                           // ç¶æç®¡çå¨</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    âââ utils                           // å·¥å·åº</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    âââ pages                           // é¡µé¢æ¨¡åç®å½</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        âââ ...</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    âââ App.vue                         // vueé¡¶å±æä»¶</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    âââ auto-imports.d.ts               // unplugin-auto-import æä»¶çæ</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    âââ components.d.d.ts               // unplugin-vue-components æä»¶çæ</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    âââ main.ts                         // é¡¹ç®å¥å£æä»¶</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    âââ shimes-vue.d.ts                 // viteé»è®¤tsç±»åæä»¶</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    âââ types                           // é¡¹ç®typeç±»åå®ä¹æä»¶å¤¹</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">âââ .editorconfig                       // æ ¼å¼è§è</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">âââ .eslintignore                       // eslintå¿½ç¥</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">âââ .eslintrc                           // eslintéç½®æä»¶</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">âââ .gitignore                          // gitå¿½ç¥</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">âââ .prettierignore                     // prettiercå¿½ç¥</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">âââ .prettierrc                         // prettiercéç½®æä»¶</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">âââ index.html                          // å¥å£æä»¶</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">âââ package.json                        // package</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">âââ README.md                           // README</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">âââ tsconfig.json                       // typescriptéç½®æä»¶</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">âââ vue.config.ts                      // vite</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="é¡¹ç®ç®å½-åç«¯" tabindex="-1"><a class="header-anchor" href="#é¡¹ç®ç®å½-åç«¯" aria-hidden="true">#</a> é¡¹ç®ç®å½(åç«¯)</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">server-mate</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">ââ app.js --------- éç½®æä»¶</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">ââ bin ------------ é¡¹ç®çå¥å£æä»¶ www</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">â  ââ www</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">ââ package.json --- ä¾èµéç½®æä»¶</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">ââ README.md ------ é¡¹ç®å¼åææ¡£</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">ââ routes --------- APIè·¯ç±è§å</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">â  ââ index.js</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">â  ââ users.js</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">ââ utils ---------- å·¥å·ç®±</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">ââ models --------- Schemay,æ°æ®æ¨¡å</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">ââ config --------- æ°æ®åº...éç½®æä»¶</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">ââ yarn.lock</span></span>
<span class="line"><span style="color: var(--shiki-color-text)"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>é¡¹ç®å°å(åç«¯)ï¼<a href="https://github.com/Kiyan-a/web-mate" target="_blank" rel="noopener noreferrer">https://github.com/Kiyan-a/web-mate<ExternalLinkIcon/></a></strong></p>
<p><strong>é¡¹ç®å°å(åç«¯)ï¼<a href="https://gitee.com/li-yu-feng/server-mate" target="_blank" rel="noopener noreferrer">https://gitee.com/li-yu-feng/server-mate<ExternalLinkIcon/></a></strong></p>
<p><strong>demoï¼<a href="https://web-mate.vercel.app/login" target="_blank" rel="noopener noreferrer">https://web-mate.vercel.app/login<ExternalLinkIcon/></a></strong></p>
<h3 id="ææå±ç¤º" tabindex="-1"><a class="header-anchor" href="#ææå±ç¤º" aria-hidden="true">#</a> ææå±ç¤º</h3>
<h4 id="ç»å½æ³¨åð" tabindex="-1"><a class="header-anchor" href="#ç»å½æ³¨åð" aria-hidden="true">#</a> ç»å½æ³¨åð</h4>
<p><img src="/img/ç»å½.gif" alt="/img/ç»å½.gif" loading="lazy"></p>
<h4 id="ç³»ç»ä¸»é¢è²ð" tabindex="-1"><a class="header-anchor" href="#ç³»ç»ä¸»é¢è²ð" aria-hidden="true">#</a> ç³»ç»ä¸»é¢è²ð</h4>
<p><img src="/img/ä¸»é¢è².gif" alt="" loading="lazy"></p>
<h4 id="ç³»ç»rbacæéç®¡çð" tabindex="-1"><a class="header-anchor" href="#ç³»ç»rbacæéç®¡çð" aria-hidden="true">#</a> ç³»ç»RBACæéç®¡çð</h4>
<p><img src="/img/æéç®¡ç.gif" alt="" loading="lazy"></p>
<h4 id="tabsè·¯ç±ç®¡çä»¥åå³é®èåæä½ð" tabindex="-1"><a class="header-anchor" href="#tabsè·¯ç±ç®¡çä»¥åå³é®èåæä½ð" aria-hidden="true">#</a> tabsè·¯ç±ç®¡çä»¥åå³é®èåæä½ð</h4>
<p><img src="/img/tabs.gif" alt="" loading="lazy"></p>
</div></template>
