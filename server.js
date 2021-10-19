const express = require('express');
const app = express()
app.use(express.urlencoded({ extended: true }))

// 使用中间件解析json编码形式的请求体参数、
app.use(express.json())
app.use(express.static(__dirname + '/src'))

app.get('/test_get', (request, response) => {
    console.log('有人请求test_get了');
    response.send('hello_test_get!!!!')
})
app.post('/test_post', (request, response) => {
    console.log('有人请求test_post了', request.body);
    response.send('hello_test_post')
})
app.listen(8080, (err) => {
    if (!err) {
        console.log('测试ajax请求的服务器开启成功了！测试地址如下');
        console.log('http://127.0.0.1:8080/_ajax小试牛刀.html');
        console.log('http://127.0.0.1:8080/2_ajax_post请求.html');
    }
})