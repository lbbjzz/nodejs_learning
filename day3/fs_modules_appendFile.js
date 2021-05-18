const fs = require('fs')

// 追加文件
fs.appendFile('./appendFile_test.js', 'let b = 1', (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('追加文件成功')
  }
)