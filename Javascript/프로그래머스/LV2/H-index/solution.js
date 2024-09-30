function solution(citations) {
  const max = Math.max(...citations)
  const temp = Array.from({ length: max + 1 }, () => 0)
  const hIndex = Array.from({ length: max + 1 }, () => 0)
  //nums배열중 i보다 큰거 세기
  for (let i = 1; i <= max; i++) {
    citations.forEach((item, idx) => {
      if (item >= i) {
        temp[i] += 1
      }
    })
  }
  temp.forEach((item, idx) => {
    hIndex[idx] = idx > item ? item : idx
  })
  return Math.max(...hIndex)
}
