function solution(k, m, score) {
  // 예외처리 ! score값이 m보다 작으면 상자를 만들 수 없음
  if (score < m) {
    return 0
  }

  let answer = 0
  score.sort((a, b) => b - a) //내림차순으로 정리

  //정렬된 score를 도는데
  // m개씩 마다 상자의 최소 점수가 나온다는 것을 알 수 있음 -> Math.min함수를 사용하지 않아도 됨

  for (let i = m - 1; i < score.length; i = i + m) {
    let box_price = m * score[i]
    answer += box_price
  }

  return answer
}

/***
 * 배운 점: Javascript의 정렬알고리즘은 nlogN의 시간 복잡도를 가진다.
 * arr.sort((a,b) => a- b) 는 오름차순 정렬이다. 1,2,3,4,5
 * arr.sort((a,b) => b-a ) 는 내림차순 정렬이다. 5,4,3,2,1
 * arr.splice(시작 인덱스,끝 인덱스)는 배열을 잘라서 반환할 뿐 아니라, 원본배열을 변경한다.
 * 특정 구간마다의 최적해를 미리 알 수 있는 경우에는 Math.min과 같은 함수를 사용하는 대신 Index를 통한 직접접근이 훨씬 빠르다.
 */
