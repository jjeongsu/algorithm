function solution(N, road, K) {
  // 인접리스트로 그래프를 생성한다.
  const graph = Array.from({ length: N + 1 }, () => []);
  for (let [a, b, w] of road) {
    graph[a].push([b, w]);
    graph[b].push([a, w]);
  }

  // priority queue와 각 노드까지의 최소비용을 저장할 배열을 초기화
  const pq = new MinHeap();
  const dist = new Array(N + 1).fill(Infinity);

  // 시작점 넣고 출발
  pq.add([1, 0]);
  dist[1] = 0;

  while (pq.size()) {
    const [node, w] = pq.shift();
    if (dist[node] < w) continue;

    for (let [next, weight] of graph[node]) {
      // 현재 노드에서 다음노드까지의 비용계산
      const cost = w + weight;

      // 현재까지의 거리보다 더 짧은 경우 비용을 갱신하고 큐에 추가
      if (cost < dist[next]) {
        dist[next] = cost;
        pq.add([next, cost]);
      }
    }
  }

  // 비용이 K 이항인 정점의 갯수 리턴
  return dist.filter((e, index) => index > 0 && e <= K).length;
}

class MinHeap {
  constructor() {
    this.heap = []; // heap을 저장할 배열
    // value : [정점이름, 가중치]
  }

  // 힙의 크기를 반환
  size() {
    return this.heap.length;
  }

  // 두 값을 바꿈
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  // 삽입
  add(value) {
    this.heap.push(value); // 가장 마지막에 새로운 노드를 추가
    this.bubbleUp(); // 새로운 값이 추가된 위치에서 bubble up을 실행
  }

  // * Bubble - up
  bubbleUp() {
    let index = this.heap.length - 1; // 마지막 노드가 추가된 위치
    let parentIndex = ~~((index - 1) / 2); // 부모 노드 위치
    while (
      this.heap[parentIndex] && // 부모 노드가 존재하고
      this.heap[index][1] < this.heap[parentIndex][1] // 새로운 노드가 부모노드보다 작으면
      // ? 왜 2차원 배열처럼 뒤에 [1]이 붙는 거지?
    ) {
      this.swap(index, parentIndex); // 두 노드의 값을 교체
      index = parentIndex; // 인덱스를 부모 노드의 인덱스로 변경
      parentIndex = ~~((index - 1) / 2); // 새로운 부모노드의 인덱스 계산
    }
  }

  // 삭제 후 반환
  shift() {
    if (this.heap.length === 0) {
      return undefined; // 힙이 비어 있을 경우 undefined 반환
    }

    if (this.heap.length === 1) {
      // heap의 크기가 1인경우,
      return this.heap.pop(); // 그냥 힙에서 값을 삭제하고 return
    }

    const value = this.heap[0]; // 힙의 최솟값을 저장
    this.heap[0] = this.heap.pop(); // 힙의 끝에 있는 값을 루트노드로 이동
    this.bubbleDown(); // 루트노드에서 bubble Down을 수행
    return value; // 삭제한 최솟값 return
  }

  // * bubble down
  bubbleDown() {
    let index = 0; // 루트노드 index
    let left = index * 2 + 1; // 왼쪽 자식노드의 index
    let right = index * 2 + 2; // 오른쪽 자식노드의 index
    while (
      (this.heap[left] && this.heap[left][1] < this.heap[index][1]) ||
      (this.heap[right] && this.heap[right][1] < this.heap[index][1])
    ) {
      // 더 작은 자식
      let smaller = left;
      if (this.heap[right] && this.heap[right][1] < this.heap[smaller][1]) {
        smaller = right;
      }

      this.swap(index, smaller); // 두 노드의 값을 교체
      index = smaller;
      left = index * 2 + 1;
      right = index * 2 + 2;
    }
  }
}

export default solution;
