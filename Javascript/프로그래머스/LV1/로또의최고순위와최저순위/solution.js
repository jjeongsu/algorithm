function solution(lottos, win_nums) {
  const rank = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  } // 맞춘 개수 : 순위

  const winNums = new Set([...win_nums])
  let count_matched = 0 // 로또번호과 일치한것 개수
  let count_zero = 0 // zero의 갯수
  for (let i of lottos) {
    if (i === 0) {
      count_zero++
      continue
    }
    if (winNums.has(i)) {
      // i가 로또번호라면
      count_matched++ // 맞춘 갯수에 추가
    }
  }

  // 최대로 맞춘 갯수
  const max = count_matched + count_zero
  // 최소로 맞춘 갯수
  const min = count_matched
  return [rank[max], rank[min]]
}
