// 주사위 세개
// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.

const fs = require('fs')
let numList = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split(' ')

const result = numList.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1
  return acc
})

console.log(result)
