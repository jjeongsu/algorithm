const graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]]

function dfs(graph, v, visited) {
  //v = 현재노드
  visited[v] = true
  console.log(v)
  //현재 노드와 연결된 노드를 재귀적으로 방문
  for (i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited)
    }
  }
}
const visited = Array(9).fill(false)
dfs(graph, 1, visited)
