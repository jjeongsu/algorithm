// https://school.programmers.co.kr/learn/courses/30/lessons/42840
function solution(answers) {
  const a = [1, 2, 3, 4, 5] //5
  const b = [2, 1, 2, 3, 2, 4, 2, 5] //8
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] //10

  let a_sol = 0
  let b_sol = 0
  let c_sol = 0

  //asnwer 배열을 돌면서 각 문항별로 누가 정답을 맞췄는지 카운트
  answers.forEach((answer, n) => {
    if (a[n % 5] === answer) {
      a_sol += 1
    }
    if (b[n % 8] === answer) {
      b_sol += 1
    }
    if (c[n % 10] === answer) {
      c_sol += 1
    }
  })
  const 정답횟수 = [a_sol, b_sol, c_sol]
  const result = []
  // find Max index
  const max = Math.max(...정답횟수)
  정답횟수.forEach((item, index) => {
    if (item === max) {
      result.push(index + 1)
    }
  })
  return result
}
