// 오븐 시계
const fs = require('fs')

const input = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n')

let hour = parseInt(input[0].split(' ')[0])
let min = parseInt(input[0].split(' ')[1])
let time = parseInt(input[1])

const totalMin = hour * 60 + min + time
const resultMin = totalMin % 60
let resultHour = Math.floor(totalMin / 60)
resultHour = resultHour >= 24 ? resultHour % 24 : resultHour
console.log(resultHour + ' ' + resultMin)
