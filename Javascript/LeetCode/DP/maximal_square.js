/**
 * 1로 만들어진 가ㅇ 큰 정사각형의 넒ㅣ 구기
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let max = 0;
  // early return
  if (rows == 1 && cols == 1 && matrix[0][0] === '0') return 0;
  if (rows == 1 && cols == 1 && matrix[0][0] === '1') return 1;

  // matrix를 탐색
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 || j === 0) {
        max = Math.max(matrix[i][j], max);
        continue;
      }
      if (matrix[i][j] === '0') continue;
      const left = ~~matrix[i][j - 1];
      const top = ~~matrix[i - 1][j];
      const diag = ~~matrix[i - 1][j - 1];
      if (left >= 1 && top >= 1 && diag >= 1) {
        matrix[i][j] = Math.min(left, top, diag) + 1;
      }
      max = Math.max(matrix[i][j], max);
    }
  }
  return max * max;
};

// 생각
// 현재칸과 탐색한 3칸이 모두 1보다 클 때 다음을 수행할 수 있다.
// ex) 어떤 칸에서 왼쪽, 위, 대각선왼쪽위를 탐색하였을 때 모두 1이고, 현재칸도 1이라면 -> 2x2인 정사각형이 존재한다.
// 그러면 현재값의 값을 2로 바꾼다.
// 여기서 2라는 값은 "2x2인 정사각형이 존재하고 가장 오른쪽 아래칸이 나야"라는 뜻
// 갱신될 값은 탐색된 최솟값 +1 이다.
