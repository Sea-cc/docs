# 📖 Vue 3

> setup`是所有`Composition API`的容器，值为一个函数。组件中所用到的数据、方法等等，均要配置在`setup`中，它会在`beforeCreate`之前执行一次，注意：`V3`里`this`不再是指向`Vue`实例，访问`this`会是`undefined
>
> `VUE2`配置【`data`、`methos`、`computed`...】中可以访问到`setup`中的属性、方法
> 但在`setup`中不能访问到`VUE2`配置【`data`、`methos`、`computed`...】
> 若存在重名, `setup`优先，**生命周期全都写在`setup`中**

### setup 的参数

-   props：值为对象，包含组件外部传递过来的数据，**且组件内部声明接收了的属性**
-   context：**上下文对象**
    -   attrs: 值为对象，包含组件外部传递过来，但没有在`props`配置中声明的属性, 相当于`this.$attrs`
    -   slots: 收到的插槽内容, 相当于`this.$slots`
    -   emit: 分发自定义事件的函数, 相当于`this.$emit`

前言：`<script setup>` 是一种**编译时的语法糖**，在文件内使用 Compostion API 时极大提高工作效率

Compostion API 写法(**16 行代码**)

```vue
<script>
import Foo from './Foo.vue';
export default {
	components: {
		Foo,
	},
	setup() {
		const count = ref(0);
		const increment = () => count.value++;
		return { count, increment };
	},
};
</script>
<template>
	<Foo @click="increment">{{ count }}</Foo>
</template>
```

Compostion API + setup 写法(**9 行代码**)

```vue
<script setup>
import { ref } from 'vue';
import Foo from './Foo.vue';
const count = ref(0);
const increment = () => count.value++;
</script>
<template>
	<Foo @click="increment">{{ count }}</Foo>
</template>
```

### v-bind

在 VUE 文件标签启用组件状态启动的动态 CSS 值

```vue
<script setup>
import { ref } from 'vue';
const count = ref('#FFFFFF');
</script>
<style>
.html {
	color: v-bind(count);
}
</style>
```

### Node API 支持

默认`ts`不支持 node api 的使用，如`import path from 'path'`,编辑器提示：找不到该模块‘path’

解决方案：`npm install @types/node -D`

### 组件传参

注意：在 setup 语法糖中，`defineProps` `defineEmits` `defineExpose`都不需要手动引入，直接在组件中使用即可

##### prop 在 setup 语法糖中的使用(**编译器宏**)

注意：所有声明了的 prop，不管父组件是否向其传递，都将出现在 `props` 对象中。其中未被传入的可选的 prop 的值会是 `undefined`。

传入到 `defineProps` 的选项会从 `setup `中提升到模块的范围。因此，**传入的选项不能引用在 `setup` 范围中声明的局部变量**。这样做会引起编译错误。但是，**它可以引用导入的绑定，因为它们也在模块范围内**

**如果需要检测一个可选的 prop 是否未被传递，你可以将其默认值设置为一个 Symbol**

```js
// 检测是否未被传递
const isAbsent = Symbol() // **
const porps = defineProps({
    command: {
        type: String,
        default: isAbsent // **
    }
})

// 判断是否传入
if (props.command === isAbsent) {
      // ...
    }

// ts 泛型函数 defineProps(缺少默认值default)
const porps = defineProps<{
        command: String
    }>()

// 解决缺少默认值 default 方案
const porps = withDefault(
		defineProps<{
       		command: String
    	}>(),
    	{
            command:'VUE_SETUP'
        }
	)

 // 对象类型的默认值
  propE: {
    type: Object,
    // 对象或数组的默认值
    // 必须从一个工厂函数返回。
    // 该函数接收组件所接收到的原始 prop 作为参数。
    default(rawProps) {
      return { message: 'hello' }
    }
  },
  // 自定义类型校验函数
  propF: {
    validator(value) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].includes(value)
    }
  },
  // 函数类型的默认值
  propG: {
    type: Function,
    // 不像对象或数组的默认，这不是一个工厂函数。这会是一个用来作为默认值的函数
    default() {
      return 'Default function'
    }
  }
```

> 接口或对象字面类型可以包含从其他文件导入的类型引用，但是，传递给 `defineProps` 的泛型参数本身**不能**是一个导入的类型

```js
import { Props } from './other-file'

// 不支持！
defineProps<Props>()
```

这是因为 Vue 组件是单独编译的，编译器目前不会抓取导入的文件以分析源类型。我们计划在未来的版本中解决这个限制。

1. **prop 被用于传入初始值；而子组件想在之后将其作为一个局部数据属性**。在这种情况下，最好是新定义一个局部数据属性，从 props 上获取初始值即可：

    ```js
    const props = defineProps(['initialCounter']);

    // 计数器只是将 props.initialCounter 作为初始值
    // 像下面这样做就使 prop 和后续更新无关了
    const counter = ref(props.initialCounter);
    ```

2. **需要对传入的 prop 值做进一步的转换**。在这种情况中，`最好是基于该 prop 值定义一个计算属性`

    ```js
    const props = defineProps(['size']);

    // 该 prop 变更时计算属性也会自动更新.📦
    const normalizedSize = computed(() => props.size.trim().toLowerCase());
    ```

##### emit 在 setup 语法糖中的使用(**编译器宏**)

注意：defineEmits 参数是一个数组，可以是小驼峰或全部小写，但是**在绑定的自定义事件定义时，应全部小写，如`@set-name`**

在组件的模板表达式中，可直接使用 `$emit` 方法触发自定义事件 例如：`<button @click="$emit('someEvent')">click me</button>`

```js
// 定义
const emits = defineEmits(['switchForm'])
// 触发 emits('事件名',参数)
emits('switchForm',true)

// ts 类型声明
const emits = defineEmits<
      		{	// e:事件名,arg:参数
                (e:'switchForm',arg:boolean):void
            }
      >()
```

> 组件触发的事件**没有冒泡机制**。你只能监听直接子组件触发的事件。平级组件或是跨越多层嵌套的组件间通信，应使用一个外部的事件总线，或是使用一个全局状态管理方案
>
> 如果一个原生事件的名字 (例如 `click`) 被定义在 `emits` 选项中，则监听器只会监听组件触发的 `click` 事件而不会再响应原生的 `click` 事件。

这个 `emits` 选项还支持对象语法，它允许我们对触发事件的参数进行验证：

```js
<script setup>
const emit = defineEmits({
  submit(payload) {
    // 通过返回值为 `true` 还是为 `false` 来判断
    // 验证是否通过
  }
})
</script>
```

### useSlots and useAttrs 在 setup 语法糖中的使用(**no 编译器宏**)

useSlots and prop 相同点：1、都是发生在存在于父子组件之间的关系；2、都是为应对父组件调用子组件的场合

区别一：

prop 设计思想是传递**状态数据**

slot 设计思想是传递**DOM 节点**

区别二：

父组件在调用子组件时，声明并赋值传递到子组件的 porp 列表中，子组件**接受**并使用，但是**一旦传递过来作用域就发生了变化**；

子组件虽然为调用者预留 slot，但是 **slot 的作用域依然属于父组件，所以可以访问到父组件内的所有状态**

插槽内容可以访问到父组件的数据作用域，因为插槽内容本身是在父组件模板中定义的。举例来说：

```html
<span>{{ message }}</span>
// 访问父组件的响应式数据
<FancyButton>{{ message }}</FancyButton>
```

注意：slot 插槽只能在`template`中使用，`v-slot='name'` or `#name`

###### useSlots

```js
import { useSlots } from 'vue';
const slots = useSlots();
consolve.log(slots.name && slots.name());
```

###### useAttrs (获取未接受的 属性 prop 以及事件 event)

未接受：没有被 prop 接受的属性以及事件 event

```js
import { useAttrs } from 'vue';
const attrs = useAttrs();
consolve.log(slots.name && slots.name());
```

### defineExpose

**父组件是无法从子组件的实例中获取其属性 or 方法**，解决方案：子组件使用`defineExpose`对外暴露自身的属性 or 方法

模板引用也可以被用在一个子组件上。这种情况下引用中获得的值的是组件实例：

```js
<script setup>
import { ref, onMounted } from 'vue'
import Child from './Child.vue'

const child = ref(null)

onMounted(() => {
  // child.value 是 <Child /> 组件的实例
})
</script>

<template>
  <Child ref="child" />
</template>
```

> 如果一个子组件使用的是**选项式 API 或没有使用 `<script setup>**`，被引用的组件实例和该子组件的 `this` 完全一致，这意味着父组件对子组件的每一个属性和方法都有**完全的访问权**。这使得在父组件和子组件之间创建紧密耦合的实现细节变得很容易，当然也因此，应该只在绝对需要时才使用组件引用。大多数情况下，你**应该首先使用标准的 props 和 emit 接口来实现父子组件交互。**

有一个例外的情况，使用了 `<script setup>` 的组件是**默认私有**的：一个父组件无法访问到一个使用了 `<script setup>` 的子组件中的任何东西，除非子组件在其中通过 `defineExpose` 宏显式暴露：

```js
<script setup>
	import {ref} from 'vue' const a = 1 const b = ref(2) defineExpose({(a, b)})
</script>
```

当父组件通过模板引用获取到了该组件的实例时，得到的实例类型为 `{ a: number, b: number }` (ref 都会自动解包，和一般的实例一样)。

子组件：

```js
defineExpose({
	name,
	handle,
});
```

父组件

```js
const childInstance = ref<{ name: string; handle: () => void } | null>(null)

<el-form-item ref="childInstance"></el-form-item>

// 返回 Ref 对象(需要.value)【不推荐直接操作childInstance状态】
childInstance.value?.handle()
childInstance.value?.name
```

#### ref DOM 实例

你会注意到，每当点击这些按钮时，每一个组件都维护着自己的状态，是不同的 `count`。这是因为每当你使用一个组件，就创建了一个新的**实例**。

另外，可以使用`InstanceType`对声明的子组件实例进行类型注解

```js
import childInstance from './childInstance.vue'
const childInstance = ref<InstanceType<typeof childInstance>>()
```

为了获取 `childInstance` 的类型，我们首先需要通过 `typeof` 得到其类型，再使用 TypeScript 内置的 `InstanceType` 工具类型来获取其实例类型

`InstanceType`可以从某个`类型如(typeof childInstance)`中**获取到一个实例的构造函数**（或者说获取一个拥有构造函数的实例的构造函数）**类型**

注意：导入的组件`childInstance`对象，并不是一个真正的对象，而是一个**组件的描述对象**（需要根据子组件的描述对象创建出来一个真正的组件实例），

如`InstanceType<typeof childInstance>`

`InstanceType<typeof childInstance>`约等同于导入的描述对象`childInstance` (import childInstance from './childInstance.vue')

> `ref` 是一个特殊的 attribute，和 `v-for` 章节中提到的 `key` 类似。它允许我们在一个特定的 DOM 元素或子组件实例被挂载后，获得对它的直接引用。这可能很有用，比如说在组件挂载时将焦点设置到一个 input 元素上，或在一个元素上初始化一个第三方库。
>
> **注意：是 DOM 元素或子组件实例被挂载后，获得对它的直接引用。**

## `v-for` 中的模板引用[#](https://staging-cn.vuejs.org/guide/essentials/template-refs.html#refs-inside-v-for)

> 需要 v3.2.25 及以上版本

当在 `v-for` 中使用模板引用时，对应的 ref 中包含的值是一个数组，它将在元素被挂载后包含对应整个列表的所有元素：

```js
<script setup>
import { ref, onMounted } from 'vue'

const list = ref([
  /* ... */
])
// ref 实例
const itemRefs = ref([])

onMounted(() => console.log(itemRefs.value))
</script>

<template>
  <ul>
    <li v-for="item in list" ref="itemRefs">
      {{ item }}
    </li>
  </ul>
</template>
```

**应该注意的是，ref 数组并不保证与源数组相同的顺序。**😏

### toRef

toRef 用于为源响应式对象上的属性新建一个 ref，从而保持对其源对象属性响应式的`连接`，**toRef(源对象，属性名)**

注意：**新建后的响应式数据**，若为复杂类型数据，此时并不是对原始数据的拷贝，而是**引用**，改变新建后的数据，原始数据也会被修改

### ref

ref 用于为**数据**添加响应式状态

### reactive

r**eactive 只能传入`对象类型`的参数** ，而对于基本类型的数据，只能使用 ref 为其添加响应式状态，同样返回一具有响应式状态的`副本`

> 技巧：对 reactive 类型的数据使用，模板或逻辑代码中如何减少链式查找【使用 toRefs 进行解构】
>
> 不推荐使用 `reactive()` 的泛型参数，因为处理了深层次 ref 解包的返回值与泛型参数的类型不同。

```js
setup() {
        const count = reactive({
        		attr ：{
        			name:'hi',
        			sex:'女'
        		}
       		 })
        return { ...toRefs(count) }
    }
```

### await 的支持

**setup 语法糖中可直接使用 await ，不需要定义 async,setup 会自动变成 async setup**

```js
<script setup>
	import api from '../api/Api' const data = await Api.getData() console.log
	(data)
</script>
```

### Vue-router4.X

History ：createWebHistory 路由模式路径不带 #，**在生产环境下是不能直接访问项目的，需要 Nginx 转发**

注意：在 Vue3 中，创建路由不再需要实例化 new router，直接使用 createRouter

```js
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
/* or import type { RouteRecordRaw } from 'vue-router' 表示导入为一个类型 */

const routes: Array<RouteRecordRaw> /* 类型注解 */ = [
	{
		path: '/',
		redirect: '/main',
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'fourOfFour',
		component: () => import('@/components/404.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL), // 模式设置
	routes,
});

export default router;
```

### watch

```js
// 多个来源组成的数组
watch([x, () => y.value], ([newX, newY]) => {
	console.log(`x is ${newX} and y is ${newY}`);
});

// getter 函数
watch(
	() => x.value + y.value,
	(sum) => {
		console.log(`sum of x + y is: ${sum}`);
	}
);
```

注意，你不能直接侦听响应式对象的属性值，例如:

```js
const obj = reactive({ count: 0 });

// 错误，因为 watch() 得到的参数是一个 number
watch(obj.count, (count) => {
	console.log(`count is: ${count}`);
});
```

这里需要用一个返回该属性的 getter 函数：

```js
// 提供一个 getter 函数
watch(
	() => obj.count,
	(count) => {
		console.log(`count is: ${count}`);
	}
);
```

直接给 `watch()` 传入一个响应式对象，会隐式地创建一个深层侦听器——该回调函数在所有嵌套的变更时都会被触发：

```js
const obj = reactive({ count: 0 });

watch(obj, (newValue, oldValue) => {
	// 在嵌套的属性变更时触发
	// 注意：`newValue` 此处和 `oldValue` 是相等的🦫
	// 因为它们是同一个对象！（指向同一个堆地址值，只是属性值被修改）
});

obj.count++;
```

相比之下，一个返回响应式对象的 getter 函数，只有在返回不同的对象时，才会触发回调：

```js
watch(
	() => state.someObject,
	() => {
		// 仅当 state.someObject 被替换时触发
	}
);
```

你也可以给上面这个例子显式地加上 `deep` 选项，强制转成深层侦听器：

```js
watch(
	() => state.someObject,
	(newValue, oldValue) => {
		// 注意：`newValue` 此处和 `oldValue` 是相等的
		// *除非* state.someObject 被整个替换了
	},
	{ deep: true }
);
```

### watchEffect 监听回调

`watch()` **是懒执行的**：仅当数据源变化时，才会执行回调。但在某些场景中，我们希望在**创建侦听器时，立即执行一遍回调**。举例来说，我们想请求一些初始数据，然后在相关状态更改时重新请求数据

与`watch`的区别：`watch`既要指明监视的属性 and 指明监视的回调。而`watchEffect`，不用指明监视的属性，监视的回调中用到的属性，那就监视哪个属性，不用写返回值

```js
// 回调中用到的数据只要发生变化，则直接重新执行回调
watchEffect(() => {
	const x1 = sum.value;
	const x2 = person.age;
	console.log('watchEffect配置的回调执行了');
});
```

#### `watch` vs. `watchEffect`

`watch` 和 `watchEffect` 都能响应式地执行有副作用的回调。它们之间的主要区别是追踪响应式依赖的方式：

-   `watch` 只追踪明确侦听的数据源。它不会追踪任何在回调中访问到的东西。另外，仅在数据源确实改变时才会触发回调。`watch` 会避免在发生副作用时追踪依赖，因此，我们**能更加精确地控制回调函数的触发时机**。
-   `watchEffect`，则会在副作用发生期间追踪依赖。它会在**同步执行过程中，自动追踪所有能访问到的响应式属性**。这**更方便**，而且代码往往更简洁，**但有时其响应性依赖关系会不那么明确。**

> 默认情况下，用户创建的侦听器回调，都会在 Vue 组件更新**之前**被调用。这意味着你在侦听器回调中访问的 DOM 将是被 Vue 更新之前的状态。
>
> 如果想在侦听器回调中能访问被 Vue 更新**之后**的 DOM，你需要指明 `flush: 'post'` 选项【**类似 nextTick**】

```js
watch(source, callback, {
	flush: 'post',
});

watchEffect(callback, {
	flush: 'post',
});
```

后置刷新的 `watchEffect()` 有个更方便的别名 `watchPostEffect()`：

```js
import { watchPostEffect } from 'vue';

watchPostEffect(() => {
	/* 在 Vue 更新后执行 */
});
```

## 停止侦听器

在 `setup()` 或 `<script setup>` 中用**同步语句创建的侦听器**，会自动绑定到宿主组件实例上，并且会在宿主组件卸载时自动停止。因此，在大多数情况下，你无需关心怎么停止一个侦听器。

一个关键点是，侦听器必须用**同步**语句创建：如果**用异步回调创建一个侦听器，那么它不会绑定到当前组件上，你必须手动停止它，以防内存泄漏。**如下方这个例子：

```js
<script setup>
	import {watchEffect} from 'vue' // 它会自动停止 watchEffect(() => {}) //
	...这个则不会！ setTimeout(() => {watchEffect(() => {})}, 100)
</script>
```

要手动停止一个侦听器，请调用 `watch` 或 `watchEffect` 返回的函数：

```js
const unwatch = watchEffect(() => {});

// ...当该侦听器不再需要时
unwatch();
```

### isRef

检查一个值是否为一个`ref`对象

```js
const val = ref('xxx');
isRef(val); // true
```

### isReactive

检查一个值是否为一个`isReactive`对象

### isProxy

检查对象是否是由`reactive`或`readonly`创建的`proxy`

```js
const state = reactive({
	name: 'John',
});
console.log(isProxy(state)); // true
```

# 全局 API 调整

---

将全局的 API，即：Vue.xxx 调整到应用实例（app）上

| VUE 2          | VUE 3                       |
| -------------- | --------------------------- |
| Vue.config.xxx | app.config.xxx              |
| Vue.component  | app.component               |
| Vue.directive  | app.directive               |
| Vue.mixin      | app.mixin                   |
| Vue.use        | app.use                     |
| Vue.prototype  | app.config.globalProperties |

# 移除的 API

---

| 名称                     | 现状   |
| ------------------------ | ------ |
| Vue.config.productionTip | 已移除 |
| **config.keyCodes**      | 已移除 |
| **$children**            | 已移除 |
| **$listeners**           | 已移除 |
| $on                      | 已移除 |
| $off                     | 已移除 |
| $once                    | 已移除 |
| **filters**              | 已移除 |
| **移除 api**             | 已移除 |

### hook 生命周期事件

通过事件来监听组件生命周期中的关键阶段

```html
// VUE 2
<template>
  <child-component @hook:updated="onUpdated">
</template>

// VUE 3
<template>
  <child-component @vnode-updated="onUpdated">
</template>

// 驼峰写法
<template>
  <child-component @vnodeUpdated="onUpdated">
</template
```

### 为 provide / inject 标注类型[#](https://staging-cn.vuejs.org/guide/typescript/composition-api.html#typing-provide-inject)

provide 和 inject 通常会在不同的组件中运行。要正确地为注入的值标记类型，Vue 提供了一个 `InjectionKey` 接口，它是一个继承自 `Symbol` 的泛型类型，可以用来在提供者和消费者之间同步注入值的类型：

```js
import { provide, inject } from 'vue'
import type { InjectionKey } from 'vue'

const key = Symbol() as InjectionKey<string>

provide(key, 'foo') // 若提供的是非字符串值会导致错误

const foo = inject(key) // foo 的类型：string | undefined
```

**建议将注入 key 的类型放在一个单独的文件中，这样它就可以被多个组件导入。**

**当使用字符串注入 key 时，注入值的类型是 `unknown`，需要通过泛型参数显式声明：**

```js
const foo = inject < string > 'foo'; // 类型：string | undefined
```

注意注入的值仍然可以是 `undefined`，因为无法保证提供者一定会在运行时 provide 这个值。

当提供了一个默认值后，这个 `undefined` 类型就可以被移除：

```js
const foo = inject < string > ('foo', 'bar'); // 类型：string
```

如果你确定该值将始终被提供，则还可以强制转换该值：

```js
const foo = inject('foo') as string
```

### 为模板引用标注类型

模板引用需要通过一个显式指定的泛型参数和一个初始值 `null` 来创建：

```js
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const el = ref<HTMLInputElement | null>(null)

onMounted(() => {
  el.value?.focus()
})
</script>

<template>
  <input ref="el" />
</template>
```

**注意：为了严格的类型安全，有必要在访问 `el.value` 时使用可选链或类型守卫。这是因为直到组件被挂载前，这个 ref 的值都是初始的 `null`，并且在由于 `v-if` 的行为将引用的元素卸载时也可以被设置为 `null`。**

### `v-if` 和 `v-for`

> 警告
>
> 同时使用 `v-if` 和 `v-for` 是**不推荐的**，因为这样二者的优先级不明显。请查看[风格指南](https://staging-cn.vuejs.org/style-guide/#avoid-v-if-with-v-for-essential)获得更多信息。
>
> **当 `v-if` 和 `v-for` 同时存在于一个元素上的时候，`v-if` 会首先被执行**。请查看[列表渲染指南](https://staging-cn.vuejs.org/guide/essentials/list.html#v-for-with-v-if)获取更多细节。

### 动态组件

当使用 `<component :is="...">` 来在多个组件间作切换时，被切换掉的组件会被卸载。我们可以通过 `keep-alive` 组件强制被切换掉的组件仍然保持“存活”的状态。

### 依赖注入

要为组件后代提供数据，需要使用到 [`provide()`](https://staging-cn.vuejs.org/api/composition-api-dependency-injection.html#provide) 函数：

```js
<script setup>
	import {provide} from 'vue' provide(/* 注入名(String,Symbol) */ 'message',
	/* 值 */ 'hello!')
</script>
```

如果不使用 `<script setup>`，请确保 `provide()` 是在 `setup()` 同步调用的：

```js
import { provide } from 'vue';

export default {
	setup() {
		provide(/* 注入名 */ 'message', /* 值 */ 'hello!');
	},
};
```

除了在一个组件中提供依赖，我们还可以在整个应用层面提供依赖：

```js
import { createApp } from 'vue';

const app = createApp({});

app.provide(/* 注入名 */ 'message', /* 值 */ 'hello!');
```

在应用级别提供的数据在该应用内的所有组件中都可以注入。这在你编写[插件](https://staging-cn.vuejs.org/guide/reusability/plugins.html)时会特别有用，因为插件一般都不会使用组件形式来提供值。

要注入上层组件提供的数据，需使用 [`inject()`](https://staging-cn.vuejs.org/api/composition-api-dependency-injection.html#inject) 函数：

```js
<script setup>
	import {inject} from 'vue' const message = inject('message')
</script>
```

> 如果提供的值是一个 ref，注入进来的会是**该 ref 对象**，而**不会**自动解包为其内部的值。这使得注入方组件能够通过 ref 对象保持了和供给方的响应性链接

如果不使用 `<script setup>`同上注入使用方法

```js
// 如果没有祖先组件提供 "message"
// `value` 会是 "这是默认值"
const value = inject('message', '这是默认值');
```

在一些场景中，默认值可能需要通过调用一个函数或初始化一个类来取得。**为了避免在用不到默认值的情况下进行不必要的计算或产生副作用，我们可以使用工厂函数来创建默认值**：

```js
const value = inject('key', () => new ExpensiveClass());
```

> 当提供注入响应式的数据时，**建议尽可能将任何对响应式状态的变更的方法都保持在供给方组件中**。这样可以确保所提供状态的声明和变更操作都内聚在同一个组件内，使其更容易维护。(配套提供一个修改状态数据的函数，给子组件调用更新数据

```js
<!-- 在供给方组件内 -->
<script setup>
import { provide, ref } from 'vue'

const location = ref('North Pole')

function updateLocation() {
  location.value = 'South Pole'
}

provide('location', {
  location,
  updateLocation
})
</script>
```

```js
<!-- 在注入方组件 -->
<script setup>
import { inject } from 'vue'

const { location, updateLocation } = inject('location')
</script>

<template>
  <button @click="updateLocation">{{ location }}</button>
</template>
```

最后，如果你想确保提供的数据不能被注入方的组件更改，你可以使用 [`readonly()`](https://staging-cn.vuejs.org/api/reactivity-core.html#readonly) 来包装提供的值。

```js
<script setup>
	import {(ref, provide, readonly)} from 'vue' const count = ref(0)
	provide('read-only-count', readonly(count))
</script>
```

注意：建议最好使用 Symbol 来作为注入名以避免潜在的冲突。

#### 为 provide / inject 标注类型

Vue 提供了一个 `InjectionKey` 接口，它是一个继承自 `Symbol` 的泛型类型，可以用来在提供者和消费者之间同步注入值的类型：

```js
import { provide, inject } from 'vue'
import type { InjectionKey } from 'vue'

const key = Symbol() as InjectionKey<string>

provide(key, 'foo') // 若提供的是非字符串值会导致错误

const foo = inject(key) // foo 的类型：string | undefined
```

建议将注入 key 的类型放在一个单独的文件中，这样它就可以被多个组件导入。

**当使用字符串注入 key 时，注入值的类型是 `unknown`，需要通过泛型参数显式声明：**

```js
const foo = inject < string > 'foo'; // 类型：string | undefined
```

注意注入的值仍然可以是 `undefined`，因为**无法保证提供者一定会在运行时 provide 这个值**。

**当提供了一个默认值'bar'后，这个 `undefined` 类型就可以被移除：**

```js
const foo = inject < string > ('foo', 'bar'); // 类型：string
```

如果你确定该值将始终被提供，则还可以强制转换该值：

```js
const foo = inject('foo') as string
```

## 组合式函数(hook)

### 什么是“组合式函数”？

> “组合式函数”(Composables) 是一个**利用 Vue 组合式 API 来封装和复用有状态逻辑的函数**。
>
> 复用公共任务的逻辑。例如为了在不同地方格式化时间，我们可能会抽取一个可复用的日期格式化函数。这个函数封装了**无状态的逻辑**：它在接收一些输入后立刻返回所期望的输出。复用无状态逻辑的库有很多，比如你可能已经用过的 [lodash](https://lodash.com/) 或是 [date-fns](https://date-fns.org/)。
>
> 📦: 和在组件中一样，你也可以在组合式函数中使用所有的组合式 API,还可以嵌套多个组合式函数：一个组合式函数可以调用一个或多个其他的组合式函数。
>
> **`这正是为什么我们决定将实现了这一设计模式的 API 集合命名为组合式 API`**。

```js
// mouse.js
import { ref } from 'vue';
import { useEventListener } from './event';

export function useMouse() {
	const x = ref(0);
	const y = ref(0);

	useEventListener(window, 'mousemove', (event) => {
		x.value = event.pageX;
		y.value = event.pageY;
	});

	return { x, y };
}
```

**注意：必须是返回一个函数，并且建议以 use 前缀命名**

##### 带参数的组合式函数

```js
// fetch.js
import { ref, isRef, unref, watchEffect } from 'vue';

export function useFetch(url) {
	const data = ref(null);
	const error = ref(null);

	function doFetch() {
		// 在请求之前重设状态...
		data.value = null;
		error.value = null;
		// unref() 解包可能为 ref 的值
		fetch(unref(url))
			.then((res) => res.json())
			.then((json) => (data.value = json))
			.catch((err) => (error.value = err));
	}

	if (isRef(url)) {
		// 若输入的 URL 是一个 ref，那么启动一个响应式的请求
		watchEffect(doFetch);
	} else {
		// 否则只请求一次
		// 避免监听器的额外开销
		doFetch();
	}

	return { data, error };
}
```

> `useFetch()` 现在同时可以接收静态的 URL 字符串和 URL 字符串的 ref。当通过 [`isRef()`](https://staging-cn.vuejs.org/api/reactivity-utilities.html#isref) 检测到 URL 是一个动态 ref 时，它会使用 [`watchEffect()`](https://staging-cn.vuejs.org/api/reactivity-core.html#watcheffect) 启动一个响应式的 effect。该 effect 会立刻执行一次，并在此过程中将 URL 的 ref 作为依赖进行跟踪。当 URL 的 ref 发生改变时，数据就会被重置，并重新请求。

**尽管其响应性不依赖 ref，组合式函数仍可接收 ref 参数**。如果编写的组合式函数会被其他开发者使用，你**最好在处理输入参数时兼容 ref 而不只是原始的值**。`unref()`工具函数会对此非常有帮助：

```js
import { unref } from 'vue';

function useFeature(maybeRef) {
	// 若 maybeRef 确实是一个 ref，它的 .value 会被返回👍
	// 否则，maybeRef 会被原样返回
	const value = unref(maybeRef);
}
```

**如果你的组合式函数在接收 ref 为参数时会产生响应式 effect，请确保使用 `watch()` 显式地监听此 ref，或者在 `watchEffect()` 中调用 `unref()` 来进行正确的追踪。**

在组合式函数中使用 `ref()` 而不是 `reactive()`。我们推荐的约定是组合式函数始终返回一个包含多个 ref 的普通的非响应式对象，**这样该对象在组件中被解构为 ref 之后仍可以保持响应性：**

```js
// x 和 y 是两个 ref
const { x, y } = useMouse();
```

> **从组合式函数返回一个响应式对象会导致在对象解构过程中丢失与组合式函数内状态的响应性连接。与之相反，ref 则可以维持这一响应性连接**📦

> 确保在 `onUnmounted()` 时清理副作用。举例来说，如果一个组合式函数设置了一个事件监听器，它就应该在 `onUnmounted()` 中被移除 (就像我们在 `useMouse()` 示例中看到的一样)。当然也可以像之前的 `useEventListener()` 示例那样，使用一个组合式函数来自动帮你做这些事。

> 组合式函数在 `<script setup>` 或 `setup()` 钩子中，**应始终被同步地调用。**

注意：这个限制是为了让 Vue 能够确定当前正在被执行的到底是哪个组件实例，只有能确认当前组件实例，才能够：📦

1. **将生命周期钩子注册到该组件实例上**
2. **将计算属性和监听器注册到该组件实例上，以便在该组件被卸载时停止监听，避免内存泄漏。**

> TIP:
>
> `<script setup> 是唯一在调用 await 之后仍可调用组合式函数的地方。编译器会在异步操作之后自动为你恢复当前的组件实例。`

#### Hook or Mixin

当使用了多个 mixin 时，实例上的数据属性来自哪个 mixin 变得不清晰，推荐在组合式函数中使用 ref + 解构模式的理由：**让属性的来源在消费组件时一目了然。**(来自哪个 Hook 的，可以从解构中了解到)

多个来自不同作者的 mixin 可能会注册相同的属性名，造成命名冲突。若使用组合式函数，你**可以通过在解构变量时对变量进行重命名来避免相同的键名**。

多个 mixin 需要依赖共享的属性名来进行相互作用，这使得它们**隐性地耦合在一起**。而一个组合式函数的**返回值可以作为另一个组合式函数的参数被传入，像普通函数那样**。

### Vue 中重用代码的方式

`组件`、`组合式函数`、`自定义指令`，**组件是主要的构建模块，而组合式函数则侧重于有状态的逻辑，自定义指令主要是为了重用涉及普通元素的底层 DOM 访问的逻辑。**

### 自定义指令

> 一个自定义指令**`由一个包含类似组件生命周期钩子的对象来定义`**。**钩子函数会接收到指令所绑定元素作为其参数**。
>
> **`任何以 v 开头的驼峰式命名的变量都可以被用作一个自定义指令。`**
>
> 在没有使用 `<script setup>` 的情况下，自定义指令需要通过 `directives` 选项注册

```js
// 当一个 input 元素被 Vue 插入到 DOM 中后，它会被自动聚焦
<script setup>
// 在模板中启用 v-focus，无需手动引入，定义需要注册的自定义指令钩子函数，直接在模板中即可使用📦
const vFocus = {
  mounted: (el) => el.focus()
}
</script>

<template>
  <input v-focus />
</template>


const vFocus = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode, prevVnode) {
    // 下面会介绍各个参数的细节
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode, prevVnode) {}
}
```

-   `el`：指令绑定到的元素。这**可以用于直接操作 DOM。**
-   `binding`：一个对象，包含以下属性。
    -   `value`：**传递给指令的值**。例如在 `v-my-directive="1 + 1"` 中，值是 `2`。
    -   `oldValue`：**之前的值，仅在 `beforeUpdate` 和 `updated` 中可用**。无论值是否更改，它都可用。
    -   `arg`：传递给指令的参数 (如果有的话)。例如在 `v-my-directive:foo` 中，参数是 `"foo"`。
    -   `modifiers`：一个包含修饰符的对象 (如果有的话)。例如在 `v-my-directive.foo.bar` 中，修饰符对象是 `{ foo: true, bar: true }`。
    -   `instance`：**使用该指令的组件实例。**
    -   `dir`：指令的定义对象。
-   `vnode`：**代表绑定元素的底层 VNode。**
-   `prevNode`：**之前的渲染中代表指令所绑定元素的 VNode。仅在 `beforeUpdate` 和 `updated` 钩子中可用。**

**和内置指令类似，自定义指令的参数也可以是动态的**。举例来说：

```html
<div v-example:[arg]="value"></div>
```

这里指令的参数会基于组件的 `arg` 数据属性响应式地更新

#### 简写版 自定义指令

对于自定义指令来说，一个很常见的情况是**仅仅需要在 `mounted` 和 `updated` 上实现相同的行为**，除此之外并不需要其他钩子。这种情况下我们**可以直接用一个函数来定义指令**，如下所示：

```js
<div v-color='color'></div>;
app.directive('color', (el, binding) => {
	// 这会在 `mounted` 和 `updated` 时都调用📦
	el.style.color = binding.value;
});
```

注意：只有当所需功能只能通过直接的 DOM 操作来实现时，才应该使用自定义指令。其他情况下应该尽可能地使用 `v-bind` 这样的内置指令来声明式地使用模板，这样更高效

需要注意的是组件可能含有多个根节点。当应用到一个多根组件时，指令将会被忽略且抛出一个警告。和 attribute 不同，指令不能通过 `v-bind="$attrs"` 来传递给一个不同的元素。总的来说，**不**推荐在组件上使用自定义指令。

### 插件 Vue.use

> **一个插件可以是一个拥有 `install()` 方法的对象，也可以直接是一个安装函数本身**。插件 (Plugins) 是一种能为 Vue 添加全局功能的工具代码。

```js
// plugins/i18n.js
export default {
  install: (app, options) => {
    // 在这里编写插件代码
  }
}

我们希望有一个翻译函数，这个函数接收一个以 . 作为分隔符的 key 字符串，用来在用户提供的翻译字典中查找对应语言的文本。期望的使用方式如下：

<h1>{{ $translate('greetings.hello') }}</h1>
```

```js
// plugins/i18n.js
export default {
	install: (app, options) => {
		// 注入一个全局可用的 $translate() 方法
		app.config.globalProperties.$translate = (key) => {
			// 获取 `options` 对象的深层属性
			// 使用 `key` 作为索引
			return key.split('.').reduce((o, i) => {
				if (o) return o[i];
			}, options);
		};
	},
};
```

### TS 扩展全局属性

某些插件会通过 [`app.config.globalProperties`](https://staging-cn.vuejs.org/api/application.html#app-config-globalproperties) 为所有组件都安装全局可用的属性。举例来说，我们可能为了请求数据而安装了 `this.$http`，或者为了国际化而安装了 `this.$translate`。为了使 TypeScript 更好地支持这个行为，Vue 暴露了一个被设计为可以通过 [TypeScript 模块扩展](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)来扩展的 `ComponentCustomProperties` 接口：

```js
import axios from 'axios'

declare module 'vue' {
  interface ComponentCustomProperties {
    $http: typeof axios
    $translate: (key: string) => string
  }
}
```

### `<Transition>` 组件

条件之一触发：

-   由 `v-if` 所触发的切换
-   由 `v-show` 所触发的切换
-   由特殊元素 `<component>` 切换的动态组件

当一个 `<Transition>` 组件中的元素被插入或移除时，会发生下面这些事情：

1. Vue 会自动检测目标元素是否应用了 CSS 过渡或动画。如果是，则一些 CSS 过渡 class 会在适当的时机被添加和移除。
2. 如果有作为监听器的 JavaScript 钩子，这些钩子函数会在适当时机被调用。
3. 如果没有探测到 CSS 过渡或动画、也没有提供 JavaScript 钩子，那么 DOM 的插入、删除操作将在浏览器的下一个动画帧后执行。

**JavaScript 钩子**

你可以通过监听 Transition 组件事件的方式在过渡过程中挂上钩子函数

```js
<Transition
  @before-enter="onBeforeEnter"
  @enter="onEnter"
  @after-enter="onAfterEnter"
  @enter-cancelled="onEnterCancelled"
  @before-leave="onBeforeLeave"
  @leave="onLeave"
  @after-leave="onAfterLeave"
  @leave-cancelled="onLeaveCancelled"
>
  <!-- ... -->
</Transition>
```

### 用响应式 API 做简单状态管理

如果你有一部分状态需要在多个组件实例间共享，你可以使用 [`reactive()`](https://staging-cn.vuejs.org/api/reactivity-core.html#reactive) 来创建一个响应式对象，并在不同组件中导入它：

```js
// store.js
import { reactive } from 'vue'

export const store = reactive({
  count: 0
})
<!-- ComponentA.vue -->
<script setup>
import { store } from './store.js'
</script>

<template>From A: {{ store.count }}</template>
<!-- ComponentB.vue -->
<script setup>
import { store } from './store.js'
</script>

<template>From B: {{ store.count }}</template>
```

现在每当 `store` 对象被更改时，`<ComponentA>` 与 `<ComponentB>` 都会自动更新它们的视图。现在我们有了单一的数据源。

**然而，这也意味着任意一个导入了 `store` 的组件都可以随意修改它的状态**：

```html
<template>
	<button @click="store.count++">From B: {{ store.count }}</button>
</template>
```

虽然这在简单的情况下是可行的，但从长远来看，可以被任何组件任意改变的全局状态是不太容易维护的。

### 模板 vs. 渲染函数

Vue 模板会被预编译成虚拟 DOM 渲染函数。Vue 也提供了 API 使我们可以不使用模板编译，直接手写渲染函数。在处理高度动态的逻辑时，渲染函数相比于模板更加灵活，因为你可以完全地使用 JavaScript 来构造你想要的 vnode。

那么为什么 Vue 默认推荐使用模板呢？有以下几点原因：

1. 模板更贴近实际的 HTML。这使得我们能够更方便地重用一些已有的 HTML 代码片段，能够带来更好的可访问性体验、能更方便地使用 CSS 应用样式，并且更容易使设计师理解和修改。
2. 由于其确定的语法，更容易对模板做静态分析。这使得 Vue 的模板编译器能够应用许多编译时优化来提升虚拟 DOM 的性能表现 (下面我们将展开讨论)。

在实践中，模板对大多数的应用场景都是够用且高效的。**渲染函数一般只会在需要处理高度动态渲染逻辑的可重用组件中使用**。想了解渲染函数的更多使用细节可以去到[渲染函数 & JSX](https://staging-cn.vuejs.org/guide/extras/render-function.html) 章节继续阅读。

```js
// 除了类型必填以外，其他的参数都是可选的
h('div');
h('div', { id: 'foo' });

// attribute 和 property 都能在 prop 中书写
// Vue 会自动将它们分配到正确的位置
h('div', { class: 'bar', innerHTML: 'hello' });

// 可以添加 .prop 和 .attr 等道具修饰符
// with '.' and `^' prefixes respectively📦
h('div', { '.name': 'some-name', '^width': '100' });

// 类与样式可以像在模板中一样
// 用数组或对象的形式书写
h('div', { class: [foo, { bar }], style: { color: 'red' } });

// 事件监听器应以 onXxx 的形式书写
h('div', { onClick: () => {} });

// children 可以是一个字符串
h('div', { id: 'foo' }, 'hello');

// 没有 props 时可以省略不写
h('div', 'hello');
h('div', [h('span', 'hello')]);

// children 数组可以同时包含 vnodes 与字符串
h('div', ['hello', h('span', 'hello')]);
```

得到的 vnode 为如下形式：

```js
const vnode = h('div', { id: 'foo' }, []);

vnode.type; // 'div'
vnode.props; // { id: 'foo' }
vnode.children; // []
vnode.key; // null
```

当组合式 API 与模板一起使用时，`setup()` 钩子的返回值是用于暴露数据给模板。然而当我们使用渲染函数时，可以直接把渲染函数返回：

```js
import { ref, h } from 'vue';

export default {
	props: {
		/* ... */
	},
	setup(props) {
		const count = ref(1);

		// 返回渲染函数
		return () => h('div', props.msg + count.value);
	},
};
```

在 `setup()` 内部声明的渲染函数天生能够访问在同一范围内声明的 props 和许多响应式状态。

#### Vnodes 必须唯一

**`组件树中的 vnodes 必须是唯一的`**。下面是错误示范：

```js
function render() {
	const p = h('p', 'hi');
	return h('div', [
		// 啊哦，重复的 vnodes 是无效的
		p,
		p,
	]);
}
```

如果你真的非常想在页面上渲染多个重复的元素或者组件，你可以使用一个工厂函数来做这件事。比如下面的这个渲染函数就可以完美渲染出 20 个相同的段落：

```js
function render() {
	return h(
		'div',
		Array.from({ length: 20 }).map(() => {
			return h('p', 'hi');
		})
	);
}
```

#### 传递插槽

向组件传递子元素的方式与向元素传递子元素的方式有些许不同。我们需要传递一个插槽函数或者是一个包含插槽函数的对象而非是数组，插槽函数的返回值同一个正常的渲染函数的返回值一样——并且在子组件中被访问时总是会被转化为一个 vnodes 数组。

```js
// 单个默认插槽
h(MyComponent, () => 'hello');

// 具名插槽
// 注意 `null` 是必需的
// 以避免 slot 对象被当成 prop 处理📦
h(MyComponent, null, {
	default: () => 'default slot',
	foo: () => h('div', 'foo'),
	bar: () => [h('span', 'one'), h('span', 'two')],
});
```

等价 JSX 语法：

```js
// 默认插槽
<MyComponent>{() => 'hello'}</MyComponent>

// 具名插槽
<MyComponent>{{
  default: () => 'default slot',
  foo: () => <div>foo</div>,
  bar: () => [<span>one</span>, <span>two</span>]
}}</MyComponent>
```

插槽以函数的形式传递使得它们可以被子组件懒调用。这能确保它被注册为子组件的依赖关系，而不是父组件。这使得更新更加准确及有效。

#### 内置组件

诸如 `<KeepAlive>`、`<Transition>`、`<TransitionGroup>`、`<Teleport>` 和 `<Suspense>` 等[内置组件](https://staging-cn.vuejs.org/api/built-in-components.html)在渲染函数中必须导入才能使用：

```js
import { h, KeepAlive, Teleport, Transition, TransitionGroup } from 'vue';

export default {
	setup() {
		return () => h(Transition, { mode: 'out-in' } /* ... */);
	},
};
```

#### `v-model`

`v-model` 指令扩展为 `modelValue` 和 `onUpdate:modelValue` 在模板编译过程中，我们必须自己提供这些 props：

```js
export default {
	props: ['modelValue'],
	emits: ['update:modelValue'],
	setup(props, { emit }) {
		return () =>
			h(SomeComponent, {
				modelValue: props.modelValue,
				'onUpdate:modelValue': (value) =>
					emit('update:modelValue', value),
			});
	},
};
```

### 取消 `.native` 修饰符

`.native` 修饰符在 Vue 3 已经移除掉。取而代之的是，在新增的 `emits` 选项中定义当前组件真正触发的事件（即，组件事件），将所有**未在组件`emits` 选项中定义**的事件**作为原生事件添加到子组件的根元素**中（除非子组件选项中设置了 `inheritAttrs: false`）。
