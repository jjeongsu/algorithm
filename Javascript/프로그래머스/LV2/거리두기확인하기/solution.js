function solution(testcases) {
  let answer = [0, 0, 0, 0, 0];
  testcases.forEach((icase, index) => (answer[index] = test(icase)));
  return answer;
}

function test(icase) {
  const map = icase.map((row) => row.split(''));

  // 1. map을 순회하면서 p가 발견된다면 bfs를 수행
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (map[i][j] == 'P') {
        const result = bfs(map, i, j);
        if (result === 0) return 0;
      }
    }
  }
  return 1; // 2. 0을 리턴하지 않고 모든 p 에 대해서 탐색이 완료되었다면, 제대로 앉은 것.
}

function bfs(map, i, j) {
  // 하나의 p 로 부터 2 이하의 거리에 P가 있을 경우 return 1
  // X 일경우 탐색 불가능, O인 자리만 탐색
  const q = [[i, j, 0]]; // (x, y, l)
  const d = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const visited = Array.from({ length: 5 }, () => Array(5).fill(false));
  visited[i][j] = true;
  while (q.length > 0) {
    const [curx, cury, curl] = q.shift();
    if (curl > 0 && map[curx][cury] === 'P') {
      return 0;
    }

    for (let [dx, dy] of d) {
      const nextX = curx + dx;
      const nextY = cury + dy;

      if (
        nextX >= 0 &&
        nextX < 5 &&
        nextY >= 0 &&
        nextY < 5 &&
        visited[nextX][nextY] === false &&
        map[nextX][nextY] !== 'X'
      ) {
        if (curl < 2) {
          visited[nextX][nextY] = true;
          q.push([nextX, nextY, curl + 1]);
        }
      }
    }
  }
  return 1;
}

const testcase = [
  ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
  ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
  ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
  ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
  ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
];

console.log(solution(testcase));
