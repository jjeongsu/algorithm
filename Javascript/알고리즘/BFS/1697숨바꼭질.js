const fs = require('fs')
const input = fs
  .readFileSync('../../Javascript/example.txt')
  .toString()
  .split(' ')
const MAX = 100001
const startNode = parseInt(input[0])
const targetNode = parseInt(input[1])
let visited = new Array(MAX).fill(0) //방문한 노드 표시, 현재 노드까지의 길이 표시
function bfs(startNode, targetNode) {
  let length = 0 //목적지 노드 까지의 길이
  let q = []

  //visited.push(startNode)
  q.push(startNode)

  while (q.length) {
    const cur_node = q.shift()
    //만약 목적지에 도착했다면 break
    if (cur_node === targetNode) {
      return visited[cur_node]
    }

    for (let next_node of [cur_node - 1, cur_node + 1, cur_node * 2]) {
      // 공간을 벗어난 경우는 무시
      if (next_node < 0 || next_node >= MAX) continue

      // 방문하지 않는 노드라면 큐에 추가
      if (visited[next_node] == 0) {
        visited[next_node] = visited[cur_node] + 1
        q.push(next_node)
      }
    }
  }
}

console.log(bfs(startNode, targetNode))
