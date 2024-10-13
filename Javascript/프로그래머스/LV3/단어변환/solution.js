function solution(begin, target, words) {
  //타겟이 word안에 없는 경우 early return
  if (words.indexOf(target) == -1) {
    return 0;
  }

  const visited = {};
  const graph = {};

  // visited, graph초기화
  for (let word of words) {
    visited[word] = false;
    graph[word] = [];
  }

  // graph만들기
  /**
   * { hot: [ 'dot', 'lot' ],
   * dot: [ 'hot', 'dog', 'lot' ],
   * dog: [ 'dot', 'log', 'cog' ],
   * lot: [ 'hot', 'dot', 'log' ],
   * log: [ 'dog', 'lot', 'cog' ],
   * cog: [ 'dog', 'log' ]}
   */
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isConnected(words[i], words[j])) {
        graph[words[i]].push(words[j]);
        graph[words[j]].push(words[i]);
      }
    }
  }
  // 시작노드로 부터 타겟까지 최단거리 찾기
  function bfs(node) {
    const q = [];
    q.push([node, 1]);

    while (q.length !== 0) {
      const [cur_node, cur_len] = q.shift();

      if (cur_node === target) {
        return cur_len;
      }
      visited[cur_node] = true;
      for (let next_node of graph[cur_node]) {
        if (!visited[next_node]) {
          q.push([next_node, cur_len + 1]);
        }
      }
    }
    return 0;
  }

  const start_node = words.find(word => isConnected(begin, word)); // find 매서드는 바로 요소를 반환, 인덱스 X

  return bfs(start_node);
}

// 단어 2개를 비교해서 오직 알파벳 1개만 달라야 변환가능 => 변환가능하면 graph에 서로 연결
// 그래프 연결 가능 여부를 판별하는 함수
function isConnected(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count++;
    }
  }
  return count === 1;
}

console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
