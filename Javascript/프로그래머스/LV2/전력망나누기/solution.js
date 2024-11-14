/**
 *
 * @param {number} n - 노드의 갯수
 * @param {Array<Array<number>>} wires - [i, j] 형태로 그래프의 연결을 나타냄
 */
function solution(n, wires) {
  const graph = {};
  let minDiff = n; // 끊어진 그래프의 노드 갯수 차이의 최솟값
  // graph init
  for (let i = 0; i <= n; i++) {
    if (i === 0) continue;
    graph[i] = [];
  }
  // make graph
  for (let [s, e] of wires) {
    graph[s].push(e);
    graph[e].push(s);
  }

  // 그래프의 엣지를 하니씩 끊으면서 그래프 내 노드의 갯수를 카운트
  for (let [start, end] of wires) {
    const startNodes = bfs(start, end, graph, n);
    const endNodes = bfs(end, start, graph, n);
    minDiff = Math.min(minDiff, Math.abs(startNodes - endNodes));
  }

  return minDiff;
}

// root노드와 연결된 노드의 갯수를 카운트
function bfs(root, pass, graph, n) {
  const visited = Array.from({ length: n + 1 }, () => false);
  const q = [];
  let count = 1;

  q.push(root);
  visited[root] = true;

  while (q.length > 0) {
    const curr_node = q.shift();
    for (let next_node of graph[curr_node]) {
      if (!visited[next_node] && next_node !== pass) {
        q.push(next_node);
        visited[next_node] = true;
        count++;
      }
    }
  }
  return count;
}
solution(9, [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
]);
solution(4, [
  [1, 2],
  [2, 3],
  [3, 4],
]);
solution(7, [
  [1, 2],
  [2, 7],
  [3, 7],
  [3, 4],
  [4, 5],
  [6, 7],
]);
