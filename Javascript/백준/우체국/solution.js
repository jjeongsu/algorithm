const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

const N = Number(input[0]); // 총 마을의 갯수
const village = [];
let sum = BigInt(0);
for (let i = 1; i <= N; i++) {
  const line = input[i].split(' ').map((e) => BigInt(e));
  sum += line[1];
  village.push([line[0], line[1]]); // village = { 마을 위치 : 사람들 수, ...}
}

// 마을 순서대로 정렬
function solution() {
  village.sort((a, b) => {
    if (BigInt(a[0]) < BigInt(b[0])) return -1;
    if (BigInt(a[0]) > BigInt(b[0])) return 1;
    return 0;
  });
  const mid = BigInt(~~((sum + BigInt(1)) / BigInt(2)));
  let cur = BigInt(0);

  for (let i = 0; i < N; i++) {
    cur += village[i][1]; // 사람 수 추가
    if (cur >= mid) {
      return village[i][0];
    }
  }
  return village[village.length - 1][0];
}
const answer = solution();
console.log(answer.toString().replace('n', ''));
