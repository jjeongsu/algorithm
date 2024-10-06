const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8').toString().split('\n')
const N = Number(input[0]) //도시의 갯수
const len = input[1].split(' ').map(e => Number(e))
const price = input[2].split(' ').map(e => Number(e))

let cost = BigInt(0)
let min = price[0]
for (let i = 0; i < len.length; i++) {
  if (price[i] < min) {
    min = BigInt(price[i]) // 최저 주유비용 갱신
  }
  cost += BigInt(min) * BigInt(len[i])
}
console.log(String(cost))

/**
 * 문제 : https://www.acmicpc.net/problem/13305
 * 큰 수를 처리할 때 BigInt를 써야한다.
 * 문제에서  도시사이의 거리(len)의 최댓값이 10^9, 주유비용의 최댓값이 10^9이다.
 * Number타입의 값이 나타낼 수 있는 최대치가 253-1이기 때문에 이보다 더 큰 정수이 계산을 정확히 하려면 bigInt형을 사용해야 한다.
 */
