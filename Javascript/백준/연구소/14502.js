const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
const map = [];
const [rows, cols] = input[0].split(' ');
for (let i = 1; i < input.length; i++) {
  map.push(input[i].split(' '));
}
let result = 0;

const d = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
function spreadVirusAndCountSafe(arr) {
  // 바이러스를 퍼트리기 -> BFS
  const q = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // 퍼트릴 바이러스의 시작위치에 enqueue
      if (arr[i][j] === '2') {
        q.push([i, j]);
      }
    }
  }

  // bfs 시작
  while (q.length > 0) {
    const [curX, curY] = q.shift();

    // 다음 노드 탐색
    for (let [dx, dy] of d) {
      const nextX = curX + dx;
      const nextY = curY + dy;
      if (
        nextX >= 0 &&
        nextY >= 0 &&
        nextX < rows &&
        nextY < cols &&
        arr[nextX][nextY] === '0'
      ) {
        q.push([nextX, nextY]);
        arr[nextX][nextY] = '2';
      }
    }
  }

  // 안전지대 갯수 구하기
  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (arr[i][j] === '0') {
        count += 1;
      }
    }
  }
  return count;
}

function backtrack(n) {
  // 종료 조건
  if (n === 3) {
    let arr = map.map((e) => [...e]);
    const safeZone = spreadVirusAndCountSafe(arr);
    result = Math.max(result, safeZone);

    return;
  }

  // map을 순회하면서 벽 세우기
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (map[i][j] === '0') {
        map[i][j] = '1';
        backtrack(n + 1);
        map[i][j] = '0';
      }
    }
  }
}

backtrack(0); //벽 0개 새울때부터 시작
console.log(result);
