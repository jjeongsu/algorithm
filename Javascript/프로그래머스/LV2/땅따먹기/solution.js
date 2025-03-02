function solution(land) {
  const rows = land.length;

  // 2번째 줄부터 마지막 줄까지를 구한다.
  for (let n = 1; n < rows; n++) {
    for (let j = 0; j < 4; j++) {
      land[n][j] = land[n][j] + findPreMax(n, j);
    }
  }

  return Math.max(...land[rows - 1]);
  function findPreMax(curX, curY) {
    let max = 0;
    for (let i = 0; i < 4; i++) {
      if (i === curY) continue;
      if (land[curX - 1][i] > max) {
        max = land[curX - 1][i];
      }
    }
    return max;
  }
}

console.log(
  'result1',
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ]),
  'expected',
  16,
);
console.log(
  'result2',
  solution([
    [4, 3, 2, 1],
    [2, 2, 2, 1],
    [6, 6, 6, 4],
    [8, 7, 6, 5],
  ]),
  'expected',
  20,
);
console.log(
  'result3',
  solution([
    [1, 2, 3, 4],
    [2, 3, 4, 100],
  ]),
  'expected',
  103,
);
