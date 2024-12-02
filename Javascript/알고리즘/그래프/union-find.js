// 유니온 파인드 알고리즘

// 초기화 : 자기 자신을 루트 노드로 지정한다.
const init = (N) => Array.from({ length: N + 1 }, (e, index) => index);

// 루트 노드를 찾는 함수 ,find 함수라고 부르기도 한다.
const find = (x) => {
  if (parent[x] === x) {
    // 자기자신이 루트
    return x;
  }
  // 경로 압축
  const currentParent = find(parent[x]);
  parent[x] = ccurrentParent;
  return currentParent;
};

// union : 두 노드를 합치기 위한 함수
const union = (x, y) => {
  x = find(x); // x의 루트노드를 찾는다.
  y = find(y); // y의 루트노드를 찾는다.

  if (x === y) {
    return;
  } // 두 노드가 이미 연결된 경우

  // 다른 노드라면 큰 값을 가지는 부모 인덱스를 작은 값을 가지는 변수로 넣는다.
  if (x < y) parent[y] = x;
  else parent[x] = y;
};

// 둘이 같은 부모를 가지는지 판단. 즉 같은 그래프 인지 아닌지?
const isUnion = (x, y) => {
  x = find(x);
  y = find(y);

  if (x === y) {
    return true;
  }
  return false;
};
