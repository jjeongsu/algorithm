function solution(brown, yellow) {
  const sum = brown + yellow
  const yaksu = []
  //약수 갯수 구하기
  for (let i = 1; i * i <= sum; i++) {
    if (sum % i === 0) {
      yaksu.push(i)
      yaksu.push(sum / i)
    }
  }
  const sorted = yaksu.sort((a, b) => b - a)

  let garo = 0
  let sero = sorted.length - 1
  while (garo < sero) {
    //x가 가로길이고 y가 세로길이라면 x-2 * y-2 = yellow가 되어야 한다.
    if ((sorted[garo] - 2) * (sorted[sero] - 2) === yellow) {
      return [sorted[garo], sorted[sero]]
    } else {
      garo++
      sero--
    }
  }
}
