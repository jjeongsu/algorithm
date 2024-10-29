function solution(strA, strB) {
  const str1 = strA.toLowerCase();
  const str2 = strB.toLowerCase();

  // 주어진 문자열로 가능한 모든 문자쌍을 만든다.
  let arr1 = makeCharPair(str1);
  let arr2 = makeCharPair(str2);

  //필요없는 문자쌍은 버린다.
  arr1 = removeInvalidChar(arr1);
  arr2 = removeInvalidChar(arr2);

  // 각 배열별 요소의 등장 횟수를 저장한다.
  let map1 = countOccurency(arr1);
  let map2 = countOccurency(arr2);

  // 둘다 공집합인경우
  if (map1.size === 0 && map2.size === 0) {
    return 65536;
  }

  // 교집합을 구한다.
  const intersection = getIntersection(map1, map2);
  // 합집합을 구한다.
  const union = getUnion(map1, map2);

  // 교집합이 0이면 0
  if (intersection.size === 0 && union.size > 0) {
    return 0;
  }

  const intersectionSize = [...intersection.values()].reduce((a, c) => a + c);
  const unionSize = [...union.values()].reduce((a, c) => a + c);

  // 결론
  return ~~((intersectionSize / unionSize) * 65536);
}

console.log(solution('FRENCH', 'FRANCE'));

function makeCharPair(str) {
  const arr = [];
  for (let i = 0; i < str.length - 1; i++) {
    arr.push(str1.slice(i, i + 2));
  }
  return arr;
}

// 필요없는 쌍은 버리고, 유효한 집합 요소만 return
function removeInvalidChar(arr) {
  const regex = /[^a-zA-Z]/;
  return arr.filter(elem => !regex.test(elem));
}

// 배열에서 요소별 등장횟수를 카운트해서 map 형태로 반환한다.
function countOccurency(arr) {
  const map = new Map();

  arr.forEach(el => {
    map.set(el, (map.get(el) || 0) + 1); //NOTE
  });
  return map;
}

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
