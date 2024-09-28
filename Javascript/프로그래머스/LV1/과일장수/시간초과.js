function solution(k, m, score) {
  // score값이 m보다 작으면 상자를 만들 수 없음
  if (score < m) {
    return 0
  }

  let answer = 0
  score.sort((a, b) => b - a) //내림차순으로 정리
  // 시간초과 오류
  while (score.length !== 0) {
    if (score.length >= m) {
      //상자를 만들 수 있는 충분한 양이 있다면
      // 먼저 앞의 M개를 빼와서
      const min_score = score[m - 1]
      const box = score.splice(0, m)
      //const min_score = Math.min(...box) 이렇게 찾으면 시간초과가 난다
      const box_price = m * min_score
      answer += box_price
    } else {
      break
    }
  }
  return answer
}
