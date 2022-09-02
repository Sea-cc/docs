# ✍️ JS 精度问题

##### 前言：

在和后端接口联调时发现一个细节又很基础的问题：后端返回一个树的 id `3068734572459725762`，而我在前台接收为 `3068734572459726000`😅【很奇怪】

按道理说这 ID 是自动生成的也不可能会改吧，在我百思不得其解时，我的启蒙让我在浏览器控制台输出看一下。三七二十一、0.1+0.2 != 0.3 :

于是我在 Chrome 控制台中输入 `3068734572459725762` 运行结果返回的将会是 `3068734572459726000`。OK，发现了，是**JS 精度丢失 😶**

`后端并通过接口返回给前端数值id过大时，而前端执行 JSON.parse 解码时，会因为语言本身的限制发生精度丢失，引发 bug。`

#### JS 数字丢失精度的原因

计算机的二进制实现和位数限制有些数无法有限表示。就像一些无理数不能有限表示，如 圆周率 3.1415926...，1.3333... 等。JS 遵循 [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point) 规范，采用双精度存储（double precision），占用 64 bit。

### 解决方案

**`为了解决大数传递精度丢失的问题，常见的方案是“将大数转为字符串类型”`**

1、将 id 转化为字符串返回

2、后端程序先将大数转为 string 类型，再进行 JSON encode，传给前端。前端拿到数据后 decode 成 string 类型，直接展示。当需要大数运算时，将 string split 成多段安全整数字符串，每段单独转为 number 类型，在安全范围内计算完成后，再 join 成 string 类型进行展示。

第三方库（如 json-bigint）之所以能正确的处理大数 parse ，且不造成精度丢失，其实现原理也是类似。

**[json-bigint](https://github.com/sidorares/json-bigint) 是一个第三方包，它在把 json 字符串转 json 对象的过程中，自动识别大整数，把大整数转成一个对象来表示，这样就不会产生精度丢失的问题了。**

```js
import JSONBig from 'json-bigint';

/**json-bigint解决精度丢失问题
 * @param {*} Ids
 * @returns
 */
export function ModeDict(ids) {
	return axios.post('/api/yiboAuditModeDict/deleteByIds', ids, {
		transformRequest: [
			function (data) {
				return JSONBig.parse(data);
			},
		],
	});
}
```

##### 总结：

对于整数，**只要运算结果不超过 Math.pow(2, 53) 就不会丢失精度**。Math.pow(2, 53) = 9007199254740992

**在控制台输入 9007199254740993 结果输出为 9007199254740992**，出现问题了

**对于小数，尤其在一些电商网站涉及到金额等数据。解决方式：把小数放到位整数（乘倍数），再缩小回原来倍数（除倍数）**
