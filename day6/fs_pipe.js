// 管道流，传输复制大文件
const fs = require('fs')

let read = fs.createReadStream('./write.txt')
let write = fs.createWriteStream('./pipe.txt')

read.pipe(write)
