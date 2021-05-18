const fs = require('fs')

// 读取目录
fs.readdir('./mkdir_test', (err, data) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(data)
  }
)