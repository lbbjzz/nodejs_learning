const fs = require('fs')

// 重命名 功能：1.表示重命名； 2.表示移动文件
fs.rename('./rename_test/333.js', './mkdir_test/rename_move.js', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('重命名成功')
})