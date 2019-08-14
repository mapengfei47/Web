# GET和POST的区别

## 一.Get和Post报文上的区别

**<font color='red'>Get和Post没有实质区别，只是报文格式不同</font>**

> Get和Post只是Http中的两种请求方式，而Http是基于TCP/IP 的应用层协议，无论是Get还是Post，用的都是同一个传输协议，所以在传输上，没有区别

- 在不带参数的时候，Get和Post最大区别就是请求头部的方法名不同

  ~~~http
  POST /uri HTTP/1.1 \r\n
  
  GET /uri HTTP/1.1 \r\n
  ~~~

- 带参数的时候，区别在于传参的位置不同

  - Get方法的参数在URL中，Post的参数在requestBody中

  ~~~http
  GET /index.php?name=qiming.c&age=22 HTTP/1.1
  Host: localhost
  
  POST /index.php HTTP/1.1
  Host: localhost
  Content-Type: application/x-www-form-urlencoded
  
  name=qiming.c&age=22
  ~~~

  

## 二.常见问题

### 2.1 Get参数的写法是固定的吗？

> 在约定中，我们是通过在URL后面加上 ==？==并且使用==&==来分割不同的参数
>
> 但是内层实际上是使用正则表达式来获取数据，也就是说，只要服务端能够解释出来就行，一种比较流行的写法是 `http://www.example.com/user/name/chengqm/age/22`

### 2.2 Post方法比Get方法更安全？

- 从表面上看，Post方法确实比Get方法更安全一些，Get方法的参数在URL上可见，而Post方法的参数在requestBody中
- 从传输层面上来看，他们都是不安全的，因为HTTP在网络上都是明文传输的，只要在网络节点上抓包，就能完整的获取报文信息
- 要想安全传输，就只有加密，也就是Https

### 2.3 Get方法的长度限制是怎么回事

- 实际上，Http协议是没有Body和URL的长度限制的，对于URL的限制大多数都是浏览器和服务器的原因
- 服务器是因为处理长URL要消耗比较多的资源，为了性能和安全考虑，会给URL长度加限制

