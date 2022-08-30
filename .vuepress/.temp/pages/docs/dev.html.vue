<template><div><h1 id="✍️-调试技巧" tabindex="-1"><a class="header-anchor" href="#✍️-调试技巧" aria-hidden="true">#</a> ✍️ 调试技巧</h1>
<p>除了在虚拟机中,我们怎么去测试 IE 的兼容性呢(目前我们的电脑已经是无法安装 IE 浏览器了),答案是<code v-pre>Edge</code>浏览器</p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202318529.png" alt="" loading="lazy"></p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202327007.png" alt="" loading="lazy"></p>
<p><strong>点击后就可以看到满满科技感</strong>,在 命令行工具中输入<code v-pre>%systemroot%\system32\f12\IEChooser.exe</code>进行调试</p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202325554.png" alt="" loading="lazy"></p>
<p>1、如何快速重新发送请求(还在<code v-pre>ctrl + R</code>刷新页面吗)</p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202024271.png" alt="" loading="lazy"></p>
<p>2、快速调试接口(各种工具的调试数据具体看右键调试 cmd、bash...)</p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202046213.png" alt="" loading="lazy"></p>
<p>浏览器中以 fetch 为例，粘贴到 控制台中进行调试修改，回车后可以在控制台查看各种请求信息(请求头...),在网络中也可以美观查看信息</p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202050646.png" alt="" loading="lazy"></p>
<p>3、控制台快速获取 dom 节点对象，点击节点元素，在控制台中可以快速使用 <code v-pre>$0</code> 获取 dom 对象。除此之外 <code v-pre>$1、2、3</code> 也是可以的(代表上一次选中 dom 元素上上次...)，无需使用 js 方法在控制台进行调试，<strong>控制台中 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">_</mi><mtext>表示为上次输出的结果，</mtext></mrow><annotation encoding="application/x-tex">\_ 表示为上次输出的结果，</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9933em;vertical-align:-0.31em;"></span><span class="mord" style="margin-right:0.02778em;">_</span><span class="mord cjk_fallback">表示为上次输出的结果，</span></span></span></span>('xxx')本质上就是原生的查找元素的方法，$$('xxx')表示选中所有 xxx dom</strong></p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202058090.png" alt="" loading="lazy"></p>
<p>4、查看当前节点事件(自身绑定的事件)</p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202029258.png" alt="" loading="lazy"></p>
<p>5、控制台查看源码被压缩怎么处理</p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202031310.png" alt="" loading="lazy"></p>
<p>6、根据条件进行断点调试</p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202117451.png" alt="" loading="lazy"></p>
<p>7、清除浏览器缓存(在打开控制台 f12 情况下)</p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202116541.png" alt="" loading="lazy"></p>
<p>保留缓存和请求日志网络测试...</p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202116481.png" alt="" loading="lazy"></p>
<p>8、检查后端接口是否能正常访问(除<code v-pre>ping</code>之外)，可以使用<code v-pre>telnet 命令</code>远程连接测试，电脑具体需要怎么开启可以网络搜索一下</p>
<p>命令：<code v-pre>telnet 192.168.x.x 端口号</code>，注意：端口号前面为空格，不是 <code v-pre>:</code>，telnet 就是查看某个端口是否可访问</p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202125815.png" alt="" loading="lazy"></p>
<p>9、浏览器截图功能(控制台 <code v-pre>ctrl + P</code>在搜索框输入截图，也许是单词...，or 右键 dom 节点进行截图)</p>
<p>10、<strong>为节点添加 contentEditable = true,可以在节点页面中进行输入调试(最简单在根元素设置)，另外可以在元素 tab 中，通过鼠标 or ctrl 上下箭头对元素标签进行拖动改变布局来调试</strong>，通过 h 键来快速隐藏元素</p>
<p>11、在浏览器中调试代码并保存(在某些情况下可能是有一定意义的【样式调试】)，在控制台中调试样式代码后同步更新文件修改<code v-pre>ctrl + s</code>保存</p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202137073.png" alt="" loading="lazy"></p>
<p>12、使用 <code v-pre>$i('依赖名')</code>在控制台快速进行包调试(需要依赖一个浏览器插件)，比如 dayjs、lodash 的调试...非常方便</p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202151631.png" alt="" loading="lazy"></p>
<p>13、Vue 的一些调试，当在阅读代码时，不知道当前组件页面在哪个目录下，点击需要打开的组件和图片中的按钮帮助快速在编辑器中打开指定的组件页面</p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202303877.png" alt="" loading="lazy"></p>
<p>14、<code v-pre>console.table()</code>打印对象进行美观的查阅调试(感觉没什么用，感觉又很实用)</p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202210920.png" alt="" loading="lazy"></p>
<p>15、表达式调试(可以输入 JavaScript 代码快速调试)</p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202218974.png" alt="" loading="lazy"></p>
<p>16、<strong>通过点击属性旁边的小图标快速调试元素的阴影(除此之外，还又其它的元素也可以通过此方法调试,如 color、animation......)</strong></p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202302426.png" alt="" loading="lazy"></p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202226226.png" alt="" loading="lazy"></p>
<p><strong>17、在调试中如何调试像:hover 这样伪类呢(鼠标移出后伪类消失怎么在控制面板调试)</strong></p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202230184.png" alt="" loading="lazy"></p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202231135.png" alt="" loading="lazy"></p>
<p>18、查看在控制面板中做了哪些修改(类似于 git 日志)</p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202236417.png" alt="" loading="lazy"></p>
<p><strong>具体还有很多的功能</strong></p>
<p><img src="https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202237164.png" alt="" loading="lazy"></p>
</div></template>
