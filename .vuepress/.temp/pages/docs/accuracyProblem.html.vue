<template><div><h1 id="js-精度问题" tabindex="-1"><a class="header-anchor" href="#js-精度问题" aria-hidden="true">#</a> JS 精度问题</h1>
<h5 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言：</h5>
<p>在和后端接口联调时发现一个细节又很基础的问题：后端返回一个树的id <code v-pre>3068734572459725762</code>，而我在前台接收为 <code v-pre>3068734572459726000</code>😅【很奇怪】</p>
<p>按道理说这ID是自动生成的也不可能会改吧，在我百思不得其解时，我的启蒙让我在浏览器控制台输出看一下。三七二十一、0.1+0.2 != 0.3 :</p>
<p>于是我在 Chrome  控制台中输入 <code v-pre>3068734572459725762</code> 运行结果返回的将会是 <code v-pre>3068734572459726000</code>。OK，发现了，是<strong>JS 精度丢失😶</strong></p>
<p><code v-pre>后端并通过接口返回给前端数值id过大时，而前端执行 JSON.parse 解码时，会因为语言本身的限制发生精度丢失，引发 bug。</code></p>
<h4 id="js-数字丢失精度的原因" tabindex="-1"><a class="header-anchor" href="#js-数字丢失精度的原因" aria-hidden="true">#</a> JS 数字丢失精度的原因</h4>
<p>计算机的二进制实现和位数限制有些数无法有限表示。就像一些无理数不能有限表示，如 圆周率 3.1415926...，1.3333... 等。JS 遵循 <a href="https://en.wikipedia.org/wiki/IEEE_floating_point" target="_blank" rel="noopener noreferrer">IEEE 754<ExternalLinkIcon/></a> 规范，采用双精度存储（double precision），占用 64 bit。</p>
<h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h3>
<p><strong><code v-pre>为了解决大数传递精度丢失的问题，常见的方案是“将大数转为字符串类型”</code></strong></p>
<p>1、将id转化为字符串返回</p>
<p>2、后端程序先将大数转为 string 类型，再进行 JSON encode，传给前端。前端拿到数据后 decode 成 string 类型，直接展示。当需要大数运算时，将 string split 成多段安全整数字符串，每段单独转为 number 类型，在安全范围内计算完成后，再 join 成 string 类型进行展示。</p>
<p>第三方库（如 json-bigint）之所以能正确的处理大数 parse ，且不造成精度丢失，其实现原理也是类似。</p>
<p><strong><a href="https://github.com/sidorares/json-bigint" target="_blank" rel="noopener noreferrer">json-bigint<ExternalLinkIcon/></a> 是一个第三方包，它在把json字符串转json对象的过程中，自动识别大整数，把大整数转成一个对象来表示，这样就不会产生精度丢失的问题了。</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)">  JSONBig  </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;json-bigint&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-token-comment)">/**json-bigint解决精度丢失问题</span></span>
<span class="line"><span style="color: var(--shiki-token-comment)"> * </span><span style="color: var(--shiki-token-keyword)">@param</span><span style="color: var(--shiki-token-comment)"> </span><span style="color: var(--shiki-token-function)">{*}</span><span style="color: var(--shiki-token-comment)"> Ids</span></span>
<span class="line"><span style="color: var(--shiki-token-comment)"> * </span><span style="color: var(--shiki-token-keyword)">@returns</span></span>
<span class="line"><span style="color: var(--shiki-token-comment)"> */</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">function</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ModeDict</span><span style="color: var(--shiki-color-text)">(ids) {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">axios</span><span style="color: var(--shiki-token-function)">.post</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;/api/yiboAuditModeDict/deleteByIds&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> ids</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        transformRequest</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">function</span><span style="color: var(--shiki-color-text)"> (data) {</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">                </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">JSONBig</span><span style="color: var(--shiki-token-function)">.parse</span><span style="color: var(--shiki-color-text)">(data);</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">            }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    });</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结：</h5>
<p>对于整数，<strong>只要运算结果不超过 Math.pow(2, 53) 就不会丢失精度</strong>。Math.pow(2, 53) = 9007199254740992</p>
<p><strong>在控制台输入 9007199254740993 结果输出为 9007199254740992</strong>，出现问题了</p>
<p><strong>对于小数，尤其在一些电商网站涉及到金额等数据。解决方式：把小数放到位整数（乘倍数），再缩小回原来倍数（除倍数）</strong></p>
</div></template>
