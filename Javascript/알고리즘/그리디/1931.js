const fs = require('fs')
const input = fs.readFileSync('../../example.txt').toString().split('\n')

const N = Number(input[0])
const schedule = []
for (let i = 1; i <= N; i++) {
  let element = input[i].split(' ').map(e => Number(e))
  schedule.push(element)
}
//(1)종료시점이 빠른 순서대로 (2) 시작시점이 빠른 순서대로 오도록 정렬
schedule.sort((a, b) => {
  if (a[1] !== b[1]) {
    // 종료시점기준 오름차순
    return a[1] - b[1]
  } else {
    return a[0] - b[0] // 시작시점기준 오름차순
  }
})

let end = schedule[0][1]
let count = 1
// Schdule을 확인하면서
for (let i = 1; i < N; i++) {
  // 시작시점이 현재 확정된 종료 시점이후라면
  if (schedule[i][0] >= end) {
    // 스케쥴에 추가하고 : count 업데이트
    count += 1
    // 종료시점을 업데이트
    end = schedule[i][1]
  }
}
console.log(count)
