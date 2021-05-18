const fs = require('fs')

// 检测是文件还是目录
fs.stat('../day1/http_modules.js', (err, data) => {
  if (err) {
    console.log(err);
    // return不能少
    return
  }
  console.log(`是文件:${data.isFile()}`)
  console.log(`是目录:${data.isDirectory()}`)
})
