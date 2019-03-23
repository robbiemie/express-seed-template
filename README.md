# express-seed-template

A simple WebServer base on express.



## 1. 创建简单的 express 服务

> 注意:需要通过 `npm` 引入 express.

```bash
$ npm i express
```


```javascript

const express = require('express')

let app = express()
// 根据请求路径，处理客户端的 GET 请求
// 格式: app.get(path,fn(req,res))
app.get('/', (require, response) => {
  response.send('Hello World')
})
// 监听80端口
app.listen(80)

```

## 2. 使用中间件<Middleware>

什么是中间件?

> 中间件<middleware>: 就是在处理某个任务中，对数据进行预处理功能后，才能进行后续操作的组件。
最大的特点就是: 在一个中间件处理完之后，把处理结果传递给下一个中间件进行处理。类似于`pipeline`



## 3. 获取请求相关信息

- 获取主机名: `request.host`
- 获取**path**: `request.path`

## 4. use 方法

> `use` 是 `express` 调用中间件的方法，返回一个函数。

格式: `app.use([path],fn(req,res,next))`



## 5. query 方法

`query` 是一个获取客户端 `GET` 请求路径参数的对象属性，包含被解析过的请求参数对象。

格式: `request.query.xxx `

请求参数: `http://localhost/about?a=1`
打印结果: `{ a: '1' }`

## 6. param & pramas 方法

与 `query` 方法类似


## 7. send 方法

`send` 方法想浏览器发送一个响应信息，以处理不同请求类型的数据。

格式: `response.send([statusCode | body],[ body ])`