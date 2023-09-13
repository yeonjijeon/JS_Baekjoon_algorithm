// 첫째 줄에 (A+B)%C
// 둘째 줄에 ((A%C) + (B%C))%C
// 셋째 줄에 (A×B)%C
// 넷째 줄에 ((A%C) × (B%C))%C
const fs = require('fs')
const inputList = require('fs')
  .readFileSync(__dirname + '/input.txt') // .readFileSync('/dev/stdin', 'utf8')
  .toString()
  .trim()
  .split(' ')
const [A, B, C] = inputList.map((e) => parseInt(e))

console.log((A + B) % C)
console.log(((A % C) + (B % C)) % C)
console.log((A * B) % C)
console.log(((A % C) * (B % C)) % C)
