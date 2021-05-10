// 引入http模块
let http = require('http')
// request  获取url传过来的信息
// response 给浏览器响应信息
http.createServer((request, response) => {
  // 设置响应头
  response.writeHead(200, {'Content-type': 'text/html;=utf-8'}) // 解决乱码
  response.write("<head><meta charset='UTF-8'></head>") // 解决乱码
  response.write('你好NodeJscript，Hello World!');
  // 给页面上输出一句话并且结束响应
  // response.end('Hello World!');
  console.log(`Server running at http://127.0.0.1:8081${request.url}`)
  response.end()
}).listen(8081);  // 端口