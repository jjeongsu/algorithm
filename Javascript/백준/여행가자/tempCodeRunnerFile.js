const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().split('\n'); //한줄 가져옴
const input = fs.readFileSync('./input.txt').toString().split('\n');

let n = Number(input[0]);
const cityN = Number(input[1]); // 여행할 도시 갯수
const arr = Array.from({ length: n + 1 }, (_, i) => i);
const city = [];
for (let i = 2; i < 2 + cityN; i++) {
  city.push(input[i].split(' '));
}

// 도시 여행 계획
const schedule = input[input.length - 1].split(' ').map((e) => Number(e));

const find = (x) => {
  if (arr[x] === x) {
    return x;
  }
  const currentParent = find(arr[x]);
  arr[x] = currentParent;
  return currentParent;
};

const isUnion = (x, y) => {
  const xp = find(x);
  const yp = find(y);
  if (xp === yp) {
    return true;
  }
  return false;
};

const union = (x, y) => {
  let rx = find(x); // x의 루트노드를 찾는다.
  let ry = find(y); // y의 루트노드를 찾는다.

  if (rx === ry) {
    return;
  } // 두 노드가 이미 연결된 경우

  // 다른 노드라면 큰 값을 가지는 부모 인덱스를 작은 값을 가지는 변수로 넣는다.
  if (rx < ry) arr[y] = rx;
  else arr[x] = ry;

  return;
};

// 여기서 부터 시작
for (let i = 0; i < city.length; i++) {
  for (let j = 0; j < city.length; j++) {
    if (j < i) continue;
    // j > i 인 경우의 대해서만
    if (city[i][j] === '1') {
      union(i + 1, j + 1);
    }
  }
}

for (let i = 1; i < schedule.length - 1; i++) {
  if (isUnion(schedule[i], schedule[i + 1]) === false) {
    console.log('NO');
    return;
  }
}
console.log('YES');
