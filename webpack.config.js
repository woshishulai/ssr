const path = require('path')
const removeNode = require('webpack-node-externals')
module.exports = {
    mode: 'development',
    //浏览器环境
    devtool: 'source-map',
    // devtool: 'none',
    //打包入口文件
    entry: './src/server',
    //高速浏览器是node环境
    target: 'node',
    output: {
        filename: 'server.js'
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, 'src')
        },
        extensions: [
            ".js", ".jsx", ".css"
        ]
    },
    //排除掉nodemodules
    externals: [removeNode()],
    module: {
        rules: [
            {
                //当匹配到jsx的文件时 使用
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: [
                    {
                        //这个包
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-react"]
                        }
                    }
                ]
            }
        ]
    }
}