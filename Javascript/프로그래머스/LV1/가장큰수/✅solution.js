function solution(numbers) {
  const answer = numbers
    .map(item => String(item))
    .sort((a, b) => b + a - (a + b))
    .join('')

  return answer[0] === '0' ? '0' : answer
}
/**
 * 문자열비교를 이용하는게 핵심
 * sort((a, b) => (b + a) - (a + b))는 배열의 정렬을 위한 비교함수이다.
 * 여기서 b + a와 a + b는 두 숫자를 문자열로 결합한 것이다.
 * 예를 들어, a가 "10"이고 b가 "2"라면:
 * b + a는 "210"이 되고, a + b는 "102"가 된다.
 * 이 두 문자열을 비교하여 어느 쪽이 더 큰지를 판단한다
 *  b + a가 a + b보다 크면 b가 앞에 와야 하므로 음수 값을 반환하게 되고, 반대의 경우에는 양수 값을 반환한다
 * 따라서 최종적으로는 가장 큰 조합의 숫자가 먼저 오는 배열을 얻게 된다
 */
