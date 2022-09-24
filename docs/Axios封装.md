# 📖 基于 typescript 二次封装 axios

> 对 axios 二次封装,更加的可配置化、扩展性更加强大灵活
>
> 通过 class 类实现，class 具备更强封装性(`封装、继承、多态`)，通过实例化类传入自定义的配置





### 创建 class

严格要求实例化时传入的配置，拥有更好的代码提示

```typescript
/**
 * @param {AxiosInstance} axios实例类型
 * @param {AxiosRequestConfig} axios配置项类型
 */
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

class Http {
    axios: AxiosInstance
    constructor(config: AxiosRequestConfig) {
        // 创建一个实例 axios.create([config])
        this.axios = axios.create(config)
    }
}

// 每实例化一个 axios 时，都是不同的 axios 示例，互不干扰
new Http({
    baseURL:'qq.com';
    timeout:60 * 1
});

new Http({
    baseURL:'web.com'
});
```

> ##### axios.create([config])
>
> ```js
> const instance = axios.create({
>   baseURL: 'https://some-domain.com/api/',
>   timeout: 1000,
>   headers: {'X-Custom-Header': 'foobar'}
> });
> ```

**AxiosRequestConfig 的类型注解**

```typescript
export interface AxiosRequestConfig<D = any> {
  url?: string;
  method?: Method | string;
  baseURL?: string;
  transformRequest?: AxiosRequestTransformer | AxiosRequestTransformer[];
  transformResponse?: AxiosResponseTransformer | AxiosResponseTransformer[];
  headers?: AxiosRequestHeaders;
  params?: any;
  paramsSerializer?: (params: any) => string;
  data?: D;
  timeout?: number;
  timeoutErrorMessage?: string;
  withCredentials?: boolean;
  adapter?: AxiosAdapter;
  auth?: AxiosBasicCredentials;
  responseType?: ResponseType;
  responseEncoding?: responseEncoding | string;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  onUploadProgress?: (progressEvent: any) => void;
  onDownloadProgress?: (progressEvent: any) => void;
  maxContentLength?: number;
  validateStatus?: ((status: number) => boolean) | null;
  maxBodyLength?: number;
  maxRedirects?: number;
  beforeRedirect?: (options: Record<string, any>, responseDetails: {headers: Record<string, string>}) => void;
  socketPath?: string | null;
  httpAgent?: any;
  httpsAgent?: any;
  proxy?: AxiosProxyConfig | false;
  cancelToken?: CancelToken;
  decompress?: boolean;
  transitional?: TransitionalOptions;
  signal?: AbortSignal;
  insecureHTTPParser?: boolean;
  env?: {
    FormData?: new (...args: any[]) => object;
  };
}
```



### 封装 request(config)通用方法

```typescript
/**
* axios#request(config)
* @param {*} config
* @returns {*}
*/
request(config: AxiosRequestConfig) {
    return this.axios.request(config)
}
```



> 🏹 **在 axios 中，request中的 config 参数与实例化时，`axios.create(config)`传入的参数是相同的**，以下是 axios 方法具体参数
>
> ```js
> axios.request(config)
> axios.get(url[, config])
> axios.delete(url[, config])
> axios.head(url[, config])
> axios.options(url[, config])
> axios.post(url[, data[, config]])
> axios.put(url[, data[, config]])
> axios.patch(url[, data[, config]])
> axios.getUri([config])
> ```



### 封装-拦截器(单个实例独享)

**拦截器的hooks,在请求或响应被 then 或 catch 处理前拦截处理**

> 🛹在请求中，如`携带token、loading动画、header配置...`，都是一些公有的逻辑，所以可以写到全局的拦截器里面
>
> 🛵注意的是，可能存在某些项目请求，需要的公有的逻辑配置方式不一样，如 A项目：`携带token、loading动画`,B项目：`携带token、header配置`
>
> 🪂考虑到拦截方式不一样，固不能将 class 里的拦截器写si，所以，需要通过不同的 axios 实例化传入自定义的 `hooks(拦截器)`，**实现单个实例独享**，扩展性更强

在上面`实例化 Http(Axios) 时`，仅仅传入 axios 约定好的 `config(AxiosRequestConfig)`

```js
new Http({
    baseURL:'qq.com';
    timeout:60 * 1
});
```

经过分析考虑，需要在实例化 Http 时，可以传入更多自定义的 hooks，扩展 axios。但是，**在实例化时，直接传入定义好的拦截器是不可行的 `Why?`**

```js
new Http({
    baseURL: 'qq.com',
    timeout: 60 * 1,
    hooks: {}, // ERROR ❌❌⭕⭕
    interceptor: () => {} // ERROR ⭕⭕❌❌
})
```

> `“hooks”不在类型“AxiosRequestConfig<any>”中`，在上面 Http class 的 constructor 构造函数中，严格约束传入的参数应为`AxiosRequestConfig`类型(TS)
>
>  AxiosRequestConfig 中并不存在 `hooks and interceptor`类型的属性(AxiosRequestConfig 是由 axios 提供的一个类型注解)

#### **🚀扩展 Http 自定义拦截器**

对 `AxiosRequestConfig` 类型注解**进行继承**，使得在实例化时，可以传入扩展后的类型，定义：

🏜️`IinterceptorHooks`接口存储自定义的拦截器函数、

🏙️`IHttpRequestConfig`接口继承 AxiosRequestConfig，并扩展自定义拦截器的属性，属性类型为：IinterceptorHooks 

```typescript
🏜️`IinterceptorHooks`拦截器Hook接口类型
import type { AxiosResponse, AxiosRequestConfig } from 'axios'
/**
 * 拦截器的hooks,在请求或响应被 then 或 catch 处理前拦截
 * @param {beforeRequestInterceptor(?)} 发送请求之前拦截器
 * @param {requestErrorInterceptor(?)} 请求错误拦截器
 * @param {responseSuccessInterceptor(?)} 响应成功拦截器
 * @param {responseFailInterceptor(?)} 响应失败拦截器
 */
interface interceptorHooks {
    beforeRequestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestErrorInterceptor: (error: any) => any
    responseSuccessInterceptor: (result: AxiosResponse) => AxiosResponse
    responseFailInterceptor: (error: any) => any
}
export type IinterceptorHooks = Partial<interceptorHooks>
```

> 🌏**Partial**:Typescript 内置类型，**将定义的类型注解全部变为可选的属性**
>
> 🪂**调用说明**：` axios.interceptors.request.use( beforeRequestInterceptor , requestErrorInterceptor );`



> 请求之前拦截器中(beforeRequestInterceptor)，config 参数同样是与`axios.create`中的参数类型相同，为`AxiosRequestConfig`
>
> 注意：并不是`IHttpRequestConfig`

```typescript
🏙️`IHttpRequestConfig` 类构造函数 config 接口类型
/**
 * 实例化Http类的配置项参数,继承于AxiosRequestConfig
 * @param {interceptors(?)} 拦截器Hooks
 * @param {loading} 请求loading
 * @param {...} 其它的配置项
 * @param {AxiosRequestConfig} axios原生的配置选
 */
export interface IHttpRequestConfig extends AxiosRequestConfig {
    interceptors?: IinterceptorHooks
}
```



🛵**使用说明**：

```js
import { IHttpRequestConfig, IinterceptorHooks } from './types'

class Http {
    axios: AxiosInstance
    interceptors?: IinterceptorHooks
    
    constructor(config: IHttpRequestConfig) {
        // 解构自定义的属性
        const { interceptors, ...AxiosRequestConfig } = config
        
        this.axios = axios.create(AxiosRequestConfig)
        // 存储自定义拦截Hooks or 直接 use() 使用
        this.interceptors = interceptors
        
        // 传入自定义请求拦截器Hooks
        this.axios.interceptors.request.use(
            this.interceptors?.beforeRequestInterceptor,
            this.interceptors?.requestErrorInterceptor
        )

        // 传入自定义响应拦截器Hooks
        this.axios.interceptors.response.use(
            this.interceptors?.responseSuccessInterceptor,
            this.interceptors?.responseFailInterceptor
        )
    }
}

// 扩展后的实例化...⛵
 interceptors: {
     // ... 自定义的拦截Hooks
     beforeRequestInterceptor: (config: IHttpRequestConfig) => {
         const token = localStorage.getItem('token')
         if (token && config.headers) {
             config.headers.Authorization = token
         }
         return config
     }
 }
```



### 封装-拦截器(所有实例共享)

> 无论存在多少个实例的 Http，所有实例都会共享的同一套拦截器，在 class 中固定的

```typescript
class Http {
    axios: AxiosInstance
    // ...
    
    constructor(config: IHttpRequestConfig) {
        // ...单个实例独享拦截器处理🍳

        
        // 所有实例共享的拦截-请求拦截器🍟
        this.axios.interceptors.request.use(
            function (config) {
                // 在发送请求之前做些什么
                return config
            },
            function (error) {
                // 对请求错误做些什么
                return Promise.reject(error)
            }
        )

        // 所有实例共享的拦截-响应拦截器
        this.axios.interceptors.response.use(
            function (response) {
                // 2xx 范围内的状态码都会触发该函数。
                // 对响应数据做点什么
                return response
            },
            function (error) {
                // 超出 2xx 范围的状态码都会触发该函数。
                // 对响应错误做点什么
                return Promise.reject(error)
            }
        )
    }
}
```



### 封装-拦截器(单个请求独享)

> 在 axios 原生的 config(AxiosRequestConfig) 中，存在两个允许对请求or响应的数据进行转化处理：
>
> ```js
> // `transformRequest` 允许在向服务器发送前，修改请求数据
> // 它只能用于 'PUT', 'POST' 和 'PATCH' 这几个请求方法
> // 数组中最后一个函数必须返回一个字符串， 一个Buffer实例，ArrayBuffer，FormData，或 Stream
> // 你可以修改请求头。
> transformRequest: [function (data, headers) {
>     // 对发送的 data 进行任意转换处理
>     return data;
> }],
> 
> // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
> transformResponse: [function (data) {
>     // 对接收的 data 进行任意转换处理
>     return data;
> }],
> ```

由于`transformRequest、transformResponse`为 Axios 原生的API，所以尽量不去改变原有的 config API



> 🍟在需要不修改原生 Axios config 情况下，**扩展单个请求独享的拦截器**时
>
> 🍳class 封装的方法：`request(config: AxiosRequestConfig){}`参数中**不能再使用原生`AxiosRequestConfig`作为参数的注解**
>
> 🫕前面提到过，request 中的 config 参数与实例化时传入的参数是相同的，所以**在这里同样可以使用`IHttpRequestConfig`，作为 request 的参数注解**

```typescript
/**
* axios#request(config)
* @param {*} config
* @returns {*}
*/
request(config: AxiosRequestConfig) {
	return this.axios.request(config)
}

// ...改为 AxiosRequestConfig -> IHttpRequestConfig
request(config: IHttpRequestConfig) {
    // ... 在执行请求之前，执行单个请求独享的拦截器(?)
    return this.axios.request(config).then(
    	// ... 
    )
    
}
```



**具体代码实现：**

```typescript
// Http 封装的request🫕
 request(config: IHttpRequestConfig) {
     // 存在单个方法独享自定义拦截器Hooks(请求之前)🍀
     if (config.interceptors?.beforeRequestInterceptor) {
         // 立即执行beforeRequestInterceptor方法，传入config处理返回新的处理后的config
         config = config.interceptors.beforeRequestInterceptor(config)
     }
     return this.axios
         .request(config)
         .then((result) => {
         // 存在单个方法独享自定义拦截器Hooks(响应成功)🍃
         if (config.interceptors?.responseSuccessInterceptor) {
             // 立即执行beforeRequestInterceptor方法，传入config处理返回新的处理后的config
             result = config.interceptors.responseSuccessInterceptor(result)
         }
         return result
     })
         .catch((error) => {
         // 存在单个方法独享自定义拦截器Hooks(响应失败)🌄
         if (config.interceptors?.responseFailInterceptor) {
             // 立即执行beforeRequestInterceptor方法，传入config处理返回新的处理后的config
             error = config.interceptors.responseFailInterceptor(error)
         }
         return error
     })
 }

// 执行 request 方法，传入拦截器处理🌏，如：
axios.request({
    url: '/api/addUser',
    methed: 'POST',
    interceptors: {
        beforeRequestInterceptor:(config) => {
            // ...处理config数据
            return config
        },
        // ...请求错误处理不拦截
        responseSuccessInterceptor:(result) => {
            return result
        }
    }
})
```

> 注意：当存在单个方法独享自定义请求拦截器时，应当在发送请求之前**立即执行 beforeRequestInterceptor 方法**，而不是通过传入到 use() 回调，执行请求拦截方法处理完之后返回一个经过处理的 config，在传入到请求方法中，发送请求
>
> 其它的单个方法独享自定义响应拦截器一样



### 装修 Http class

#### 返回经过

> 在响应数据时候(响应拦截器)，**Axios 为数据在外层包装了一层对象，后台返回的数据就存在于 result 的 data 中**，所以需要对数据再一步的处理，扒开最外层的皮
>
> **注意：Axios 在外层包装的对象数据，其实在某些情况下是需要 result 中的一些属性数据的，并不仅仅需要 data，比如返回格式为文件数据中，需要 headers 中的一些数据对文件进行处理，命名等...**
>
> 这里的扒皮处理，逻辑应当属于所有实例共享的一个拦截器，**具体工具需要进行处理**

```typescript
// 所有实例共享的拦截-响应拦截器
this.axios.interceptors.response.use(
    function (response) {
        // 返回为文件流时,直接返回(文件需要单独处理)🪂
        if (['blob', 'arraybuffer'].includes(response.request.responseType)) {
            // if (response.headers['content-disposition']) {
            //     let fileName = response.headers['content-disposition'].split('filename=')[1]
            //     fileName = decodeURI(fileName)
            //     return {
            //         data: response.data,
            //         fileName
            //     }
            // }
            return response
        }
        // 根据业务码 or 状态码...进行判断
        // 扒皮🛵
        return response.data
    },
    function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error)
    }
)
```

#### request 返回数据结构(DTO)

定义返回数据类型注解

```typescript
// 最终数据类型注解
interface IDateType {
    [key: string]: any
}

// axios 返回的数据类型注解，IDateType === T
interface IDTO<T = any> {
    code: number
    data: T
    message: string
    state: number
    [prop: string]: any
}

// 请求方法，传入注解
axios.request<IDTO<IDateType>>({
    url: '/api/addUser',
    methed: 'POST',
})

```

由于在所有实例共享的响应拦截器中，修改了返回的数据结构`return response.data`,**到达方法响应拦截器中的数据类型已经不再是`AxiosResponse`，导致在响应成功的拦截器中类型错误无法赋值，以及.then返回的类型不正确无法返回,正确应该为`DTO`类型**，解决方案：

```typescript
// 修改 AxiosRequestConfig 类型注解，默认类型为原来的 AxiosResponse，传递到响应成功的拦截中进行泛型注解，用于在方法中重新修改返回的数据类型
// 最终的泛型类型注解到达 responseSuccessInterceptor 中
interface interceptorHooks<T> {
    beforeRequestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestErrorInterceptor: (error: any) => any
    responseSuccessInterceptor: (result: T) => T
    responseFailInterceptor: (error: any) => any
}
export type IinterceptorHooks<T = AxiosResponse> = Partial<interceptorHooks<T>>


export interface IHttpRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: IinterceptorHooks<T>
}



// 修改 Http class request方法，通过 泛型 T 接受方法传达过来的 DTO 类型注解，传递到 IHttpRequestConfig 中修改 responseSuccessInterceptor 的参数类型注解以及返回值注解，在单个方法独享自定义拦截器中就可以接受参数，并且返回正确的 DTO 类型数据
// 由于在下面的 this.axios.request() 方法中，返回的数据已经被上一个拦截器扒皮修改了，返回的 result 类型注解中存在类型不正确情况(正确返回应返回response.data的类型注解)，实际返回为 AxiosResponse<any,any>类型注解，导致数据返回到最外层方法时编辑器报错(最外层接受 DTO 类型)，所以需要手动修改this.axios.request() 方法中返回的类型注解 this.axios.request<any, T>()
request<T>(config: IHttpRequestConfig<T>): Promise<T> {  
        return this.axios
            .request<any, T>(config)
            .then((result) => {
                // 存在单个方法独享自定义拦截器Hooks(响应成功)
                if (config.interceptors?.responseSuccessInterceptor) {
                    // 立即执行beforeRequestInterceptor方法，传入config处理返回新的处理后的config
                    result = config.interceptors.responseSuccessInterceptor(result)
                }
                return result
            })
            .catch((error) => {
              // ...
            })
    }
```





### 拦截器执行顺序

> 由于在 constructor(构造函数) **代码顺序：单个实例独享拦截器  ->  所有实例共享拦截器  ->...**
>
> 🌄**单个实例独享拦截器位于所有实例共享拦截器之前**，执行顺序为：
>
> **`所有实例共享请求拦截器  ->  单个实例独享请求拦截器  ->  单个实例独享响应拦截器  ->  所有实例共享响应拦截器`**
>
> 
>
> 反之，则：
>
> 🌅**所有实例共享拦截器位于之前单个实例独享拦截器**，执行顺序为：
>
> **`单个实例独享请求拦截器  ->  所有实例共享请求拦截器  ->  所有实例共享响应拦截器  ->  单个实例独享响应拦截器`**
>
>  
>
> 🌏**单个方法独享拦截器(单个实例独享拦截器位于所有实例共享拦截器之前)**，执行顺序为：
>
> **`单个方法请求拦截器  ->  实例共享请求拦截器  ->  单个独享请求拦截器  ->  单个独享响应拦截器  ->  实例共享响应拦截器  ->  单个方法响应拦截器`**
>
> 
>
> 请求拦截：constructor**先执行的代码**(use())，拦截器里面的回调hook**后被执行**，反之，**先被执行**
>
> 响应拦截：constructor**先执行的代码**(use())，拦截器里面的回调hook**先被执行**，反之，**后被执行**
>
> 需要修改执行顺序可调整代码的执行顺序



### 操作场景控制

> 由于存在三种拦截器，存在一些复杂的操作场景时，比如，通过给所有实例或者单独实例提前添加了操作`loading、错误捕获...`，但是现在需要在某个请求方法中不进行此操作时，如何解决？
>
> **解决方案：通过继续扩展特定的 IHttpRequestConfig 类型属性，因为`单个方法请求拦截器是最先执行`的，IHttpRequestConfig 配置项，在`所有的拦截器中是共享的`，层级传递的，`在拦截器中判断特定的属性值`关闭不需要的操作**
