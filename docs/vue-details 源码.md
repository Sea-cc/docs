# Vue

> #### **什么是渐进式式框架**
>
> **表示可以在项目中一点点来引入和使用 Vue，而不一定需要全部引入使用 Vue，来开发整个项目**
>
> `<template>` 标签并不是 Vue 特有的，是 HTML 一个标签，但是它(包括它的内容)不会被浏览器渲染，而是用来被 js 脚本读取使用的

> #### Composition API
>
> 🍟 Composition API 可以将相关联的代码放到同一处进行处理，而不需要在多个 Options 之间寻找
>
> #### Hooks 函数增加代码的复用性
>
> ⛵ 在 Vue2.x 的时候，通常通过 mixins 在多个组件之间共享逻辑
> 但是有一个很大的缺陷就是 mixins 也是由一大堆的 Options 组成的，并且多个 mixinss 会**存在命名冲突**的问题
> 🚀 在 Vue3.x 中，可以通过 Hook 函数来将一部分独立的逻辑抽取出去，并且它们还**可以做到是响应式的**，通过按需导入，这样一目了然 Hook 函数来自哪个文件

> **`data 中返回的对象会被 Vue 的响应式系统劫持(响应式数据)`**，**之后对该对象的修改或者访问都会在劫持中被处理**
> 所以在 template 中通过 {{}} 访问 data 中的数据，可从对象中获取到数据
> 所以修改 data 的值时，template 中的 {{}} 的值也会发生改变

> **在 vue2 中提供 .sync 修饰符，但是在 vue3 中不再支持.sync，取而代之的是 v-model**
>
> 在自定义组件中的 v-model，会默认展开成`:modelValue`和`@update:modelValue`的形式
>
> ```html
> <dialog v-model="dialogVisible"></dialog>
> ```
>
> ```html
> <dialog
> 	:modelValue="dialogVisible"
> 	@update:modelValue="newValue => dialogVisible = newValue"
> ></dialog>
> ```
>
> 在子组件中`emit('update:modelValue', newValue)`，父组件绑定的值就会随之修改。
>
> **默认情况下，v-model 在组件上都是使用 `modelValue` 作为 prop，并以 `update:modelValue` 作为对应的事件。通过给 v-model 指定一个参数来更改这些名字：**
>
> **v-model:自定义 prop = 'dialogVisible'**

## 读源码

**`登上 GitHub`** --- **`搜索代码仓库`** --- **`拉去代码分支(推荐 master 稳定分支)`** --- **`安装依赖查看 package.json 文件`** --- **`对项目进行打包或其它操作(如果打包或者其它操作后代码架构不清晰，可以尝试使用 --sourcemap，类似 webpack 的源码映射配置，有利于调试)`**

**核心部分**

![image-20221103220601358](/img/image-20221103220601358.png)

**`D:\Material\Vue源码解析\core\packages\runtime-dom\src\index.ts`** **从这开始 creatApp**

**`D:\Material\Vue源码解析\core\packages\shared\src\index.ts`** **Vue 在这里导出工具方法**

### options Api

> ### Methods 中的方法 this 指向
>
> 不能使用 **箭头函数** 定义 methods 中的方法( this 指向问题，箭头函数没有 this，所以它在定义时候就确定 this 的值 )
>
> **源码解读**🍟
>
> **在 Methods 中取出函数，通过 bind() 方法，显示的改变它的 this 指向 publicThis 并返回一个函数，将返回的函数赋值到上下文 ctx 对象以源函数同名的 key 属性 中，【实际上在代码中调用的并不是源函数，而是通过处理后的 `ctx['函数名']`】**
>
> **`publicThis`**：**组件实例的代理 ，`const publicThis = instance.proxy`**
>
> `D:\Material\Vue源码解析\core\packages\runtime-core\src\componentOptions.ts:625 `
>
> ```js
> if (methods) {
>  for (const key in methods) {
>    const methodHandler = (methods as MethodOptions)[key]
>    if (isFunction(methodHandler)) {
>      // 在开发模式下，我们使用`createRenderContext`函数来定义
>      // 代理目标的方法，那些是只读的但是
>      // 可重新配置，所以这里需要重新定义
>      if (__DEV__) {
>        Object.defineProperty(ctx, key, {
>          value: methodHandler.bind(publicThis),
>          configurable: true,
>          enumerable: true,
>          writable: true
>        })
>      } else {
>        ctx[key] = methodHandler.bind(publicThis)
>      }
>      if (__DEV__) {
>        checkDuplicateProperties!(OptionTypes.METHODS, key)
>      }
>    } else if (__DEV__) {
>      warn(
>        `Method "${key}" has type "${typeof methodHandler}" in the component definition. ` +
>          `Did you reference the function correctly?`
>      )
>    }
>  }
> ```

> ### computed 简写 与 完整写法的处理
>
> `D:\Material\Vue源码解析\core\packages\runtime-core\src\componentOptions.ts:694 `
>
> **🫕 同样不能使用箭头函数**
>
> ```js
> if (computedOptions) {
>     for (const key in computedOptions) {
>       const opt = (computedOptions as ComputedOptions)[key]
>       // 获取 getter 方法
>       const get = isFunction(opt) // 判断是否为简写 Function 写法
>         ? opt.bind(publicThis, publicThis) // 修改 this 绑定 proxy(同Methods处理)
>         : isFunction(opt.get)
>         ? opt.get.bind(publicThis, publicThis)
>         : NOOP
>
>       // NOOP = () => {}
>       if (__DEV__ && get === NOOP) {
>         warn(`Computed property "${key}" has no getter.`)
>       }
>       // 获取 setter 方法
>       const set =
>         !isFunction(opt) && isFunction(opt.set)
>           ? opt.set.bind(publicThis)
>           : __DEV__
>           ? () => {
>               warn(
>                 `Write operation failed: computed property "${key}" is readonly.`
>               )
>             }
>           : NOOP
>       // ？？？compostion API
>       const c = computed({
>         get,
>         set
>       })
>       Object.defineProperty(ctx, key, {
>         enumerable: true,
>         configurable: true,
>         get: () => c.value,// vue3 响应式写法
>         set: v => (c.value = v)
>       })
>       if (__DEV__) {
>         // 检查重复属性
>         checkDuplicateProperties!(OptionTypes.COMPUTED, key)
>       }
>     }
>   }
> ```

> ### watch 监听器
>
> **`注意：watch 监听不到 引用类型 的旧值(oldValue)`**
>
> **其它写法(字符串)**：**`监听属性:'methods方法名'`**;
>
> **数组：** **`['字符串写法' , Function写法 , Object写法]，逐一被调用`**
>
> **对象属性简写：** **`'对象.属性'(){}`**

> ### 依赖注入 provide inject
>
> **如果需要返回 data 中的数据，需要使用 Function 写法，但是数据不会是响应式的，解决方案：**
>
> ```js
> import { computed } from 'vue'
> provide(){
> 	return {
> 		name:this.name,// 不是响应式
>         // 转化响应式数据
>         name:computed(() => this.name), // Vue3 compostion API
> 	}
> }
> ```

### composition Api

> ### 🪂 setup
>
> **在 setup 中应当避免使用 this，因为它不会找到组件实例。`setup 的调用发生在 data property、computed property 或 methods 被解折之前，调用 createComponentInstance 创建组件实例之后`，所以它们无法在 setup 中获取**
>
> **在阅读源码的过程中，代码是按照如下顺序执行的** > **🍟 调用 createComponentInstance 创建组件实例** > **🍳 调用 setupComponent 初始化 component 内部的操作** > **🍃 调用 setupStatefulComponent 初始化有状态的组件** > **🌏 在 setupStatefulComponent 取出 setup 函数** > **🛵 通过 callWithErrorHandling 的函数执行 setup**
>
> 处理组件在： **`D:\Material\Vue源码解析\core\packages\runtime-core\src\renderer.ts：421`**
>
> ```js
> // ...处理组件节点
> if (shapeFlag & ShapeFlags.COMPONENT) {
>      processComponent(
>          n1,
>          n2,
>          container,
>          anchor,
>          parentComponent,
>          parentSuspense,
>          isSVG,
>          slotScopeIds,
>          optimized
>      )
> }
>
> const processComponent = (
>  n1: VNode | null,
>  n2: VNode,
>  container: RendererElement,
>  anchor: RendererNode | null,
>  parentComponent: ComponentInternalInstance | null,
>  parentSuspense: SuspenseBoundary | null,
>  isSVG: boolean,
>  slotScopeIds: string[] | null,
>  optimized: boolean
> ) => {
>  n2.slotScopeIds = slotScopeIds
>  // n1 == null 表示这是挂载节点
>  if (n1 == null) {
>    if (n2.shapeFlag & ShapeFlags.COMPONENT_KEPT_ALIVE) {
>      ;(parentComponent!.ctx as KeepAliveContext).activate(
>        n2,
>        container,
>        anchor,
>        isSVG,
>        optimized
>      )
>    }
>    // 调用 mountComponent 挂载组件
>    else {
>      mountComponent(
>        n2,
>        container,
>        anchor,
>        parentComponent,
>        parentSuspense,
>        isSVG,
>        optimized
>      )
>    }
>  }
>  // n1 为非空表示这是一个更新，更新组件
>  else {
>    updateComponent(n1, n2, optimized)
>  }
> }
>
> // 🍟 调用 createComponentInstance 创建组件实例
> const mountComponent: MountComponentFn = (
>  initialVNode,
>  container,
>  anchor,
>  parentComponent,
>  parentSuspense,
>  isSVG,
>  optimized
> ) => {
>  // 2.x compat 可以在实际之前预先创建组件实例
>  // 安装,调用 createComponentInstance 创建组件实例
>  const compatMountInstance =
>    __COMPAT__ && initialVNode.isCompatRoot && initialVNode.component
>  const instance: ComponentInternalInstance =
>    compatMountInstance ||
>    (initialVNode.component = createComponentInstance(
>      initialVNode,
>      parentComponent,
>      parentSuspense
>    ))
>
>  if (__DEV__ && instance.type.__hmrId) {
>    registerHMR(instance)
>  }
>
>  if (__DEV__) {
>    pushWarningContext(initialVNode)
>    startMeasure(instance, `mount`)
>  }
>
>  // inject renderer internals for keepAlive
>  if (isKeepAlive(initialVNode)) {
>    ;(instance.ctx as KeepAliveContext).renderer = internals
>  }
>
>  // 解析设置上下文的道具和插槽
>  // 作用是对组件的 props 和 slots 等进行初始化处理(并且内部有对 Vue2.x 的 options Api 兼容处理)
>  if (!(__COMPAT__ && compatMountInstance)) {
>    if (__DEV__) {
>      startMeasure(instance, `init`)
>    }
>    // 🍳 调用 setupComponent 初始化 component 内部的操作
>    setupComponent(instance)
>    if (__DEV__) {
>      endMeasure(instance, `init`)
>    }
>  }
>
>  // setup() is async. This component relies on async logic to be resolved
>  // before proceeding
>  if (__FEATURE_SUSPENSE__ && instance.asyncDep) {
>    parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect)
>
>    // Give it a placeholder if this is not hydration
>    // TODO handle self-defined fallback
>    if (!initialVNode.el) {
>      const placeholder = (instance.subTree = createVNode(Comment))
>      processCommentNode(null, placeholder, container!, anchor)
>    }
>    return
>  }
>
>  setupRenderEffect(
>    instance,
>    initialVNode,
>    container,
>    anchor,
>    parentSuspense,
>    isSVG,
>    optimized
>  )
>
>  if (__DEV__) {
>    popWarningContext()
>    endMeasure(instance, `mount`)
>  }
> }
> ```
>
> **`D:\Material\Vue源码解析\core\packages\runtime-core\src\component.ts：596`**
>
> ```js
> // 🍳 调用 setupComponent 初始化 component 内部的操作
> export function setupComponent(
> instance: ComponentInternalInstance,
> isSSR = false
> ) {
> isInSSRComponentSetup = isSSR
>
> const { props, children } = instance.vnode
> // 判断是否是有状态组件
> const isStateful = isStatefulComponent(instance)
> // 初始化 props 和 slots
> initProps(instance, props, isStateful, isSSR)
> initSlots(instance, children)
>
> // 🍃 调用 setupStatefulComponent 初始化有状态的组件
> /**
>    * 设置有状态
>    * @param {object} 【对象】组件 - 有状态组件
>    * @param {fuction} 【函数】组件 - 无状态组件
>   */
>   const setupResult = isStateful
>     ? setupStatefulComponent(instance, isSSR) // ...
>     : undefined
>   isInSSRComponentSetup = false
>   return setupResult
> }
>
> // 🌏 在setupStatefulComponent 取出 setup 函数
> function setupStatefulComponent(
>   instance: ComponentInternalInstance,
>   isSSR: boolean
> ) {
>   const Component = instance.type as ComponentOptions
>
>   if (__DEV__) {
>     if (Component.name) {
>       validateComponentName(Component.name, instance.appContext.config)
>     }
>     if (Component.components) {
>       const names = Object.keys(Component.components)
>       for (let i = 0; i < names.length; i++) {
>         validateComponentName(names[i], instance.appContext.config)
>       }
>     }
>     if (Component.directives) {
>       const names = Object.keys(Component.directives)
>       for (let i = 0; i < names.length; i++) {
>         validateDirectiveName(names[i])
>       }
>     }
>     if (Component.compilerOptions && isRuntimeOnly()) {
>       warn(
>         `"compilerOptions" is only supported when using a build of Vue that ` +
>           `includes the runtime compiler. Since you are using a runtime-only ` +
>           `build, the options should be passed via your build tool config instead.`
>       )
>     }
>   }
>   // 0. 创建渲染代理属性访问缓存
>   instance.accessCache = Object.create(null)
>   // 1. 创建公共实例/渲染代理
>   // 也将其标记为原始的，因此从未观察​​到
>   instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers))
>   if (__DEV__) {
>     exposePropsOnRenderContext(instance)
>   }
>   // 2. call setup() 调用 setup()
>   const { setup } = Component
>   if (setup) {
>     // sutup 有参数 创建 setup 上下文, 并且将 setup 上下文挂载到实例上 setupContext = { attrs, slots, emit }
>     const setupContext = (instance.setupContext =
>       setup.length > 1 ? createSetupContext(instance) : null)
>
>     setCurrentInstance(instance)
>     pauseTracking()
>     // 🛵 通过 callWithErrorHandling 的函数执行 setup
>     // 执行 setup 函数并且将返回值赋值给 setupResult(获取结果)
>     // 内部会执行 setup 函数并且将instance(prop)、setupContext 作为参数传入
>     // 为什么不直接执行,通过callWithErrorHandling封装一些捕获错误的方法 try...catch
>     const setupResult = callWithErrorHandling(
>       setup,
>       instance,
>       ErrorCodes.SETUP_FUNCTION,
>       [__DEV__ ? shallowReadonly(instance.props) : instance.props, setupContext] // 传递 prop setupContext,回调setup(...args)
>     )
>     resetTracking()
>     unsetCurrentInstance()
>
>     if (isPromise(setupResult)) {
>       setupResult.then(unsetCurrentInstance, unsetCurrentInstance)
>       if (isSSR) {
>         // return the promise so server-renderer can wait on it
>         return setupResult
>           .then((resolvedResult: unknown) => {
>             handleSetupResult(instance, resolvedResult, isSSR)
>           })
>           .catch(e => {
>             handleError(e, instance, ErrorCodes.SETUP_FUNCTION)
>           })
>       } else if (__FEATURE_SUSPENSE__) {
>         // async setup returned Promise.
>         // bail here and wait for re-entry.
>         instance.asyncDep = setupResult
>         if (__DEV__ && !instance.suspense) {
>           const name = Component.name ?? 'Anonymous'
>           warn(
>             `Component <${name}>: setup function returned a promise, but no ` +
>               `<Suspense> boundary was found in the parent component tree. ` +
>               `A component with async setup() must be nested in a <Suspense> ` +
>               `in order to be rendered.`
>           )
>         }
>       } else if (__DEV__) {
>         warn(
>           `setup() returned a Promise, but the version of Vue you are using ` +
>             `does not support it yet.`
>         )
>       }
>     } else {
>       handleSetupResult(instance, setupResult, isSSR)
>     }
>   } else {
>     finishComponentSetup(instance, isSSR)
>   }
> }
>
> // callWithErrorHandling 函数帮助执行 steup 函数，捕获错误
> export function callWithErrorHandling(
>   fn: Function,
>   instance: ComponentInternalInstance | null,
>   type: ErrorTypes,
>   args?: unknown[]
> ) {
>   let res
>   try {
>     // 为什么不能在 setup 使用 this？这里没有对函数 setup 进行 this 绑定
>     res = args ? fn(...args) : fn()
>   } catch (err) {
>     handleError(err, instance, type)
>   }
>   return res
> }
> ```

> #### 小习惯：
>
> 当调用函数时，仅仅需要获取函数的第二个参数的使用，不需要第一个参数时，通常使用 `_`进行占位
>
> `setup ( _ , context )`

> ### 🍟 reactive 响应式
>
> **reactive 当传入基础数据类型会产生控制台警告，正确应当使用 对象或者数组**
>
> **options Api 的响应式处理也时通过 composition Api 进行包裹处理的**，**`reactive({ ...包裹 options Api 响应式数据 })`**
>
> **`通过使用 reactive 处理后的返回值，当读取时，会做一个数据劫持(Proxy 做数据劫持[getter、setter])`**
>
> **`响应式数据被使用的时候，会进行依赖的收集(模板上的数据使用...等等)，当数据发生改变的时候，对相应收集的依赖进行对应的响应式更新操作`**

> ### 🍳 ref 响应式(官方：推荐尽量使用 ref 而不是 reactive)
>
> **ref 会返回一个`可变的响应式对象`，该对象`作为一个【响式的引用】维护着它【内部的值】`，这就是 ref 名称的来源；** > **它内部的值是在 ref 的 value 属性中被维护的，真正的数据是在 value 中维护；**
>
> **在`模板`中使用 ref 数据，理论来说应当是一个 可变的 ref 响应式对象，Vue 为了开发方便，在模板使用 ref 对象时，会自动进行解包，不需要 `ref.value`**；
>
> **注意：在逻辑代码中并没有自动进行解包，可以使用 Vue 的新实验性功能对逻辑代码进行解包 -> [Vue 的响应性语法糖](https://github.com/vuejs/core/tree/main/packages/reactivity-transform)**
>
> #### ref 解包：
>
> **ref 的解包操作是一个`浅层的解包`，当在模板中直接读取 ref 对象时才会进行解包操作，但是`通过将 ref 对象直接赋值给一个普通对象属性时，在模板中通过 对象.ref 对象 时是不会进行解包的`**，简单来说就是通过包裹的 ref 对象后在模板中不能进行解包了
>
> **不能解包情况【普通对象包裹】，能解包情况【reactive 对象包裹】**

> ### 🍃 readonly 只读
>
> **readonly 会`返回原生对象的只读代理`（也就是它依然是一个 Proxy ，这个 Proxy 的 `set 方法被劫持`，并且不能对其进行修改)【在 setter 方法里对数据修改进行限制】**
>
> ```js
> // 源对象(普通对象)
> const info = {
> 	name: 'VUE',
> };
> // 处理后返回的对象
> const info_ = readonly(info);
> // 注意：源对象可以被修改，修改源对象数据不会更新🍃
>
> reactive;
> const info_ = readonly(
> 	info /* reactive 处理后的对象在进行 readonly，不可以被修改 */
> );
> // 注意：reactive 源对象可以被修改，被修改，readonly 对象数据会更新(因为是响应式的)🍃
>
> ref;
> const info_ = readonly(
> 	info /* ref 处理后的对象在进行 readonly，不可以被修改 */
> );
> // 注意：ref 源对象可以被修改，被修改，readonly 对象数据会更新(因为是响应式的)🍃
> ```

> ### 🚀 Reactive 判断 Api
>
> **`isProxy`：检查对象是否由 reactive 或者 readonly 创建的 Proxy 代理**
>
> **`isReactive`：检查对象是否由 reactive 创建的响应式代理【注意：如果该代理是由 readonly 创建的，但是包裹的是 reactive 创建的另外一个代理，同样返回 true】**
>
> **`isReadonly `：检查对象是否由 readonly 创建的 Proxy 只读代理**
>
> **`toRaw`：返回 reactive or readonly 代理的原始对象**
>
> **`shallowReactive`：创建浅层次的 Proxy 代理【只对第一层 property 属性进行代理，不执行深层次的嵌套对象代理，深层次的对象还是原始的对象】**
>
> **`shallowReadonly`：作用同上**

> ### 🛵 toRefs Api
>
> **对 reactive `所有属性进行转化 ref 对象`，参数必须是响应式对象**
>
> **通过 refs 解构返回 name ref 对象，`在 reactive 的属性与 ref.value 属性建立链接🪂`，任何一方修改，都会引起另外一方变化**
>
> **对 reactive 进行对象解构为什么会丢失响应式？**
>
> ```js
> const { name } = reactive({ name: 'VUE' });
> // 相当于
> let name = 'VUE'; // 直接赋值数据(基础数据🛰️)，丢失响应式
> ```

> ### 🏜️ toRef Api
>
> **对一个属性进行 ref 对象转化，`区别于 toRefs 减少性能开销，没有解构赋值，因为只返回一个值`，参数必须是响应式对象**

> ### 🏙️ unref Api
>
> **获取一个 ref 对象引用中的 value 值【解包】，一个语法糖**
>
> **`val = isRef(val)? val.value : value`**

> ### 🎉 isRef Api
>
> **同上 isReactive**

> ### 🪅 shallowRef Api
>
> **浅层的 ref 对象**
>
> ```js
> const val = ref({ name: 'VUE' });
> // 修改 val，深层次的修改(直接通过 .name 修改)，还是响应式
> val.value.name = 'VUE3';
>
> // 浅层
> const val = shallowRef({ name: 'VUE' });
> // 修改 val，深层次的修改(直接通过 .name 修改)，shallowRef 后不是响应式
> val.value.name = 'VUE3';
> // 只对 val.value 的修改产生响应式
> val.value = { name: 'VUE3' };
> ```

> ### 🧸 triggerRef Api
>
> **解决 shallowRef 对于深层次的修改后，不会更新对应的属性【不是响应式】**
>
> ```js
> const val = ref({ name: 'VUE' });
> // 修改 val，深层次的修改(直接通过 .name 修改)，还是响应式
> val.value.name = 'VUE3';
>
> // 浅层
> const val = shallowRef({ name: 'VUE' });
> // 修改 val，深层次的修改(直接通过 .name 修改)，shallowRef 后不是响应式
> val.value.name = 'VUE3';
> // 调用 triggerRef 触发响应式更新(手动触发更新)
> triggerRef(val);
> ```
>
> ### 其它 Api
>
> #### 🎿 customRef 创建自定义 ref
>
> ```js
> function ref(value){
>     // 接受两个参数 track(收集依赖触发更新)
> 	customRef((track,trigger)=>{
> 		return {
> 			get(){
> 				track();
> 				retrun value
> 			},
> 			set(newValue){
> 				value=newValue;
> 				track()
> 			}
> 		}
> 	})
> }
> ```

> ### 🎨 computed Api
>
> **computed 返回一个 ref 对象**

> ### 🎉 watchEffect Api
>
> **`watchEffect`：自动收集响应式数据的依赖，默认开启自动执行一次**
>
> ```js
> const val = ref('0')
> watchEffect(()=>{
> 	console.log('执行',val.value)
> },/* 接受第三个参数 option */ {
>     // 需要使用到获取 dom 数据时候 ‘post’，总之都会默认执行一次，进行依赖收集
>     flush:'pre'(默认值，默认一开始执行一次)|'post'(dom 挂载or更新完执行一次)|'sync'
> })
> ```
>
> **默认自动执行一次，`并在执行后收集响应式依赖`，当依赖发生变化时，重新执行**
>
> **`停止 watchEffect 监听`，watchEffect 会返回一个函数，当执行返回的函数时，就会停止 watchEffect 的监听**
>
> **清除副作用**
>
> 在开发中需要在监听函数中执行网络请求，但是在网络请求还没有达到的时候，或者监听器监听函数被再次执行。那么上一次的网络请求应该被取消掉，这个时候就可以清除上一次的副作用
>
> ```js
> // watchEffect 接受一个参数回调函数，fn 里面再传入一个回调函数用于取消操作
> watchEffect((fn) => {
> 	// 当副作用即将重新执行或者监听器被停止时会执行该函数传入的回调函数
> 	fn(() => {
> 		// ...取消操作
> 	});
> });
> ```
>
> ### 🎡 watch Api
>
> **`watch`：手动指定监听的数据源**
>
> **基本同 options Api**
>
> **接受接受四种类型的目标源：getter 函数并返回一个响应式数据、ref 对象**、...
>
> ```js
> 注意：vue 对 reactive 类型的传参时，newValue 与 oldValue 是一个 Porxy 对象，ref 其它类型为原生的数据🏀🏀🏀
> // 解决 reactive 类型的传参时，newValue 与 oldValue 是一个 Porxy 对象
> watch(()=>{
>     return {
>         ...reactive
>     }
> },(newValue,oldValue)={
>
> })
> ```
>
> ```js
> // 执行,对参数进行校验
> export function watch<T = any, Immediate extends Readonly<boolean> = false>(
>   source: T | WatchSource<T>,
>   cb: any,
>   options?: WatchOptions<Immediate>
> ): WatchStopHandle {
>   if (__DEV__ && !isFunction(cb)) {
>     warn(
>       `\`watch(fn, options?)\` signature has been moved to a separate API. ` +
>         `Use \`watchEffect(fn, options?)\` instead. \`watch\` now only ` +
>         `supports \`watch(source, cb, options?) signature.`
>     )
>   }
>   // ...执行
>   return doWatch(source as any, cb, options)
> }
>
> function doWatch(
>   source: WatchSource | WatchSource[] | WatchEffect | object,
>   cb: WatchCallback | null,
>   { immediate, deep, flush, onTrack, onTrigger }: WatchOptions = EMPTY_OBJ
> ): WatchStopHandle {
>   if (__DEV__ && !cb) {
>     if (immediate !== undefined) {
>       warn(
>         `watch() "immediate" option is only respected when using the ` +
>           `watch(source, callback, options?) signature.`
>       )
>     }
>     if (deep !== undefined) {
>       warn(
>         `watch() "deep" option is only respected when using the ` +
>           `watch(source, callback, options?) signature.`
>       )
>     }
>   }
>
>   const warnInvalidSource = (s: unknown) => {
>     warn(
>       `Invalid watch source: `,
>       s,
>       `A watch source can only be a getter/effect function, a ref, ` +
>         `a reactive object, or an array of these types.`
>     )
>   }
>
>   const instance = currentInstance
>   // 监听的数据源会赋值 getter 函数
>   let getter: () => any
>   let forceTrigger = false
>   let isMultiSource = false
>
>   // 接受四种类型
>
>   // 判断是否ref对象
>   if (isRef(source)) {
>     getter = () => source.value
>     forceTrigger = isShallow(source)
>   } else if (isReactive(source)) {
>     getter = () => source
>     // 判断reactive默认开启deep
>     deep = true
>   } else if (isArray(source)) {
>     // 判断开启多目标源监听
>     isMultiSource = true
>     forceTrigger = source.some(s => isReactive(s) || isShallow(s))
>     getter = () =>
>       source.map(s => {
>         if (isRef(s)) {
>           return s.value
>         } else if (isReactive(s)) {
>           return traverse(s)
>         } else if (isFunction(s)) {
>           return callWithErrorHandling(s, instance, ErrorCodes.WATCH_GETTER)
>         } else {
>           __DEV__ && warnInvalidSource(s)
>         }
>       })
>   } else if (isFunction(source)) {
>     if (cb) {
>       // getter with cb
>       getter = () =>
>         callWithErrorHandling(source, instance, ErrorCodes.WATCH_GETTER)
>     } else {
>       // no cb -> simple effect
>       getter = () => {
>         if (instance && instance.isUnmounted) {
>           return
>         }
>         if (cleanup) {
>           cleanup()
>         }
>         return callWithAsyncErrorHandling(
>           source,
>           instance,
>           ErrorCodes.WATCH_CALLBACK,
>           [onCleanup]
>         )
>       }
>     }
>   } else {
>     getter = NOOP
>     __DEV__ && warnInvalidSource(source)
>   }
> ```

> ### 🎉 生命周期
>
> **composition Api 生命周期函数为`一个回调函数，可以注册多个生命周期(可以进行代码解耦，封装 hook)`**
>
> 注意：`Vue3 中没有 beforeCreate、create，`**`setup 函数代替了它们，并且比它们还要早执行`**
>
> **options Api 中，beforeCreate、create 的实现与其它的钩子函数实现原理不一样**

> ### 🏀 VUE3 依赖注入 provide inject
>
> **使用方法基本同 options Api，不同的是响应式数据的处理，options Api 响应式数据需要导入 computed 方法对数据进行响应式转化，composition Api 通过 ref 或者 reactive 声明即可**
>
> **注意：尽量不要在子组件 inject 获取数据去修改父组件传过来的数据，传递应当进行 readonly 只读处理【遵循单向数据流】**

> ### 🎿 Hook
>
> **规范以 `use` 前缀开始命名**
>
> ```js
> export useXXX = function(){
> 	const xxx = ref('xxx')
> 	const yyy = ()=>{
> 		xxx.value = 'yyy'
> 	}
>     // 返回功能属性方法...
> 	return {
> 		xxx,
> 		yyy
> 	}
> }
>
> // 使用
> const { xxx,yyy } = useXXX()
> // 同样可以使用扩展运算符 ...(缺点：不清楚数据来源)
> ...useXXX
> ```

> ### 🧸 h 函数
>
> **Vue 推荐在绝大数情况下使用模板来创建你的 HTML，对于一些特殊的场景，真的需要 JavaScript 的完全编程的能力，这个时候可以使用渲染函数，`它比模板更接近编译器🎉`**
>
> **Vue 在生成真实的 DOM 之前，会`将节点转换成 VNode 虚拟节点`，而 `VNode 虚拟节点组合在一起形成一颗树结构`，这棵树就是虚拟 DOM【VDOM】**
>
> **事实上，`通过编写 template HTML 方式最终也是通过使用 渲染函数 生成对应的 VNode 虚拟节点`**
>
> **`template 经过 compile 编译转化 render 调用函数返回 VNode`**
>
> ```js
> // Vue2 h 函数作为 render 的参数去接受
> // Vue3 h 函数需要通过 import 导入
> render(h){
> 	// retrun VNode
>
>     // 接受三个参数
>     // 1、标签：string | object | function 标签名、组件、异步组件(引入组件时不需要注册组件直接使用)
>     // 2、props 属性事件...，没有时候没有不传，第三个参数作为第二参数，但是建议使用 null 占位
>     // 3、子元素：string | array | object | 插槽slot
>     h('div',{/* 属性 */},[/* 子元素 */]||标签内容)
>     // 这里为什么可以使用 this 访问响应式属性？因为 render 函数是有给绑定 this 的
>     h('div',null,`${this.xxx}`)
> }
>
> // Vue3 h 函数写法
> setup(){
>     const xxx = ref('yyy')
>     retrun ()=>{
>         return h(xxx,xxx,`${xxx.value}`)
>         return h(组件,xxx,{
>             default:函数(props)=>h()// 父组件定义
>             this.$slot.default()??''// 子组件使用
>         })
>     }
> }
>
> // jsx 写法，脚手架不支持需要使用 Babel 转化
> jsx -> 转化 -> h 函数 -> VNode -> VDom
> ```

### diff 算法

> #### 🎨 key 的作用
>
> **key 属性主要用于 Vue 的虚拟 DOM 算法，`在新旧节点 nodes 对比时，辨识 VNode`**
>
> **不使用 Key：如果不使用 key，`Vue 会使用一种最大限度减少动态元素并且尽可能尝试地修改 or 修复相同类型的元素的算法`**
>
> **使用 Key：Vue 会基于 Key 的变化`(根据 Key)，重新排序元素的顺序，并且移除销毁不存在的 Key 元素`**
>
> ##### 🌏 VNode 虚拟节点
>
> 浅层次理解：**真实节点 HTML【`h1、div、span`】，虚拟节点 VNode `Javascript 对象`【存在内存当中】**
>
> **事实上，`无论是组件还是元素，在 Vue 中表现出来的都是一个个 VNode`，Vue 会将模板中的一个个组件或者元素转换成 VNode 对象【参考 h 函数】**
>
> **VNode：本质 Javascript 对象，用于描述组件或者标签，为什么要多此一举通过 VNode 再转换 VDom 再真实 Dom？可以多平台适配【服务端渲染、移动端渲染、跨平台渲染】**
>
> ##### 🛵 VDom 虚拟 DOM
>
> **`通过一个个 VNode 对象关系整合，形成的一颗对象树，称之为 虚拟 DOM`**
>
> **通过虚拟 DOM 渲染成为真实的 DOM，在浏览器展示，需要知道的是，VDOM 与真实的 DOM 并不是一一对应的，虚拟 DOM 存在一些 Vue 组件( VNode )**
>
> ##### 举个 🌰
>
> **当在一个数组中任意位置添加一个元素，如何才能高效更新 DOM?**
>
> 1、全部干掉，重新更新数组里面所有元素【最不高效】
>
> 2、因为在插入的元素中，数组前面的元素位置不变，后面元素的位置才会改变，前面元素不变，更新后面的元素【还不错】【`无 Key做法`】
>
> **3、直接在数组中插入需要插入的元素【最高效】，怎么插？ 🍃 通过 新旧 VDom(VNodes) 对比根据需要变化地方进行更新，【怎么对比？这就是 diff 算法做的事情，Key 的作用】【`有 Key`】**
>
> 在源码中，如果存在 Key，则调用的是 pathKeyedChildren，不存在 Key，调用 pathUnKeyedChildren
>
> `D:\Material\Vue源码解析\core\packages\runtime-core\src\renderer.ts：1593`
>
> ```js
>
>   const patchChildren: PatchChildrenFn = (
>     n1,
>     n2,
>     container,
>     anchor,
>     parentComponent,
>     parentSuspense,
>     isSVG,
>     slotScopeIds,
>     optimized = false
>   ) => {
>     const c1 = n1 && n1.children
>     const prevShapeFlag = n1 ? n1.shapeFlag : 0
>     const c2 = n2.children
>
>     const { patchFlag, shapeFlag } = n2
>     // fast path
>     if (patchFlag > 0) {
>       // 判断 key 是否存在
>       if (patchFlag & PatchFlags.KEYED_FRAGMENT) {
>         // this could be either fully-keyed or mixed (some keyed some not)
>         //patchFlag 的存在意味着子元素被保证是数组
>         patchKeyedChildren(
>           c1 as VNode[],// 旧的 VNodes
>           c2 as VNodeArrayChildren,// 新的 VNodes
>           container,
>           anchor,
>           parentComponent,
>           parentSuspense,
>           isSVG,
>           slotScopeIds,
>           optimized
>         )
>         return
>       } else if (patchFlag & PatchFlags.UNKEYED_FRAGMENT) {
>         // unkeyed 无键
>         patchUnkeyedChildren(
>           c1 as VNode[],
>           c2 as VNodeArrayChildren,
>           container,
>           anchor,
>           parentComponent,
>           parentSuspense,
>           isSVG,
>           slotScopeIds,
>           optimized
>         )
>         return
>       }
>     }
>
>     //children 有 3 种可能性：文本、数组或无子项
>     if (shapeFlag & ShapeFlags.TEXT_CHILDREN) {
>       // text children fast path
>       if (prevShapeFlag & ShapeFlags.ARRAY_CHILDREN) {
>         unmountChildren(c1 as VNode[], parentComponent, parentSuspense)
>       }
>       if (c2 !== c1) {
>         hostSetElementText(container, c2 as string)
>       }
>     } else {
>       if (prevShapeFlag & ShapeFlags.ARRAY_CHILDREN) {
>         // prev children was array
>         if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
>           // two arrays, cannot assume anything, do full diff
>           patchKeyedChildren(
>             c1 as VNode[],
>             c2 as VNodeArrayChildren,
>             container,
>             anchor,
>             parentComponent,
>             parentSuspense,
>             isSVG,
>             slotScopeIds,
>             optimized
>           )
>         } else {
>           // no new children, just unmount old
>           unmountChildren(c1 as VNode[], parentComponent, parentSuspense, true)
>         }
>       } else {
>         // prev children was text OR null
>         // new children is array OR null
>         if (prevShapeFlag & ShapeFlags.TEXT_CHILDREN) {
>           hostSetElementText(container, '')
>         }
>         // mount new if array
>         if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
>           mountChildren(
>             c2 as VNodeArrayChildren,
>             container,
>             anchor,
>             parentComponent,
>             parentSuspense,
>             isSVG,
>             slotScopeIds,
>             optimized
>           )
>         }
>       }
>     }
>   }
> ```
>
> ##### patchKeyedChildren
>
> ```js
>  // can be all-keyed or mixed
>   const patchKeyedChildren = (
>     c1: VNode[],
>     c2: VNodeArrayChildren,
>     container: RendererElement,
>     parentAnchor: RendererNode | null,
>     parentComponent: ComponentInternalInstance | null,
>     parentSuspense: SuspenseBoundary | null,
>     isSVG: boolean,
>     slotScopeIds: string[] | null,
>     optimized: boolean
>   ) => {
>     let i = 0
>     const l2 = c2.length// 获取旧 VNodes 长度
>     let e1 = c1.length - 1 // 新 VNode 结束的索引
>     let e2 = l2 - 1 // 旧 VNode 结束的索引
>
>     // 多种操作数组的方法判断
>
>     // 1. 从头部开始遍历比较
>     // (a b) c
>     // (a b) d e
>     while (i <= e1 && i <= e2) {
>       const n1 = c1[i] // 新 vnode
>       const n2 = (c2[i] = optimized
>         ? cloneIfMounted(c2[i] as VNode)
>         : normalizeVNode(c2[i])) // 旧 vnode
>       // 是相同的 vnode，通过 key and 类型 判断
>       if (isSameVNodeType(n1, n2)) {
>         // 比较
>         patch(
>           n1,
>           n2,
>           container,
>           null,
>           parentComponent,
>           parentSuspense,
>           isSVG,
>           slotScopeIds,
>           optimized
>         )
>         // 不相同
>       } else {
>         // 找到对比不相同的 vnode 跳出循环，到下一步 2
>         break
>       }
>       // 头部取 ++ 操作
>       i++
>     }
>
>     // 2. 从尾部遍历比较 e1 e2(尾部长度)
>     // a (b c)
>     // d e (b c)
>     while (i <= e1 && i <= e2) {
>       // 操作同上 1
>       const n1 = c1[e1]
>       const n2 = (c2[e2] = optimized
>         ? cloneIfMounted(c2[e2] as VNode)
>         : normalizeVNode(c2[e2]))
>       if (isSameVNodeType(n1, n2)) {
>         patch(
>           n1,
>           n2,
>           container,
>           null,
>           parentComponent,
>           parentSuspense,
>           isSVG,
>           slotScopeIds,
>           optimized
>         )
>       } else {
>         // 找到对比不相同的 vnode 跳出循环，到下一步 3
>         break
>       }
>       // 尾部取 -- 操作
>       e1--
>       e2--
>     }
>
>     // 3. 当比较发现 c2 新 vnode 新增的，挂载新 vnode
>
>     // (a b)
>     // (a b) c
>     // i = 2, e1 = 1, e2 = 2
>
>     // (a b)
>     // c (a b)
>     // i = 0, e1 = -1, e2 = 0
>     if (i > e1) {
>       if (i <= e2) {
>         const nextPos = e2 + 1// 获取新 vnode 位置
>         const anchor = nextPos < l2 ? (c2[nextPos] as VNode).el : parentAnchor
>         while (i <= e2) {
>           patch(
>             null,// 利用空的 与 c2 新的比较，当这里为空表示为一个挂操作
>             (c2[i] = optimized
>               ? cloneIfMounted(c2[i] as VNode)
>               : normalizeVNode(c2[i])),
>             container,
>             anchor,
>             parentComponent,
>             parentSuspense,
>             isSVG,
>             slotScopeIds,
>             optimized
>           )
>           i++
>         }
>       }
>     }
>
>     // 4. 当比较发现 c1 旧 vnode，剩余多余的，卸载多余的 vnode
>
>     // (a b) c
>     // (a b)
>     // i = 2, e1 = 2, e2 = 1
>
>     // a (b c)
>     // (b c)
>     // i = 0, e1 = 0, e2 = -1
>     else if (i > e2) {
>       while (i <= e1) {
>         unmount(c1[i], parentComponent, parentSuspense, true)
>         i++
>       }
>     }
>
>     // 5. 当比较完前后，发现中间产生比较多的交叉错乱的 vnode(无序的，乱七八糟的)，Vue 并不是全部删除重新挂载
>     // 如果对比发现是多余的(c1里面)，除去
>     // 如果对比发现是存在的，类型相同的，或者新的，那么【移动和挂载新的 vnode】
>     // [i ... e1 + 1]: a b [c d e] f g
>     // [i ... e2 + 1]: a b [e d c h] f g
>     // i = 2, e1 = 4, e2 = 5
>     else {
>       const s1 = i // prev starting index
>       const s2 = i // next starting index
>
>       // 5.1 build key:index map for newChildren
>       const keyToNewIndexMap: Map<string | number | symbol, number> = new Map()
>       for (i = s2; i <= e2; i++) {
>         const nextChild = (c2[i] = optimized
>           ? cloneIfMounted(c2[i] as VNode)
>           : normalizeVNode(c2[i]))
>         if (nextChild.key != null) {
>           if (__DEV__ && keyToNewIndexMap.has(nextChild.key)) {
>             warn(
>               `Duplicate keys found during update:`,
>               JSON.stringify(nextChild.key),
>               `Make sure keys are unique.`
>             )
>           }
>           keyToNewIndexMap.set(nextChild.key, i)
>         }
>       }
>
>       // 5.2 loop through old children left to be patched and try to patch
>       // matching nodes & remove nodes that are no longer present
>       let j
>       let patched = 0
>       const toBePatched = e2 - s2 + 1
>       let moved = false
>       // used to track whether any node has moved
>       let maxNewIndexSoFar = 0
>       // works as Map<newIndex, oldIndex>
>       // Note that oldIndex is offset by +1
>       // and oldIndex = 0 is a special value indicating the new node has
>       // no corresponding old node.
>       // used for determining longest stable subsequence
>       const newIndexToOldIndexMap = new Array(toBePatched)
>       for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0
>
>       for (i = s1; i <= e1; i++) {
>         const prevChild = c1[i]
>         if (patched >= toBePatched) {
>           // all new children have been patched so this can only be a removal
>           unmount(prevChild, parentComponent, parentSuspense, true)
>           continue
>         }
>         let newIndex
>         if (prevChild.key != null) {
>           newIndex = keyToNewIndexMap.get(prevChild.key)
>         } else {
>           // key-less node, try to locate a key-less node of the same type
>           for (j = s2; j <= e2; j++) {
>             if (
>               newIndexToOldIndexMap[j - s2] === 0 &&
>               isSameVNodeType(prevChild, c2[j] as VNode)
>             ) {
>               newIndex = j
>               break
>             }
>           }
>         }
>         if (newIndex === undefined) {
>           unmount(prevChild, parentComponent, parentSuspense, true)
>         } else {
>           newIndexToOldIndexMap[newIndex - s2] = i + 1
>           if (newIndex >= maxNewIndexSoFar) {
>             maxNewIndexSoFar = newIndex
>           } else {
>             moved = true
>           }
>           patch(
>             prevChild,
>             c2[newIndex] as VNode,
>             container,
>             null,
>             parentComponent,
>             parentSuspense,
>             isSVG,
>             slotScopeIds,
>             optimized
>           )
>           patched++
>         }
>       }
>
>       // 5.3 move and mount
>       // generate longest stable subsequence only when nodes have moved
>       const increasingNewIndexSequence = moved
>         ? getSequence(newIndexToOldIndexMap)
>         : EMPTY_ARR
>       j = increasingNewIndexSequence.length - 1
>       // looping backwards so that we can use last patched node as anchor
>       for (i = toBePatched - 1; i >= 0; i--) {
>         const nextIndex = s2 + i
>         const nextChild = c2[nextIndex] as VNode
>         const anchor =
>           nextIndex + 1 < l2 ? (c2[nextIndex + 1] as VNode).el : parentAnchor
>         if (newIndexToOldIndexMap[i] === 0) {
>           // mount new
>           patch(
>             null,
>             nextChild,
>             container,
>             anchor,
>             parentComponent,
>             parentSuspense,
>             isSVG,
>             slotScopeIds,
>             optimized
>           )
>         } else if (moved) {
>           // move if:
>           // There is no stable subsequence (e.g. a reverse)
>           // OR current node is not among the stable sequence
>           if (j < 0 || i !== increasingNewIndexSequence[j]) {
>             move(nextChild, container, anchor, MoveType.REORDER)
>           } else {
>             j--
>           }
>         }
>       }
>     }
>   }
> ```
>
> ##### patchUnkeyedChildren
>
> ```js
>  const patchUnkeyedChildren = (
>     c1: VNode[],
>     c2: VNodeArrayChildren,
>     container: RendererElement,
>     anchor: RendererNode | null,
>     parentComponent: ComponentInternalInstance | null,
>     parentSuspense: SuspenseBoundary | null,
>     isSVG: boolean,
>     slotScopeIds: string[] | null,
>     optimized: boolean
>   ) => {
>     c1 = c1 || EMPTY_ARR
>     c2 = c2 || EMPTY_ARR
>     const oldLength = c1.length // 新 vnodes 的长度
>     const newLength = c2.length // 旧 vnodes 的长度
>
>     // 获取最小的那个 vnodes 的长度，用最小长度的 vnodes 遍历(用最大的可能产生越界，用长度最小的 vnodes 对比)
>     const commonLength = Math.min(oldLength, newLength)
>     let i
>     // 依次 patch 比较
>     for (i = 0; i < commonLength; i++) {
>       const nextChild = (c2[i] = optimized
>         ? cloneIfMounted(c2[i] as VNode)
>         : normalizeVNode(c2[i]))
>       // ...
>       patch(
>         c1[i],
>         nextChild,
>         container,
>         null,
>         parentComponent,
>         parentSuspense,
>         isSVG,
>         slotScopeIds,
>         optimized
>       )
>     }
>     // 旧的长度大于新的，进行切尾，删除多出来的长度的元素
>     if (oldLength > newLength) {
>       // remove old
>       unmountChildren(
>         c1,// ...
>         parentComponent,
>         parentSuspense,
>         true,
>         false,
>         commonLength
>       )
>     } else {
>       // 旧的长度小于新的，创建新的多出来的节点
>       // mount new
>       mountChildren(
>         c2,// ...
>         container,
>         anchor,
>         parentComponent,
>         parentSuspense,
>         isSVG,
>         slotScopeIds,
>         optimized,
>         commonLength
>       )
>     }
>   }
> ```
