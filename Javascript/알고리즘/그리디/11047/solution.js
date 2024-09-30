const fs = require('fs')
//const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const input = fs.readFileSync('../../../example.txt').toString().split('\n')

const n = Number(input[0].split(' ')[0]) //동전의 갯수
const k = Number(input[0].split(' ')[1]) //만들어야 될 숫자
let cur_money = k
let arr = []
for (let i = 1; i < input.length; i++) {
  arr.push(Number(input[i]))
}

arr.sort((a, b) => b - a) // 화폐단위를 내림차순으로 정렬해보기
let count = 0 // 몇개의 동전을 사용했는지 카운트

for (let i of arr) {
  // 화폐단위를 하나씩 확인하면서
  if (cur_money == 0) break //현재 돈을 모두 화폐단위로 환산 완료하면 break

  let mok = Math.floor(cur_money / i) // 해당 화폐단위로 나눌때의 목을 구한다
  if (mok > 0) {
    // 몫을 구할수 있다면
    cur_money = cur_money - mok * i //남은 돈을 다시 계산
    count += mok
  }
}
console.log(count)
