// ! slice, Set을 사용하면 시간 복잡도 테스트를 통과하지 못함
// * slice : k개를 자르면 O(k)
// * set : 길이가 k개인 배열을 set으로 만들면 O(K)
// 문제 풀이상 O(n)혹은 O(nlogN)으로 끝내야 함
/**
function solution(topping) {
  let count = 0;
  for (let i = 1; i < topping.length; i++) {
    const pre = topping.slice(0, i);
    const post = topping.slice(i);
    const preSet = new Set(pre);
    const postSet = new Set(post);
    if (preSet.size === postSet.size) {
      count += 1;
    }
  }
  return count;
}
*/

function solution(topping) {
  let count = 0; // 롤케이크를 자를 수 있는 경우의 수
  // right map 초기화
  const right = new Map();
  topping.forEach((e) => {
    if (right.has(e)) {
      right.set(e, right.get(e) + 1);
    } else {
      right.set(e, 1);
    }
  });

  const left = new Map();
  for (let i = 0; i < topping.length - 2; i++) {
    //toppings를 돌면서 right에서 토핑을 하나씩 빼서 left에 추가시켜줌
    const e = topping[i];
    if (left.has(e)) {
      left.set(e, left.get(e) + 1); // left에 e를 추가
    } else {
      // e가 처음이면
      left.set(e, 1);
    }
    right.set(e, right.get(e) - 1);
    // 만약 right의 E의 갯수가 0이면 key를 삭제한다.
    if (right.get(e) === 0) {
      right.delete(e);
    }

    // left, right토핑 종류 수 비교
    if (left.size === right.size) {
      count += 1;
    }
    //console.log(left.keys(), right.keys());
  }
  return count;
}
solution([1, 2, 1, 3, 1, 4, 1, 2]);
