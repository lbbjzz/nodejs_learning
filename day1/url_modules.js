let url = require('url')

let api = 'www.google.com?name=liudong&age=23'

console.log(url.parse(api, true))

let getValue = url.parse(api, true).query

console.log(getValue)