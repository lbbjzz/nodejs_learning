// 判断服务上面有没有upload目录，如果没有的话创建这个目录，如果有的话不做操作（图片上传）

const fs = require('fs')
let path = './upload'
fs.stat(path, (err, data) => {
  if (err) {
    // 执行创建目录
    mkdir(path)
    return
  }
  if (data.isDirectory()) {
    console.log('Upload目录存在')
  } else {
    // 删除文件后，执行创建目录
    fs.unlink(path, err1 => {
      console.log(err1)
      return
    })
    console.log('删除文件成功')
    mkdir(path)
  }
})

// 创建目录
function mkdir(dir) {
  fs.mkdir(dir, err => {
    if (err) {
      console.log(err)
      return
    }
    console.log('创建成功')
  })
}