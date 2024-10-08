function solution(maps) {
  const graph = maps.map(e => e.split(''))
  const rows = graph.length
  const cols = graph[0].length
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false)) //지도 방문 표시
  const result = []

  const dx = [0, 0, -1, 1]
  const dy = [-1, 1, 0, 0]
  //섬 탐색
  function dfs(x, y, cur_sum) {
    let sum = Number(cur_sum)
    // 현재 노드에서 연결된 다음 노드를 탐색
    for (let i = 0; i < 4; i++) {
      const next_x = x + dx[i]
      const next_y = y + dy[i]

      if (next_x >= 0 && next_y >= 0 && next_x < rows && next_y < cols) {
        // 다음 노드가 지도 범위내에 있고
        if (graph[next_x][next_y] !== 'X' && !visited[next_x][next_y]) {
          // 섬이고 아직 방문 전이라면
          visited[next_x][next_y] = true // 방문
          let next = graph[next_x][next_y] // 다음 노드의 식량수
          sum += dfs(next_x, next_y, next)
        }
      }
    }
    return sum
  }
  //그래프 탐색
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (visited[i][j] === false && graph[i][j] != 'X') {
        // 섬을 발견하면, 그 섬을 시작노드로 하여 탐색
        visited[i][j] = true
        let sum = dfs(i, j, graph[i][j])
        result.push(sum)
      }
    }
  }

  if (result.length === 0) {
    return [-1]
  } // 섬이 존재하지 않으면 -1 리턴
  return result.sort((a, b) => a - b) // 오름차순으로 정렬해서 리턴
}

solution(['X591X', 'X1X5X', 'X231X', '1XXX1'])
