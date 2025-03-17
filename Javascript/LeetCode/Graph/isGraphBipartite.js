// 주어지는 그래프가 이분 그래프인지 판단
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  const visited = Array(graph.length).fill(false);
  const flag = Array(graph.length).fill(false); // 색상 칠하기

  const bfs = (startNode) => {
    const q = [];
    q.push(startNode);
    visited[startNode] = true;
    flag[startNode] = false;
    while (q.length > 0) {
      const curr = q.shift(); // 현재 정점
      for (let next of graph[curr]) {
        // 현재 정점과 인접한 정점을 탐색
        // 만약 인접한 정점이 방문전이라면 -> 큐에 넣기
        if (!visited[next]) {
          // 나와 다른 색깔로 칠하고
          flag[next] = !flag[curr];
          visited[next] = true; // 방문처리
          q.push(next);
        } else {
          // 만약 인접한 정점이 방문이 완료된 상태라면 -> 나와 색이 다른지 확인
          if (flag[next] === flag[curr]) return false;
        }
      }
    }
    return true;
  };

  for (let i = 0; i < graph.length; i++) {
    if (!visited[i]) {
      const result = bfs(i);
      if (!result) return false;
    }
  }
  return true;
};

// bfs를 진행
// 0부터 시작 -> 인접한 정점을 탐색
// 만약 인접한 정점이 나와 같은 색이면 return false
// bfs를 끝내면 return true
