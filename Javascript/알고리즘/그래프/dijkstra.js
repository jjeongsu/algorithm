import MinHeap from '../../자료구조/Heap/MinHeap.js';

function dijkstra(n, start, paths) {
  // 1. 인접 리스트로 그래프 생성
  const graph = Array.from({ length: n + 1 }, () => []);
  for (let [a, b, w] of paths) {
    graph[a].push([b, w]);
    graph[b].push([a, w]);
  }

  // 우선순위 큐와 거리값(가중치 값) 저장할 배열 초기화
  const pq = new MinHeap();
  const dist = new Array(n + 1).fill(Infinity);

  // 시작점 넣고 출발
  pq.add([start, 0]); // 시작점은 가중치 0
  dist[start] = 0;

  // 큐를 반복하면서
  while (pq.size()) {
    let [node, w] = pq.shift(); // 큐에서 가장 가까운 정점 뽑기
    // 가중치가 현재까지 거리보다 큰 경우 건너뜀
    if (dist[node] < w) continue;

    for (let [next_node, weight] of graph[node]) {
      // 현재 정점에서 연결된 정점까지의 거리를 계산
      const cost = w + weight;

      // 현재까지 거리보다 더 짧은 경우 거리값을 갱신하고 큐에 추가
      if (cost < dist[next_node]) {
        dist[next_node] = cost;
        pq.add([next_node, cost]);
      }
    }
  }
  return dist;
}
const road = [
  [1, 2, 2],
  [1, 3, 5],
  [1, 4, 1],
  [2, 3, 3],
  [2, 4, 2],
  [3, 2, 3],
  [3, 6, 5],
  [4, 3, 3],
  [4, 5, 1],
  [5, 3, 1],
  [5, 6, 2],
];
// 노드 갯수, 시작점, 노드-노드-가중치
const result = dijkstra(6, 1, road);
console.log(result);
