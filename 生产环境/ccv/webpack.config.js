const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');
const obj = {
    mode:'production',
    entry:{//入口
        index:'./src/index.js'
    },
    output:{//出口
        filename:'[name].js',
        path:path.resolve(__dirname,'./bulid')
    },
    module:{//插件
        rules:[//规则
            {
                test:/\.css$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[//插件
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
        }),
        new HtmlWebpackPlugin({ // 打包输出HTML
            minify:{//压缩html文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true// 压缩内联css
            },
            filename:'index.html',//文件名
            template:'./src/index.html'//模板路径
        }),
        // new PurifyCssPlugin({
        //     paths:glob.sync(path.join(__dirname,'./src/*.html'))
        // }),
        new optimizeCss(),
    ]
}
module.exports = obj;//模块输出