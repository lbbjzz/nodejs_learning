const fs = require('fs')

// 删除文件
fs.unlink('./remove_test/test.js', err => {
  if (err) {
    console.log(err);
    return
  }
  console.log('删除文件成功')
})