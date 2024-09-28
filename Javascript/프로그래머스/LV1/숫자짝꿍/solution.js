function solution(X, Y) {
  var answer = ''

  const arr_x = X.split('')
  const arr_y = Y.split('')

  for (let i = 0; i <= 9; i++) {
    //for문을 돌면서 각 숫자별로 몇개가 있는지 계산
    const Num_ix = arr_x.filter(item => Number(item) === i).length
    const Num_iy = arr_y.filter(item => Number(item) === i).length

    //예를들어 숫자가 1이라면 x와 y중 어느곳에 더 적게 들었는지 비교해서
    // 적게 든 만큼 answer에 repeat해서 붙이기
    answer += i.toString().repeat(Math.min(Num_ix, Num_iy))
  }

  if (answer === '') {
    return '-1'
  } else if (answer.split('').filter(x => x === '0').length === answer.length) {
    //전부 0밖에 없다면
    return '0'
  } else {
    // answer를 내림차순으로 정렬해서 리턴
    return answer
      .split('')
      .sort((a, b) => b - a)
      .join('')
  }
}
