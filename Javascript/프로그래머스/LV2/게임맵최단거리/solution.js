function solution(map) {
  const rows = map.length;
  const cols = map[0].length;
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  let q = [];
  q.push([0, 0, 1]); // cur_x, cur_y, cur_len
  visited[0][0] = true;
  while (q.length >= 1) {
    const [cur_x, cur_y, cur_len] = q.shift();

    // 목적지 도착시
    if (cur_x === rows - 1 && cur_y === cols - 1) {
      return cur_len;
    }

    for (let i = 0; i < 4; i++) {
      const next_x = cur_x + dx[i];
      const next_y = cur_y + dy[i];
      if (next_x >= 0 && next_x < rows && next_y >= 0 && next_y < cols) {
        if (!visited[next_x][next_y] && map[next_x][next_y] === 1) {
          q.push([next_x, next_y, cur_len + 1]);
          visited[next_x][next_y] = true;
        }
      }
    }
  }
  return -1;
}
const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];
console.log(solution(maps));
