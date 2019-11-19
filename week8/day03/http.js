let http = require('http');//process.nav node
let {
    readFile
} = require('./promiseFS.js');
let url = require('url');
http.createServer((req, res) => {
    //req 存放的是请求信息
    //res 存放的是响应信息
    //只要前端发起请求，就会执行该函数
    // console.log(req.url) 前端的请求路径
    //req.method 前端的请求方式
    // console.log(req.method);
    console.log(url.parse(req.url,true));//解析前端路径
    //pathname 是前端给的纯路径
    //query 是前端在路径上给的参数
    let {pathname,query} = url.parse(req.url,true);
    if (pathname == '/favicon.ico') {
        //前端请求的是小图标
        readFile('./2.png').then(data => {
            console.log(data)
            res.end(data)
        }).catch(() => {
            //读取失败
            res.statusCode = 404; //给前端的状态码
            res.statusMessage = 'hello hahah'; //给前端的状态文本
        })

    } else {
        res.end(JSON.stringify(query));
        // res.end('666') //给前端响应的
    }
    // res.end('888')
    // res.statusCode = 404;//给前端的状态码
    // res.statusMessage = 'hello hahah';//给前端的状态文本

}).listen(8000, () => {
    //服务启动成功之后会执行的函数
    console.log('服务启动成功 端口是8000')
})