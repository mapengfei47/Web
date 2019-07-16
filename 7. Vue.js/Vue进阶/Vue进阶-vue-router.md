**<router-link>相关属性**

- **to：**表示目标路由的链接，当被点击后，内部会立刻把 to 的值传到 router.push()

- **replace：**设置 replace 属性的话，当点击时，会调用 router.replace() 而不是 router.push()，导航后不会留下 history 记录

  ~~~js
  <router-link to="/home" replace></router-link>
  ~~~

- **append：**在当前路径前增加基路径

  ~~~js
  <router-link to="baseurl/home" append></router-link>
  ~~~

- **event：**声明可以触发导航的事件

  ~~~js
  <router-link to="/foo" event="mouseover">Go to Foo</router-link>
  ~~~

- ...



# Vue-router

[TOC]

## 一.安装

1. 直接下载：[点我下载](https://unpkg.com/vue-router/dist/vue-router.js)

2. 使用网上的资源：`<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>`

3. 通过npm下载：

   > 如果在一个模块化工程中使用它，必须要通过 `Vue.use()` 明确地安装路由功能：

   ~~~js
   npm install vue-router
   
   //在模版中引用
   import Vue from 'vue'
   import VueRouter from 'vue-router'
   
   Vue.use(VueRouter)
   ~~~



## 二.基本模版

1. 定义组件
2. 配置路由
3. 创建路由对象
4. 挂载Vue实例

~~~html
<div id="app">
    <h1>hello world!</h1>
    <p>
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view></router-view>
</div>

<script type="text/javascript">
    //定义组件
    const Foo = {template:"<div>Foo</div>"}
    const Bar = {template:"<div>Bar</div>"}
	
    //配置路由
    const routes = [
        {path:'/foo',component:Foo},
        {path:'/bar',component:Bar}
    ];
	//创建路由对象
    const router = new VueRouter({
        routes
    });
	//挂载APP
    const app = new Vue({
        router
    }).$mount("#app");
</script>
~~~



## 三.路由传参

### 3.1 URL传参

- 直接通过在路径中指定参数以及参数值，在模版中使用 this.$route.query来获取参数对象

~~~HTML
<body>
    <div id="app">
        <h1>hello world~</h1>
        <router-link to="login?id=10&name='mical'">Login</router-link>

        <router-view></router-view>
    </div>

    <template id="temp">
        <div>
            <h1>login success ---{{$route.query.id}} --- {{$route.query.name}}</h1>
        </div>
    </template>
    <script type="text/javascript">
        var login = {
            template:"#temp"
        }
        var routes = [
            {path:'/login',component:login}
        ];
        var router = new VueRouter({
            routes
        });
        var vm = new Vue({
            el:"#app",
            router
        })
    </script>
~~~

### 3.2 路由配置 + URL传参

- 在路由配置中指定参数列表，通过 this.$route.params对象获取参数对象

~~~HTML
<div id="app">
        <h1>hello world!</h1>
        <router-link to="/login/10/mical">Login</router-link>

        <router-view></router-view>
    </div>

    <template id="temp">
        <h1>Login success ----{{$route.params.id}}----{{$route.params.name}}</h1>
    </template>
    <script type="text/javascript">

        var login = {
            template:'#temp',
            created () {
                console.log(this.$route)
            }
        }
        var routes = [
            {path:'/login/:id/:name',component:login}
        ]

        var router = new VueRouter({
            routes
        })
        var v = new Vue({
            el: "#app",
            router
        })
    </script>
~~~

### 3.3 区别比较

1. 第一种方式是通过RUL指定参数名和参数值，在组件中使用 this.$route.query获取参数对象

   - 关键步骤

   ~~~js
   <router-link to="login?id=10&name='mical'">Login</router-link>
   
   <h1>login success ---{{$route.query.id}} --- {{$route.query.name}}</h1>
   ~~~

2. 第二种方式为直接在路由配置里面配置参数列表，在URL中按照参数列的顺序指定参数值即可，在组件中使用 this.$route.params获取参数对象

   - 关键步骤

   ~~~js
   <router-link to="/login/10/mical">Login</router-link>
   
   var routes = [
               {path:'/login/:id/:name',component:login}
           ]
   ~~~

   

## 四.路由嵌套

**路由嵌套：**<font color='red'>当前页面包含其它页面的跳转的时候，就需要使用路由嵌套</font>

- account 组件包含两个跳转链接
- 在account路由配置里面添加children属性，并添加包含的两路由配置

~~~html
<div id="app">
        <h1>hello router!</h1>
        <router-link to="/account">Account</router-link>
        <router-view></router-view>
    </div>
    <template id="account">
        <div>
            <h1>Account</h1>
            <router-link to="/account/login">Login</router-link>
            <router-link to="/account/register">Register</router-link>
            <router-view></router-view>
        </div>
    </template>
    <script type="text/javascript">
        var account = {
            template:'#account'
        }

        var login = {
            template:`<h3>longin success</h3>`
        }

        var register = {
            template:`<h3>register success</h3>`
        }

        var router = new VueRouter({
            routes:[
                {
                    path: '/account',
                    component: account,
                    children:[
                        {path:'login',component:login},
                        {path:'register',component:register}
                    ]
                }
            ]
        })

        var vm = new Vue({
            router
        }).$mount("#app")
    </script>
~~~

**<font color='red'>重点代码：</font>**

~~~HTML
<template id="account">
        <div>
            <h1>Account</h1>
            <router-link to="/account/login">Login</router-link>
            <router-link to="/account/register">Register</router-link>
            <router-view></router-view>
        </div>
    </template>
<script>
	var router = new VueRouter({
            routes:[
                {
                    path: '/account',
                    component: account,
                    children:[
                        {path:'login',component:login},
                        {path:'register',component:register}
                    ]
                }
            ]
        })
</script>
~~~

**<font color='red'>注意：</font>**

- 子路由的path前面，不要带`/`,否则永远以根路径开始请求



## 五.编程式导航

> 除了使用 `<router-link>` 创建 a 标签来定义导航链接，我们还可以借助 router 的实例方法，通过编写代码来实现



## 六.命名视图

> 简单来说就是给每一个 <router-view>设置name属性，只有该属性和路由配置里面的属性名对应的时候，才会展示该视图，通常用于同级展示多个视图

- **示例：利用命名视图，实现一个header，sideBar，main的经典布局**

~~~HTML
 <style>
     .header{
         height: 80px;
         background-color: pink;
     }

     .container{
         display: flex;
     }

     .left{
         flex: 2;
         height: 800px;
         background-color: tomato;
     }

     .main{
         flex: 8;
         height: 800px;
         background-color: yellowgreen;
     }
</style>

<div id="app">
    <router-view class="header"></router-view>
    <div class="container">
        <router-view name='left' class="left"></router-view>
        <router-view name='main' class="main"></router-view>
    </div>
</div>
<script type="text/javascript">

    var header = {
        template:`<div>这是头部区域</div>`
    }
    var sideBar = {
        template:`<div>这是侧边栏区域</div>`
    }
    var main = {
        template:`<div>这是main主区域</div>`
    }

    const router = new VueRouter({
        routes:[
            {
                path: '/',
                components: {
                    default:header,
                    left:sideBar,
                    main:main
                }
            }
        ]
    });

    var vue = new new Vue({
        el:"#app",
        router
    })
</script>
~~~

**<font color='red'>重点代码</font>**

~~~HTML
<router-view class="header"></router-view>
<div class="container">
    <router-view name='left' class="left"></router-view>
    <router-view name='main' class="main"></router-view>
</div>

const router = new VueRouter({
        routes:[
            {	path: '/',components: {
                    default:header,
                    left:sideBar,
                    main:main
                }
            }
        ]
});

~~~

**<font color='red'>注意：</font>**

- 如果 `router-view` 没有设置名字，那么默认为 `default`。
- 使用命名视图的时候，routes中的`components`记得添加`s`

