# ✍️ JS 技巧

##### 对象合并

```js
// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // 这会改变“原始”
delete copy.a; // 一样也会

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
```

##### 使用`Array.from`而不是 `...`来映射迭代(map)，因为它避免了创建中间数组✍️

```js
// bad
const baz = [...foo].map(bar);

// good
const baz = Array.from(foo, bar);
console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

##### 避免使用一元递增和递减 ( `++`, `--`)

> 为什么？根据 eslint 文档，一元递增和递减语句会自动插入分号，并且在应用程序中递增或递减值时可能会导致静默错误。`num += 1`使用诸如代替`num++`或之类的语句来改变您的值也更具表现力`num ++`。不允许一元递增和递减语句还可以防止您无意中预递增/预递减值，这也可能导致程序中出现意外行为

```js
// bad

const array = [1, 2, 3];
let num = 1;
num++;
--num;

let sum = 0;
let truthyCount = 0;
for (let i = 0; i < array.length; i++) {
  let value = array[i];
  sum += value;
  if (value) {
    truthyCount++;
  }
}

// good

const array = [1, 2, 3];
let num = 1;
num += 1;
num -= 1;

const sum = array.reduce((a, b) => a + b, 0);
const truthyCount = array.filter(Boolean).length;
```

使用大括号在包含词法声明（例如`case`）的子句中创建块

> 为什么？词法声明在整个`switch`块中都是可见的，但仅在分配时才被初始化，这仅在到达时才会发生`case`。当多个`case`子句尝试定义同一事物时，这会导致问题。

```js
// bad
switch (foo) {
  case 1:
    let x = 1;
    break;
  case 2:
    const y = 2;
    break;
  case 3:
    function f() {
      // ...
    }
    break;
  default:
    class C {}
}

// good
switch (foo) {
  case 1: {
    let x = 1;
    break;
  }
  case 2: {
    const y = 2;
    break;
  }
  case 3: {
    function f() {
      // ...
    }
    break;
  }
  case 4:
    bar();
    break;
  default: {
    class C {}
  }
}
```



##### 将可迭代对象转换为数组，请使用展开`...`而不是`Array.from`

```js
const foo = document.querySelectorAll('.foo');

// good
const nodes = Array.from(foo);

// best
const nodes = [...foo];
```



###### 对象数组转对象

```js
this.modes=columns.reduce((total,{prop})=>{
    return {...total,prop}
}.{})

or...

this.modes=columns.reduce((total,{prop})=>{
    return Object.assign(total,prop)
}.{})

```

###### getBoundingClientRect

**`Element.getBoundingClientRect()`** 方法返回元素的大小及其相对于视口的位置

通过这个 API 去动态设置元素的布局( **避免元素高度宽度的局限性** )

-   left（元素左侧相对于可视区左上角的距离）

-   right（元素右侧相对于可视区左上角的距离）

-   top（元素上边相对于可视区左上角的距离）

-   bottom（元素下边相对于可视区左上角的距离）

-   width（可视宽度）

-   height（可视高度）

###### 移除对象属性/获取对象部分属性 过滤对象属性

```js
移除 x,y
const obj = { x:1,y:2,z:3,o:4,i:5 }
let { x,y,...newObj } = obj
```

###### 变量数据兜底（知根知底）

```js
😐
const { data } = getApiRequest();
data.map(item=>item.id);

😁 变量解构赋初始值
const { data=[] } = getApiRequest();
data.map(item=>item.id);
```

###### 多值匹配，将所有值放在数组中，通过数组方法来简写

```js
😐
if (value === 1 || value === 'one' || value === 2 || value === 'two') {
  // ...
}

😁 includes 方法去简化
if ([1, 'one', 2, 'two'].includes(value)) {
    // ...
}
```

###### 字符串转数字（简化）

```js
😐
let total = parseInt('453');
let average = Number('42.6');

😁
let total = +'453';
let average = +'42.6';
```

###### （~~）运算符代替 Math.floor()

```
😐
const floor = Math.floor(6.8);

😁
const floor = ~~6.8;
```

###### 单层对象深拷贝

```js
let obj = { x: 1, y: 2, z: 3 };
const clone = { ...obj };
```

###### 使用 arr.filter(Boolean) 过滤掉数组成员的虚假值

```js
null, '', NaN, undefined, false;
let arr = [12, null, 0, 'xyz', null, -25, NaN, '', undefined, 0.5, false];
let ARR = arr.filter(Boolean);
```

###### 三元运算符 or || or &&简化 if else

```js
😐
let data;
let path = getList();
if (path !== null && path !== undefined && path !== '') {
    data = path;
} else {
    data = {};
}

😁
let data = getList() || {};
let data = path ? getList() : {};
let data = path && getList();

其它：🐂
getTabList()  getFormList()
(path ? getTabList : getFormList)()
```

###### 使用函数式编程

```js
😐
const List = [
  	{
      name: 'AM',
      money: 30000,
    },{
      name: 'SF',
      money: 24000
    }
]
let total = 0;

for (let i = 0; i < xList.length; i++) {
  total += List[i].money;
}

😁
let total = List
  .map(hero => hero.money)
  .reduce((moneys, money) => moneys + money, 0)
```

###### 提前 return 使代码更加简洁

对于不是主要核心代码 or 条件没有满足情况下，尽量提前 return

###### 减少 if else 语句

###### 通过**find**()函数进行数组筛选符合条件的 -> 第一个值

```js
const users = [
	{ name: '张三', age: 30 },
	{ name: '李四', age: 35 },
	{ name: '王5', age: 12 },
];

const found = users.find((user) => user.age > 20); // {name:'张三', age:30}
```

###### 通过**some**()判断数组中是否有元素满足次条件，**every**()判断是否都满足，返回值为 布尔值

```js
users.some((user) => user.age < 20); // true

users.every((user) => user.age < 20); // false
```

###### `??`运算

`??`运算符只有前面的值是`undefined` or `null`才会执行

###### `?.`运算符

`?.`运算符只有在当值(前面的值)不是`undefined`时才会执行

```js
let person = {};
console.log(person.name.toString()); // 报错
console.log(person.name?.toString()); // undefined
```

###### `!!`运算符将任意值强制转换为其对应的布尔值

一次 ！转反布尔值，两次 ！ 就厉害了，将反布尔值转回来 🐂
