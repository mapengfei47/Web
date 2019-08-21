### 1. 什么是nodejs

> `JS`是脚本语言，脚本语言都需要一个解析器才能运行。对于写在HTML页面里的`JS`，浏览器充当了解析器的角色。而对于需要独立运行的`JS`，`NodeJS`就是一个**解析器**。
>
> 每一种解析器都是一个**运行环境**，不但允许`JS`定义各种数据结构，进行各种计算，还允许`JS`使用运行环境提供的内置对象和方法做一些事情。例如运行在浏览器中的`JS`的用途是操作DOM，浏览器就提供了`document`之类的内置对象。而运行在`NodeJS`中的`JS`的用途是操作磁盘文件或搭建HTTP服务器，`NodeJS`就相应提供了`fs`、`http`等内置对象。

### 2. 安装

详见菜鸟nodejs安装教程：[nodejs安装](https://www.runoob.com/nodejs/nodejs-install-setup.html)

### 3. 运行

1. 打开终端（cmd），输入node指定，即可开始输入js代码，输入console.log("hello world!"),返回hello world！
2. 运行一大段代码的时候，定义一个js文件，输入 node 文件名.js即可运行

### 4. 模块化

编写稍大一点的程序时一般都会将代码模块化。在NodeJS中，一般将代码合理拆分到不同的JS文件中，每一个文件就是一个模块，而文件路径就是模块名。

在编写每个模块时，都有`require`、`exports`、`module`三个预先定义好的变量可供使用。

**require：**用于在当前模块中加载和使用其他模块，传入一个模块名，返回一个模块导出对象。模块名可使用相对路径（以`./`开头），或者是绝对路径（以`/`或`C:`之类的盘符开头）。另外，模块名中的`.js`扩展名可以省略。以下是一个例子。

~~~js
var person1 = require("./person");
var person2 = require("./person.js");
~~~

**exports：**`exports`对象是当前模块的导出对象，用于导出模块公有方法和属性。别的模块通过`require`函数使用当前模块时得到的就是当前模块的`exports`对象。以下例子中导出了一个公有方法。

~~~js
exports.hello = function(){
    console.log("hello world!");
}
~~~

**module：**通过`module`对象可以**访问到当前模块的一些相关信息**，但最多的用途是**替换当前模块的导出对象**。例如模块导出对象默认是一个普通对象，如果想改成一个函数的话，可以使用以下方式。

~~~js
module.exports = function(){
    console.log("替换当前模块化到处对象")
}
~~~

以上代码中，模块默认导出对象被替换为一个函数。

**模块初始化：**一个模块中的`JS`代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。之后，缓存起来的导出对象被重复利用。

**主模块：**通过命令行参数传递给NodeJS以启动程序的模块被称为主模块。主模块负责调度组成整个程序的其它模块完成工作。例如通过以下命令启动程序时，`main.js`就是主模块。

~~~js
node main.js
~~~

### 5.完整示例

在同级目录下面，创建`counter.js`，`mian.js`，如下所示

~~~js
var i = 0;

function count() {
    return ++i;
}

exports.count = count;
~~~

~~~js
var counter1 = require('./counter');
var counter2 = require('./counter');

console.log(counter1.count());
console.log(counter2.count());
console.log(counter2.count());
~~~

运行测试：无论counter被初始化多少次，都是同一个counter对象

![1558580814921](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\1558580814921.png)

### 6. 总结

- NodeJS是一个JS脚本解析器，任何操作系统下安装NodeJS本质上做的事情都是把NodeJS执行程序复制到一个目录，然后保证这个目录在系统PATH环境变量下，以便终端下可以使用`node`命令。
- 终端下直接输入`node`命令可进入命令交互模式，很适合用来测试一些`JS`代码片段，比如正则表达式。
- `NodeJS`使用[CMD](http://wiki.commonjs.org/)模块系统，主模块作为程序入口点，所有模块在执行过程中只初始化一次。