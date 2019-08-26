//获取gulp对象
const gulp = require("gulp")

//获取压缩 css文件的对象
const minifyCss = require("gulp-minify-css")

// 定义压缩文件的处理方法
function css(){
    //1. 匹配要所有压缩的css文件
    gulp.src('css/*.css')
    //2. 压缩文件
    .pipe(minifyCss())
    //3. 将压缩后的文件写入指定目录
    .pipe(gulp.dest('dist/css'))
}

//升级：自动监听文件的改变，
//创建监听js文件的方法
function autoCss(){
    // 创建监听对象
    var watcher = gulp.watch("css/*.css");

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
// exports.default = gulp.series(css,autoCss);
exports.autoCss = gulp.parallel(css,autoCss);