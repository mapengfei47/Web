//获取gulp对象
const gulp = require("gulp")

//获取压缩 图片文件的对象
const imagemin = require("gulp-imagemin")

// 定义压缩文件的处理方法
function images(){
    //1. 匹配要所有压缩的图片文件
    gulp.src('imgs/*.*')
    //2. 压缩文件
    .pipe(imagemin({
        progressive: true
    }))
    //3. 将压缩后的文件写入指定目录
    .pipe(gulp.dest('dist/imgs'))
}

//升级：自动监听文件的改变，
//创建监听js文件的方法
function autoImages(){
    // 创建监听对象
    var watcher = gulp.watch("imgs/*.*");

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
// exports.images = gulp.series(images,autoImages);
exports.autoImages = gulp.parallel(images,autoImages);