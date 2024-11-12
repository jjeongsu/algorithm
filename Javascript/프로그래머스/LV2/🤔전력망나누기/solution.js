function solution(n, wires) {
  const graph = {};
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

  let mindiff = n; // 그래프의 노드 갯수 차이

  // 그래프의 엣지를 하니씩 끊으면서 그래프 내 노드의 갯수를 카운트
  for (let [start, end] of wires) {
    const visited = Array.from({ length: n + 1 }, () => false);
    const lenghOfGraph = [];

    // 루트 노드로부터 그래프 내부 노드 갯수 카운트
    Object.keys(graph).forEach((node) =>
      if(!visited[node]){
        bfs(node);
      }
    )
  }
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
