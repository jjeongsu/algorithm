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
