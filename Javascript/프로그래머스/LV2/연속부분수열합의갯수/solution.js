function solution(elements) {
  const result = new Set();

  // i는 부분수열의 원소의 갯수, I=3이면 3개의 원소로 부분수열을 만듦
  for (let i = 1; i <= elements.length; i++) {
    getCollection(i);
  }

  function getCollection(i) {
    const arr = elements.concat(elements.slice(0, i)); // 원래 배열에 i 갯수만큼 원소를 붙임. 연속성 구현을 위함.
    for (let k = 0; k < elements.length; k++) {
      const permu = arr.slice(k, k + i); // 0번째 원소부터 차례로 i개씩 묶어서 부분 수열을 만듦.
      const permu_sum = permu.reduce((a, c) => a + c, 0); // 부분 수열의 합
      result.add(permu_sum);
    }
  }

  // (문제외 추가)Set를 오름차순으로 정렬해서 배열로 리턴
  //return [...result].sort((a, b) => a - b);

  // 결과 set의 갯수를 리턴
  return result.size;
}

console.log(solution([7, 9, 1, 1, 4]));
