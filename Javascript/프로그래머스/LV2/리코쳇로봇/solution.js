function solution(board) {
  // 그래프를 만든다.
  const graph = board.map((row) => row.split(''));
  const rows = graph.length;
  const cols = graph[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  const q = [];
  const d = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ]; // 상하좌우로 움직일 방향
  let start = [0, 0];
  let goal = [0, 0];
  // 시작점과 도착지점을 찾는다.
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (graph[i][j] === 'G') {
        goal = [i, j];
      } else if (graph[i][j] === 'R') {
        start = [i, j];
      }
    }
  }

  // 도착할 수 있는 지점인지 확인한다. : 주변에 벽이나, D가 하나도 없으면 꿍 불가
  const isReachable = getIsReachable(graph, goal);
  if (!isReachable) return -1; // 닿을 수 없는 목표라면 얼리리턴

  // 시작지점으로 부터 bfs를 시작한다.
  visited[start[0]][start[1]] = true;
  q.push([start[0], start[1], 0]); // curx, cury, curl

  while (q.length > 0) {
    const [curX, curY, curC] = q.shift();

    if (graph[curX][curY] === 'G') return curC; // 목표지점이라면 현재까지 움직인 횟수를 리턴

    for (let [dx, dy] of d) {
      const [nextX, nextY] = slipped(curX, curY, dx, dy, graph); // 현재 지점으로 부터 특정 방향으로 미끄러져서 도착한 위치

      if (!visited[nextX][nextY]) {
        // 아직 방문 전이라면 방문
        visited[nextX][nextY] = true;
        q.push([nextX, nextY, curC + 1]);
      }
    }
  }
  return -1;
}

function getIsReachable(graph, goal) {
  const rows = graph.length;
  const cols = graph[0].length;
  const d = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];
  const [gx, gy] = goal;

  for (let [dx, dy] of d) {
    const nx = gx + dx;
    const ny = gy + dy;
    const pos = graph[nx][ny];
    // 그래프에서 골의 상하좌우를 확인한다.
    if (pos === 'D' || nx < 0 || nx >= rows || ny < 0 || ny >= cols) {
      return true;
    }
  }

  return false;
}
function slipped(curX, curY, dx, dy, graph) {
  const rows = graph.length;
  const cols = graph[0].length;
  let nx = curX + dx;
  let ny = curY + dy;

  while (
    0 <= nx &&
    nx < rows &&
    0 <= ny &&
    ny < cols &&
    graph[nx][ny] !== 'D'
  ) {
    nx += dx;
    ny += dy;
  }
  return [nx - dx, ny - dy];
}
