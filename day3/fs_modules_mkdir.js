const fs = require('fs')

// 创建目录
/*
path        将创建的目录路径
mode        读写权限
callback    回调，传递异常参数err
*/

fs.mkdir('./mkdir_test', err => {
  if (err) {
    console.log(err)
    return
  }
  console.log('创建成功')
})