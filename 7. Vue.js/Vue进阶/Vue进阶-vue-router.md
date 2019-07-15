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

#### 区别比较

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

   

