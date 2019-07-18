
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {

    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ],
    module:{
        rules:[
            // 处理 css文件的loader
            {test:/\.css/,use:['style-loader','css-loader']},
            // 处理 less文件的 loader
            {test:/\.less/,use:['style-loader','css-loader','less-loader']},
            // 处理scss文件的 loader
            {test:/\.scss/,use:['style-loader','css-loader','sass-loader']},
            // 来处理图片的URL loader
            {test:/\.(jpg|jepg|png|gif)$/,use:'url-loader?limit=1000&name=[hash:8]-[name].[ext]'},
            //处理字体图标
            {test:/\.(eot|svg|woff|woff2|ttf)$/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
        ]
    }
}