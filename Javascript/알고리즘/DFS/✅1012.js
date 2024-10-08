const fs = require('fs')
const input = fs.readFileSync('../../example.txt').toString().split('\n')

const test = Number(input[0]) //테스트케이스 갯수
const [cols, rows, nodes] = input[1].split(' ').map(Number) // graph[rows][cols]

// rows x cols 의 빈 그래프 만들기
const graph = []

for (let i = 0; i < rows; i++) {
  graph[i] = new Array(cols)
}
console.log(graph)
for (let i = 3; i < 3 + nodes; i++) {
  const [x, y] = input[i].split(' ').map(Number)
  graph[y][x] = 1
}

console.log(graph)
