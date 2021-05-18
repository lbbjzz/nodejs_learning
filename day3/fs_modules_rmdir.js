const fs = require('fs')

// 删除目录 目录下有其他文件时无法删除
fs.rmdir('./remove_test', err => {
  if (err) {
    console.log(err)
    return
  }
  console.log('目录移除成功')
})