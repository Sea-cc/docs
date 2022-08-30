# ✍️ 调试技巧

除了在虚拟机中,我们怎么去测试 IE 的兼容性呢(目前我们的电脑已经是无法安装 IE 浏览器了),答案是`Edge`浏览器

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202318529.png)

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202327007.png)

**点击后就可以看到满满科技感**,在 命令行工具中输入`%systemroot%\system32\f12\IEChooser.exe`进行调试

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202325554.png)

1、如何快速重新发送请求(还在`ctrl + R`刷新页面吗)

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202024271.png)

2、快速调试接口(各种工具的调试数据具体看右键调试 cmd、bash...)

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202046213.png)

浏览器中以 fetch 为例，粘贴到 控制台中进行调试修改，回车后可以在控制台查看各种请求信息(请求头...),在网络中也可以美观查看信息

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202050646.png)

3、控制台快速获取 dom 节点对象，点击节点元素，在控制台中可以快速使用 `$0` 获取 dom 对象。除此之外 `$1、2、3` 也是可以的(代表上一次选中 dom 元素上上次...)，无需使用 js 方法在控制台进行调试，**控制台中 $\_ 表示为上次输出的结果，$('xxx')本质上就是原生的查找元素的方法，$$('xxx')表示选中所有 xxx dom**

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202058090.png)

4、查看当前节点事件(自身绑定的事件)

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202029258.png)

5、控制台查看源码被压缩怎么处理

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202031310.png)

6、根据条件进行断点调试

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202117451.png)

7、清除浏览器缓存(在打开控制台 f12 情况下)

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202116541.png)

保留缓存和请求日志网络测试...

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202116481.png)

8、检查后端接口是否能正常访问(除`ping`之外)，可以使用`telnet 命令`远程连接测试，电脑具体需要怎么开启可以网络搜索一下

命令：`telnet 192.168.x.x 端口号`，注意：端口号前面为空格，不是 `:`，telnet 就是查看某个端口是否可访问

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202125815.png)

9、浏览器截图功能(控制台 `ctrl + P`在搜索框输入截图，也许是单词...，or 右键 dom 节点进行截图)

10、**为节点添加 contentEditable = true,可以在节点页面中进行输入调试(最简单在根元素设置)，另外可以在元素 tab 中，通过鼠标 or ctrl 上下箭头对元素标签进行拖动改变布局来调试**，通过 h 键来快速隐藏元素

11、在浏览器中调试代码并保存(在某些情况下可能是有一定意义的【样式调试】)，在控制台中调试样式代码后同步更新文件修改`ctrl + s`保存

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202137073.png)

12、使用 `$i('依赖名')`在控制台快速进行包调试(需要依赖一个浏览器插件)，比如 dayjs、lodash 的调试...非常方便

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202151631.png)

13、Vue 的一些调试，当在阅读代码时，不知道当前组件页面在哪个目录下，点击需要打开的组件和图片中的按钮帮助快速在编辑器中打开指定的组件页面

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202303877.png)

14、`console.table()`打印对象进行美观的查阅调试(感觉没什么用，感觉又很实用)

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202210920.png)

15、表达式调试(可以输入 JavaScript 代码快速调试)

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202218974.png)

16、**通过点击属性旁边的小图标快速调试元素的阴影(除此之外，还又其它的元素也可以通过此方法调试,如 color、animation......)**

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202302426.png)

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202226226.png)

**17、在调试中如何调试像:hover 这样伪类呢(鼠标移出后伪类消失怎么在控制面板调试)**

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202230184.png)

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202231135.png)

18、查看在控制面板中做了哪些修改(类似于 git 日志)

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202236417.png)

**具体还有很多的功能**

![](https://raw.githubusercontent.com/Kiyan-a/image-store/img/202208202237164.png)
