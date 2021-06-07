const fs = require('fs')

const read = fs.createReadStream('./write.txt')
let str = ''
let count = 0
read.on('data', (data) => {
  // console.log(str + data)
  str += data
  count++
})
read.on('end', () => {
  console.log(str)
  console.log('读取完成')
  console.log(`读取次数${count}`)
})