# 👑 新的 Vue 项目

## 介绍

> **前端 🤿**
>
> 一个使用 `webpack` + `vue3` + `pinia` + `Element-Plus` + `typescript` 完整技术路线开发的项目，新的`vue3 composition api` 结合 `setup`纵享丝滑般的开发体验、全新的 pinia`状态管理器和优秀的设计体验（`1k`的大小）、`饿了么无障碍过渡使用 UI 组件库 `Element-Plus(熟悉的配方熟悉的味道)`、`可配置的系统系统主题色、`安全高效的 `typescript`类型支持、代码规范验证、多级别的权限管理~
>
> **后端**🪵
>
> 基于 `Express` + `Mongodb` 构建的后台系统,整个项目管理接口，共 20 多个。涉及登陆、注册、角色、菜单、文件的添加展示查询删除、用户权限验证、验证码发送，邮箱信息发送等
>
> 基于 RBAC 模型权限控制开发，前后端分离，JWT 身份认证，内置模块有`用户`、`角色`、`菜单`和`文件上传`等模块，后期还会继续添加

## 特性

-   ✨ 脚手架工具：高效、稳定、完美生态的 **webpack(vue-cli)**
-   🔥 前端框架：眼下最时髦的 **Vue3**
-   🍍 状态管理器：`vue3`新秀 **Pinia**，良好的开发体验，友好的 api 和异步处理
-   🏆 开发语言：政治正确 **TypeScript**
-   🎉UI 组件：`Element-Plus`开发者无障碍过渡使用，熟悉的配方熟悉的味道
-   🎨css 样式：**scss** 、`postcss`
-   📖 代码规范：**Eslint**、**Prettier**、**Commitlint**
-   🔒 权限管理：页面级、菜单级、角色级、接口级
-   ✊ 依赖按需加载：**unplugin-auto-import**，可自动导入使用到的`vue`、`vue-router`等依赖
-   💪 组件按需导入：**unplugin-vue-components**，无论是第三方 UI 组件还是自定义组件都可实现自动按需导入以及`TS`语法提示
-   📦 快速低代码创建开发模板：**plopJS**，通过命令行自动生成 `api`、`router`、`page`、`store`等模板，高效率开发

### 项目目录(前端)

```
├── .husky                              // husky git hooks配置目录
    ├── _                               // husky 脚本生成的目录文件
    ├── commit-msg                      // commit-msg钩子，用于验证 message格式
    ├── pre-commit                      // pre-commit钩子，主要是和eslint配合
└── src                                 // 源码目录
    ├── api                             // 接口相关
    ├── assets                          // 公共的文件（如image、css、font等）
    ├── components                      // 项目组件
    ├── router                          // 路由
    ├── store                           // 状态管理器
    ├── utils                           // 工具库
    ├── pages                           // 页面模块目录
        ├── ...
    ├── App.vue                         // vue顶层文件
    ├── auto-imports.d.ts               // unplugin-auto-import 插件生成
    ├── components.d.d.ts               // unplugin-vue-components 插件生成
    ├── main.ts                         // 项目入口文件
    ├── shimes-vue.d.ts                 // vite默认ts类型文件
    ├── types                           // 项目type类型定义文件夹
├── .editorconfig                       // 格式规范
├── .eslintignore                       // eslint忽略
├── .eslintrc                           // eslint配置文件
├── .gitignore                          // git忽略
├── .prettierignore                     // prettierc忽略
├── .prettierrc                         // prettierc配置文件
├── index.html                          // 入口文件
├── package.json                        // package
├── README.md                           // README
├── tsconfig.json                       // typescript配置文件
└── vue.config.ts                      // vite
```

### 项目目录(后端)

```
server-mate
├─ app.js --------- 配置文件
├─ bin ------------ 项目的入口文件 www
│  └─ www
├─ package.json --- 依赖配置文件
├─ README.md ------ 项目开发文档
├─ routes --------- API路由规划
│  ├─ index.js
│  └─ users.js
├─ utils ---------- 工具箱
├─ models --------- Schemay,数据模型
├─ config --------- 数据库...配置文件
└─ yarn.lock
```

**项目地址(前端)：https://github.com/Kiyan-a/web-mate**

**项目地址(后端)：https://gitee.com/li-yu-feng/server-mate**

**demo：https://web-mate.vercel.app/login**

### 效果展示

#### 登录注册😁

![/img/登录.gif](/img/登录.gif)



#### 系统主题色😁

![](/img/主题色.gif)



#### 系统RBAC权限管理😁

![](/img/权限管理.gif)



#### tabs路由管理以及右键菜单操作😁

![](/img/tabs.gif)
