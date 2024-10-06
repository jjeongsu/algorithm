const fs = require('fs')
const input = fs.readFileSync('../../example.txt').toString().split('\n')

const N = Number(input[0])
const ballons = input[1].split(' ').map(e => Number(e))
const 총_높이 = 1000001
const arrow = new Array(총_높이).fill(0)
let result = 0

for (let i = 0; i < ballons.length; i++) {
  const current = ballons[i] //현재 맞출 풍선의 위치
  if (arrow[current] > 0) {
    //현재 풍선의 위치에 화살이 있다면
    arrow[current] -= 1 // 풍선을 맞추고
    arrow[current - 1] += 1 // 한칸 아래로 화살 이동
  } else {
    //현재 풍선의 위치에 화살이 없다면
    arrow[current - 1] += 1 //새로운 화살로 풍선을 맞추고 한칸아래로 이동
    result += 1 //새로운 화살을 사용했으므로 사용한 화살 갯수에 추가
  }
}

console.log(result)
