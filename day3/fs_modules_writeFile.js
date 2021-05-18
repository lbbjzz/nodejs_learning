const fs = require('fs')

// 创建以及写入文件
fs.writeFile('./writeFile_test.js', 'let a = 5;let b = 10;', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('创建写入文件成功')
})