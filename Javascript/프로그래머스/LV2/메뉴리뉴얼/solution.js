function solution(orders, course) {
  const answer = [];

  // course 매개변수의 개수와 동일한 길이를 가진 문자를 담을 객체. 키는 문자열을, 값은 해당 문자열의 갯수를 담는다.
  const menu = {};

  // 문자열을 재구성할 재귀함수
  function recursive(word, arr) {
    console.log('재귀 시작', 'word', word, 'arr', arr);
    if (arr.length < 1) return;

    for (let i = 0; i < arr.length; i++) {
      const newWord = word + arr[i]; // 이전 단계에서 자른 문자에 다음 index의 문자를 조합한다.
      console.log(newWord);
      if (course.includes(newWord.length)) {
        menu[newWord] ? menu[newWord]++ : (menu[newWord] = 1);
      }
      recursive(newWord, arr.slice(i + 1));
    }
  }

  // 단품 메뉴를 재구성한다.
  orders
    .map((v) => v.split('').sort())
    .map((v) => {
      // v:  [ 'A', 'B', 'C', 'D', 'E' ]
      // 문자열을 배열로 분리하고 순회한다.
      for (let i = 0; i < v.length; i++) {
        recursive(v[i], v.slice(i + 1)); // 문자열을 하나씩 재귀적으로 순회하며 재구성한다.
      }
      return;
    });

  console.log(menu);

  // 코스요리 후보(menu)에서 최종 코스요리를 뽑는다.
  // 1. 갯수가 1인 후보는 제외한다.
  const menuArr = Object.entries(menu).filter((e) => e[1] > 1);

  course.forEach((courseLen) => {
    // 코스를 순회하며, 동일한 갯수의 메뉴끼리 묶고, count가 높은 것을 앞쪽으로 정렬한다.
    const sameLength = menuArr
      .filter((menu) => menu[0].length === courseLen)
      .sort((a, b) => b[1] - a[1]);
    // ['CD', 3 ],  [ 'DE', 2 ],['AB', 2 ],  [ 'AC', 2 ],
    // 가장 많이 주문된 메뉴 구성과 동일한 count를 가진다면 정답에 담는다.
    for (let i = 0; i < sameLength.length; i++) {
      if (sameLength[i][1] === sameLength[0][1]) {
        answer.push(sameLength[i][0]);
      } else {
        break;
      }
    }
  });
  return answer.sort(); // ABC 순서대로 정렬하여 리턴
}

solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5]);
