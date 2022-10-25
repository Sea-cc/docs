<template><div><h1 id="🛠️-webpack" tabindex="-1"><a class="header-anchor" href="#🛠️-webpack" aria-hidden="true">#</a> 🛠️ Webpack</h1>
<h3 id="基础细节" tabindex="-1"><a class="header-anchor" href="#基础细节" aria-hidden="true">#</a> 基础细节</h3>
<blockquote>
<p>🌅 默认的配置文件名称是 webpack.config,js
🏜️ webpack.config.js 是以 Common JS 规范进行组织的
🌄 使用 Webpack 的过程，大部分就是跟配置文件打交道的过程</p>
</blockquote>
<blockquote>
<p>注意整个配置中我们使用 Node 内置的 path 模块，并在它前面加上 <a href="https://nodejs.org/docs/latest/api/globals.html#globals_dirname" target="_blank" rel="noopener noreferrer">__dirname<ExternalLinkIcon/></a>这个全局变量。<strong>可以防止不同操作系统之间的文件路径问题</strong>，并且可以使相对路径按照预期工作。</p>
<p>__dirname：当前文件绝对路径</p>
<p>join 与 resolve 区别：</p>
<p>🪂 <code v-pre>path.join('/a', '/b'); 输出：/a/b</code></p>
<p>​ <code v-pre>path.resolve('/a', '/b'); 输出： /b</code></p>
<p>⛵ <strong>join 是把各个 path 片段连接在一起， resolve 把‘／’当成根目录</strong></p>
<p>🍟 resolve 在传入非/路径时，会自动<code v-pre>加上当前目录</code>形成一个绝对路径，而 join <code v-pre>仅仅用于路径拼接</code></p>
<p>🛵 join 与 resolve 的操作类似于 cd 命令</p>
</blockquote>
<blockquote>
<p>module (模块配置，不同类型文件的配置 <code v-pre>loader 配置</code>)</p>
</blockquote>
<blockquote>
<p>指定规则配置有三种方式，按照加载先后顺序，依次是：
🛰️ 在 package.json 中的 stylelint 属性指定规则
🚀 在 .stylelintrc 中指定规则
🏹 在 stylelint.config.js 中指定规则</p>
</blockquote>
<blockquote>
<p>配置 webpack develop server 后，默认会将打包的内容保存到内存当中(提高打包读写数据效率)</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-constant)">module</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">exports</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-comment)">//...</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	devServer</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		client</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			progress</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">// 在浏览器中以百分比显示编译进度</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			reconnect</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">// 尝试重新连接客户端的次数。为 true 时，将无限次尝试重新连接。</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		}</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		webSocketServer</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;ws&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">// &#39;ws&#39; | &#39;sockjs&#39; 为客户端单独选择当前的 devServer 传输模式，或者提供自定义的客户端实现。这允许指定浏览器或其他客户端与 devServer 的通信方式。</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	}</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="区分环境" tabindex="-1"><a class="header-anchor" href="#区分环境" aria-hidden="true">#</a> 区分环境</h3>
<h6 id="通过环境变量区分" tabindex="-1"><a class="header-anchor" href="#通过环境变量区分" aria-hidden="true">#</a> 通过环境变量区分</h6>
<blockquote>
<p>通过命令行读取环境变量 <code v-pre>webpack--env.production</code>，通过环境变量区分不同的打包环境</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-constant)">webpack</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">config</span><span style="color: var(--shiki-color-text)">.js</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)">函数式写法</span></span>
<span class="line"><span style="color: var(--shiki-token-constant)">module</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">exports</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> (env</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)">argv) </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-token-comment)">//开发</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">config</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">mode:</span><span style="color: var(--shiki-token-string-expression)">&#39;development&#39;</span><span style="color: var(--shiki-color-text)">.</span></span>
<span class="line"><span style="color: var(--shiki-token-comment)">// 生产</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">if</span><span style="color: var(--shiki-color-text)"> (</span><span style="color: var(--shiki-token-constant)">env</span><span style="color: var(--shiki-color-text)">.production){</span></span>
<span class="line"><span style="color: var(--shiki-token-constant)">config</span><span style="color: var(--shiki-color-text)">.mode </span><span style="color: var(--shiki-token-string-expression)">&#39;production&#39;</span></span>
<span class="line"><span style="color: var(--shiki-token-comment)">// 更多配置...</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> config</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h6 id="通过配置文件区分" tabindex="-1"><a class="header-anchor" href="#通过配置文件区分" aria-hidden="true">#</a> 通过配置文件区分</h6>
<blockquote>
<p><strong><code v-pre>webpack.dev.conf.js、webpack.prod.conf.js</code></strong>
命令执行打包时，指定配置文件 ( <code v-pre>webpack-config webpack.[dev|prod).conf.js</code> )</p>
</blockquote>
<h6 id="抽取公共配置对不同环境的配置进行合并" tabindex="-1"><a class="header-anchor" href="#抽取公共配置对不同环境的配置进行合并" aria-hidden="true">#</a> 抽取公共配置对不同环境的配置进行合并</h6>
<blockquote>
<p>声明公共的配置文件，如 <code v-pre>webpack.base.conf.js</code>，通过 <code v-pre>webpack-merge</code>包，将多个配置合并；</p>
<p><code v-pre>webpack.prod.conf.js + webpack.base.conf.js</code></p>
<p><code v-pre>webpack.dev.conf.js + webpack.base.conf.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">merge</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">require</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;webpack-merge&#39;</span><span style="color: var(--shiki-color-text)">);</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">baseWebpackConfig</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">require</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;./webpack.base.conf&#39;</span><span style="color: var(--shiki-color-text)">);</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">devWebpackConfig</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">merge</span><span style="color: var(--shiki-color-text)">(baseWebpackConfig</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-comment)">// ...开发环境配置</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">});</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-token-constant)">module</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">exports</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> devWebpackConfig;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h6 id="通过-defineplugin-创建-注入-全局变量" tabindex="-1"><a class="header-anchor" href="#通过-defineplugin-创建-注入-全局变量" aria-hidden="true">#</a> 通过 DefinePlugin 创建(注入)全局变量</h6>
<blockquote>
<p><strong><code v-pre>Webpack DefinePlugin</code></strong></p>
<p>DefinePlugin</p>
<p>🧫 为配置注入全局变量</p>
<p>🛹 开发环境和生产环境的接口地址不同</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">webpack</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">require</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;webpack&#39;</span><span style="color: var(--shiki-color-text)">);</span></span>
<span class="line"><span style="color: var(--shiki-token-comment)">// webpack.config.js</span></span>
<span class="line"><span style="color: var(--shiki-token-constant)">module</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">exports</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-comment)">// ...</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	plugins</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">webpack</span><span style="color: var(--shiki-token-function)">.Defineplugin</span><span style="color: var(--shiki-color-text)">({</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			</span><span style="color: var(--shiki-token-comment)">// 变量值(value)要求是一个代码片段,直接赋值字符串类型时，打包后并不是一个字符		串类型的值，需要通过`JSON.stringify`转化⛵</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">			API_BASE_URL</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">JSON</span><span style="color: var(--shiki-token-function)">.stringify</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;https://api.example.com&#39;</span><span style="color: var(--shiki-color-text)">)</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		})</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">};</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-token-comment)">// 在项目代码中</span></span>
<span class="line"><span style="color: var(--shiki-token-constant)">console</span><span style="color: var(--shiki-token-function)">.log</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">API_BASE_URL</span><span style="color: var(--shiki-color-text)">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h3 id="自定义插件-plugin" tabindex="-1"><a class="header-anchor" href="#自定义插件-plugin" aria-hidden="true">#</a> 自定义插件 Plugin</h3>
<blockquote>
<p>当现有的插件满足不了实际开发的需求时候，需要自定义 Plugin</p>
<p>**<code v-pre>Webpack 插件是一个具有 appy 方法的 JavaScript 对象</code>**apply 方法会被 webpack compiler 调用，<strong>并且在整个编译生命周期都可以访问 compiler 对象。</strong></p>
<p><strong>原理</strong>
通过在生命周期的钩子中挂载函数，来实现功能扩展</p>
<p>​ <strong>钩子</strong></p>
<p>​ 钩子是<strong>提前在可能增加功能的地方，埋好(预设)一个函数</strong></p>
</blockquote>
<blockquote>
<p><strong>常用钩子(总共有 50 个左右钩子)</strong></p>
<p><img src="/img/webpack.png" alt="" loading="lazy"></p>
</blockquote>
<blockquote>
<p>注意：emit 是修改内容的最后机会(输出之前)⛵</p>
<p>示例代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-comment)">// 自定义定义插件</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">class</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">Plugin</span><span style="color: var(--shiki-color-text)">{</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-keyword)">constructor</span><span style="color: var(--shiki-color-text)">(options){</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-comment)">// 插件插入的配置选项</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		console</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-function)">log</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;插件选项：&#39;</span><span style="color: var(--shiki-color-text)">，options)</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-comment)">// 必须要有apply方法</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-function)">apply</span><span style="color: var(--shiki-color-text)">(compiler）{</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-comment)">// 选择调用的钩子(如 emit)</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    	compiler.hooks.emit.tap(&#39;插件名称&#39;，(compilation)</span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)">{</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        	</span><span style="color: var(--shiki-token-comment)">// 通过 compilation(此次打包的上下文)</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        	console.Log(</span><span style="color: var(--shiki-token-string-expression)">&#39;webpack构建过程开始！&#39;</span><span style="color: var(--shiki-color-text)">，compilation);</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">        	</span><span style="color: var(--shiki-token-comment)">// 通过 compilation.assets[文件名].source() 获取文件内容</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        	</span><span style="color: var(--shiki-token-comment)">// 通过正则等方式修改内容</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        	</span><span style="color: var(--shiki-token-comment)">// 将替换完成后的内容归原位</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        	compilation.assets[文件名]={</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">                source</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> () </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> 替换后内容</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">                size</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">替换后内容</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">length</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        })</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<p><code v-pre>endsWith()</code> <strong>判断字符串后面是否以参数是相同的结尾</strong></p>
<h3 id="自定义-loader" tabindex="-1"><a class="header-anchor" href="#自定义-loader" aria-hidden="true">#</a> 自定义 loader</h3>
<blockquote>
<p>loader <strong><code v-pre>本质上就是一个 ESModel 模块(一个函数)</code></strong>，它导出一个函数，在**<code v-pre>函数中对打包资源进行转化</code>**</p>
<p>🛹 webpack 调用 loader 的时机在触发 compilation 的 buildModule 钩子之后</p>
<p>🛹 它的核心步骤是从文件原始内容中取得序列化的字符串，修复 JSON 序列化特殊字符时的 bug，添加导出语句，使其成为 JavaScript 模块</p>
<p>注意：<strong><code v-pre>在转化过程当中，要求最终转化(最后一个 loader)的必须为 JavaScript 代码字符串，否则报错</code></strong> 'consloe.log(&quot;YYYYY&quot;)'、<code v-pre>'model.export=${JSON.stringify(html)}'</code></p>
<p>使用 <code v-pre>JSON.stringify()</code>原因是输出内容可能存在字符串引号相同导致的 bug 错误，JavaScript 代码中字符串引号包裹问题 &quot; &quot;&quot; &quot; ❌ &quot; '' &quot;💯</p>
</blockquote>
<blockquote>
<p>ES Modules 是 2015 年推出的，语言层面的模块化规范，与运行环境无关，服务器和浏览器中都能使用。</p>
<p>在 html 中，<strong><code v-pre>通过给 script 添加 type = module 的属性，就可以用 ES Module 的标准执行其中的 JS 代码</code></strong></p>
<p>每个 ES Module 都是运行在单独的私有作用域中，不会有全局作用域污染的问题。</p>
</blockquote>
<blockquote>
<p>🛵 <code v-pre>loader-utils</code> 与 <code v-pre>schema-utils</code>，可以使获取及验证传递给 loader 的参数配置项的工作简单化</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> { </span><span style="color: var(--shiki-token-constant)">getoptions</span><span style="color: var(--shiki-color-text)"> } </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">require</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;loader-utils&#39;</span><span style="color: var(--shiki-color-text)">);</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> { </span><span style="color: var(--shiki-token-constant)">validate</span><span style="color: var(--shiki-color-text)"> } </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">require</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;schema-utils&quot;</span><span style="color: var(--shiki-color-text)">);</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">marked</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">require</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;marked&#39;</span><span style="color: var(--shiki-color-text)">);</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-token-comment)">// 自定义loader，source：要处理的内容</span></span>
<span class="line"><span style="color: var(--shiki-token-constant)">module</span><span style="color: var(--shiki-color-text)">.</span><span style="color: var(--shiki-token-constant)">exports</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">function</span><span style="color: var(--shiki-color-text)">(source){</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-comment)">// 获取loader配置选项🪂 注意 loader 函数不能写成【箭头函数(this 指向问题)】</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">options</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">getoptions</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">this</span><span style="color: var(--shiki-color-text)">);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-comment)">// 对输入内容进行处理🏹</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">html</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">marked</span><span style="color: var(--shiki-color-text)">(source)</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-comment)">//  通过 this.callback 可以返回除内容以外的其他信息(如 sourcemap)</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-comment)">// 【返还始下一个 loader 处理】🏜️ 转换内容后，可以通过 return 或调用 this.callback 返回结果</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> html</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-color-text)">使用：</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">{</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    test</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-string-expression)">/\.md</span><span style="color: var(--shiki-token-keyword)">$</span><span style="color: var(--shiki-token-string-expression)">/</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">// 匹配</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    use</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-string-expression)">&#39;loader 名称 || 忘记文件路径&#39;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>通过 this.async 可以获取异步操作的回调函数，并在回调函数中返回结果</code></strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">function</span><span style="color: var(--shiki-color-text)"> (content</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> map</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> meta) {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">callback</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">this</span><span style="color: var(--shiki-token-function)">.async</span><span style="color: var(--shiki-color-text)">();</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	</span><span style="color: var(--shiki-token-function)">someAsyncOperation</span><span style="color: var(--shiki-color-text)">(content</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> (err</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> result</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> sourceMaps</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> meta) </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-keyword)">if</span><span style="color: var(--shiki-color-text)"> (err) </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">callback</span><span style="color: var(--shiki-color-text)">(err);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">		</span><span style="color: var(--shiki-token-function)">callback</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> result</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> sourceMaps</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> meta);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">	});</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除非计算很小，否则对于 Node.js 这种单线程环境，尽可能使用异步 loader。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-comment)">// 因为 babel 的 preset-env 会将 ES6 module 转化为 Common.js 的形式，会导致 webpack 中 tree-shaking 特性失效，所有将 modules 置为 false,交给webpack 自身处理</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">modules</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-color-text)">; </span><span style="color: var(--shiki-token-comment)">// 通常会在配置 loader 将 modules 置为 false</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>loader-utils 主要有以下工具方法：</p>
<ul>
<li>
<p><code v-pre>parseQuery</code>：解析 loader 的 query 参数，返回一个对象。</p>
</li>
<li>
<p><code v-pre>stringifyRequest</code>：将请求的资源转换为可以在 loader 生成的代码中 require 或 import 使用的相对路径字符串，同时避免绝对路径导致重新计算 hash 值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-constant)">loaderUtils</span><span style="color: var(--shiki-token-function)">.stringifyRequest</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">this</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;./test.js&#39;</span><span style="color: var(--shiki-color-text)">); </span><span style="color: var(--shiki-token-comment)">// &quot;\&quot;./test.js\&quot;&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>urlToRequest</code>：将请求的资源路径转换成 webpack 可以处理的形式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">url</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;~path/to/module.js&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">request</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">loaderUtils</span><span style="color: var(--shiki-token-function)">.urlToRequest</span><span style="color: var(--shiki-color-text)">(url); </span><span style="color: var(--shiki-token-comment)">// &quot;path/to/module.js&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>interpolateName</code>：对文件名模板进行插值。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-comment)">// loaderContext.resourcePath = &quot;/absolute/path/to/app/js/hzfe.js&quot;</span></span>
<span class="line"><span style="color: var(--shiki-token-constant)">loaderUtils</span><span style="color: var(--shiki-token-function)">.interpolateName</span><span style="color: var(--shiki-color-text)">(loaderContext</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;js/[hash].script.[ext]&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> { content</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">...</span><span style="color: var(--shiki-color-text)"> });</span></span>
<span class="line"><span style="color: var(--shiki-token-comment)">// =&gt; js/9473fdd0d880a43c21b7778d34872157.script.js</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>getHashDigest</code>：获取文件内容的 hash 值。</p>
</li>
<li></li>
</ul>
<p>在编写 loader 的过程中，还可以利用 loaderContext 对象来获取 loader 的相关信息和进行一些高级的操作，常见的属性和方法有：</p>
<ul>
<li><code v-pre>this.addDependency</code>：加入一个文件，作为 loader 产生的结果的依赖，使其在有任何变化时可以被监听到，从而触发重新编译</li>
<li><code v-pre>this.async</code>：告诉 loader-runner 这个 loader 将会异步的执行回调</li>
<li><code v-pre>this.cacheable</code>：默认情况下，将 loader 的处理结果标记为可缓存。传入 false 可以关闭 loader 处理结果的缓存能力</li>
<li><code v-pre>this.fs</code>：用于访问 compilation 的 inputFileSystem 属性</li>
<li><code v-pre>this.getOptions</code>：提取 loader 的配置选项。从 webpack 5 开始，可以获取到 loader 上下文对象，用于替代 <code v-pre>loader-utils</code> 中的 getOptions 方法</li>
<li><code v-pre>this.mode</code>： webpack 的运行模式，可以是 “development” 或 “production”</li>
<li><code v-pre>this.query</code>：如果 loader 配置了 options 对象，则指向这个对象。如果 loader 没有 options，而是以 query 字符串作为参数，query 则是一个以 <code v-pre>?</code> 开头的字符串</li>
</ul>
</blockquote>
</div></template>
