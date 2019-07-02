

## **1. 作用**

​	快速创建一个基于webpack模板的项目

## **2. 安装工具**

1. **安装webpack**：使用npm全局安装**webpack**,打开命令行工具，输入 `npm install webpack -g`，安装完成之后，输入 `webpack -v` 即可查看当前安装版本，出现版本号说明安装成功

2. **全局安装vue-cli：**在命令行输入 `npm install --global vue-cli`，安装完成之后，输入 `vue -V`查看当前版本号

   ![1559199350093](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\1559199350093.png)

## 3. 使用Vue-cli来构建项目

1. 新建文件夹Vue，进入文件夹，输入 `vue init webpack vue-cli-test`，其中vue-cli-test为新项目文件名

2. 跳入选择项来进行项目信息填写与确认

   - Project name (baoge)： -----项目名称，直接回车，按照括号中默认名字（注意这里的名字不能有大写字母，如果有会报错Sorry, name can no longer contain capital letters），阮一峰老师博客[为什么文件名要小写](https://link.jianshu.com/?t=http://www.ruanyifeng.com/blog/2017/02/filename-should-be-lowercase.html) ，可以参考一下。

   - Project description (A Vue.js project)： ----项目描述，也可直接点击回车，使用默认名字

   - Author ()： ----作者，输入mapengfei
     接下来会让用户选择：

   - Runtime + Compiler: recommended for most users 运行加编译，既然已经说了推荐，就选它了
     Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specificHTML) are ONLY allowed in .vue files - render functions are required elsewhere 仅运行时，已经有推荐了就选择第一个了

   - Install vue-router? (Y/n) 是否安装vue-router，这是官方的路由，大多数情况下都使用，这里就输入“y”后回车即可。

   - Use ESLint to lint your code? (Y/n) 是否使用ESLint管理代码，ESLint是个代码风格管理工具，是用来统一代码风格的，一般项目中都会使用。
     接下来也是选择题Pick an ESLint preset (Use arrow keys) 选择一个ESLint预设，编写vue项目时的代码风格，直接y回车

   - Setup unit tests with Karma + Mocha? (Y/n) 是否安装单元测试，选择安装y回车

   - Setup e2e tests with Nightwatch(Y/n)? 是否安装e2e测试 ，选择安装y回车

     ![1559200298526](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\1559200298526.png)

3. 配置完成之后，Vue目录下面多了一个vue-cli-test的文件夹，进入文件夹，下载依赖 `npm install`

   ![1559200448948](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\1559200448948.png)

4. 修改配置，启动项目

   - 修改 config里面的index.js文件

     ![1559200640774](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\1559200640774.png)

   - 修改端口号是为了防止端口号被占用，修改assetsPublicPath属性是因为打包后，外部引入js和css文件时，如果路径是以`'/'`开头，在本地是无法找到对应文件的，所以**如果要在本地打开打包后的文件**，就得修改路劲为`'/'`

   - 输入 `npm run dev` 启动项目，成功后输入访问地址，显示如下界面

     ![1559201117949](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\1559201117949.png)

![1559201144591](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\1559201144591.png)

## 4. 项目目录介绍

![1559201205737](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\1559201205737.png)

在 package.json中可以看到开发和生产环境的配置文件入口

![1559209788442](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\1559209788442.png)

![1559209840135](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\1559209840135.png)

- 可以看到dev中的设置，**build/webpack.dev.conf.js**，该文件是开发环境中webpack的配置入口。
- 在webpack.dev.conf.js中出现**webpack.base.conf.js**，这个文件是开发环境和生产环境，甚至测试环境，这些环境的公共webpack配置。可以说，这个文件相当重要。
- 还有**config/index.js 、build/utils.js 、build/build.js**等，具体请看这篇介绍：
  [https://segmentfault.com/a/1190000008644830](https://link.jianshu.com/?t=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000008644830)

## 5. 打包部署

- 自己开发的项目文件都需要放到src目录下面
- 在项目开发完成之后，使用 `npm run build`来打包项目，打包完成后会生成**dist**文件夹，如果已修改了文件路径，可以直接在本地打开
- 项目上线时，直接将**dist**文件夹放到服务器即可

## 参考文章

https://www.jianshu.com/p/32beaca25c0d