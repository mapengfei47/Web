# 一.Javascript简介
 
### JavaScript实现：
1. 核心（ECMAScript）
2. 文档对象模型（DOM）
3. 浏览器对象模型（BOM）

### 使用DOM的优点：
1. 无须重新加载网页，就可以修改其外观和内容
2. 借助DOM的API，开发人员可以轻松自在的对任何节点进行增删改查

### 总结
JavaScript是一种专门为与网页交互而设计的脚本语言，由三个不同的部分组成
1. ECMAScript：提供核心语言功能，提供一种标准
2. 文档对象模型（DOM）：提供访问和操作网页内容的方法和接口
3. 浏览器对象模型（BOM）：提供与浏览器交互的接口和方法
---


# 二.在HTML中使用JavaScript

### script标签元素
向HTML中添加JavaScript的主要方法就是使用script标签元素，script标签元素有如下属性：
> 1. async:可选，规定异步执行脚本，只对外部文件有效
> 2. charset:可选，规定脚本中使用的字符编码，只对外部文件有效
> 3. defer:可选，表示文档可以延迟到文档完全被解析之后再执行，告诉浏览器立即下载，延迟执行，只对外部文件脚本有效
> 4. src：可选，表示包含要执行的外部文件路径
> 5. type：可选，如果没有指定，则默认为 text/javascript 
```
	<script type="text/javascript" src="test.js" charset="UTF-8" async defer></script>
```

### script标签的位置
传统的做法都是将script标签放于head标签中，这种做法会加大页面结构的渲染时间
为确保网页的文档结构在脚本之前加载，通常把script标签放于文档结构的最后，即body结束标签之前
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	
	<!-- 传统的做法，将script标签放在head标签中 -->
	<!-- <script src="test.js"></script> -->
</head>
<body>
	<!-- 这里是内容区 -->
	
	<!-- 将script标签放于最后，加快页面的打开速度 -->
	<script src="test.js"></script>
</body>
</html>
```

### 嵌入代码和外部文件
外部文件的优点
> 1. 可维护性强，在不触碰HTML文件的情况下，维护js代码
> 2. 可缓存，如果多个页面同时需要使用同一个文件，则只需要加载一遍
> 3. 适应未来

### noscript元素
当浏览器不支持脚本或者脚本被禁用的情况下noscript标签才会生效
```
<html>
	<head>
		<title>noscript测试</title>
		<script type="text/javascript" src="text.js"></script>
	</head>
	<body>
		<noscript>
			<p>本页面需要浏览器支持（启用）JavaScript。</p>
		</noscript>
	</body>
</html>
```

### 总结
1. 在包含外部的js文件时，必须将src属性指向相应文件的URL，这个文件即可以是本地的文件，也可以是任何域中的文件
2. 所有的script元素都会按照他们在HTML文件中的顺序被解析，在不使用defer和sync的情况下，只有前面的script中的代码被解析完成才会解析后面script中的代码
3. 由于浏览器解析HTML文件是按照顺序解析的，所以按照传统的写法，会先解析script元素，再解析body里面的元素，影响页面的显示速度，所以最好的做法是把script标签放于body标签结束之前
4. 使用defer属性可以让脚本在文档完全显示之后再执行
5. 使用async可以表示当前脚本不用等待其他脚本，也不必阻塞文档呈现，但是不能保证异步脚本按照他们在文档中的顺序被执行
6. 使用noscript元素可以指定在浏览器不支持脚本时显示替代的内容，但是启用了脚本的浏览器中，则不会显示noscript的任何内容
---

# 三.基本概念

## 3.1 语法

### 区分大小写
> - ECMAScript中的一切都区分大小写，包括变量，函数名和操作符

### 标识符
即所谓的变量，函数，属性的名字，或者函数的参数
> 1. 第一个字符必须是一个字母，下划线（_），或者一个美元符号（$）
> 2. 其它的字符可以是字母，下划线，美元符号或者数字

### 注释
> 1. 单行注释：//
> 2. 多行注释：

```
//这是一个单行注释

/**
 * 这是一个多行注释
 * 可以包含多行
 */
```

## 3.2 关键字和保留字
**关键字**

|	|	|	|	|
|--	|--	|--	|--	|
|break|do|instanceof|type|
|case|else|new|var|
|catch|finally|return|void|
|continue|for|switch|while|
|debugger|function|this|with|
|default|if|throw|	|
|delete|in|try|	|

**保留字**

|	|	|	|	|
|--	|--	|--	|--	|
|abstract|enum|int|short|
|boolean|export|interface|static|
|byte|extends|long|super|
|char|final|native|synchronized|
|class|float|package|throws|
|const|goto|private|transient|
|debugger|implements|protected|volatile|
|double|import|public|	|

## 3.3 变量
> 1. ECMAScript的变量是松散型的，即声明的变量可以用来保存任何类型的值，也叫作弱数据类型
> 2. 使用 var 关键字来声明变量，需要注意的是，使用var 关键字声明的变量将成为定义该变量的作用域的局部变量
> 3. 定义变量的时候，可以省略 var关键字（不推荐这么做），这种情况下定义的变量也为全局变量

### 使用var声明变量和不使用var声明变量的区别
- 在局部作用域中
	* 使用var声明的是局部变量，在外部访问不到
	* 不用var声明的是全局变量，在调用函数之后，在外部可以访问
```
<script type="text/javascript">
	  function f(){
		 var n = 1;
		 m = 3;
		 alert("调用函数了！");
	  }
	  // 必须在调用函数之后，才可以访问m变量
	  f();
	  console.log(m);   //返回3
</script>
```
- 在全局作用域中
	* 使用var声明的是全局变量，带有不可删除性
	* 不用var声明的是全局对象的一个属性，可以当做全局变量使用，但是可以从全局变量中删除
```
<script type="text/javascript">
	var a = 65;
	A = 97;
	console.log(a + "," + A);                   //返回65,97
	console.log(delete window.a);        //false,不可删除
	console.log(delete window.A);       //true 可删除
	console.log(a + "," + A);                   //报错,A不存在
</script>
```
---

## 3.4 数据类型
ECMAScript有5种简单数据类型（即基本数据类型）：Undefined，Null，Boolean，Number和String，还有一种复杂数据类型——Object，Object本质上是一组无序的键值对组成

### 3.4.1 typeof操作符
> 1. typeof操作符用来检测给定的数据类型
> 2. typeof的操作数可以是变量，也可以是字面量
> 3. typeof是一个操作符而不是一个函数，但是使用的时候可以加括号但不是必须的

```
<script type="text/javascript">
	var message = "javascript";
	
	console.log(typeof message);	//string
	console.log(typeof (message));	//string
	console.log(typeof 95);			//number
</script>
```

### 3.4.2 Undefined类型
对于声明之后为复制的变量，使用typeof检测会返回undefined
```
var age;
console.log(typeof age);	//undefined
```

### 3.4.3 null类型
- null值表示一个空对象指针，使用typeof检测null会返回object
- 使用 == 操作对比 null 和 undefined 时返回true

### 3.4.4 Boolean类型
|数据类型| 转换为true|转换为false|
|--	|--	|--	|
|Boolean|true|false|
|String|任何非空字符串|空字符串 “”|
|Number|任何非0数值|0和NaN|
|Object|任何对象|null|
|Undefined|不适用|undefined|

### 3.4.5 Number类型
#### 数值范围
> - 最小值：Number.MIN_VALUE    ---> 5e-324
> - 最大值：Number.MAX_VALUE    ---> 1.7976931348623157e+308
> - 判断一个数值是否在最大值和最小值之间：isFinite(number)
#### NaN
> - Nan即非数值(Not a Numberdd)
> - NaN与任何值都不相等，包括它本身
> - isNaN(param) ,该函数可以判断参数是不是非数字
```
console.log(isNaN(NaN));		// true
console.log(isNaN(10));			// false
console.log(isNaN("10"));		// false
console.log(isNaN("blue"));		// true
```
#### 数值转换
> - Number(param)
>	* 如果是Boolean值，true转换为1，false转换为0
>	* 如果是数字值，只是简单的传入和传出
>	* null值，返回0
>	* undefined返回 NaN
>	* 如果是字符串
>		+ 如果字符串只包含数字，则转换为相对应的数字
>		+ 如果字符串中包含浮点格式，则转换为对应的浮点数
>		+ 如果字符串中包含有效的十六进制格式，如“0xf”,则将其转换为相同大小的十进制数
>		+ 如果字符串为空，则将其转换为0
>		+ 如果字符串中包含其他字符，则将其转换为NaN
>	* 如果是对象，
> - parseInt(a,b)
> 	* a:需要转换的字符串或者数字
> 	* b:把a当做(2,8,10,16)进制其中一个数进行转换
> - parseFloat(param)

### 3.4.6 String
#### 字符串的特点
> 1. 字符串一旦创建，它们的值就不可改变，
> 2. 任何字符串的长度都可以通过length属性获得

#### 转换字符串
> 1. 使用toString()方法，该方法有一个可选参数，指定以多少进制的格式输出
> 2. 使用String()方法
> 3. 使用+号符号，相加即可

### 3.4.7 Object
ECMAScript的对象是一组数据和功能的集合
Object的每个对象都有 下列属性和方法
> 1. constructor：当前对象的构造函数
> 2. hsaOwnProperty(propertyName)：判断当前对象是否拥有指定的属性
> 3. isPrototypeOf(Object)：判断传入的对象是否是当前对象的原型
> 4. toString()：返回对象的字符串表示
> 5. valueOf()：通常与toString()的返回值相同



