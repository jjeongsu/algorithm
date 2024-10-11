/**
 * survey : ["AN", "CF", "MJ", "RT", "NA"]
 * choices : [5, 3, 2, 7, 5]
 * result : "TCMA"
 */

function solution(survey, choices) {
  // 각 항목별 점수를 저장하는 객체
  let score = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  }
  function updateScore(유형1, 유형2, 점수) {
    switch (점수) {
      case 1:
        score[유형1] += 3
        break
      case 2:
        score[유형1] += 2
        break
      case 3:
        score[유형1] += 1
        break
      case 5:
        score[유형2] += 1
        break
      case 6:
        score[유형2] += 2
        break
      case 7:
        score[유형2] += 3
        break
    }
  }
  // survey마다 질문/답 => 항목별 점수로 환산
  // 만약 AN/5 이라면 => score.N += 1점
  survey.forEach((elem, i) => {
    const [유형1, 유형2] = elem.split('')
    updateScore(유형1, 유형2, choices[i])
  })
  // 각 유형별로 더 큰 점수를 성격으로 반영
  let result = ''
  result += score.R >= score.T ? 'R' : 'T'
  result += score.C >= score.F ? 'C' : 'F'
  result += score.J >= score.M ? 'J' : 'M'
  result += score.A >= score.N ? 'A' : 'N'
  console.log(result)
}
solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5])
