function solution(operations) {
  const pq = new MinHeap();

  operations.forEach((e) => {
    const [command, value] = e.split(' ');

    if (command === 'I') {
      pq.insert(Number(value));
    } else if (command === 'D' && value === '1') {
      pq.shiftMax();
    } else if (command === 'D' && value === '-1') {
      pq.shiftMin();
    }
  });

  if (pq.size() === 0) {
    return [0, 0];
  } else if (pq.size() === 1) {
    const last = pq.shiftMax();
    return [last, last];
  } else {
    return [pq.shiftMax(), pq.shiftMin()];
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  insert(value) {
    // 가장 마지막 노드에 넣는다.
    this.heap.push(value);
    this.bubbleUp();
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  bubbleUp() {
    let index = this.heap.length - 1; // 마지막 인덱스
    let parent = ~~((index - 1) / 2);
    while (this.heap[parent] && this.heap[parent] > this.heap[index]) {
      this.swap(parent, index);
      index = parent;
      parent = ~~((index - 1) / 2);
    }
  }

  shiftMax() {
    // 가장 마지막 리프의 부모 노드 이후 부터 slice
    const leaf = this.heap.length - 1;
    const parent = ~~((leaf - 1) / 2);
    const leaves = this.heap.slice(parent);
    const Max = Math.max(...leaves);
    this.swap(parent + leaves.indexOf(Max), this.heap.length - 1);
    return this.heap.pop();
  }

  shiftMin() {
    // heap이 비어있으면
    if (this.heap.length === 0) {
      return undefined;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }

  bubbleDown() {
    let index = 0;
    let left = index * 2 + 1;
    let right = index * 2 + 2;

    while (
      (this.heap[left] && this.heap[left] < this.heap[index]) ||
      (this.heap[right] && this.heap[right] < this.heap[index])
    ) {
      let smaller = left;
      if (this.heap[right] && this.heap[right] < this.heap[smaller]) {
        smaller = right;
      }
      this.swap(index, smaller);
      index = smaller;
      left = index * 2 + 1;
      right = index * 2 + 2;
    }
  }
}

console.log(
  '최종',
  solution(['I 16', 'I -5643', 'D -1', 'D 1', 'D 1', 'I 123', 'D -1']),
);
console.log(
  '최종',
  solution([
    'I -45',
    'I 653',
    'D 1',
    'I -642',
    'I 45',
    'I 97',
    'D 1',
    'D -1',
    'I 333',
  ]),
);

console.log(solution(['I 10', 'I 20', 'D 1', 'I 30', 'I 40', 'D -1', 'D -1']));
