function solution(n, computers) {
  const graph = {};
  // 인접리스트 형태의 그래프 만들기
  computers.forEach((edges, index) => {
    graph[index] = [];
    edges.forEach((isEdge, i) => {
      if (i !== index && isEdge == 1) {
        graph[index].push(i);
      }
    });
  });

  function bfs(start_node) {
    const q = [];
    q.push(start_node);
    while (q.length !== 0) {
      const cur_node = q.shift();
      visited[cur_node] = true;
      for (let i of graph[cur_node]) {
        if (visited[i] === false) {
          q.push(i);
        }
      }
    }
  }

  let count = 0;
  const visited = Array.from({ length: n }, () => false);
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      // 방문하지 않은 노드가 있다면
      bfs(i); // i 부터 시작해서 bfs 시작
      count++;
    }
  }
  return count;
}

solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);
