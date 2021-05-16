const http = require('http')
const tools = require('./tools')

http.createServer((req, res) => {
  res.writeHead(200, {'Content-type': 'text/html;=utf-8'}) // 解决乱码
  res.write("<head><meta charset='UTF-8'></head>") // 解决乱码
  let api = '/hello'
  res.write(tools.formatApi(api))
  res.end()
}).listen(8081)