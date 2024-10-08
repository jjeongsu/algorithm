//https://www.acmicpc.net/problem/2606
const fs = require('fs')
const input = fs.readFileSync('../../example.txt').toString().split('\n')

const N = Number(input[0]) // 정점의 갯수
const edges = Number(input[1]) //엣지의 갯수
const graph = Array.from({ length: N + 1 }, () => []) //.fill이 아니라 반드시 이 방법으로 만들어야 함

for (let i = 2; i < 2 + edges; i++) {
  const [start, end] = input[i].split(' ').map(Number)
  graph[start].push(end)
  graph[end].push(start)
}
// 만들어진 graph
/**
 * [
  [],
  [ '2', '5' ],
  [ '1', '3', '5' ],
  [ '2' ],
  [ '7' ],
  [ '1', '2', '6' ],
  [ '5' ],
  [ '4' ]
]
 */
const visited = Array.from({ length: N + 1 }, () => false)
function dfs(graph, v, visited) {
  visited[v] = true
  //v노드와 연결된 노드 방문
  for (let next of graph[v]) {
    if (!visited[next]) {
      //아직 방문전이라면
      dfs(graph, next, visited)
    }
  }
}

dfs(graph, 1, visited) // 1번 노드 부터 시작

console.log(visited.filter(e => e).length - 1) //1번 컴퓨터를 제외하고 true인 노드갯수 출력
