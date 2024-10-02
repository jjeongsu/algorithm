const fs = require('fs')
const input = fs.readFileSync('../../example.txt').toString().split('\n')

const N = Number(input[0])

let divFive = ~~(N / 5)
const result = []
for (let i = divFive; i >= 0; i--) {
  let divThree = (N - 5 * i) / 3

  if (Number.isInteger(divThree)) {
    //3kg도 만들수 있다.
    result.push(divThree + i)
  }
}
if (result.length === 0) console.log(-1)
else {
  console.log(Math.min(...result))
}

// 또 다른 방법
/**
 * 1.현재 값이 5로 나누어 떨어지는 경우 5로 나눈다
 * 2.그렇지 않다면 기존의 값이 5로 나누어떨어지는 값이 될때까지 3을 빼준뒤, 1을 수행한다.
 */

let count = 0
let flag = false
while (n > 0) {
  // 더이상 반복할 수 없을 때까지 반복
  //n 이 0이 되었거나(전부 3으로 나누어 떨어진 경우) 5로 나누어 떨어지는 값인 경우
  if (n === 0 || n % 5 === 0) {
    count += ~~(n / 5)
    console.log(count)
    flag = true // 값을 구할 수 있다
    break
  }

  n -= 3
  count += 1
}
if (!flag) {
  console.log(-1)
}
