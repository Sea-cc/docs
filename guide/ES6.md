# ✍️ ES6

ES6 的版本变动内容最多，具有**里程碑意义**

ES6 加入许多**新的语法特性**，编程实现更简单、高效

ES6 是前端发展趋势，就业必备技能

## ES6 兼容性

http://kangax.github.io/compat-table/es6/ 各个浏览器兼容性查看

**解决方案：**

针对 ES6 的兼容性问题，很多团队为此开发出了多种**语法解析转换工具**，把我们写的**ES6 语法转换成 ES5**，相当于在 ES6 和浏览器之间做了一个翻译官。比较通用的工具方案有**babel**，**jsx**，traceur，es6-shim 等。

此外，浏览器自身也加快速度兼容 ES6 的新特性，其中对 ES6 新特性最友好的是 Chrome 和 Firefox 浏览器。

## **let 关键字**

ES6 新增了`let`命令，用来声明变量。它的用法类似于`var`，但是**所声明的变量，只在`let`命令所在的代码块内有效**。

特性：

1、变量可以重新赋值不能重复声明

2、块级作用域 作用域：全局、函数、eval(在 ES5 的严格模式下才会出现)、块级作用域(ES6 引入)

var 声明出现的问题

```js
var a = [];
for (var i = 0; i < 10; i++) {
	//a[i]，这里的i可以被赋值
	a[i] = function () {
		console.log(i); //这里的i因为在函数里的，函数处于一个封闭状态，不能直接赋值
	};
}
a[6](); // 10 ？？？访问的是一个全局i的值
```

​ **if else while for 的作用域也有效**

```js
{
	let a = 10;
	var b = 1;
}

a; // ReferenceError: a is not defined.
b; // 1
```

`for`循环有一个特别之处，就是设置循环变量的那部分是一个**父作用域**，而**循环体内部是一个单独的子作用域**。

```js
for (let i = 0; i < 3; i++) {
	let i = 'abc';
	console.log(i);
}
// abc
// abc
// abc
```

如果每一轮循环的变量`i`都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值？**这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量`i`时，就在上一轮循环的基础上进行计算。**

3、不存在变量提升，变量**声明前引用变量会造成错误**

4、**不影响作用域链**

```js
{
	let i = 2021;
	function fun() {
		console.log(i);
	}
	fun(); //2021
}
```

## **const 关键字**

`const`声明一个只读的**常量**。一旦声明，**常量的值就不能改变**。

1、**一定要赋初始值** 、、、、、、、、、、、、🚊

2、一般常量使用大写声明(潜规则)

3、**常量的值不能修改**

4、块级作用域

**5、对于数组和对象的元素修改，不算对常量的修改，不会报错**

`const`实际上保证的，并不是变量的值不得改动，而是变量指向的那个**内存地址**所保存的数据**不得改动**。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，`const`**只能保证这个指针是固定的（即总是指向另一个固定的地址）**，至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

## reduce /rɪˈduːs/

数组的条件判断遍历 reduce() 方法接收一个函数作为累加器

```js
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

reduce 为数组中的每一个元素依次执行回调函数，**不包括数组中被删除或从未被赋值的元素**，**接受四个参数：初始值（或者上一次回调函数的返回值 🚕），当前元素值，当前索引，调用 reduce 的数组。**

## **变量解构赋值**

从**数组和对象**中提取值，**对变量进行赋值**，这被称为解构

```js
let [a, b, c] = [1, 2, 3];
let [foo, [[bar], baz]] = [1, [[2], 3]];
foo; // 1
bar; // 2
baz; // 3

let [, , third] = ['foo', 'bar', 'baz'];
third; // "baz"

let [x, , y] = [1, 2, 3];
x; // 1
y; // 3

let [head, ...tail] = [1, 2, 3, 4];
head; // 1
tail; // [2, 3, 4]🚲🚲🚲

//////////////////////////////////////////////
let [x, y, ...z] = ['a'];
x; // "a"
y; // undefined
z; // []🚲🚲🚲
```

如果解构不成功，变量的值就等于`undefined`。

```js
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
foo; // "aaa"
bar; // "bbb"
```

**变量必须与属性同名，才能取到正确的值。**

**如果变量名与属性名不一致，必须写成下面这样。**

```js
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz; // "aaa"

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f; // 'hello'
l; // 'world'
```

## 模板字符串 ``

用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。

模板字符串中嵌入变量，需要将变量名写在`${}`之中。

如果使用模板字符串表示多行字符串，**所有的空格和缩进都会被保留在输出之中**🚄🚄🚄。

模板字符串之中还能调用函数

```js
function fn() {
	return 'Hello World';
}

`foo ${fn()} bar`;
// foo Hello World bar
```

#### 模板编译

**JavaScript 代码，使用`<%= ... %>`输出 JavaScript 表达式。**

```js
let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;
```

## 箭头函数(构造函数不能用，没有 this、arguments)

## 函数赋默认初始值

与解构赋值结合

## 对象的简写语法

## rest 参数（ ...xxx ）

用于获取函数的**实参**，用来代替 arguments

**arguments 参数**

arguments 对象不是一个 Array 。它类似于 Array, 但除了 length 属性和索引元素之外没有任何 Array 属性。

```js
function rest() {
	console.log(arguments); //输出一个arguments对象
}
rest('r', 'e', 's', 't');
```

**rest 参数:**

```js
function rest(...arg) {
	console.log(arg); //输出一个数组['r','e','s','t']
}
rest('r', 'e', 's', 't');
```

**注意：如果参数有多个时，rest 参数必须放在最后**🚓

## **扩展运算符**

**将数组转化为逗号分隔的参数列**🚗

```js
const i = ['1', '2', '3', '4'];
function arr() {
	console.log(arguments);
}
arr(...i); //等同于arr('1','2','3','4')
```

##### **应用：**

当**数组是 一维数组 时，扩展运算符可以进行完全深拷贝**，改变拷贝后数组的值并不会影响拷贝源的值。
**但是，当数组为多维时不能进行深拷贝，对象也如此**🚆🚆🚆🚆🚆🚆🚆🚆🚆🚆

​ 1、数组的合并

```js
const a = ['q', 'w', 'e', 'r', 't'];
const b = ['y', 'u', 'i'];
const c = [...a, ...b];
```

2、数组克隆

```js
const a = ['q', 'w', 'e', 'r', 't'];
const b = [...a];
```

3、**将伪数组转化为真正的数组**

```
const a=document.ElementsByTagName()
const b=[...a];
```

## **symbol**......独一无二的值

ES6 引入的新数据类型，**表示独一无二的值**，Js 语言的**第七种数据类型**，是一种**类似于字符串的数据类型**

**symbol 的值是唯一的，用来//解决命名冲突//的问题**🚗

**symbol 的值不能与其它的数据进行运算**🚗

symbol 定义的对象属性不能使用 for ...in 循环遍历、object.keys\values......，但是可以使用 Reflect.ownKeys 来获取对象的所有键名

**创建**：

**唯一的，不可见的**🚍

**类比身份证，身份证虽然可能会重名，但是并不代表是同一个人**

有两个方法可以获取到有关 Symbol 值的属性：`Object.getOwnPropertySymbols`方法，可以获取指定对象的所有 Symbol 属性名（Symbol 类型的值，非字符串量）；以及扩展运算符（`...`）。

以 Symbol 值作为属性名，必须使用`[]`运算符定义和获取属性值

```js
//第一种
let sym = Symbol();
console.log(sym, typeof sym); //Symbol,'symbol'
//第二种
let sym2 = Symbol('foo');
//第三种
let sym3 = Symbol.for('bar');
```

**symbol 的使用场景** 🚓🚓

1、向对象添加 属性 和 方法 up down

```js
🛺方式一：
let game={}
//现在向 game 里面添加属性方法
这样写其实不安全的，假如 game 里面已经有 up 了
game.up=function(){}

symbol 的写法 --- 解决命名冲突的问题
可以安全快速去给 game 添加方法，不会去破坏 game 的一些属性

//声明一个对象
let methods={
    up:Symbol(),
    down:Symbol()
}
game[methods.up]=function(){
    console.log('我可以改变形状')
}
game[methods.down]=function(){
    console.log('我可以快速下降')
}

🚐方式二：
let sym={
    name:'狼人杀',
    //现在想为这个对象添加🚄独一无二的方法
    [Symbol('say')]:function(){
        console.log('我要发言')
    },
    [Symbol('bobobo')]:function(){
        console.log('我可以自爆')
    }
}
```

ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方法

## 迭代器

https://www.jb51.net/article/163614.htm

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140935772.png)

迭代器就是为实现**对不同集合进行统一遍历操作的一种机制**，只要给需要遍历的数据结构**部署 Iterator[ɪtə'reɪtə]接口**（对象里的一个属性 **Symbol.Iterator**），通过调用该接口，或者使用消耗该接口的 API 实现遍历操作。

1、ES6 创造了一种新的遍历命令 for ... of 循环，Iterator 接口主要提供 for ... of 消费

2、原生具备 Iterator 接口的数据(可用 for ... of 遍历)：

​ **Array、Arguments、Set、Map、String、TypedArray、NodeList**

**for ...of 与 for ...in 区别**🌌：

of / in 左边保存的：**of --- 键值** **in--- 键名**

```js
// 声明一个对象
const Nation = {
	name: '中国',
	city: ['深圳', '广州', '北京', '上海'],
};

// 遍历对象  for ... of
for (let i of Nation.city) {
	console.log(i); //深圳、广州、 北京、 上海
}

for (let i of Nation) {
	console.log(i); //TypeError: Nation is not iterable
}
```

**原理**：

---

首先会调用 arr 数组中**Symbol.iterator 属性对象的函数**，就会**获取到该数组对应的迭代器**，接下来 **iterator.next()被调用**，迭代器结果对象的 value 属性会被放入到变量 num 中。数组中的数据项会依次存入到变量 num 中，直到**迭代器结果对象中的 done 属性变成 true 为止**，循环就结束。

```js
let arr = ['a', 'b'];
let iter = arr[Symbol.iterator]();
iter.next(); // { value: 'a', done: false }
iter.next(); // { value: 'b', done: false }
iter.next(); // { value: undefined, done: true }
```

**_注意_**：需要**自定义遍历数据**的时候，要**想到迭代器**

---

## **自定义遍历数据**

```js
// 声明一个对象
const Nation = {
	name: '中国',
	city: ['深圳', '广州', '北京', '上海'],
	// 循环返回错误：TypeError: Nation is not iterable[Nation是不可迭代的] 解决
	// 创建一个指针对象
	[Symbol.iterator]() {
		// 索引变量
		let i = 0;
		// 保存 this
		let _this = this;
		return {
			// 创建指针对象需要调用的 next 方法
			next() {
				if (i < _this.city.length) {
					const result = { value: _this.city[i], done: false };
					i++;
					return result;
				} else {
					return { value: undefined, done: true };
				}
			},
		};
	},
};

// 遍历对象  for ... of
// 按照意愿去遍历 ---> 遍历 Nation 对象，返回 Nation 对象 city 的每一项
for (let i of Nation) {
	console.log(i);
}
```

## 生成器 Generator 函数

**生成器是一个函数**，(jun 哦 lv te)是 ES6 提供的一种**异步编程解决方案**，语法行为与传统函数完全不同

```js
function* gen() {
            yield 'hello';
            yield 'world';
            return 'ending';
        }
        let iterator = gen();//返回一个遍历器对象
只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数🚈。yield表达式就是暂停标志。----------类似分隔符
        iterator.next()
        // { value: 'hello', done: false }
        iterator.next()
        // { value: 'world', done: false }
        iterator.next()
        // { value: 'ending', done: false }
每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。value属性表示当前的内部状态的值，是yield表达式后面那个表达式的值；done属性是一个布尔值，表示是否遍历结束。
```

## 生成器 --- 异步解决方案

```js
function a() {
	setTimeout(() => {
		let data = '1.农夫山泉';
		完成第一步之后执行第二次并传本次的结果过去;
		iterator.next(data); //////
	}, 1000);
}

function b() {
	setTimeout(() => {
		let data = '2.百岁山';
		iterator.next(data); //////
	}, 1000);
}

function c() {
	setTimeout(() => {
		let data = '3.怡宝';
		iterator.next(data); //////
	}, 1000);
}

生成器;
function* gen() {
	let one = yield a();
	console.log(one);
	let two = yield b();
	console.log(two);
	let three = yield c();
	console.log(three);
}

获取一个迭代对象;
let iterator = gen();
iterator.next();
```

## Promise --- 异步解决新方案

Promise 是 ES6 引入的**异步编程的新解决方案**。语法上 Promise 是一个构造函数，new 一个 Promise 实例对象接收传入一个函数，用来**封装异步操作**并可以获取其成功或者失败的结果

1、Promise 构造函数：Promise ( excutor) {}

2、Promise.prototype.then 方法

​ then 方法返回的**也是一个 Promise 对象**，这样就可以在返回的 Promise 对象上再调用，然后后面继续 .then 形成一个链式回调 --- **从里往内是回调地狱，从上往下是链式回调**

```js
// https://my-json-server.typicode.com/mikef3/serve/db

function ask(way, url) {
	// 实例化一个 Promise 对象
	return new Promise((resolve, reject) => {
		// 实例化一个 XMLHttpRequest 对象
		const xhr = new XMLHttpRequest();
		let requestWay = way.toUpperCase();
		// 配置 xhr 的请求方式 和 请求路径
		xhr.open(requestWay, url);
		// 发送请求,get 请求 send() 方法不用传入参数
		xhr.send();
		// 绑定监听事件获取返回数据
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					// 根据 resolve 和 reject 改变 Promise 状态调用 then
					resolve(JSON.parse(xhr.responseText));
				} else {
					reject('获取数据失败!');
				}
			}
		};
	});
}
ask('GET', 'https://my-json-server.typicode.com/mikef3/serve/db')
	.then(
		(res) => {
			// console.log(JSON.parse(res));
			// then 方法返回的**也是一个 Promise对象**，这样就可以在返回的Promise对象上再调用，然后后面继续 .then 形成一个链式回调  ---  **从里往内是回调地狱，从上往下是链式回调**
			console.log(res);
			return ask(
				'GET',
				'https://my-json-server.typicode.com/mikef3/serve/db'
			);
		},
		(err) => {}
	)
	.then(
		(res) => {
			console.log(res);
			return ask(
				'GET',
				'https://my-json-server.typicode.com/mikef3/serve/db'
			);
		},
		(err) => {
			console.log(err);
		}
	)
	.then(
		(res) => {
			console.log(res);
			return ask(
				'GET',
				'https://my-json-server.typicode.com/mikef3/serve/db'
			);
		},
		(err) => {
			console.log(err);
		}
	)
	.then(
		(res) => {
			console.log(res);
			return ask(
				'GET',
				'https://my-json-server.typicode.com/mikef3/serve/db'
			);
		},
		(err) => {
			console.log(err);
		}
	);
```

3、Promise.prototype.catch 方法

catch 其实算是一个**语法糖**

用于 Promise 实例对象状态为 Rejected 的后续处理，即异常处理。函数声明：p.catch(reject);

catch 方法本质上等价于 then(null, reject)，参数 reject 是一个回调函数，它的参数就是 Promise 对象状态变为 Rejected 后，传递来的错误信息。

## Set

ES6 提供了**新的数据结构 Set (集合)** ，它类**似于数组**，但**成员的值都是唯一的**。集合同样实现了 **iterator 接口**，所以**可以使用 ‘扩展运算符’ 和 for ... of** 进行遍历

**注意：Set 是一个集合 ，并不是一个数组**

**Set 集合具有唯一性，它会自动将重复的值去除**

在[JavaScript](https://so.csdn.net/so/search?from=pc_blog_highlight&q=JavaScript)中，有个有意思的的式子：NaN !== NaN。在 Set 中的元素的重复检查或者 Map 键的定位过程中，都是用的类似恒等的检查逻辑。该逻辑和恒等检查的**主要区别就是：NaN 等于自身 🚇**

**new Set([NaN,NaN]) ---[NaN]**

集合拥有的属性和方法：

size ： 返回集合的元素个数

add ： 添加一个新元素，返回当前集合

delete ： 删除元素，返回 布尔值

has ： 检测集合中是否包含某个元素，返回 布尔值

```js
let city = ['广州', '深圳', '上海', '北京', '广州'];
// 声明一个 Set 对象
let gather = new Set(city);
// 可以数组去重，@ 成员的值都是唯一的
// 添加一个新元素，返回当前集合
gather.add('成都');
// 返回集合的元素个数
console.log(gather.size);
// 删除元素，返回 布尔值
console.log(gather.delete('成都'));
// 检测集合中是否包含某个元素，返回 布尔值
console.log(gather.has('成都'));
console.log(gather.has('广州'));
console.log(gather);
```

## Map

ES6 提供了**新的数据结构 Map ** ，它类**似于对象**，也是键值对的集合。但是 **“键”**的**范围不限于字符串**，各种类型的值(包括对象)都可以当作键。Map 同样实现了 **iterator 接口**，所以**可以使用 ‘扩展运算符’ 和 for ... of** 进行遍历

**注意：Map 是一个集合 ，并不是一个对象**

**升级版的对象**

添加 set 、获取 get 、 清空 clear 、删除 delete 、看集合个数 size 、遍历 for ... of

```js
// 声明 Map
let m = new Map();
// 添加元素 采用('键 key','值 value')
m.set('city', '广州');
// m.set('city', '深圳');//重新赋值了上一个了
m.set('地区', '黄埔');
/* 注意： “键”的范围不限于字符串，各种类型的值(包括对象)都可以当作键 */
let key = {
	NAME: '中国',
};
m.set(key, ['广州', '深圳', '上海', '北京']);
// 查看集合个数 size
console.log(m.size);
// 删除元素 delete
m.delete('地区');
// 获取 get
console.log(m.get(key));
// 清空 clear
// m.clear()
// 遍历 for ... of
for (let v of m) {
	console.log(v); // ['city', '广州']  打印出来的是一个 2 个长度的数组['键', '值']
}
console.log(m);
```

## class 类

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140936545.png)

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140936006.png)

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140936372.png)

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140936666.png)

## 数值扩展

1、**Number.EPSILON** 是 JavaScript **表示的最小精度**

`EPSILON` 属性的值接近于 `2.2204460492503130808472633361816E-16`，或者 `2-52。

**测试是否相等**(0.1+0.2 !==0.3)

这不是错误。这是数学运算中的浮点运算。因为计算机是二进制来表示浮点数的，无法准确表示一个浮点数，只能逼近。

**(Math.abs(x - y + z) < Number.EPSILON)**apple 嗦 烂

```

x = 0.2;
y = 0.3;
z = 0.1;
equal = (Math.abs(x - y + z) < Number.EPSILON);
```

2、**Number.isFinite** 检测一个数值**是否为有限数**

3、**Number.isNaN** 检测一个数**是否为 NaN**

4、**Number.parseInt** **Number.parseFloat** **字符串转整数**

5、**Number.isInteger** 判断一个数是**否为整数**

6、**Math.trunc 将数字小数点抹掉**

7、**Math.sign 判断一个数到底为正数还是负数还是为零**

```js
console.log(Math.sign(11)); // 1
console.log(Math.sign(0)); // 0
console.log(Math.sign(-11)); // -1
```

## 对象方法扩展

1、**Object.is ** 判断两个 **值 是否相等**

```js
console.log(Object.is(12,12));  //true
注意**********
console.log(Object.is(NaN,NaN));  //true
console.log(NaN === NaN);	//false
```

2、**Object.assign** 对象的合并( 对对象进行深浅拷贝 )

**对象的合并 Object.assign(合并的,被合并的)**

​ **注意：当对象中只有一级属性，没有二级属性的时候，此方法为深拷贝，但是对象中有对象的时候，此方法，在二级属性以后就是浅拷贝。**

```js
let i = {
	name: 'root',
	pass: 123456,
	host: 'localhost.com',
	prot: 8080,
	test: '首页',
};

let l = {
	name: 'Sev',
	pass: 0910,
	host: 'qq.com',
	prot: 8080,
	test3: '主页',
};

// 对象的合并 Object.assign(合并的,被合并的)
console.log(Object.assign(i, l));
// {
//     "name": "Sev",
//     "pass": 910,
//     "host": "qq.com",
//     "prot": 8080,
//     "test": "首页"
//      test3: '主页'
// }
console.log(i); //此时 i 已经被修改了
```

3、**Object.getPrototypeof** **设置原型对象** **Object.setPrototypeof**

**不建议**

```js
// Object.setPrototypeOf(对象,原型对象)
Object.setPrototypeOf(i, l);
console.log(Object.getPrototypeOf(i));
console.log(i);
```

# 模块化

**模块化是将一个大的程序文件,拆分成许多小的文件,然后将小的文件组合起来**

## 模块化的好处

防止命名冲突

代码复用

高维护性

## 模块化规范产品

**ES6 之前的模块化规范：**

CommonJS ---> NodeJS、Browserify

AMD---> requireJS

CMD---> seaJS

# ES6 模块化语法

模块功能要由两个命令构成： **export** 和 **import**

**export 命令用于规定模块的对外接口**

**import 命令用于输入其它模块提供的功能**

使用：

```js
m.js 文件下
// 使用 export 向外**分别**暴露变量和函数
export let i = {
  name: "root",
  pass: 123456,
  host: "localhost.com",
  prot: 8080,
  test: "首页",
};

export function Test() {
  console.log("ES6 export");
}
//统一暴露
export {i,Test}
//默认暴露
export default {
    function Test() {
  			console.log("ES6 export");
	}
    let i = {
      name: "root",
      pass: 123456,
      host: "localhost.com",
      prot: 8080,
      test: "首页",
    };
}
——————————————————————————————————————-----------------

HTML 文件下
//添加 script 属性 type="module"
<script type="module">
        import * as m from './js/m.js';
        console.log(m);
//默认暴露
m.default.Test()
</script>

```

## import 命令导入模块语法汇总

**方式一**：

```js
// 语法二	 通用的导入语法
import * as m from './js/m.js';
// 语法二   解构赋值
import { i, Test } from './js/m.js';
// 单命名冲突时     采用别名
import { i as l, Test } from './js/m.js';
// console.log(i);
console.log(l);
console.log(Test);
//对默认暴露引入采用别名
import { default as n } from './js/m.js';

//简便形式 		--- 只针对 默认暴露 default
import n from './js/m.js';
```

**方式二**：

​ 使用一个 **js 文件统一管理 import 导入** --- 类似于 Vue 的 main .js

```js
//使用一个统一管理的 js 文件	例如 app.js
import * as m from './js/m.js';

-----------------------------------------------------
//在文件中通过 script 标签 src 导入 app.js 就可以使用
//注意：导入的 script 标签 也要设置 type='module'
```

**但是，在项目中 往往不会 这么做，因为：**

**1、不是每款浏览器都可以兼容**

**2、ES6 模块化还不能对 NPM 模块的做一个导入**

**解决方案：（babel）**

## babel 语法转化

**babel：**简单来说是把 JavaScript 中 ES6 或更高的新语法转化为 ES5，**让低端运行环境(如浏览器和 node )能够认识并执行**。

使用：

**1、安装工具：**

**babel-cli 是 babel 命令行工具**

**babel-preset-env 预设包**：把最新的语法进行转换

**browserify( webpack )打包工具**

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140934877.png)

**2、`npx babel js -d dist --presets=babel-preset-env`**

语法：npx babel **被转化的文件** -d **转化到指定位置的文件夹**

![](https://raw.githubusercontent.com/Kiyan-a/For_picGo/img/202205140935397.png)

注意：局部使用的是 **npx** 命令开头、全局使用的是 **babel** 命令开头

**3、打包 npx browserify dist/m.js -o dist/bubdle.js**

**4、 script 标签 src 引入 dist/bubdle.js**

## **ES6 模块化引入 NPM 模块**

**1、使用 NPM 安装模块 例如 Jquery**

`npm i jquery`

**2、导入**

**import $ from 'jquery' //类似 CommonJs 的 const $ = require( ' jquery' )**

**3、@重新 babel 打包**

# ES 7 新特性

**新增 includes 方法** 代替 **indexof**

判断 返回 布尔值，与 indexof 区别是更容易理解(indexof 返回 1，-1，0)

```js
const m=['西游记','红楼梦','水浒传','三国演义'];
判断 返回 布尔值，与 indexof 区别是更容易理解(indexof 返回 1，-1，0)
console.log(m.includes('西游记'))
```

**使用符号** \*\* **代替** Math.pow

```js
console.log(2 ** 10); //2的10次方
console.log(Math.pow(2, 10));
```

# ES 8 新特性

## async 函数

**新增 异步解决方案 async 函数 结合 await**

使异步代码更像同步

## 对象方法扩展

1、获取对象 **所有**的 **键** **Object.keys()** ---返回数组

2、获取对象 **所有** 的**值** **Object.values() ** ---返回数组

3、**entries** 返回一个 **二维数组**

数组下标 0 为 键 1 为值 ---> **entries** 可以创建一个 Map 数据结构

4、**Object.getOwnPropretyDescriptors()**

返回一个**对象属性的描述对象**

# ES 9 新特性

## 对象展开

**rest 参数 和 ...扩展运算符**

前面 ES6 有介绍过 只针对数组的 rest 参数 和 扩展运算符

```js
function rest({ host, port, ...user }) {
	console.log(host);
	console.log(port);
	console.log(user);
	console.log(user.username);
	console.log(user.userpass);
}

rest({
	host: 'localhost',
	port: 8080,
	username: 'root',
	userpass: 123456,
});
```

```js
const i={
    b:'f',
    f:'e',
}
const v={
    b:'f',
    f:'e',
}

const z={...i,...v}
输出：
{
    b:'f',
    f:'e',
    b:'f',
    f:'e',
}
```

## 正则命名分组........

## 补充知识：JS 事件循环( Event Loop )

关键词：宏任务、微任务、JS 单线程、浏览器异步机制 | 初始化代码(**stack 同步代码**)、回调代码(Loop)

所有任务都在主线程上执行，形成一个执行栈。🚗🚗🚗

执行栈( **execution stack** )：**所有代码都是在此空间中执行**

事件循环**负责执行代码、收集和处理事件以及执行队列中的子任务**。简单地说，对于 JS 运行中的任务，**JS 有一套处理收集，排队，执行的特殊机制**，我们把这套处理机制称为事件循环（Event Loop）。

因为 JS 是单线程语言，当遇到异步任务(如 ajax 操作等)时，不可能一直等待异步完成，再继续往下执行，在**这期间浏览器是空闲状态**，显而易见这会导致巨大的资源浪费。JS 看起来像是多线程的是因为浏览器(**定时器管理模块、网络请求模块、事件监听模块等**)分担了一部分（**分线程**）( 其实是浏览器的多线程 )

**任务队列的待处理回调函数需要等到初始化代码(同步代码)执行完毕才有机会执行(异步代码)**🚓，结束等待状态，进入执行栈并开始执行。

**任务队列的待处理回调函数**只能一个个拿出来(遍历)到主线程执行，并**不能同时拿出来执行，遵循先进先出**

**永远只有 JS 引擎(主线程)执行 JS 脚本代码，其它分线程(管理模块)只负责将满足触发条件的处理函数(异步代码)推进任务队列待处理，等待 JS 引擎线程执行**
