//获取gulp对象
const gulp = require("gulp")

// 压缩js文件的对象，使用之前需要安装
// 安装方法：npm i gulp-uglify -D
const uglify = require("gulp-uglify")

// 定义压缩文件的处理方法
function script(){
    //1. 匹配要所有压缩的js文件
    gulp.src('js/*.js')
    //2. 压缩文件
    .pipe(uglify())
    //3. 将压缩后的文件写入指定目录
    .pipe(gulp.dest('dist/js'))
}

//升级：自动监听文件的改变，
//创建监听js文件的方法
function autoScript(){
    // 创建监听对象
    var watcher = gulp.watch("js/*.js");

    //分别监听 change,add,unlink事件
    watcher.on("change",function(path,stats){
        console.log(`${path} has been changed!`);
    });
    watcher.on("add",function(path,stats){
        console.log(`${path} has been add!`);
    });
    watcher.on("unlink",function(path,stats){
        console.log(`${path} has been unlink!`);
    })
}

//将定义好的压缩方法暴露给外界，并作为gulp的默认值
// exports.default = gulp.series(script,autoScript);
exports.autoScript = gulp.parallel(script,autoScript);