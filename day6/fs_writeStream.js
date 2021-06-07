const fs = require('fs')

const write = fs.createWriteStream('./write.txt')

let str = ''
for (let i = 0; i < 500; i++) {
  str += '这是写入测试\n'
}
write.write(str)
// 标记文件末尾
write.end()
write.on('finish', () => {
  console.log('写入完成')
})