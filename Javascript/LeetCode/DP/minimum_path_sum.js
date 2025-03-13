/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  // dp
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 && j === 0) continue;

      if (i <= 0) {
        // 위에서 오는 방향이 존재하지 않음
        grid[i][j] = grid[i][j - 1] + grid[i][j];
      } else if (j <= 0) {
        // 왼쪽에서 오는 방향이 존재하지 않음
        grid[i][j] = grid[i - 1][j] + grid[i][j];
      } else {
        grid[i][j] = Math.min(grid[i][j - 1], grid[i - 1][j]) + grid[i][j];
      }
    }
  }
  return grid[rows - 1][cols - 1];
};
