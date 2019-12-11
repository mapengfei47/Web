# Cookie

[TOC]

## 一. cookie介绍

### 1.1 cookie是什么？

> cookie 是服务器保存在浏览器的一小段文本信息，一般大小不能超过 4KB，浏览器每次向服务器发出请求，都会带上这段文本信息

### 1.2 cookie有什么用？

> cookie主要用来保存状态信息
>
> - 对话管理：保存登录，购物车等需要记录的信息
> - 个性化管理：保存用户的偏好，网页字体大小，背景等
> - 追踪用户：记录分析用户行为

**<font color=red>注意：</font>**cookie不是一种理想的客户端存储机制。他的容量很小，缺乏数据操作接口，而且会影响性能。只有那些每次请求都需要服务器知道的信息，才应该放在cookie里面

### 1.3 cookie的组成

> cookie由以下几部分组成
>
> - cookie的名字（key）
> - cookie的值（value）：cookie的数据信息
> - 过期时间（expire）：超过这个时间会被删除
> - 所属域名（domain）：默认为当前域名，用来指定携带cookie的域名信息
> - 生效路径（path）：只有资源地址匹配生效路径的时候，才会携带cookie



## 二. Cookie与Http协议

> cookie由Http协议生成，也主要服务于Http协议

### 2.1 服务器设置Cookie

如果服务器希望在浏览器保存cookie，就要在Http回应的头部信息里面，放置一个 `set-Cookie` 字段

一个 `set-Cookie` 可以同时包含多个属性，没有次序要求

~~~http
set-Cookie: <cookie-name>=<cookie-value>;Domain=<domain-value>;Secure;HttpOnly
~~~

### 2.2 Http请求：cookie的发送

浏览器向服务器发送Http请求时，每个请求上面都会带上相应的 Cookie。

也就是说，把服务器保存在浏览器的信息，再发回服务器，这时候需要用到Http头部的Cookie字段

~~~http
Cookie: <cookie-name>=<cookie-value>
~~~



## 三. Cookie属性

### 3.1 Expire,Max-age

> **Expire：**
>
> - 指定一个具体到期时间，到期会自动删除
> - 如果不设置或者设置为null，则只在当前会话有效，浏览器关闭就会被删除
>
> **Max-age：**
>
> - 指定从现在开始，cookie存在的秒数，如一年（60 * 60 * 24 * 365）
>
> **另：**
>
> - 如果同时设置了 `Expire` 和 `Max-age` ，则 `Max-age` 优先级高于 `Expire`
> - 如果 `set-Cookie` 没有指定 `Expire` 和 `Max-age`属性，那么这个 cookie就是 Session Cookie，只在本次会话有效，浏览器一旦关闭，就失效

### 3.2 Domain,path

> **Domain**
>
> - Domain属性指定在浏览器发出Http请求时，哪些域名要附带这个cookie。如果没有设置，浏览器会默认将其设置为当前域名
> - 如果指定了 `domain` ,那么子域名也会附带这个cookie
>
> **path**
>
> - 指定当前域名下，哪些路径要附带这个cookie
> - 如果属性值是 `/` ，那么当前域名下的所有路径都会附带这个cookie

### 3.3 Secure,HttpOnly

> **Secure**
>
> - 该属性只是一个开关，无须赋值
> - 如果是 HTTPs协议，则自动打开
>
> **HttpOnly**
>
> - 指定该cookie无法通过Js脚本拿到
> - 只有浏览器发出请求时，才会附带出cookie

### 3.4 document.cookie

> 用于独写当前网页的cookie

## 参考文章

阮一峰-网道-cookie：<https://wangdoc.com/javascript/bom/cookie.html>