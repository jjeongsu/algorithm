// lv2 뉴스클러스터링

// 교집합 구하기
function getIntersection(map1, map2) {
  const intersectionMap = new Map();
  // NOTE : MAP순회
  map1.forEach((value1, key) => {
    // 교집합의 값이 있다면
    if (map2.has(key)) {
      // 더 적게 등장한 갯수를
      intersectionMap.set(key, Math.min(value1, map2.get(key)));
    }
  });
  return intersectionMap;
}

// 합집합 구하기
function getUnion(map1, map2) {
  // return new Map([...map1, ...map2]); 이렇게 단순 합치면 테케 통과x
  let union = new Map();

  for (let [key, value] of map1.entries()) {
    union.set(key, value);
  }

  for (let [key, value] of map2.entries()) {
    if (map1.has(key)) {
      // 겹치는 값이 있다면 큰 쪽을 택한다.
      union.set(key, Math.max(value, map1.get(key)));
    } else {
      union.set(key, value);
    }
  }
  return union;
}
