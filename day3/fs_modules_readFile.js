const fs = require('fs')

// 读取文件
fs.readFile('./fs_modules_readFile.js', (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(data.toString())
})