# typeof和instanceof

## typeof操作符

- **typeof可以用来判断除null之外所有的基本数据类型**
- **typeof在判断复杂数据类型的时候，除了函数可以判断出来之外，其它的都返回object**

~~~js
typeof "abc"		//string
typeof 123			//number
typeof true			//boolean
typeof undefined	//undefined
typeof null			//object
function func(){}
typeof func			//function
~~~



## instanceof操作符

1. **instanceof 左操作数是一个类，右操作数是标识对象的类**
2. **如果左侧的类是右侧类的实例，则返回true**
3. **如果左操作数不是对象，则返回false，如果右操作数不是不是函数，则抛出类型错误**
4. **instanceof操作符多用来比较自定义的对象**
5. **instanceof操作符还可以用来比较内置的数据类型**

~~~js
new Number() instanceof Number			//true
new String() instanceof String			//true
~~~





## 扩展

**js中哪些数据在做判断的时候会返回false**

- 0，false，null，undefined，“”，NaN