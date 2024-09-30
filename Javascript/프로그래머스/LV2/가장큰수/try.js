function solution(numbers) {
  // 순열?
  const output = []

  function permu(prev, rest) {
    if (rest.length === 0) {
      const permu_unit = Number(prev.join(''))
      output.push(permu_unit)
    }

    // 배열을 돌면서 하나씩 선별그룹에 추가
    rest.forEach((item, idx) => {
      const new_rest = [...rest.slice(0, idx), ...rest.slice(idx + 1)]
      permu([...prev, item], new_rest)
    })
  }
  permu([], [...numbers])
  const sorted = output.sort((a, b) => b - a)
  return sorted[0] + ''
}
/**
 * 틀린 접근
 * 직관적으로 생각해서 numbers의 item들로 순열을 만든다.
 * 순열을 join해서 하나의 문자열로 만들고 -> 다시 숫자로 바꿔서 output배열에 넣는다
 * Ouput배열을 내림차순으로 정렬하면 가장 첫번째 수가 max_num이 된다.
 * 이렇게 풀면 코드실행시는 풀리는데 테스트케이스에서는 숫자가 너무 커져서 오류가 발생한다..
 */
