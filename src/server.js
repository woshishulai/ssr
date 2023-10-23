import ReactDom from "react-dom/server"
import React from "react"
import Home from './pages/Home'
import express from "express"
//无法运行 因为es6代码node无法识别import和函数式组件
// const express = require('express')

const app = express()
app.use(express.static('@/assets/img'))
app.get("*", (req, res) => {
    //将组建转换成字符串
    const componentHtml = ReactDom.renderToString(<Home></Home>)
    console.log(componentHtml);
    const html1 = `<!DOCTYPE html>
<html lang="en">

<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>服务端渲染</title>
</head>

<body>
        <div class="app">
         ${componentHtml}
        </div> 
</body>

</html>`
    res.send(componentHtml)
})


app.listen(8080, () => {
    console.log('启动了服务器');
})