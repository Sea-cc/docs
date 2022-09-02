# 📖 uni-app

```
web-test
├─ .hbuilderx
│  └─ launch.json
├─ App.vue     ---------   项目根组件，所有页面都是在 App.vue 下进行切换的，‘页面’的入口文件，可以调用‘应用的生命周期’
├─ index.html
├─ main.js     ---------   项目入口文件，主要作用是初始化 Vue 实例，并使用需要的插件...
├─ manifest.json  ------   应用的配置文件，用于指定应用名称、图标、权限...
├─ pages    ------------   存放 uni-app 的页面
│  └─ index
│     └─ index.vue
├─ components  ---------   项目组件目录
├─ pages.json     ------   用于 uni-app 的全局配置，决定页面文件的路径、窗口样式、原生的导航栏以及底部  |					    tabbar...
├─ project.config.json
├─ static   ------------   存放静态资源
│  └─ logo.png
├─ uni.scss    ---------   全局的样式文件，主要用于控制整体的应用风格，如按钮颜色、边框风格。默认已经预设一些 scss 变量预设
└─ unpackage   ---------   存放最终打包输出的文件( 安卓、H5、小程序... )
   └─ dist
      └─ dev
         ├─ .automator
         │  └─ mp-weixin
         │     └─ .automator.json
         ├─ .sourcemap
         │  └─ mp-weixin
         │     ├─ common
         │     │  ├─ main.js.map
         │     │  ├─ runtime.js.map
         │     │  └─ vendor.js.map
         │     └─ pages
         │        └─ index
         │           └─ index.js.map
         └─ mp-weixin
            ├─ app.js
            ├─ app.json
            ├─ app.wxss
            ├─ common
            │  ├─ main.js
            │  ├─ main.wxss
            │  ├─ runtime.js
            │  └─ vendor.js
            ├─ pages
            │  └─ index
            │     ├─ index.js
            │     ├─ index.json
            │     ├─ index.wxml
            │     └─ index.wxss
            ├─ project.config.json
            └─ static
               └─ logo.png

```

## 开发规范

为了实现多端兼容,综合考虑编译速度,运行性能等因素,uni-app 约定了如下开发规范:

🦩 页面文件遵循  [Vue 单文件组件(SFC)规范](https://vue-loader.vuejs.org/zh/spec.html)

🦢 **组件标签靠近小程序规范**,详见  [uni-app 组件规范](https://uniapp.dcloud.io/component/README)

🐬 **接口能力（JS API）靠近微信小程序规范**,但需将前缀**wx 替换为 uni**，详见  [uni-app 接口规范](https://uniapp.dcloud.io/api/README)

🐙 数据绑定及事件处理同 Vue.js 规范，同时**补充了 App 及页面的生命周期**

🦚 为兼容多端运行，建议**使用 flex 布局进行开发**

## 全局配置

[pages.json 详细文档](https://uniapp.dcloud.io/collocation/pages.html#globalstyle)

#### 配置项列表

| 属性                                                                                                 | 类型         | 必填 | 描述                    | 平台兼容   |
| :--------------------------------------------------------------------------------------------------- | :----------- | :--- | :---------------------- | :--------- |
| [globalStyle](https://uniapp.dcloud.io/collocation/pages#globalstyle)                                | Object       | 否   | 设置默认页面的窗口表现  |            |
| [pages](https://uniapp.dcloud.io/collocation/pages#pages)                                            | Object Array | 是   | 设置页面路径及窗口表现  |            |
| [easycom](https://uniapp.dcloud.io/collocation/pages#easycom)                                        | Object       | 否   | 组件自动引入规则        | 2.5.5+     |
| [tabBar](https://uniapp.dcloud.io/collocation/pages#tabbar)                                          | Object       | 否   | 设置底部 tab 的表现     |            |
| [condition](https://uniapp.dcloud.io/collocation/pages#condition)                                    | Object       | 否   | 启动模式配置            |            |
| [subPackages](https://uniapp.dcloud.io/collocation/pages#subPackages)                                | Object Array | 否   | 分包加载配置            |            |
| [preloadRule](https://uniapp.dcloud.io/collocation/pages#preloadrule)                                | Object       | 否   | 分包预下载规则          | 微信小程序 |
| [workers(opens new window)](https://developers.weixin.qq.com/miniprogram/dev/framework/workers.html) | String       | 否   | `Worker` 代码放置的目录 | 微信小程序 |
| [leftWindow](https://uniapp.dcloud.io/collocation/pages#leftwindow)                                  | Object       | 否   | 大屏左侧窗口            | H5         |
| [topWindow](https://uniapp.dcloud.io/collocation/pages#topwindow)                                    | Object       | 否   | 大屏顶部窗口            | H5         |
| [rightWindow](https://uniapp.dcloud.io/collocation/pages#rightwindow)                                | Object       | 否   | 大屏右侧窗口            | H5         |

通过 pages.json - **globalStyle** 进行全局配置，用于设置应用的状态栏、导航条、标题、窗口背景色....

```json
{
	"pages": [
		//pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
		{
			"path": "pages/index/index",
			"style": {
				// "navigationBarTitleText": "uni-app"
			}
		}
	],
	"globalStyle": {
		"navigationBarTextStyle": "white", // 导航栏标题颜色，仅支持 black/white
		"navigationBarTitleText": "🤖", // 导航栏标题，🦩页面的标题会把全局的覆盖掉
		"navigationBarBackgroundColor": "#067fd7",
		"backgroundColor": "#2cc4d0", // 窗口背景色
		"enablePullDownRefresh": true, // 开启下拉
		"backgroundTextStyle": "dark", // 下拉 loading 的样式
		"onReachBottomDistance": 25 // 页面上拉触底事件触发时距页面底部距离，只支持 px
	}
}
```

## 页面配置

在 pages 文件夹下新建一个页面目录(文件夹)，在该目录下新建一个 `.vue文件`,✍️ 注意：需要在 pages.json - pages 下配置页面目录(路径)，在该目录对象下 **style 对象中** 配置页面**独有的样式**，并且可以自定义配置 H5、APP 等应用独有的样式

```json
"pages": [
		{
			"path": "pages/index/index",
			"style": {
				 "navigationBarTitleText": "页面单独标题"
			}
		}
	]
```

### 配置 tabBar

在 pages.json 下，与 pages、globalStyle 同级，通过配置 tabBar 去实现底部 tab 栏以及 tab 切换页面的表现

> Tips：😊**当设置 position：top 时，将不会显示 icon 图标**（设置 top 为把 tab 栏置于顶部）
>
> ​ 😋**tabBar 中的 list 是一个数组，tab 按顺序排序，配置最少 2 个-最多 5 个**

**属性说明：** [详细参考](https://uniapp.dcloud.io/collocation/pages.html#tabbar)

| 属性            | 类型     | 必填 | 默认值 | 描述                                                                                                                               | 平台差异说明                                         |
| :-------------- | :------- | :--- | :----- | :--------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------- |
| color           | HexColor | 是   |        | tab 上的文字默认颜色                                                                                                               |                                                      |
| selectedColor   | HexColor | 是   |        | tab 上的文字选中时的颜色                                                                                                           |                                                      |
| backgroundColor | HexColor | 是   |        | tab 的背景色                                                                                                                       |                                                      |
| borderStyle     | String   | 否   | black  | tabbar 上边框的颜色，可选值 black/white                                                                                            | App 2.3.4+ 支持其他颜色值、H5 3.0.0+                 |
| blurEffect      | String   | 否   | none   | iOS 高斯模糊效果，可选值 dark/extralight/light/none（参考:[使用说明 (opens new window)](https://ask.dcloud.net.cn/article/36617)） | App 2.4.0+ 支持、H5 3.0.0+（只有最新版浏览器才支持） |
| list            | Array    | 是   |        | tab 的列表，详见 list 属性说明，最少 2 个、最多 5 个 tab                                                                           |                                                      |
| position        | String   | 否   | bottom | 可选值 bottom、top                                                                                                                 | top 值仅微信小程序支持                               |
| fontSize        | String   | 否   | 10px   | 文字默认大小                                                                                                                       | App 2.3.4+、H5 3.0.0+                                |
| iconWidth       | String   | 否   | 24px   | 图标默认宽度（高度等比例缩放）                                                                                                     | App 2.3.4+、H5 3.0.0+                                |
| spacing         | String   | 否   | 3px    | 图标和文字的间距                                                                                                                   | App 2.3.4+、H5 3.0.0+                                |
| height          | String   | 否   | 50px   | tabBar 默认高度                                                                                                                    | App 2.3.4+、H5 3.0.0+                                |
| midButton       | Object   | 否   |        | 中间按钮 仅在 list 项为偶数时有效                                                                                                  | App 2.3.4+、H5 3.0.0+                                |

其中 list 接收一个数组，数组中的每个项都是一个对象，其属性值如下：

| 属性             | 类型    | 必填 | 说明                                                                                                                       | 平台差异                    |
| :--------------- | :------ | :--- | :------------------------------------------------------------------------------------------------------------------------- | :-------------------------- |
| pagePath         | String  | 是   | 页面路径，**必须在 pages 中先定义**                                                                                        |                             |
| text             | String  | 是   | tab 上按钮文字，在 App 和 H5 平台为非必填。例如中间可放一个没有文字的+号图标                                               |                             |
| iconPath         | String  | 否   | 图片路径，icon 大小限制为 40kb，建议尺寸为 81px \* 81px，当 position 为 top 时，此参数无效，不支持网络图片，不支持字体图标 |                             |
| selectedIconPath | String  | 否   | 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px \* 81px ，当 position 为 top 时，此参数无效                        |                             |
| visible          | Boolean | 否   | 该项是否显示，默认显示                                                                                                     | App (3.2.10+)、H5 (3.2.10)+ |
| iconfont         | Object  | 否   | 字体图标，优先级高于 iconPath                                                                                              | App（3.4.4+）               |

```json
"tabBar": {
		"color": "#282c35",
		"selectedColor": "#4d78cc",
		"borderStyle": "white",
		"list": [
			{	// 路径不能以 ./ 开头
				"pagePath": "pages/index/index",
				"text": "首页",
				"iconPath": "static/img/在校医保统计.png",// 仅支持 .png、.jpg、.jpeg 格式
				"selectedIconPath": "static/img/创新班.png"
			},
			{
				"pagePath": "pages/about/about",
				"text": "关于",
				"iconPath": "static/img/我的待办.png",
				"selectedIconPath": "static/img/审阅抄送信息.png"
			}
		]
	}
```

### 启动模式配置

```json
"condition" : { //启动模式配置，仅开发期间生效，用于模拟启动【直达页面】的场景
		"current": 0, //当前激活的模式(list 的索引项)
		"list": [
			{
				"name": "关于", //模式名称
				"path": "pages/about/about", //启动页面，必选
				"query": "id=3" //启动参数，在页面的onLoad函数里面得到
			}
		]
	}
```

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205210956233.gif)

## 组件基本使用

uni-app 的基本组件，像 div、p、span 标签一样，用于搭建页面的基本结构。[详细参考](https://uniapp.dcloud.io/component/#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6)

> **Tips**：✍️ 虽然不推荐使用 HTML 标签，但实际上如果开发者写了`div`等标签，在编译到非 H5 平台时也会被编译器转换为`view`标签，类似的还有`span`转`text`、`a`转`navigator`等，包括 css 里的元素选择器也会转。但为了管理方便、策略统一，新写代码时仍然建议使用 view 等组件。

#### 公共属性列表

每个组件都有各自定义的属性，但所有 uni-app 的组件，都有如下属性：

| 属性名     | 类型         | 描述                 | 注解                                                                                                                     |
| :--------- | :----------- | :------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| id         | String       | 组件的唯一标示       | 一般用于获取组件上下文对象（如：[VideoContext](https://uniapp.dcloud.io/api/media/video-context)），需要保持整个页面唯一 |
| ref        | String       | vue 中组件的唯一标示 | 用来给子组件注册引用信息，详见 [Vue 文档](https://uniapp.dcloud.io/vue-components#ref)                                   |
| class      | String       | 组件的样式类         | 在对应的 css 中定义的样式类                                                                                              |
| style      | String       | 组件的内联样式       | 可以动态设置的内联样式                                                                                                   |
| **hidden** | **Boolean**  | **组件是否隐藏**     | **所有组件默认是显示的**                                                                                                 |
| data-\*    | Any          | 自定义属性           | 组件上触发的事件时，会发送给事件处理函数                                                                                 |
| @\*        | EventHandler | 组件的事件           | 详见各组件详细文档，事件绑定参考 [事件处理器](https://uniapp.dcloud.io/tutorial/vue-basics#事件处理器)                   |

除了上述公共属性，还有一类特殊属性以`v-`开头，称之为 vue 指令，如 v-if、v-else、v-for、v-model。详见[vue 指令](https://uniapp.dcloud.io/tutorial/vue-api#模板指令)

### text 文本组件

用于包裹文本内容。

**属性说明**

| 属性名      | 类型    | 默认值 | 说明         | 平台差异说明        |
| :---------- | :------ | :----- | :----------- | :------------------ |
| selectable  | Boolean | false  | 文本是否可选 | App、H5、快手小程序 |
| user-select | Boolean | false  | 文本是否可选 | 微信小程序          |
| space       | String  |        | 显示连续空格 | App、H5、微信小程序 |
| decode      | Boolean | false  | 是否解码     | App、H5、微信小程序 |

**space 值说明**

| 值   | 说明                   |
| :--- | :--------------------- |
| ensp | 中文字符空格一半大小   |
| emsp | 中文字符空格大小       |
| nbsp | 根据字体设置的空格大小 |

**Tips**

-   **🐬`<text>` 组件内只支持嵌套 `<text>`，不支持其它组件或自定义组件否则会引发在不同平台的渲染差异。**
-   在 app-nvue 下，只有`<text>`才能包裹文本内容。无法在`<view>`组件包裹文本。
-   decode 可以解析的有 <img src="https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205211019774.png" style="zoom:78%;" />
-   各个操作系统的空格标准并不一致。
-   **💻 除了文本节点以外的其他节点都无法长按选中。**
-   支持 `\n` 方式换行。
-   如果使用 `<span>` 组件编译时会被转换为 `<text>`。

### view 视图容器组件

它类似于传统 html 中的 div，用于包裹各种元素内容。

**属性说明**

| 属性名                 | 类型    | 默认值 | 说明                                                                                                                                    |
| :--------------------- | :------ | :----- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| hover-class            | String  | none   | 指定按下去的样式类。当 hover-class="none" 时，没有点击态效果                                                                            |
| hover-stop-propagation | Boolean | false  | 指定是否阻止本节点的祖先节点出现点击态，App、H5、支付宝小程序、百度小程序不支持（支付宝小程序、百度小程序文档中都有此属性，实测未支持） |
| hover-start-time       | Number  | 50     | 按住后多久出现点击态，单位毫秒                                                                                                          |
| hover-stay-time        | Number  | 400    | 手指松开后点击态保留时间，单位毫秒                                                                                                      |

### image 图片组件

**注意：🦚HTML 中为 img ，uni-app 为 image**

| 属性名                 | 类型        | 默认值            | 说明                                                                                                                  | 平台差异说明                                       |
| :--------------------- | :---------- | :---------------- | :-------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------- |
| src                    | String      |                   | 图片资源地址                                                                                                          |                                                    |
| **mode🦢**             | **String**  | **'scaleToFill'** | **图片裁剪、缩放的模式**                                                                                              |                                                    |
| **lazy-load**          | **Boolean** | **false**         | **图片懒加载。只针对 page 与 scroll-view 下的 image 有效**                                                            | 微信小程序、百度小程序、字节跳动小程序、飞书小程序 |
| fade-show              | Boolean     | true              | 图片显示动画效果                                                                                                      | 仅 App-nvue 2.3.4+ Android 有效                    |
| webp                   | boolean     | false             | 默认不解析 webP 格式，只支持网络资源                                                                                  | 微信小程序 2.9.0                                   |
| show-menu-by-longpress | boolean     | false             | 开启长按图片显示识别小程序码菜单                                                                                      | 微信小程序 2.7.0                                   |
| draggable              | boolean     | true              | 是否能拖动图片                                                                                                        | H5 3.1.1+、App（iOS15+）                           |
| @error                 | HandleEvent |                   | 当错误发生时，发布到 AppService 的事件名，事件对象 event.detail = {errMsg: 'something wrong'}                         |                                                    |
| @load                  | HandleEvent |                   | 当图片载入完毕时，发布到 AppService 的事件名，事件对象 event.detail = {**height:'图片高度 px', width:'图片宽度 px**'} |                                                    |

**Tips**

-   ✍️**`<image>` 组件默认宽度 300px、高度 225px**；`app-nvue平台，暂时默认为屏幕宽度`
-   `src` 仅支持相对路径、绝对路径，支持 base64 码；
-   🦋**页面结构复杂，css 样式太多的情况，使用 image 可能导致样式生效较慢，出现 “闪一下” 的情况，此时设置 `image{will-change: transform}` ,可优化此问题。**
-   自定义组件里面使用 `<image>`时，若 `src` 使用相对路径可能出现路径查找失败的情况，故【**建议使用绝对路径**】
-   webp 格式的图片在 Android 上是内置支持的。iOS 上不同平台不一样，具体如下：app-vue 下，iOS 不支持；app-nvue 下，iOS 支持；微信小程序 2.9.0 起，iOS 支持。
-   🐙svg 格式的图片在不同的平台支持情况不同。具体为：app-nvue 不支持 svg 格式的图片，【**小程序上 svg 只支持网络地址**】

**mode 有效值：**

✍️ 个人观点：综合下述，**<span style="color:#037cd5">aspectFit 、widthFix</span>属性值应该是最常用的，或者自定义修改样式**

mode 有 14 种模式，其中 5 种是缩放模式，9 种是裁剪模式。

| 模式 | 值           | 说明                                                                                                                       |
| :--- | :----------- | :------------------------------------------------------------------------------------------------------------------------- |
| 缩放 | scaleToFill  | 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素                                                                |
| 缩放 | aspectFit    | 保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。                                       |
| 缩放 | aspectFill   | 保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。 |
| 缩放 | widthFix     | 宽度不变，高度自动变化，保持原图宽高比不变                                                                                 |
| 缩放 | heightFix    | 高度不变，宽度自动变化，保持原图宽高比不变 **App 和 H5 平台 HBuilderX 2.9.3+ 支持、微信小程序需要基础库 2.10.3**           |
| 裁剪 | top          | 不缩放图片，只显示图片的顶部区域                                                                                           |
| 裁剪 | bottom       | 不缩放图片，只显示图片的底部区域                                                                                           |
| 裁剪 | center       | 不缩放图片，只显示图片的中间区域                                                                                           |
| 裁剪 | left         | 不缩放图片，只显示图片的左边区域                                                                                           |
| 裁剪 | right        | 不缩放图片，只显示图片的右边区域                                                                                           |
| 裁剪 | top left     | 不缩放图片，只显示图片的左上边区域                                                                                         |
| 裁剪 | top right    | 不缩放图片，只显示图片的右上边区域                                                                                         |
| 裁剪 | bottom left  | 不缩放图片，只显示图片的左下边区域                                                                                         |
| 裁剪 | bottom right | 不缩放图片，只显示图片的右下边区域                                                                                         |

## uni-app 中的样式

`uni-app` 支持的通用 css 单位包括 px、rpx [详细参考](https://uniapp.dcloud.io/tutorial/syntax-css.html#css-%E6%94%AF%E6%8C%81)

-   px 即屏幕像素

-   🍺rpx 即**响应式 px**，一种根据屏幕宽度自适应的动态单位。以 750 宽的屏幕为基准，750rpx 恰好为屏幕宽度。屏幕变宽，rpx 实际显示效果会等比放大，具体配置参考：[rpx 计算配置](https://uniapp.dcloud.io/collocation/pages#globalstyle) 。

-   `uni-app` 规定屏幕基准宽度 750rpx

-   若设计稿宽度为 750px，元素 A 在设计稿上的宽度为 100px，那么元素 A 在 `uni-app` 里面的宽度应该设为：`750 * 100 / 750`，结果为：100rpx

    开发者可以通过设计稿基准宽度计算页面元素 rpx 值，设计稿 1px 与框架样式 1rpx 转换公式如下：

    ```
    设计稿 1px / 设计稿基准宽度 = 框架样式 1rpx / 750rpx
    ```

    换言之，页面元素宽度在 `uni-app` 中的宽度计算公式：

    ```
    🍸：750 * 元素在设计稿中的宽度 / 设计稿基准宽度
    ```

vue 页面支持下面这些普通 H5 单位，但在 nvue 里不支持：

-   rem 根字体大小可以通过 [page-meta](https://uniapp.dcloud.io/component/page-meta#page-meta) 配置
-   vh ，视窗高度，1vh 等于视窗高度的 1%
-   vw ，视窗宽度，1vw 等于视窗宽度的 1%

使用` @import url('');`语句可以导入外联样式文件，`@import `后面跟着导入文件的【**相对路径**】，使用`;`表示语句的结束

#### 选择器

> **🧦 支持基本常用的 class、id、元素 选择器**
>
> **🌵 在 uni-app 不支持使用 \* 选择器**
>
> **🧃page 相当于 body 节点**

#### 字体文件

与 web 开发相似，注意：

> **🗺️ 文件小于 40kb uni-app 自动转化为 base64 格式**
>
> **🌴 大于等于 40kb 需要开发者手动转化，否则不生效**
>
> **🧃 推荐使用`~@`开头的绝对路径**

#### Scss 预编译

只需要在 HBuilderX 插件市场安装该插件即可

#### 其它

开发者可以在`uni.scss`全局文件中定义 scss 样式变量，在其它地方使用即可

## 数据绑定

🗺️ 数据绑定及事件处理同 Vue.js 规范

## 生命周期

### 应用生命周期

`uni-app` 支持如下应用生命周期函数( **在 App.vue 文件中定义** )：[详细参考](https://uniapp.dcloud.io/tutorial/page.html#%E9%A1%B5%E9%9D%A2%E7%AE%80%E4%BB%8B)

| 函数名   | 说明                                          |
| -------- | --------------------------------------------- |
| onLaunch | 当`uni-app`初始化完成时触发( 全局只触发一次 ) |
| onShow   | 当`uni-app`启动，或从前台进入后台显示         |
| onHide   | 当`uni-app`从前台进入后台隐藏                 |
| onError  | 当`uni-app`报错时触发                         |

### 页面生命周期

`uni-app` 支持如下页面生命周期函数：

| 函数名            | 说明                                                                                                                                        | 平台差异说明                |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------- |
| onLoad            | 监听页面加载，**其参数为上个页面传递的数据，参数类型为 Object（用于页面传参）**，参考[示例](https://uniapp.dcloud.io/api/router#navigateto) |                             |
| onShow            | 监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面                                                                  |                             |
| onReady           | 监听页面**初次渲染完成**。注意如果渲染速度快，会在页面进入动画完成前触发                                                                    |                             |
| onHide            | 监听页面隐藏                                                                                                                                |                             |
| onUnload          | 监听页面卸载                                                                                                                                |                             |
| onResize          | 监听窗口尺寸变化                                                                                                                            | App、微信小程序、快手小程序 |
| onPullDownRefresh | 监听用户下拉动作，一般用于下拉刷新                                                                                                          |                             |
| onReachBottom     | 页面滚动到底部的事件（不是 scroll-view 滚到底），**常用于下拉下一页数据**                                                                   |                             |

> 🌵**`onReachBottom`使用注意 可在 pages.json 里定义具体页面底部的触发距离[onReachBottomDistance](https://uniapp.dcloud.io/collocation/pages#globalstyle)，比如设为 50，那么滚动页面到距离底部 50px 时，就会触发 onReachBottom 事件**
>
> 🍐**onShow 与 onHide 会触发多次**

##### 下拉刷新

1、可在 pages.json-pages 下自定义该页面的下拉刷新配置

2、uni.startPullDownRefresh({})，开启下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。

> 🥬 当处理完数据刷新后，`uni.stopPullDownRefresh` 可以停止当前页面的下拉刷新。

## 网络请求

### uni.request({option})

> 在各个小程序平台运行时，网络相关的 API 在使用前需要配置域名白名单
>
> ![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205211331685.png)

**option 参数说明**

| 参数名          | 类型                      | 必填 | 默认值 | 说明                                               | 平台差异说明                                                                    |
| :-------------- | :------------------------ | :--- | :----- | :------------------------------------------------- | :------------------------------------------------------------------------------ |
| url             | String                    | 是   |        | 开发者服务器接口地址                               |                                                                                 |
| data            | Object/String/ArrayBuffer | 否   |        | 请求的参数                                         | App 3.3.7 以下不支持 ArrayBuffer 类型                                           |
| header          | Object                    | 否   |        | 设置请求的 header，header 中不能设置 Referer。     | App、H5 端会自动带上 cookie，且 H5 端不可手动修改                               |
| method          | String                    | 否   | GET    | 有效值详见下方说明                                 |                                                                                 |
| timeout         | Number                    | 否   | 60000  | 超时时间，单位 ms                                  | H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序 |
| dataType        | String                    | 否   | json   | 如果设为 json，会尝试对返回的数据做一次 JSON.parse |                                                                                 |
| responseType    | String                    | 否   | text   | 设置响应的数据类型。合法值：text、arraybuffer      | 支付宝小程序不支持                                                              |
| sslVerify       | Boolean                   | 否   | true   | 验证 ssl 证书                                      | 仅 App 安卓端支持（HBuilderX 2.3.3+），不支持离线打包                           |
| withCredentials | Boolean                   | 否   | false  | 跨域请求时是否携带凭证（cookies）                  | 仅 H5 支持（HBuilderX 2.6.15+）                                                 |
| firstIpv4       | Boolean                   | 否   | false  | DNS 解析时优先使用 ipv4                            | 仅 App-Android 支持 (HBuilderX 2.8.0+)                                          |
| success         | Function                  | 否   |        | 收到开发者服务器成功返回的回调函数                 |                                                                                 |
| fail            | Function                  | 否   |        | 接口调用失败的回调函数                             |                                                                                 |
| complete        | Function                  | 否   |        | 接口调用结束的回调函数（调用成功、失败都会执行）   |                                                                                 |

## 数据缓存

### uni.setStorage({})

将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，**这是一个异步接口**

**option 参数说明**

| 参数名   | 类型     | 必填 | 说明                                                                   |
| :------- | :------- | :--- | :--------------------------------------------------------------------- |
| key      | String   | 是   | 本地缓存中的指定的 key                                                 |
| data     | Any      | 是   | 需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象 |
| success  | Function | 否   | 接口调用成功的回调函数                                                 |
| fail     | Function | 否   | 接口调用失败的回调函数                                                 |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）                       |

```js
uni.setStorage({
	key: 'storage_key',
	data: '[{1},{2},{3}]',
	success() {
		console.log('success');
	},
});
```

### uni.setStorageSync()

将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，**这是一个同步接口**

**参数说明**

| 参数 | 类型   | 必填 | 说明                                                                   |
| :--- | :----- | :--- | :--------------------------------------------------------------------- |
| key  | String | 是   | 本地缓存中的指定的 key                                                 |
| data | Any    | 是   | 需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象 |

```javascript
try {
	uni.setStorageSync('storage_key', 'hello');
} catch (e) {
	// error
}
```

### uni.getStoragev({})

从本地缓存中异步获取指定 key 对应的内容

**option 参数说明**

| 参数名   | 类型     | 必填 | 说明                                             |
| :------- | :------- | :--- | :----------------------------------------------- |
| key      | String   | 是   | 本地缓存中的指定的 key                           |
| success  | Function | 是   | 接口调用的回调函数，res = {data: key 对应的内容} |
| fail     | Function | 否   | 接口调用失败的回调函数                           |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行） |

**success 返回参数说明**

| 参数 | 类型 | 说明           |
| :--- | :--- | :------------- |
| data | Any  | key 对应的内容 |

其它的 API 使用方法基本同上

### uni.getStorageSync

### uni.removeStorage

### uni.removeStorageSync

## 图片的上传与预览

[🌵 详细参考](https://uniapp.dcloud.io/api/media/image.html)

### uni.chooseImage({option})

从本地相册选择图片或使用相机拍照

**参数说明**

| 参数名           | 类型                | 必填   | 说明                                                                                              | 平台差异说明                              |
| :--------------- | :------------------ | :----- | :------------------------------------------------------------------------------------------------ | :---------------------------------------- |
| count            | Number              | 否     | 最多可以选择的图片张数，默认 9                                                                    | 见下方说明                                |
| **sizeType**🧃   | **`Array<String>`** | **否** | **original 原图，compressed 压缩图，默认二者都有**                                                | App、微信小程序、支付宝小程序、百度小程序 |
| extension        | `Array<String>`     | 否     | 根据文件拓展名过滤，每一项都不能是空字符串。默认不过滤。                                          | H5(HBuilder X2.9.9+)                      |
| **sourceType**🌴 | **`Array<String>`** | **否** | **album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项** |                                           |
| crop             | Object              | 否     | 图像裁剪参数，设置后 sizeType 失效                                                                | App 3.1.19+                               |
| success          | Function            | 是     | **成功则返回图片的本地文件路径列表 tempFilePaths**                                                |                                           |
| fail             | Function            | 否     | 接口调用失败的回调函数                                                                            | 小程序、App                               |
| complete         | Function            | 否     | 接口调用结束的回调函数（调用成功、失败都会执行）                                                  |                                           |

**crop 参数说明**

| 参数名  | 类型    | 必填 | 说明                                                                                                                                        | 平台差异说明 |
| :------ | :------ | :--- | :------------------------------------------------------------------------------------------------------------------------------------------ | :----------- |
| quality | Number  | 否   | 取值范围为 1-100，数值越小，质量越低（**仅对 jpg 格式有效**）。默认值为 80。                                                                |              |
| width   | Number  | 是   | 裁剪的宽度，单位为 px，用于计算裁剪宽高比。                                                                                                 |              |
| height  | Number  | 是   | 裁剪的高度，单位为 px，用于计算裁剪宽高比。                                                                                                 |              |
| resize  | Boolean | 否   | 是否将 width 和 height 作为裁剪保存图片真实的像素值。默认值为 true。注：设置为 false 时在裁剪编辑界面显示图片的像素值，设置为 true 时不显示 |              |

**Tips**

-   🥃 可以通过用户授权 API 来判断用户是否给应用授予相册或摄像头的访问权限[详情参考](https://uniapp.dcloud.io/api/other/authorize)
-   🍺 选择照片大多为了上传，uni ui 封装了更完善的[uni-file-picker 组件](https://ext.dcloud.net.cn/plugin?id=4079)，文件选择、上传到 uniCloud 的免费存储和 cdn 中，一站式集成。强烈推荐使用。

**注：文件的临时路径，在应用本次启动期间可以正常使用，如需持久保存，需在主动调用 [uni.saveFile](https://uniapp.dcloud.io/api/file/file#savefile)，在应用下次启动时才能访问得到。**

**success 返回参数说明**

| 参数          | 类型                         | 说明                                       |
| :------------ | :--------------------------- | :----------------------------------------- |
| tempFilePaths | `Array<String>`              | 图片的本地文件路径列表                     |
| tempFiles     | `Array<Object>、Array<File>` | 图片的本地文件列表，每一项是一个 File 对象 |

**File 对象结构如下**

| 参数 | 类型   | 说明                             |
| :--- | :----- | :------------------------------- |
| path | String | 本地文件路径                     |
| size | Number | 本地文件大小，单位：B            |
| name | String | 包含扩展名的文件名称，仅 H5 支持 |
| type | String | 文件类型，仅 H5 支持             |

```javascript
uni.chooseImage({
	count: 6, //默认9
	sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
	sourceType: ['album'], //从相册选择
	success: function (res) {
		console.log(JSON.stringify(res.tempFilePaths));
	},
});
```

### uni.previewImage({option})

预览图片

**option 参数说明**

| 参数名           | 类型            | 必填         | 说明                                                                                                     | 平台差异说明 |
| :--------------- | :-------------- | :----------- | :------------------------------------------------------------------------------------------------------- | :----------- |
| current          | String/Number   | 详见下方说明 | 详见下方说明                                                                                             |              |
| urls             | `Array<String>` | 是           | 需要预览的图片链接列表                                                                                   |              |
| indicator        | String          | 否           | 图片指示器样式，可取值："default" - 底部圆点指示器； "number" - 顶部数字指示器； "none" - 不显示指示器。 | App          |
| loop             | Boolean         | 否           | 是否可循环预览，默认值为 false                                                                           | App          |
| longPressActions | Object          | 否           | 长按图片显示操作菜单，如不填默认为**保存相册**                                                           | App 1.9.5+   |
| success          | Function        | 否           | 接口调用成功的回调函数                                                                                   |              |
| fail             | Function        | 否           | 接口调用失败的回调函数                                                                                   |              |
| complete         | Function        | 否           | 接口调用结束的回调函数（调用成功、失败都会执行）                                                         |              |

## 条件注释-跨端兼容

**条件编译是用特殊的注释作为标记，在编译时根据这些特殊注释，将注释里面的代码编译到不同平台**

🛤️**写法**：以 `#ifdef`加平台标识开头，以`endif`结尾

🥃**写法：**以 `#ifdef` 或 `#ifndef`加 `%PLATFORM%` 开头，以 `#endif `结尾。

-   \#ifdef：if defined 仅在某平台存在
-   \#ifndef：if not defined 除了某平台均存在
-   **%PLATFORM%**：平台名称

```html
<!-- #ifdef H5 -->
<view> 仅在H5中显示🎲 </view>
<!-- #endif -->
```

```js
// #ifdef H5
console.log('H5🥬');
// #endif
```

**注意：**

-   条件编译是利用注释实现的，在不同语法里注释写法不一样，js 使用 `// 注释`、css 使用 `/* 注释 */`、vue/nvue 模板里使用 `<!-- 注释 -->`；
-   条件编译 APP-PLUS 包含 APP-NVUE 和 APP-VUE，APP-PLUS-NVUE 和 APP-NVUE 没什么区别，为了简写后面出了 APP-NVUE ；
-   使用条件编译请保证`编译前`和`编译后`文件的正确性，比如 json 文件中不能有多余的逗号；
-   `VUE3` 需要在项目的 `manifest.json` 文件根节点配置 `"vueVersion" : "3"`

| 条件编译写法                                             | 说明                                                                             |
| -------------------------------------------------------- | -------------------------------------------------------------------------------- |
| #ifdef **APP-PLUS** 需条件编译的代码 #endif              | 仅出现在 App 平台下的代码                                                        |
| #ifndef **H5** 需条件编译的代码 #endif                   | 除了 H5 平台，其它平台均存在的代码                                               |
| #ifdef **H5** \|\| **MP-WEIXIN** 需条件编译的代码 #endif | 在 H5 平台或微信小程序平台存在的代码（这里只有\|\|，不可能出现&&，因为没有交集） |

**%PLATFORM%** **可取值如下：**

| 值                        | 生效条件                                                                           |
| :------------------------ | :--------------------------------------------------------------------------------- |
| VUE3                      | HBuilderX 3.2.0+ [详情(opens new window)](https://ask.dcloud.net.cn/article/37834) |
| APP-PLUS                  | App                                                                                |
| APP-PLUS-NVUE 或 APP-NVUE | App nvue                                                                           |
| H5                        | H5                                                                                 |
| MP-WEIXIN                 | 微信小程序                                                                         |
| MP-ALIPAY                 | 支付宝小程序                                                                       |
| MP-BAIDU                  | 百度小程序                                                                         |
| MP-TOUTIAO                | 字节跳动小程序                                                                     |
| MP-LARK                   | 飞书小程序                                                                         |
| MP-QQ                     | QQ 小程序                                                                          |
| MP-KUAISHOU               | 快手小程序                                                                         |
| MP-JD                     | 京东小程序                                                                         |
| MP-360                    | 360 小程序                                                                         |
| MP                        | 微信小程序/支付宝小程序/百度小程序/字节跳动小程序/飞书小程序/QQ 小程序/360 小程序  |
| QUICKAPP-WEBVIEW          | 快应用通用(包含联盟、华为)                                                         |
| QUICKAPP-WEBVIEW-UNION    | 快应用联盟                                                                         |
| QUICKAPP-WEBVIEW-HUAWEI   | 快应用华为                                                                         |

**支持的文件**

-   .vue
-   .js
-   .css
-   pages.json
-   各预编译语言文件，如：.scss、.less、.stylus、.ts、.pug

## 导航跳转 and 传参

### navigator-声明式跳转

该组件类似 HTML 中的`<a>`组件，**但只能跳转本地页面，目标页面必须在`pages.json`中注册**

该组件的功能有 API 方式，另见：[详细参考](https://uniapp.dcloud.io/api/router?id=navigateto)

**属性说明**

| 属性名                 | 类型    | 默认值          | 说明                                                                                                                                    | 平台差异说明                 |
| :--------------------- | :------ | :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------- |
| url                    | String  |                 | 应用内的跳转链接，值为相对路径或绝对路径，如："../first/first"，"/pages/first/first"，注意不能加 `.vue` 后缀                            |                              |
| open-type              | String  | navigate        | 跳转方式                                                                                                                                |                              |
| delta                  | Number  |                 | 当 open-type 为 'navigateBack' 时有效，表示回退的层数                                                                                   |                              |
| animation-type         | String  | pop-in/out      | 当 open-type 为 navigate、navigateBack 时有效，窗口的显示/关闭动画效果，详见：[窗口动画](https://uniapp.dcloud.io/api/router#animation) | App                          |
| animation-duration     | Number  | 300             | 当 open-type 为 navigate、navigateBack 时有效，窗口显示/关闭动画的持续时间。                                                            | App                          |
| hover-class            | String  | navigator-hover | 指定点击时的样式类，当 hover-class="none"时，没有点击态效果                                                                             |                              |
| hover-stop-propagation | Boolean | false           | 指定是否阻止本节点的祖先节点出现点击态                                                                                                  | 微信小程序                   |
| hover-start-time       | Number  | 50              | 按住后多久出现点击态，单位毫秒                                                                                                          |                              |
| hover-stay-time        | Number  | 600             | 手指松开后点击态保留时间，单位毫秒                                                                                                      |                              |
| target                 | String  | self            | 在哪个小程序目标上发生跳转，默认当前小程序，值域 self/miniProgram                                                                       | 微信 2.0.7+、百度 2.5.2+、QQ |

**open-type 有效值**

| 值           | 说明                                                 | 平台差异说明                       |
| :----------- | :--------------------------------------------------- | :--------------------------------- |
| navigate     | 对应 uni.navigateTo 的功能                           |                                    |
| redirect🥬   | 对应 uni.redirectTo 的功能( 没有退回按钮`<`卸载页面) |                                    |
| switchTab    | 对应 uni.switchTab 的功能                            |                                    |
| reLaunch     | 对应 uni.reLaunch 的功能                             | 字节跳动小程序与飞书小程序不支持   |
| navigateBack | 对应 uni.navigateBack 的功能                         |                                    |
| exit🥦       | 退出小程序，target="miniProgram"时生效               | 微信 2.1.0+、百度 2.5.2+、QQ1.4.7+ |

**注意**

-   🥃 跳转 tabbar 页面，必须设置`open-type="switchTab"`
-   navigator-hover 默认为 {background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}, `<navigator>` 的子节点背景色应为透明色。
-   navigator-`open-type`属性 如果使用对应的值，则对应值的功能会高于对应跳转路径。
-   [uLink 组件 (opens new window)](https://ext.dcloud.net.cn/plugin?id=1182)是 navigator 组件的增强版，样式上自带下划线，功能上支持打开在线网页、其他 App 的 schema、mailto 发邮件、tel 打电话。

```html
<template>
	<view>
		<view class="page-body">
			<view class="btn-area">
				<navigator
					url="nav/navigate?title=navigate"
					hover-class="navigator-hover"
				>
					<button type="default">跳转到新页面</button>
				</navigator>
				<navigator
					url="redirect/redirect?title=redirect"
					open-type="redirect"
				>
					<button type="default">在当前页打开</button>
				</navigator>
				// 需要开启 switchTab 才能跳转 tab 页面
				<navigator
					url="/pages/tabBar/extUI/extUI"
					open-type="switchTab"
				>
					<button type="default">跳转tab页面</button>
				</navigator>
			</view>
		</view>
	</view>
</template>
<script>
	// navigate.vue页面接受参数
	export default {
		onLoad: function (option) {
			//option为object类型，会序列化上个页面传递的参数
			console.log(option.id); //打印出上个页面传递的参数。
			console.log(option.name); //打印出上个页面传递的参数。
		},
	};
</script>
```

🧪url 有长度限制，太长的字符串会传递失败，可使用[窗体通信](https://uniapp.dcloud.io/tutorial/page.html#emit)、[全局变量 ](https://ask.dcloud.net.cn/article/35021)，或`encodeURIComponent`等多种方式解决，如下为`encodeURIComponent`示例。

```html
<navigator
	:url="'/pages/navigate/navigate?item='+ encodeURIComponent(JSON.stringify(item))"
></navigator>
// navigate.vue页面接受参数 onLoad: function (option) { const item =
JSON.parse(decodeURIComponent(option.item)); }
```

### 编程式跳转

[详情参考](https://uniapp.dcloud.io/api/router.html#navigateto)

[uni.navigateTo({})](https://uniapp.dcloud.io/api/router.html#navigateto)，**保留当前页面**，跳转到应用内的某个页面，使用`uni.navigateBack`可以返回到原页面。

[uni.redirectTo({})](https://uniapp.dcloud.io/api/router.html#redirectto)，**关闭当前页面**，跳转到应用内的某个页面

[uni.reLaunch({})](https://uniapp.dcloud.io/api/router.html#relaunch)，**关闭所有页面**，打开到应用内的某个页面。

[uni.switchTab({})](https://uniapp.dcloud.io/api/router.html#switchtab)，**跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。**

[uni.navigateBack({})](https://uniapp.dcloud.io/api/router.html#navigateback)，**关闭当前页面，返回上一页面或多级页面。可通过 `getCurrentPages()` 获取当前的页面栈，决定需要返回几层。**

**option 参数说明**

| 参数              | 类型     | 必填 | 默认值 | 说明                                                                                                                                                                                                                           | 平台差异说明 |
| :---------------- | :------- | :--- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------- |
| url               | String   | 是   |        | 需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'，path 为下一个页面的路径，下一个页面的 onLoad 函数可得到传递的参数 |              |
| animationType     | String   | 否   | pop-in | 窗口显示的动画效果，详见：[窗口动画](https://uniapp.dcloud.io/api/router#animation)                                                                                                                                            | App          |
| animationDuration | Number   | 否   | 300    | 窗口动画持续时间，单位为 ms                                                                                                                                                                                                    | App          |
| events            | Object   | 否   |        | 页面间通信接口，用于监听被打开页面发送到当前页面的数据。2.8.9+ 开始支持。                                                                                                                                                      |              |
| success           | Function | 否   |        | 接口调用成功的回调函数                                                                                                                                                                                                         |              |
| fail              | Function | 否   |        | 接口调用失败的回调函数                                                                                                                                                                                                         |              |
| complete          | Function | 否   |        | 接口调用结束的回调函数（调用成功、失败都会执行）                                                                                                                                                                               |              |

**object.success 回调函数**

**参数**

**Object res**

| 属性               | 类型                                                                  | 说明                     |
| :----------------- | :-------------------------------------------------------------------- | :----------------------- |
| **eventChannel**👑 | **[EventChannel](https://uniapp.dcloud.io/api/router#event-channel)** | **和被打开页面进行通信** |

### 传参

🧦 通过生命周期函数 `onLoad`形参可接受上一个页面传递过来的参数

```js
onLoad(option){}
```

## 组件创建

uni-app 组件的创建与 Vue 基本一样

uni-app 组件的生命周期函数与 Vue 基本一样

注意：🌴 需要分清楚应用、页面、组件的各自生命周期

## uni-app 组件通讯

### uni.$emit(eventName,OBJECT)

触发全局的自定义事件，附加参数都会传给监听器回调函数。

| 属性      | 类型   | 描述                   |
| --------- | ------ | ---------------------- |
| eventName | String | 事件名                 |
| OBJECT    | Object | 触发事件携带的附加参数 |

**代码示例**

```javascript
uni.$emit('update', { msg: '页面更新' });
```

### [#](https://uniapp.dcloud.io/api/window/communication.html#on)uni.$on(eventName,callback)

监听全局的自定义事件，事件由 `uni.$emit` 触发，回调函数会接收事件触发函数的传入参数。

| 属性      | 类型     | 描述           |
| --------- | -------- | -------------- |
| eventName | String   | 事件名         |
| callback  | Function | 事件的回调函数 |

**代码示例**

```javascript
uni.$on('update', function (data) {
	console.log('监听到事件来自 update ，携带参数 msg 为：' + data.msg);
});
```

### [#](https://uniapp.dcloud.io/api/window/communication.html#once)uni.$once(eventName,callback)

监听全局的自定义事件，事件由 `uni.$emit` 触发，但仅触发一次，在第一次触发之后移除该监听器。

| 属性      | 类型     | 描述           |
| --------- | -------- | -------------- |
| eventName | String   | 事件名         |
| callback  | Function | 事件的回调函数 |

**代码示例**

```javascript
uni.$once('update', function (data) {
	console.log('监听到事件来自 update ，携带参数 msg 为：' + data.msg);
});
```

### [#](https://uniapp.dcloud.io/api/window/communication.html#off)uni.$off([eventName, callback])

移除全局自定义事件监听器。

| 属性      | 类型               | 描述           |
| --------- | ------------------ | -------------- |
| eventName | Array ＜ String ＞ | 事件名         |
| callback  | Function           | 事件的回调函数 |

**Tips**

-   如果 uni.$off 没有传入参数，则移除 App 级别的所有事件监听器；
-   如果只提供了事件名（eventName），则移除该事件名对应的所有监听器；
-   如果同时提供了事件与回调，则只移除这个事件回调的监听器；
-   提供的回调必须跟$on 的回调为同一个才能移除这个回调的监听器；

**代码示例**

`$emit`、`$on`、`$off`常用于跨页面、跨组件通讯，这里为了方便演示放在同一个页面

```html
<template>
	<view class="content">
		<view class="data">
			<text>{{val}}</text>
		</view>
		<button type="primary" @click="comunicationOff">结束监听</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				val: 0,
			};
		},
		onLoad() {
			setInterval(() => {
				uni.$emit('add', {
					data: 2,
				});
			}, 1000);
			uni.$on('add', this.add);
		},
		methods: {
			comunicationOff() {
				uni.$off('add', this.add);
			},
			add(e) {
				this.val += e.data;
			},
		},
	};
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.data {
		text-align: center;
		line-height: 40px;
		margin-top: 40px;
	}

	button {
		width: 200px;
		margin: 20px 0;
	}
</style>
```

**注意事项**

-   **以上触发的事件都是 App 全局级别的，跨任意组件，页面，nvue，vue 等**

-   使用时，注意及时销毁事件监听

## 扩展组件

### uni-ui

[详细参考](https://uniapp.dcloud.io/component/uniui/uni-ui.html)

## 注意笔记

> **🎲 API 回调函数 success、fail、complete 等，this 指向问题：需要使用`()=>{}` 解决**
