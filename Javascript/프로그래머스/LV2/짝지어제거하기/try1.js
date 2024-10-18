function solution(s) {
  let i = 0;
  while (i < s.length) {
    if (s[i] === s[i + 1]) {
      s = s.slice(0, i) + s.slice(i + 2); // s에서 i, i+1번째를 삭제
      i = i - 1 < 0 ? 0 : i - 1; // 삭제된 문자열 직전 문자부터 다시 비교시작, 단 i는 0이상
    } else {
      i++;
    }
  }
  //짝지어제거 완료 후 s의 상태에 따라 결과값 반환
  return s.length === 0 ? 1 : 0;
}
solution('baabaa');
solution('cdcd');

/**
 * 1차시도 : 정확성테스트 100%, 효율성테스트 0%
 *
 */
