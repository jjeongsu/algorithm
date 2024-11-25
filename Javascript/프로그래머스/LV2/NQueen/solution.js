function solution(n) {
  const queen = Array.from({ length: n }, () => 0);
  let count = 0;

  dfs(0); // 0번째 row부터 시작

  function dfs(row) {
    if (n === row) {
      count++;
      return;
    }

    for (let col = 0; col < n; col++) {
      queen[row] = col;
      if (check(row, col)) {
        dfs(row + 1);
      }
    }
  }

  function check(rows, cols) {
    for (let i = 0; i < rows; i++) {
      if (queen[i] === cols) return false; // 수직으로 배치 불가
      if (Math.abs(rows - i) === Math.abs(cols - queen[i])) return false;
    }
    return true;
  }

  return count;
}
console.log(solution(4));
/**
 * 가지치기 기준
 * - 퀸을 둔 행은 패쓰한다.
 * - 퀸들 둔 열은 패쓰한다.
 * - 퀸을 둔 대각석 왼쪽, 오른 쪽은 가지치기를 한다.
 */
