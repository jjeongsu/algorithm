function solution(number, limit, power) {
  const num_arr = Array.from({ length: number }, (v, i) => i + 1)
  const power_arr = []

  num_arr.forEach((item, idx) => {
    //각 숫자별로 약수 갯수 구하기
    power_arr.push(getYaksu(item).length)
  })

  const iron = power_arr.map((item, idx) => {
    //공격력과 비교하기
    return item > limit ? power : item
  })

  return iron.reduce((a, c) => a + c)
}

function getYaksu(n) {
  const result = []
  let idx = 1
  const sqrt = Math.sqrt(n)

  while (idx <= sqrt) {
    if (n % idx === 0) {
      // 약수라면
      result.push(idx)
      const pair = n / idx
      if (pair !== idx) {
        result.push(pair)
      }
    }
    idx += 1
  }
  return result
}
