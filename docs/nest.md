# ð NestJs

![](/img/NestJs.png)

## ç®ä»

Nest (NestJS) æ¯ä¸ä¸ª**ç¨äºæå»ºé«æãå¯æ©å±ç Node.js æå¡å¨ç«¯åºç¨ç¨åºçå¼åæ¡æ¶ã**å®å©ç¨ JavaScript çæ¸è¿å¢å¼ºçè½åï¼ä½¿ç¨**å¹¶å®å¨æ¯æ TypeScript ï¼ä»ç¶åè®¸å¼åèä½¿ç¨çº¯ JavaScript è¿è¡å¼åï¼**ï¼å¹¶ç»åäº **OOP ï¼é¢åå¯¹è±¡ç¼ç¨ï¼ãFP ï¼å½æ°å¼ç¼ç¨ï¼å FRP ï¼å½æ°ååºå¼ç¼ç¨ï¼**ã

**`Nest æ¡æ¶åºå± HTTP å¹³å°é»è®¤æ¯åºäº Express å®ç°çï¼æä»¥æ éæå¿ç¬¬ä¸æ¹åºçç¼ºå¤±ã`**

Nest å¨è¿äºå¸¸è§ç Node.js æ¡æ¶ (Express/Fastify) ä¹ä¸æé«äºä¸ä¸ªæ½è±¡çº§å«ï¼**ä½ä»ç¶åå¼åèç´æ¥æ´é²äºåºå±æ¡æ¶ç API**ãè¿ä½¿å¾å¼åèå¯ä»¥èªç±å°ä½¿ç¨éç¨äºåºå±å¹³å°çæ æ°çç¬¬ä¸æ¹æ¨¡åã

**å¹³å°**ï¼ä»ææ¯ä¸è®²ï¼ä¸æ¦åå»ºäºééå¨ï¼Nest ä¾¿**å¯ä»¥ä½¿ç¨ä»»ä½ Node HTTP æ¡æ¶**ã ç®åæ¯æä¸¤ä¸ª HTTP å¹³å°ï¼[express](https://expressjs.com/) å [fastify](https://www.fastify.io/)ã æ¨å¯ä»¥æ ¹æ®æ¨çéæ±éæ©æéåå¹³å°ã

æ è®ºä½¿ç¨é£ä¸ªå¹³å°ï¼é½ä¼å°å¹³å°ç application æ¥å£æ´é²åºæ¥ãå®ä»¬åå«æ¯ `NestExpressApplication` å `NestFastifyApplication`ã

> Express ç®åä»ç» ð¤¿
>
> Express.js è¯ç Node.JS ä¹åï¼æ¯ä¸æ¬¾åºäº[Node.js](https://link.juejin.cn/?target=http%3A%2F%2Fnodejs.cn%2F)ä»¥å Chrome V8 å¼æï¼å¿«éãæç®ç JS æå¡ç«¯å¼åæ¡æ¶ã
>
> Express ä¸ Nest å³ç³»
>
> Nest.js æ¯åºäº Express.js çå¨åè½æ¡æ¶ Nest.jsï¼ä»æ¯å¨ Express.js ä¸å°è£çï¼ååå©ç¨äº TypeScript çç¹æ§ï¼Nest.js çä¼ç¹æ¯ç¤¾åºæ´»è·ï¼æ¶¨å¿åäººï¼æªæ­¢ç®åå¨ GitHub æ¥æ `50.7k Star` æ¯è¿ææ¯è¾ç­é¨çä¼ä¸çº§æ¡æ¶ã

## å®è£

ä½¿ç¨ [Nest CLI](https://nestjs.bootcss.com/cli/overview) åå»ºé¡¹ç®

```shell
npm i -g @nestjs/cli
```

åå»ºé¡¹ç®(æ³¨æè§è)

```shell
nest new project-name
```

å¯å¨é¡¹ç®

```shell
npm run start
```

å¯å¨å¹¶çå¬é¡¹ç®

```shell
npm run start:dev
```

æå¼æµè§å¨å¹¶å¯¼èªå° `http://localhost:3000/`å°å

## èµ·éç§æ²¹ ð³

#### `src/` ç®å½æ ¸å¿æä»¶

| `app.controller.ts`          | å¸¦æ`åä¸ªè·¯ç±ç`åºæ¬`æ§å¶å¨`                                                        |
| ---------------------------- | ----------------------------------------------------------------------------------- |
| **`app.controller.spec.ts`** | éå¯¹æ§å¶å¨çååæµè¯ã                                                              |
| **`app.module.ts`**          | T åºç¨ç¨åºç**`æ ¹æ¨¡å`**ï¼root moduleï¼ã                                           |
| **`app.service.ts`**         | å·æåä¸æ¹æ³çåºæ¬æå¡ï¼serviceï¼ã method.                                         |
| **`main.ts`**                | åºç¨ç¨åºç**`å¥å£æä»¶`**ï¼å®`ä½¿ç¨æ ¸å¿å½æ° NestFactory æ¥åå»º Nest åºç¨ç¨åºçå®ä¾`ã |

## å¥å£æä»¶

**`main.ts`**

-   NestFactory ç¨æ¥åå»º Nest åºç¨å®ä¾
-   create() æ¹æ³è¿åä¸ä¸ªå®ç° INestApplication æ¥å£çå¯¹è±¡
-   AppModule è¿ä¸ªæä»¶éé¢ä¸»è¦æ¯æ¾å¨èªå·±åçæ¥å£ç­ä¿¡æ¯
-   app.listen(3000) ä¸ºçå¬æå¡å¯å¨çç«¯å£å·

æä»¶ä¸­åå«äºä¸ä¸ªå¼æ­¥å½æ°(bootstrap)ï¼æ­¤å½æ°å° **å¼å¯¼** åºç¨ç¨åºçå¯å¨è¿ç¨

è¦åå»ºä¸ä¸ª Nest åºç¨ç¨åºçå®ä¾ï¼ä½¿ç¨ `NestFactory` æ ¸å¿ç±»ã`NestFactory` æ´é²äºä¸äºéææ¹æ³ç¨äºåå»ºåºç¨ç¨åºçå®ä¾ãå¶ä¸­ï¼**`create()` æ¹æ³è¿åä¸ä¸ªåºç¨ç¨åºçå¯¹è±¡ï¼è¯¥å¯¹è±¡å®ç°äº `INestApplication` æ¥å£**ãè¯¥å¯¹è±¡è¿æä¾äºä¸ç»æ¹æ³ï¼è¿äºæ¹æ³å°å¨æ¥ä¸æ¥çç« èä¸­è¿è¡ä»ç»ãå¨ `main.ts` ä¸­ï¼ä»å¯å¨äº HTTP ä¾¦å¬å¨ï¼è¯¥ä¾¦å¬å¨ä½¿åºç¨ç¨åºå¯ä»¥**ä¾¦å¬å¥æ ç HTTP è¯·æ±**ã

> æ³¨æ ð¡
>
> **æ ¹æ¨¡å AppModule æä¾äºç¨æ¥å¯å¨åºç¨çå¼å¯¼æºå¶ï¼å¯ä»¥åå«å¾å¤åè½æ¨¡å**

```js
// å¼å¥platform-expresså¹³å°
import { NestExpressApplication } from '@nestjs/platform-express';
/**
 * `NestFactory` æ´é²äºä¸äºéææ¹æ³ç¨äºåå»ºåºç¨ç¨åºçå®ä¾
 * @function {*} create æ¹æ³è¿åä¸ä¸ªåºç¨ç¨åºçå¯¹è±¡,è¯¥å¯¹è±¡å®ç°äº INestApplication æ¥å£
 * @param {*} AppModule æ ¹æ¨¡å
 * app å¯¹è±¡å°å·æExpresså¹³å°çä¸ç¨æ¹æ³ãæ³¨æ,é¤éç¡®å®éè¦è®¿é®åºå±å¹³å°ç API,å¦åæ éæå®å¹³å°ç±»åã
 */
const app = (await NestFactory.create) < NestExpressApplication > AppModule;
await app.listen(3000);
// æç¤ºæå¡å¯å¨æå
console.log(
	`ð å¯å¨æå:http://localhost:${await app.getHttpServer().address().port}`
);
```

## æ§å¶å¨ Controller

ç®åæ¥è¯´å°±æ¯å¤çä¸åè¯·æ±ä¸ä¸åè·¯ç±ä¹é´çæ å°å³ç³»

æ§å¶å¨è´è´£**å¤çä¼ å¥ç`è¯·æ±`å¹¶å°`ååº`è¿å**ç»å®¢æ·ç«¯

ç®ç: æ¥æ¶åºç¨ç¨åºçç¹å®è¯·æ±ã**`è·¯ç±æºå¶`æ§å¶åªä¸ªæ§å¶å¨æ¥æ¶åªä¸ªè¯·æ±**ãæ¯ä¸ªæ§å¶å¨é½æå¤ä¸ªè·¯ç±ï¼ä¸åçè·¯ç±å¯ä»¥æ§è¡ä¸åçå¨ä½ã

åå»ºä¸ä¸ªåºæ¬çæ§å¶å¨ï¼éè¦ä½¿ç¨ç±»å**è£é¥°å¨**ãè£é¥°å¨å°ç±»ä¸æéçåæ°æ®**ç¸å³è**ï¼å¹¶ä½¿ Nest **è½å¤åå»ºè·¯ç±æ å°ï¼å°è¯·æ±ç»å®å°ç¸åºçæ§å¶å¨ï¼**

> **æç¤º ðï¸**
>
> ä¸ºäºå¿«éåå»ºåç½®[éªè¯ç CRUD æ§å¶å¨ï¼æ¨å¯ä»¥ä½¿ç¨ CLI ç](https://docs.nestjs.com/techniques/validation)[CRUD çæå¨](https://docs.nestjs.com/recipes/crud-generator#crud-generator)ï¼`nest g resource [name]`ã

`app.controller.ts`

ä½¿ç¨`@Controller()`è£é¥°å¨ï¼å®æ¯å®ä¹åºæ¬æ§å¶å¨æ**å¿éç**

æå®ä¸ä¸ª**å¯éçè·¯ç±è·¯å¾åç¼**`api`ãå¨è£é¥°å¨ä¸­ä½¿ç¨è·¯å¾åç¼`@Controller()`å¯ä»¥è½»æ¾å°å¯¹ä¸ç»ç¸å³è·¯ç±è¿è¡**åç»**ï¼å¹¶æå¤§éåº¦å°**åå°éå¤ä»£ç **

```js
@Controller('api')
export class ApiController {
	@Get()
	findAll(): string {
		return 'This action returns all api';
	}
}
```

> **æç¤º ðï¸**
>
> ä½¿ç¨ CLI åå»ºæ§å¶å¨ï¼åªéæ§è¡`$ nest g controller api`å½ä»¤,api ä¸ºå¯éåç¼
>
> @Controller('api')æ§å¶å¨,å®æ¹ææ¡£ç§°ä¹ä¸º`ç«¯ç¹`

æ¹æ³ä¹åç`@Get()`HTTP è¯·æ±æ¹æ³è£é¥°å¨`findAll()`åè¯ Nest ä¸º HTTP è¯·æ±çç¹å®ç«¯ç¹åå»ºå¤çç¨åºã**ç«¯ç¹å¯¹åºäº HTTP `è¯·æ±æ¹æ³`ï¼æ¬ä¾ä¸­ä¸º GETï¼å`è·¯ç±è·¯å¾`**

**æç»è·¯å¾ï¼æ§å¶å¨å£°æçï¼å¯éï¼åç¼`@Controller('api')`åè¯·æ±è£é¥°å¨ä¸­æå®çä»»ä½è·¯å¾`@Get('nest')`**ã/api/nestã

è§èï¼

-   æä»¶å½åï¼åç¼.controller.ts
-   å¯¼åº export classï¼é¦å­æ¯å¤§ååç¼ + Controller(`ApiController`)
-   éæ©çæ¹æ³åç§°`findAll`æ¯å®å¨ä»»æç,æ²¡æä»»ä½æä¹

> **æç¤º**ð¡
>
> äºè§£å¦ä½åå»ºèªå®ä¹çè£é¥°å¨ï¼è¯·è®¿é® https://nestjs.bootcss.com/custom-decorators

## ååºçå¤ç

Nest ä¸¤ç§**ä¸å**æä½ååºçéé¡¹

| æ åï¼æ¨èï¼ | ä½¿ç¨æ­¤åç½®æ¹æ³ï¼å½è¯·æ±å¤çç¨åºè¿å JavaScript å¯¹è±¡ææ°ç»æ¶ï¼å®ä¼**èªå¨**åºååä¸º JSONãç¶èï¼å½å®è¿åä¸ä¸ª JavaScript åå§ç±»åæ¶ï¼Nest å°**åªåéè¯¥å¼èä¸å°è¯å¯¹å¶è¿è¡åºåå**ãè¿ä½¿å¾ååºå¤çåå¾ç®åï¼**`åªéè¿åå¼ï¼å¶ä½çç± Nest å¤ç`**ãæ­¤å¤ï¼ååºç**ç¶æç **`é»è®¤å§ç»ä¸º 200`ï¼é¤äºä½¿ç¨ 201 ç POST è¯·æ±ãæä»¬å¯ä»¥éè¿å¨å¤çç¨åºçº§å«æ·»å è£é¥°å¨æ¥è½»æ¾æ´æ¹æ­¤è¡ä¸ºï¼è¯·åé[ç¶æç ](https://nestjs.bootcss.com/controllers#status-code)ï¼ã` number``boolean ` `@HttpCode(...)` |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ç¹å®äºåº     | æä»¬å¯ä»¥ä½¿ç¨åºç¹å®çï¼ä¾å¦ï¼Expressï¼[ååºå¯¹è±¡](https://expressjs.com/en/api.html#res)ï¼å®å¯ä»¥ä½¿ç¨`@Res()`æ¹æ³å¤çç¨åºç­¾åä¸­çè£é¥°å¨ï¼ä¾å¦ï¼`findAll(@Res() response)`ï¼æ³¨å¥ãéè¿è¿ç§æ¹æ³ï¼æ¨å¯ä»¥ä½¿ç¨è¯¥å¯¹è±¡å¬å¼çæ¬æºååºå¤çæ¹æ³ãä¾å¦ï¼ä½¿ç¨ Expressï¼æ¨å¯ä»¥ä½¿ç¨ç±»ä¼¼`response.status(200).send()`.                                                                                                                                                                            |

> **è­¦å**ð·ï¸
>
> Nest æ£æµå°å¤çç¨åºä½æ¶ä½¿ç¨`@Res()`æ`@Next()`ï¼è¡¨ç¤ºæ¨éæ©äºç¹å®äºåºçéé¡¹ãå¦æ**åæ¶ä½¿ç¨è¿ä¸¤ç§æ¹æ³ï¼åè¯¥åä¸è·¯çº¿çæ åæ¹æ³ä¼èªå¨ç¦ç¨**ï¼å¹¶ä¸å°ä¸åæé¢æå·¥ä½ãè¦åæ¶ä½¿ç¨è¿ä¸¤ç§æ¹æ³ï¼ä¾å¦ï¼éè¿æ³¨å¥ååºå¯¹è±¡ä»¥ä»è®¾ç½® cookie/æ å¤´ä½ä»å°å¶ä½é¨åçç»æ¡æ¶ï¼ï¼æ¨å¿é¡»å¨è£é¥°å¨ä¸­å°`passthrough`éé¡¹è®¾ç½®ä¸ºï¼
>
> `true@Res({{ '{' }} passthrough: true {{ '}' }})`

## è¯·æ±çå¤ç

å¤çç¨åºéå¸¸éè¦**è®¿é®å®¢æ·ç«¯è¯·æ±çè¯¦ç»ä¿¡æ¯**ãNest æä¾å¯¹åºå±å¹³å°çè¯·æ±å¯¹è±¡çè®¿é®ï¼é»è®¤ä¸º Expressï¼

`@Req()`ï¼éè¿å°è£é¥°å¨ @Req() æ·»å å°**å¤çç¨åºçç­¾åä¸­**æ¥æç¤º Nest æ³¨å¥å®æ¥è®¿é®è¯·æ±å¯¹è±¡ã

```js
// å¼å¥è£é¥°å¨ and ç±»åæ³¨è§£ð¡
import { Controller, Get, Req } from '@nestjs/common';
import type { Request } from 'express'; // éè¦å®è£ @types/express å¼åä¾èµ

@Controller('user')
export class UserController {
	@Get('queryInfo')
	getUser(@Req() request: Request) {
		console.log(request);
		return 'user';
	}
}
```

### ð¡ è¯·æ±å¤çè£é¥°å¨

> **æç¤º ð·ï¸**
>
> è¯·æ±å¯¹è±¡è¡¨ç¤º HTTP è¯·æ±ï¼å¹¶å·æè¯·æ±æ¥è¯¢å­ç¬¦ä¸²ãåæ°ãHTTP æ å¤´åæ­£æçå±æ§ï¼[å¨æ­¤å¤](https://expressjs.com/en/api.html#req)éè¯»æ´å¤åå®¹ï¼ã**å¨å¤§å¤æ°æåµä¸ï¼æ²¡æå¿è¦æå¨è·åè¿äºå±æ§**ã**`ä½¿ç¨å¼ç®±å³ç¨çä¸ç¨è£é¥°å¨ï¼ä¾å¦ @Body()ã@Query()...`**

| `@Request(), @Req()`      | `req`                             |
| ------------------------- | --------------------------------- |
| `@Response(), @Res()`     | `res`                             |
| `@Next()`                 | `next`                            |
| `@Session()`              | `req.session`                     |
| `@Param(key?: string)`    | `req.params` / `req.params[key]`  |
| `@Body(key?: string)`     | `req.body`/`req.body[key]`        |
| `@Query(key?: string)`    | `req.query`/`req.query[key]`      |
| `@Headers(name?: string)` | `req.headers`/`req.headers[name]` |
| `@Ip()`                   | `req.ip`                          |
| `@HostParam()`            | `req.hosts`                       |

**æ³¨æ**ï¼ä½¿ç¨æ¶ï¼åºè¯¥å¯¼å¥åºå±åºçç±»åï¼ä¾å¦ï¼`@types/express`ï¼ä»¥ååå©ç¨å®ä»¬ã

> è¯·æ³¨æï¼å½å¨æ¹æ³å¤çç¨åºä¸­æ³¨å¥ `@Res()` æ `@Response()` æ¶ï¼ä¼å° Nest ç½®äºè¯¥å¤çç¨åºç **Library-specific æ¨¡å¼** ä¸­ï¼å¹¶ä¸æ¨å°è´è´£ç®¡çååºã**è¿æ ·åæ¶ï¼æ¨å¿é¡»éè¿è°ç¨ `response` å¯¹è±¡ï¼ä¾å¦ï¼`res.json(...)` æ `res.send(...)`ï¼æ HTTP æå¡å¨å°æèµ·ã**

**Nest ä¸ºæææ å HTTP æ¹æ³æä¾è£é¥°å¨ï¼`@Get()`ã`@Post()`ã`@Put()`ã`@Delete()`ã`@Patch()`ã`@Options()`å`@Head()`. æ­¤å¤ï¼`@All()`å®ä¹ä¸ä¸ªå¤çææè¿äºçç«¯ç¹ã**

---

### @Post DTO

æ¥åä»»ä½å®¢æ·ç«¯åæ°çè¯·æ±å¤ç,éè¿å¨å¤çç¨åºä¸­æ·»å `@Body()`è£é¥°å¨æ¥è§£å³æ­¤é®é¢ã

**æ³¨æï¼å¦æä½¿ç¨ TypeScriptï¼éè¦ç¡®å®`DTO`ï¼æ°æ®ä¼ è¾å¯¹è±¡ï¼æ¨¡å¼ãDTO æ¯ä¸ä¸ª`å®ä¹æ°æ®å¦ä½éè¿ç½ç»åéçå¯¹è±¡`ãæä»¬å¯ä»¥ä½¿ç¨ TypeScript `æ¥å£æç®åçç±»`æ¥ç¡®å® DTO æ¨¡å¼ã`å»ºè®®å¨è¿éä½¿ç¨ç±»`** _`Whyï¼`_

> ç±»æ¯ JavaScript ES6 æ åçä¸é¨åï¼å æ­¤å¨ç¼è¯åç JavaScript ä¸­è¢«ä¿çä¸ºçå®å®ä½ãå¦ä¸æ¹é¢ï¼ç±äº TypeScript æ¥å£å¨è½¬è¯è¿ç¨ä¸­è¢«ç§»é¤ï¼Nest æ æ³å¨è¿è¡æ¶å¼ç¨å®ä»¬ãè¿å¾éè¦ï¼å ä¸º**Pipes**ç­åè½å¨è¿è¡æ¶å¯ä»¥è®¿é®åéçåç±»åæ¶æä¾äºé¢å¤çå¯è½æ§,ææ`è¿éå»ºè®®ä½¿ç¨ç±»æ¥å®ä¹æ°æ®çä¼ è¾`

```js
// åå»ºç±»çç±»åæ³¨è§£
class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

// ç¡®å®`DTO`ï¼æ°æ®ä¼ è¾å¯¹è±¡)
@Post()
async create(@Body() createCatDto: CreateCatDto) {
  return 'This action adds a new cat';
}
```

## è·¯ç±

æ¯æåºäºæ¨¡å¼çè·¯ç±ãä¾å¦ï¼æå·ç¨ä½ééç¬¦ï¼å°å¹éä»»ä½å­ç¬¦ç»åã

`'ab*cd'`è·¯ç±è·¯å¾å°å¹éã`abcd`ã`ab_cd`ç­`abecd`

**å­ç¬¦`?`, `+`, `*`, å`()`å¯ä»¥å¨è·¯ç±è·¯å¾ä¸­ä½¿ç¨**ï¼å¹¶ä¸æ¯å®ä»¬çæ­£åè¡¨è¾¾å¼å¯¹åºç©çå­éãè¿å­ç¬¦ ( `-`) åç¹ ( `.`) ç±åºäºå­ç¬¦ä¸²çè·¯å¾éå­è§£éã

```js
@Get('ab*cd')
findAll() {
  return 'This route uses a wildcard';
}
```

### å¨æåæ°

å®ä¹å¸¦åæ°çè·¯ç±ï¼å¯ä»¥å¨è·¯ç±çè·¯å¾ä¸­æ·»å è·¯ç±åæ°**æ è®°**ï¼ä»¥æè·è¯·æ± URL ä¸­è¯¥ä½ç½®çå¨æå¼ãå¯ä»¥ä½¿ç¨`@Param()`è£é¥°å¨è®¿é®ä»¥è¿ç§æ¹å¼å£°æçè·¯ç±åæ°ï¼è£é¥°å¨åºæ·»å å°æ¹æ³ç­¾åä¸­,å¦`/api/user/2576206579`ï¼`Param`ä»`@nestjs/common`ä¸­å¯¼å¥

```js
@Get(':id')
findOne(@Param() params): string {
  console.log(params.id);
  return `This action returns a #${params.id} cat`;
}
```

### å­åè·¯ç±

è£é¥°å¨`@Controller`å¯ä»¥éè¿éç½®é¡¹`host`éæ©è¦æ±ä¼ å¥è¯·æ±ç HTTP ä¸»æºå¹éæä¸ªç¹å®å¼çåå

```js
@Controller({ host: 'admin.example.com' })
export class AdminController {
	@Get()
	index(): string {
		return 'Admin page';
	}
}
```

> **è­¦å ð·ï¸**
>
> ç±äº**Fastify**ç¼ºä¹å¯¹åµå¥è·¯ç±å¨çæ¯æï¼**å½ä½¿ç¨å­åè·¯ç±æ¶ï¼åºè¯¥ä½¿ç¨ï¼é»è®¤ï¼Express ééå¨ã**

ä¸ route ç±»ä¼¼`path`ï¼è¯¥`host`éé¡¹å¯ä»¥ä½¿ç¨æ è®°æ¥æè·ä¸»æºåä¸­è¯¥ä½ç½®çå¨æå¼ãä»¥è¿ç§æ¹å¼(`:account`)å£°æçä¸»æºåæ°å¯ä»¥ä½¿ç¨`@HostParam()`è£é¥°å¨è®¿é®ï¼è£é¥°å¨åºæ·»å å°æ¹æ³ç­¾åä¸­

```typescript
@Controller({ host: ':account.example.com' })
export class AccountController {
	@Get()
	getInfo(@HostParam('account') account: string) {
		return account;
	}
}
```

> **æªçè§£ç ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿ð¤¿**
>
> å¯¹äºæ¥èªä¸åç¼ç¨è¯­è¨èæ¯çäººæ¥è¯´ï¼å¨ Nest ä¸­å¾ç¥å ä¹ææåå®¹é½æ¯å¨ä¼ å¥è¯·æ±ä¹é´å±äº«çï¼è¿å¯è½æ¯åºä¹ææçãæä»¬æä¸ä¸ªå°æ°æ®åºçè¿æ¥æ± ãå·æå¨å±ç¶æçåä¾æå¡ç­ãè¯·è®°ä½ï¼Node.js ä¸éµå¾ªè¯·æ±/ååºå¤çº¿ç¨æ ç¶ææ¨¡åï¼å¶ä¸­æ¯ä¸ªè¯·æ±é½ç±åç¬ççº¿ç¨å¤çãå æ­¤ï¼ä½¿ç¨åä¾å®ä¾å¯¹æä»¬çåºç¨ç¨åºæ¥è¯´æ¯å®å¨**å®å¨**çã
>
> ä½æ¯ï¼å¨æäºæç«¯æåµä¸ï¼æ§å¶å¨çåºäºè¯·æ±ççå½å¨æå¯è½æ¯æéçè¡ä¸ºï¼ä¾å¦ GraphQL åºç¨ç¨åºä¸­çæ¯ä¸ªè¯·æ±ç¼å­ãè¯·æ±è·è¸ªæå¤ç§æ·ã[å¨æ­¤å¤](https://nestjs.bootcss.com/fundamentals/provider-scopes)äºè§£å¦ä½æ§å¶èå´ã

æä»¬åæ¬¢ç°ä»£ JavaScriptï¼èä¸æä»¬ç¥éæ°æ®æåä¸»è¦æ¯**å¼æ­¥**çãè¿å°±æ¯ä¸ºä»ä¹ Nest æ¯æå¹¶å¾å¥½å°ä½¿ç¨`async`å½æ°çåå ã

æ¯ä¸ªå¼æ­¥å½æ°é½å¿é¡»è¿åä¸ä¸ª`Promise`. è¿æå³çæ¨å¯ä»¥è¿å Nest è½å¤èªè¡è§£æçå»¶è¿å¼ãè®©æä»¬çä¸ä¸ªä¾å­ï¼

```typescript
@Get()
async findAll(): Promise<any[]> {
  return [];
}
```

ä¸é¢çä»£ç æ¯å®å¨ææçãæ­¤å¤ï¼ç±äºè½å¤è¿å RxJS[å¯è§å¯æµ](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html)ï¼Nest è·¯ç±å¤çç¨åºæ´å å¼ºå¤§ãNest å°èªå¨è®¢éä¸é¢çæºå¹¶è·åæåä¸ä¸ªååºçå¼ï¼ä¸æ¦æµå®æï¼ã

```typescript
@Get()
findAll(): Observable<any[]> {
  return of([]);
}
```

ä¸è¿°ä¸¤ç§æ¹æ³é½ææï¼æ¨å¯ä»¥ä½¿ç¨ä»»ä½éåæ¨è¦æ±çæ¹æ³ã

---

## ç¶æç 

é»è®¤æåµä¸ååº**ç¶æä»£ç **å§ç»ä¸º**200**ï¼ä½ POST è¯·æ±é¤å¤**201**ãå¯ä»¥éè¿`@HttpCode(...)`å¨å¤çç¨åºæ·»å è£é¥°å¨æ¥è½»æ¾æ´æ¹æ­¤è¡ä¸ºã`ä½äºè¯·æ±è£é¥°å¨ä¸`

ä¸ @Getã@Post ä¸æ ·ï¼`HttpCode`ä»`@nestjs/common`ä¸­å¯¼å¥

```js
@Post()
@HttpCode(204)
create() {
  return 'This action adds a new cat';
}
```

**æ³¨æ:**éå¸¸ï¼ç¶æä»£ç ä¸æ¯éæçï¼èæ¯åå³äºåç§å ç´ ãå¨è¿ç§æåµä¸ï¼å¯ä»¥ä½¿ç¨ç¹å®åºç**ååº**ï¼ä½¿ç¨ æ³¨å¥`@Res()`ï¼å¯¹è±¡ï¼æèï¼å¦æåºç°éè¯¯ï¼åæåºå¼å¸¸ï¼ã

## èªå®ä¹ååºæ å¤´

ä½¿ç¨`@Header()`è£é¥°å¨æç¹å®åºçååºå¯¹è±¡ï¼`res.header()`ç´æ¥è°ç¨ï¼

`Header`ä»`@nestjs/common`ä¸­å¯¼å¥

```js
@Post()
@Header('Cache-Control', 'none')
create() {
  return 'This action adds a new cat';
}
```

## ååºéå®å

è¦å°ååºéå®åå°ç¹å® URLï¼å¯ä»¥ä½¿ç¨`@Redirect()`è£é¥°å¨æç¹å®åºçååºå¯¹è±¡ï¼`res.redirect()`ç´æ¥è°ç¨ï¼

@Redirect()`æ¥åä¸ä¸ªå¿é`url`åæ°åä¸ä¸ªå¯é`statusCode`åæ°ãå¦æçç¥ï¼å`statusCode`é»è®¤ä¸º 302 Found`(ç®åççè§£ä¸ºè¯¥èµæºåæ¬ç¡®å®å­å¨ï¼ä½å·²ç»è¢«ä¸´æ¶æ¹åäºä½ç½®)

```js
@Get()
@Redirect('https://nestjs.com', 301)
```

ææ¶å¯è½å¸æå¨æç¡®å® HTTP ç¶æä»£ç æéå®å URLãéè¿ä»¥ä¸è·¯ç±å¤çç¨åºæ¹æ³è¿åä¸ä¸ªå¯¹è±¡æ¥åå°è¿ä¸ç¹

```json
{
  "url": string,
  "statusCode": number
}
```

**è¿åå¼å°è¦çä¼ éç»`@Redirect()`è£é¥°å¨çä»»ä½åæ°**

```typescript
@Get('docs')
@Redirect('https://docs.nestjs.com', 302)
getDocs(@Query('version') version) {
  if (version && version === '5') {
    return { url: 'https://docs.nestjs.com/v5/' };
  }
}
// å¤çç¨åºå­å¨è¿åå¼æ¶ï¼å°è¦ç @Redirect() è£é¥°å¨çåæ°
{
  "url": 'https://docs.nestjs.com',
  "statusCode": 302
}
```

## éè¯¯å¤ç

> æç¤º ð¡
>
> Nest å¸¦æä¸ä¸ªåç½®ç**å¼å¸¸å±**ï¼`è´è´£å¤çåºç¨ç¨åºä¸­æææªå¤ççå¼å¸¸`ãå½åºç¨ç¨åºä»£ç æªå¤çå¼å¸¸æ¶ï¼è¯¥å±å°æè·è¯¥å¼å¸¸ï¼ç¶åèªå¨åééå½çç¨æ·åå¥½ååºã
>
> å¼ç®±å³ç¨ï¼æ­¤æä½ç±åç½®ç**å¨å±å¼å¸¸è¿æ»¤å¨**æ§è¡ï¼è¯¥è¿æ»¤å¨å¤çç±»å`HttpException`ï¼åå¶å­ç±»ï¼çå¼å¸¸ãå½å¼å¸¸**æ æ³è¯å«**ï¼æ¢ä¸æ¯`HttpException`ä¹ä¸æ¯ç»§æ¿èªçç±»`HttpException`ï¼æ¶ï¼åç½®å¼å¸¸è¿æ»¤å¨ä¼çæä»¥ä¸é»è®¤ JSON ååºï¼

```js
{
  "statusCode": 500,
  "message": "Internal server error"
}
```

### éè¯¯æåºæ å

Nest æä¾äºä¸ä¸ª**`åç½®ç±»`**ï¼ä»ç±» **HttpException**`æ´é²åºæ¥ã`@nestjs/common`å¯¹äºå¸åçåºäº HTTP REST/GraphQL API çåºç¨ç¨åºï¼**æå¥½å¨åçæäºéè¯¯æåµæ¶åéæ å HTTP ååºå¯¹è±¡**ã

ä¾å¦ï¼å¨`CatsController`ï¼æä¸ä¸ª`findAll()`æ¹æ³ï¼`GET`è·¯ç±å¤çç¨åºï¼ãåè®¾è¿ä¸ªè·¯ç±å¤çç¨åºç±äºæç§åå æåºäºä¸ä¸ªå¼å¸¸ãä¸ºäºè¯æè¿ä¸ç¹ï¼æä»¬å°å¯¹å¶è¿è¡ç¡¬ç¼ç ï¼å¦ä¸æç¤ºï¼

```typescript
@@filename(cats.controller)
@Get()
async findAll() {
  throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
}

// ...
{
"statusCode": 403,
"message": "Forbidden"
}
```

`HttpException`æé å½æ°**æ¥åä¸¤ä¸ªç¡®å®ååºçå¿éåæ°**ï¼

`new HttpException(response, status)`

-   è¯¥`response`åæ°å®ä¹ JSON ååºæ­£æãå®å¯ä»¥æ¯ `string` æ `object`ï¼å¦ä¸æè¿°ã
-   è¯¥`status`åæ°å®ä¹[HTTP ç¶æä»£ç ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)ã

é»è®¤æåµä¸ï¼JSON ååºæ­£æåå«ä¸¤ä¸ªå±æ§ï¼

-   `statusCode`: é»è®¤ä¸º`status`åæ°ä¸­æä¾ç HTTP ç¶æç 
-   `message`ï¼åºäº HTTP éè¯¯çç®ç­æè¿°`status`

è¦ç JSON ååºæ­£æçæ¶æ¯é¨åï¼è¯·å¨`response`åæ°ä¸­æä¾ä¸ä¸ªå­ç¬¦ä¸²ãè¦è¦çæ´ä¸ª JSON ååºæ­£æï¼è¯·å¨`response`åæ°ä¸­ä¼ éä¸ä¸ªå¯¹è±¡ãNest å°åºååå¯¹è±¡å¹¶å°å¶ä½ä¸º JSON ååºæ­£æè¿åã

ç¬¬äºä¸ªæé å½æ°åæ° - `status`- åºè¯¥æ¯ä¸ä¸ªææç HTTP ç¶æç ãæä½³åæ³æ¯ä½¿ç¨`HttpStatus`ä»`@nestjs/common`.

è¿æ¯ä¸ä¸ªè¦çæ´ä¸ªååºæ­£æçç¤ºä¾ï¼

```typescript
@Get()
async findAll() {
  throw new HttpException({
    status: HttpStatus.FORBIDDEN,
    error: 'This is a custom message',
  }, HttpStatus.FORBIDDEN);
}
// ...
{
  "status": 403,
  "error": "This is a custom message"
}
```

`HttpStatus`æ¯ä»`@nestjs/common`ä¸­å¯¼å¥ç**å¸®å©æä¸¾**

```js
ð HttpStatus
{
  '100': 'CONTINUE',
  '101': 'SWITCHING_PROTOCOLS',
  '102': 'PROCESSING',
  '103': 'EARLYHINTS',
  '200': 'OK',
  '201': 'CREATED',
  '202': 'ACCEPTED',
  '203': 'NON_AUTHORITATIVE_INFORMATION',
  '204': 'NO_CONTENT',
  '205': 'RESET_CONTENT',
  '206': 'PARTIAL_CONTENT',
  '300': 'AMBIGUOUS',
  '301': 'MOVED_PERMANENTLY',
  '302': 'FOUND',
  '303': 'SEE_OTHER',
  '304': 'NOT_MODIFIED',
  '307': 'TEMPORARY_REDIRECT',
  '308': 'PERMANENT_REDIRECT',
  '400': 'BAD_REQUEST',
  '401': 'UNAUTHORIZED',
  '402': 'PAYMENT_REQUIRED',
  '403': 'FORBIDDEN',
  '404': 'NOT_FOUND',
  '405': 'METHOD_NOT_ALLOWED',
  '406': 'NOT_ACCEPTABLE',
  '407': 'PROXY_AUTHENTICATION_REQUIRED',
  '408': 'REQUEST_TIMEOUT',
  '409': 'CONFLICT',
  '410': 'GONE',
  '411': 'LENGTH_REQUIRED',
  '412': 'PRECONDITION_FAILED',
  '413': 'PAYLOAD_TOO_LARGE',
  '414': 'URI_TOO_LONG',
  '415': 'UNSUPPORTED_MEDIA_TYPE',
  '416': 'REQUESTED_RANGE_NOT_SATISFIABLE',
  '417': 'EXPECTATION_FAILED',
  '418': 'I_AM_A_TEAPOT',
  '421': 'MISDIRECTED',
  '422': 'UNPROCESSABLE_ENTITY',
  '424': 'FAILED_DEPENDENCY',
  '428': 'PRECONDITION_REQUIRED',
  '429': 'TOO_MANY_REQUESTS',
  '500': 'INTERNAL_SERVER_ERROR',
  '501': 'NOT_IMPLEMENTED',
  '502': 'BAD_GATEWAY',
  '503': 'SERVICE_UNAVAILABLE',
  '504': 'GATEWAY_TIMEOUT',
  '505': 'HTTP_VERSION_NOT_SUPPORTED',
  CONTINUE: 100,
  SWITCHING_PROTOCOLS: 101,
  PROCESSING: 102,
  EARLYHINTS: 103,
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  AMBIGUOUS: 300,
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  SEE_OTHER: 303,
  NOT_MODIFIED: 304,
  TEMPORARY_REDIRECT: 307,
  PERMANENT_REDIRECT: 308,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505
}
```

### èªå®ä¹éè¯¯æ å

> å¦æç¡®å®éè¦åå»ºèªå®ä¹å¼å¸¸ï¼æå¥½åå»ºèªå·±ç**å¼å¸¸å±æ¬¡ç»æ**ï¼ãèªå®ä¹å¼å¸¸ä»`HttpException`ç±»**`ç»§æ¿`**ãéè¿è¿ç§æ¹æ³ï¼**Nest å°è¯å«**æ¨çå¼å¸¸ï¼å¹¶èªå¨å¤çéè¯¯ååº

```js
// ç»§æ¿äº HttpException ç ForbiddenException éè¯¯æ åç±»
class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}

// ForbiddenExceptionæ©å± HttpExceptionï¼å®å°ä¸åç½®çå¼å¸¸å¤çç¨åºæ ç¼åä½ï¼å æ­¤å¯ä»¥å¨findAll()æ¹æ³ä¸­ä½¿ç¨å®
@Get()
async findAll() {
  throw new ForbiddenException();
}
```

### åç½® HTTP å¼å¸¸

Nest æä¾ä¸ç»**ä»åºç¡ç»§æ¿çæ åå¼å¸¸`HttpException`**ãè¿äºæ¯ä»`@nestjs/common`ä¸­å¬å¼çï¼ä»£è¡¨äºè®¸å¤æå¸¸è§ç HTTP å¼å¸¸ï¼

-   `BadRequestException`
-   `UnauthorizedException`
-   `NotFoundException`
-   `ForbiddenException`
-   `NotAcceptableException`
-   `RequestTimeoutException`
-   `ConflictException`
-   `GoneException`
-   `HttpVersionNotSupportedException`
-   `PayloadTooLargeException`
-   `UnsupportedMediaTypeException`
-   `UnprocessableEntityException`
-   `InternalServerErrorException`
-   `NotImplementedException`
-   `ImATeapotException`
-   `MethodNotAllowedException`
-   `BadGatewayException`
-   `ServiceUnavailableException`
-   `GatewayTimeoutException`
-   `PreconditionFailedException`

### è¿æ»¤å¨èªå®ä¹æåºéè¯¯ ExceptionFilter

#### **åå»ºéè¯¯å¼å¸¸è¿æ»¤å¨**

```js
// éè¯¯çååºè¿æ»¤å¨
import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
	catch(exception: HttpException, host: ArgumentsHost) {
		// ...éè¿ host.switchToHttp() è·å reqï¼res
		const ctx = host.switchToHttp();
		const response = ctx.getResponse();
		const request = ctx.getRequest();
		const status = exception.getStatus();
		// ...éè¿ exception(å¼å¸¸) è·åç¶æç ç­info
		const exceptionResponse: any = exception.getResponse();
		const { message, error } = exceptionResponse;
		response.status(status).json({
			status: status,
			timestamp: new Date().toISOString(),
			path: request.url,
			message: message || error,
		});
	}
}
```

**`ExceptionFilter`**ç»§æ¿ç±»ï¼`catch(exception: T, host: ArgumentsHost): any;`ï¼å®ç°å®çæ¶åå¿é¡»éµå®å®ççº¦å®

```js
export interface ExceptionFilter<T = any> {
	/**
	 * Method to implement a custom exception filter.
	 *
	 * @param exception the class of the exception being handled
	 * @param host used to access an array of arguments for
	 * the in-flight request
	 */
	catch(exception: T, host: ArgumentsHost): any;
}
```

#### **ä½¿ç¨**

##### **ð¡ åç¬ä½¿ç¨**

å¨åä¸ª`users.controller.ts`æ§å¶å¨ä¸­ï¼æ¨¡åå¥å£ä¸­

```js
import {
  Controller,
  Get,
  Post,
  Body,
  UseFilters,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
// å¼å¥ swagger ç ApiTags è£é¥°å¨
import { ApiQuery, ApiBody, ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { HttpExceptionFilter } from '../common/filters/HttpException.filter';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiQuery({ name: 'name', required: false })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully deleted.',
  })
  @UseFilters(new HttpExceptionFilter()) // åç¬ä½¿ç¨ð¡
  findAll() {
    // ...éè¿ throw new HttpException è¿åèªå®ä¹éè¯¯info è¦çèªå¸¦çæ å
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
        message: 'This is a custom message',
      },
      HttpStatus.FORBIDDEN,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
```

##### ð¡ å¨å±ä½¿ç¨è¿æ»¤å¨

å¨`main.ts `

```js
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// å¼å¥platform-expresså¹³å°
import { NestExpressApplication } from '@nestjs/platform-express';
// å¼å¥å¨å±è¿æ»¤å¨
import { HttpExceptionFilter } from './common/filters/HttpException.filter';

async function bootstrap() {
	const app = (await NestFactory.create) < NestExpressApplication > AppModule;

	// å¨å±è¿æ»¤å¨
	app.useGlobalFilters(new HttpExceptionFilter());

	await app.listen(3000);
}
// æ­¤å½æ°å°å¼å¯¼åºç¨ç¨åºçå¯å¨è¿ç¨
bootstrap();
```

## æ¾èå¼ç ðª

---

##### å¨`/src`ä¸æ°å¢ç®å½

uitlï¼å­å¨å·¥å·å½æ°æ JSON æä»¶

modulesï¼å­æ¾æ¨¡åç®å½æä»¶ï¼å©äºç®¡ç

commonï¼å­æ¾å¬å±æä»¶éç½®...ç®å½

common/middlewareï¼å­æ¾ä¸­é´ä»¶æä»¶ç®å½ç

---

##### CURD æ¨¡å

ä½¿ç¨å½ä»¤ `nest g resource æ¨¡ååç§°`å¿«éåå»ºä¸ä¸ª CURD æ¨¡å

![](/img/curd-dir.png)

**dto**ï¼æ°æ®ä¼ è¾å¯¹è±¡ï¼dto å°±åæ¥å£ï¼ç®æ æ¯ä¼ è¾æ°æ®å¹¶éªè¯å®ï¼ä¸»è¦ç¨äºè·¯ç±å¨ or æ§å¶å¨ãç®å API ä¸»ä½åæ¥è¯¢éªè¯é»è¾

ä¸é¢ç AuthDto èªå¨å°ç¨æ·çµå­é®ä»¶åå¯ç æ å°å°å¯¹è±¡ DTO ä»¥å¼ºå¶éªè¯(ææå¯ç è¶è¿ 5 ä¸ªå­ç¬¦ï¼å¯ä»¥å° dto ä¸ class-validator éå¯¹ä»¥èªå¨æåºéè¯¯)

![](/img/dto.png)

`users.controller.spec.ts`ã`users.service.spec.ts`æµè¯æä»¶

`users.controller.ts`ï¼æ´ä¸ªæ¨¡åçæ§å¶å¨(**`æ¨¡åçå¥å£`**)ï¼æ§å¶è¯·æ±çè·¯å¾æ¹å(æ§å¶åªä¸ªæ§å¶å¨æ¥æ¶å¤çåªä¸ªè¯·æ±)

**å¨åå§åæ¶ï¼å°`UsersService`æ³¨å¥è¿æ¥**

```js
import { Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
```

`users.service.ts`:ç¨åºé»è¾å¤ççæä»¶ï¼è´è´£**å¤çè¯·æ± and ååº**(æ¹æ³é½ä¼å¨ æ§å¶å¨ ä¸­è¢«æ³¨å¥)

```js
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
	create(createUserDto: CreateUserDto) {
		return 'This action adds a new user';
	}
}
```

`users.module.ts`ï¼æ¨¡åçåºå£æä»¶ï¼å¯¼åºå¨`app.module.ts`ä¸­

## Swagger API ææ¡£çæ

**Nest éæèªå¨çæææ¡£ï¼swagger ä¸æ¯ä¸ä¸ªæ¨¡åï¼èæ¯å¯¹åºäºæä¸ªæ¨¡åçå¢å¼º**

åå»º swagger ææ¡£ï¼

å®è£ï¼`npm install -D @nestjs/swagger`

`main.js`ä¸ï¼

SwaggerModule.**setup**('api', app, document); `api`ä¸ºè®¿é®è·¯å¾

```js
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// å¼å¥platform-expresså¹³å°
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
	const app = (await NestFactory.create) < NestExpressApplication > AppModule;

	// åå»º swagger ææ¡£ð
	const options = new DocumentBuilder()
		.setTitle('Nest Serve')
		.setDescription('The Nest Serve API description')
		.setVersion('1.0')
		.addTag('nest-serve')
		.build();
	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('api', app, document);

	await app.listen(3000);
}
// æ­¤å½æ°å°å¼å¯¼åºç¨ç¨åºçå¯å¨è¿ç¨
bootstrap();
```

### è¯¦ç»ä½¿ç¨

å¨ æ§å¶å¨ Controller å¥å£æä»¶ä¸ï¼

```js
import { Controller,Get,Post,Body } from '@nestjs/common';
// å¼å¥ swagger ç Api è£é¥°å¨
import { ApiQuery, ApiBody, ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  // ...ä½¿ç¨ Swagger
  @ApiBody({ type: CreateUserDto }) // ç´æ¥éè¿ DTO ç±»åæ ¡éªå¯¹è±¡çæ Body ä¼ è¾åæ°
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiQuery({ name: 'name', required: false })
  @ApiResponse({ status: 200, description: 'The record has been successfully deleted.'})
  findAll() {
    return this.usersService.findAll();
  }
}
```

> æ´å¤è¯¦ç»ä½¿ç¨ æ¥çå®æ¹ææ¡£

## ä¸­é´ä»¶

> ä¸­é´ä»¶æ¯éè¦ **`æ³¨å¥(Injectable)`**ç ,å¹¶ä¸**éè¦å®ç°å®**(NestMiddleware):`class LoggerMiddleware implements NestMiddleware`

NestMiddleware:å¨ä½¿ç¨ä¸­é´ä»¶æ¶ï¼éè¦å®ç°å®(TS),å¹¶ä¸å®åªæä¸ä¸ªæ¹æ³`use(req,res,next)`

```js
export interface NestMiddleware<TRequest = any, TResponse = any> {
	use(
		req: TRequest,
		res: TResponse,
		next: (error?: Error | any) => void
	): any;
}
```

### èªå®ä¹ logger æ¥å¿ä¸­é´ä»¶

**1ãå®ä¹**

```js
import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
	// ...req: Request, res: Response, next: NextFunction
	use(req: Request, res: Response, next: NextFunction) {
		console.log('Request...');
		next(); // ...
	}
}
```

**2ãä½¿ç¨**

`app.module.ts`(åæéè¦èèæ½æä¸ä¸ªéç½®æä»¶ï¼å©äºç»´æ¤)

```js
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// ä½¿ç¨ logger ä¸­é´ä»¶
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // ä½¿ç¨ä¸­é´ä»¶
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(LoggerMiddleware)
      	.exclude( { path: 'users', method: RequestMethod.POST// æé¤ users ä¸ç POST æ¹æ³ } )
        .forRoutes('users');// å¨ users æ¨¡åä¸ä½¿ç¨æ­¤ä¸­é´ä»¶
  }
}
```

## ç®¡é ð¤¿

å¨ç¤ºä¾`@Patch`ä¸­ï¼æ´æ° info æ¶ï¼éè¦å¨æè·åç¨æ· IDï¼`ID ä¸ºä¸ä¸ª String ç±»å ID`

å¤çåºç¨ç¨åºä¸­ï¼å¸æ`id`åæ°ä¸ºä¸ä¸ªæ°å­ç±»åï¼åå¯ä»¥éè¿ç®¡éè¿è¡è½¬å

```js
@Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
}
```

**Nest åç½®ç®¡é ParseIntPipe ç®¡éï¼è½å¤èªå¨å°å®è½¬åä¸ºæ°å­ç±»åç ID**,zai`@nestjs/common`ä¸­å¼å¥ï¼å¨è£é¥°å¨ @Param ä¸­å®ä¾åä½¿ç¨

**åä¸ªæ¨¡åæ¹æ³ä½¿ç¨ ð·ï¸**

```js
 @Patch(':id')
 update(
 // new ParseIntPipe() æ¥åä¸ä¸ªåæ°ï¼å·¦è¾¹ç id å°±æ¯ ParseIntPipe æ¥åçåæ°ï¼ç»è¿å¤çä¹åå°ç»æèµå¼å°å¤å±ç id(id: string) åæ°ä¸­
 @Param('id', new ParseIntPipe()) id: string,
 @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(+id, updateUserDto);
  }
```

**å¨å±ç®¡éä½¿ç¨(ç±»ä¼¼äºä¸­é´ä»¶çå¨å±ä½¿ç¨)**

```js
// å¨å±è¿æ»¤å¨
app.useGlobalFilters(new HttpExceptionFilter());
// å¨å±ä½¿ç¨ç®¡é
app.useGlobalPipes(new ValidationPipe());
```

> ç±»ä¼¼ ParseIntPipe ç®¡éï¼Nest è¿æä¾æ´å¤çç®¡éï¼è¯¦ææ¥çå®æ¹ææ¡£

### èªå®ä¹ç®¡é

æ¹æ³ä¸ä¸­é´ä»¶ç±»ä¼¼

Injectable 8 è¿è¡æ³¨å¥åå»ºåç§å³ç³»ï¼**ç»§æ¿ ç®¡é æä¾çç±»ï¼å®ç°å®çæ¹æ³**ï¼å¤çæ°æ®è¿å

å½å®¢æ·ç«¯ä¼ å¼éè¯¯æ¶ï¼æ æ³è¿è¡è½¬åï¼æåº `throw new badRequestException('åæ°éè¯¯')`ï¼æç¤ºå®¢æ·ç«¯åçè¯·æ±

## è§è²æ§å¶å®å«

å®å«æ¯ä¸ä¸ªä½¿ç¨ `@Injectable()` è£é¥°å¨çç±»ã å®å«åºè¯¥å®ç° **`CanActivate`** æ¥å£ã

åæ¶ä¹æ¯æ å±é¨ä½¿ç¨ or å¨å±ä½¿ç¨

ð**æ ¹æ®è¿è¡æ¶åºç°çæäºæ¡ä»¶ï¼ä¾å¦æéï¼è§è²ï¼è®¿é®æ§å¶åè¡¨ç­ï¼æ¥ç¡®å®ç»å®çè¯·æ±æ¯å¦ç±è·¯ç±å¤çç¨åºå¤çã**è¿éå¸¸ç§°ä¸ºææã**å¨ä¼ ç»ç `Express` åºç¨ç¨åºä¸­ï¼éå¸¸ç±ä¸­é´ä»¶å¤çææ(ä»¥åè®¤è¯)**ãä¸­é´ä»¶æ¯èº«ä»½éªè¯çè¯å¥½éæ©ï¼å ä¸ºè¯¸å¦ `token` éªè¯ææ·»å å±æ§å° `request` å¯¹è±¡ä¸ä¸ç¹å®è·¯ç±(åå¶åæ°æ®)æ²¡æå¼ºå³èã

> ä¸­é´ä»¶ä¸ç¥éè°ç¨ `next()` å½æ°åä¼æ§è¡åªä¸ªå¤çç¨åºãå¦ä¸æ¹é¢ï¼å®å«å¯ä»¥è®¿é® `ExecutionContext` å®ä¾ ð¤¿ï¼å æ­¤ç¡®åå°ç¥éæ¥ä¸æ¥è¦æ§è¡ä»ä¹ãå®ä»¬çè®¾è®¡ä¸å¼å¸¸è¿æ»¤å¨ãç®¡éåæ¦æªå¨éå¸¸ç¸ä¼¼ï¼ç®çæ¯è®©æ¨å¨è¯·æ±/ååºå¨æçæ­£ç¡®ä½ç½®æå¥å¤çé»è¾ï¼å¹¶ä»¥å£°æçæ¹å¼è¿è¡æå¥ãè¿æå©äºä¿æä»£ç çç®æ´åå£°ææ§ã

> **`å®å«å¨æ¯ä¸ªä¸­é´ä»¶ä¹åæ§è¡ï¼ä½å¨ä»»ä½æ¦æªå¨æç®¡éä¹åæ§è¡`**ððððððððððððððððððððððððððððððððððððð

```js
// å¯¼å¥ å®å«è£é¥°å¨ UseGuards
import { Controller, Get, UseGuards } from '@nestjs/common';
// å¯¼å¥èªå®ä¹ç Guards å®å«(å®å«å¨ æ§å¶å¨çé¡¶é¨ä½¿ç¨)
import { RolesGuards } from './common/guards/role.guards';
// èªå®ä¹çè£é¥°å¨ï¼éåèªå®ä¹çå®å«è¿è¡ä½¿ç¨(èªå®ä¹è£é¥°å¨å¨æ¹æ³ä¸­ç¬ç«ä½¿ç¨)
import { RolesDecorator } from './common/decorator/role.decorator';


@Controller('users')
@UseGuards(RolesGuards) // ...
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @RolesDecorator('admin') /// ...'admin' è¡¨ç¤º 'admin' æ¥ææé
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
```

`./common/guards/role.guards.ts`

```js
// å¯¼å¥ å®å«çå®ç°ç±»,æ³¨å¥è£é¥°å¨,å®å«å¯ä»¥è®¿é®ç `ExecutionContext` å®ä¾
import { CanActivate, Injectable, ExecutionContext } from '@nestjs/common';
// å¯¼å¥ `Reflector` ,ç¨äºè·å `@SetMetadata` è£é¥°å¨çåæ°æ®ãReflectorï¼åå°ã
import { Reflector } from '@nestjs/core';

// å®ä¹ä¸ä¸ª `RolesGuard` ç±»,å®ç° `CanActivate` æ¥å£
// å®å«çè¿åå¼- return ä¸º Boolean
@Injectable()
export class RolesGuard implements CanActivate {
  /* Reflectorä½ç¨ï¼ãè®©å®å«ä¸è£é¥°å¨è¿è¡æ¡¥æ¥çæ¡¥æ¢ã */
  // åå§å
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    // è·å æ¨¡åæ¹æ³ ä¸­ä½¿ç¨è£é¥°å¨@Roleséç½®ç `@SetMetadata` çåæ°æ®(è¯¦ææ¥ç `roles.decorator.ts`é»è¾)
    // SetMetadata('roles', roles) => (key, value)ð
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    // å¦ææ²¡æè®¾ç½® `roles` åæ°æ®,åç´æ¥è¿å `true`,å³ä¸éè¦è¿è¡æééªè¯ð
    if (!roles) return true;
    // å­å¨,è·åè¯·æ±å¯¹è±¡
    const request = context.switchToHttp().getRequest();
    // è·åè¯·æ±å¤´ä¸­ç `authorization` å­æ®µ
    const authHeader = request.headers.authorization;
  }
}
```

`role.decorator.ts`

```js
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
```

## èªå®ä¹`è·¯ç±åæ°`è£é¥°å¨

**`Nest` æ¯åºäºè£é¥°å¨è¿ç§è¯­è¨ç¹æ§èåå»ºçãå¨å¾å¤å¸¸è§çç¼ç¨è¯­è¨ä¸­ï¼è£é¥°å¨æ¯ä¸ä¸ªå¹¿ä¸ºäººç¥çæ¦å¿µ**ï¼ä½å¨ `JavaScript` ä¸çä¸­ï¼è¿ä¸ªæ¦å¿µä»ç¶ç¸å¯¹è¾æ°ãæä»¥ä¸ºäºæ´å¥½å°çè§£è£é¥°å¨æ¯å¦ä½å·¥ä½çï¼ä½ åºè¯¥çç [è¿ç¯](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841) æç« ãä¸é¢ç»åºä¸ä¸ªç®åçå®ä¹ï¼

`ES2016` **`è£é¥°å¨æ¯ä¸ä¸ªè¡¨è¾¾å¼`**ï¼**å®è¿åä¸ä¸ªå¯ä»¥å°ç®æ ãåç§°åå±æ§æè¿°ç¬¦`ä½ä¸ºåæ°çå½æ°`**ðãéè¿å¨è£é¥°å¨åé¢æ·»å ä¸ä¸ª `@` å­ç¬¦å¹¶å°å¶æ¾ç½®å¨ä½ **`è¦è£é¥°çåå®¹çæé¡¶é¨`**æ¥åºç¨å®ã**å¯ä»¥ä¸ºç±»ãæ¹æ³æå±æ§å®ä¹è£é¥°å¨ã**

`export const Roles = (...roles: string[]) => SetMetadata('roles', roles);` or â¬ï¸

å¨ `Node.js` ä¸­ï¼ä¼ç»å¸¸å°éè¦ä¼ éçå¼å å°è¯·æ±å¯¹è±¡çå±æ§ä¸­ãç¶åå¨æ¯ä¸ªè·¯ç±å¤çç¨åºä¸­æå¨æåå®ä»¬ï¼ä½¿ç¨å¦ä¸ä»£ç ï¼

```typescript
const user = req.user;
```

ä¸ºäºä½¿ä»£ç æ´å·å¯è¯»æ§åéææ§ï¼æä»¬å¯ä»¥åå»ºä¸ä¸ª `@User()` è£é¥°å¨å¹¶å¨æææ§å¶å¨ä¸­ä½¿ç¨å®ã

> user.decorator.ts

```typescript
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
(data: unknown, ctx: ExecutionContext) => (key,value)   ExecutionContext => request
export const User = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
```

ç°å¨ä½ å¯ä»¥å¨ä»»ä½ä½ æ³è¦çå°æ¹å¾æ¹ä¾¿å°ä½¿ç¨å®ã

```typescript
@Get()
async findOne(@User() user: UserEntity) {
  console.log(user);
}
```

## Injectable è£é¥°å¨

Injectable ä½ç¨æ¯å¯ä»¥å½¼æ­¤åå»ºåç§å³ç³»ï¼å¹¶ä¸âè¿æ¥âå¯¹è±¡å®ä¾çåè½å¨å¾å¤§ç¨åº¦ä¸å¯ä»¥å§æç» Nest è¿è¡æ¶ç³»ç»

## æ»ç»

èªå®ä¹è¿æ»¤å¨ãç®¡éãå®å«åä¸­é´ä»¶é½éè¦éè¿ä½¿ç¨ Injectable è£é¥°å¨è¿è¡å»ºç«å½¼æ­¤å³ç³»
