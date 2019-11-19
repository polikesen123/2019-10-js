//fs 
//url.parse 获取url 上的参数
//path.resolve 获取绝对路径
//http 起服务的模块


let {
    readFile
} = require('./promiseFs.js');
let http = require('http');
http.createServer((req, res) => {
    //req 存放的是请求信息  res 存放的是响应信息
    //只要前端发起了请求  就会执行该函数
    // console.log(req.url)
    res.end('666'); //给前端响应的
    if (req.url == '/favicon.ico') {
        //前端请求的是小图标
        readFile('./1.png').then((data) => {
            console.log(data)
            res.end(data);
        }).catch(() => {
            res.statusCode = 404; //给前端的状态码
            res.statusMessage = 'hello hahahh';
        });
        // res.end('./1.jpg')
    } else {
        res.end('666')
    }
    // res.end('888');
    // res.statusCode = 404;//给前端的状态码
    // res.statusMessage = 'hello hahahh';
}).listen(8000, () => {
    //服务启动成功之后会执行的函数
    console.log('服务启动成功。端口是8000')
})