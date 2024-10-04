//숫자 n 이하의 수중 소수를 반환하는 알고리즘
function isPrime(n) {
  let array = Array(n + 1).fill(true)
  array[0] = false
  array[1] = false

  for (let i = 2; i * i <= n; i++) {
    if (array[i]) {
      for (let j = i * i; j <= n; j += i) {
        //j는 i*i부터 인거 중요!
        array[j] = false
      }
    }
  }
  return array.filter(e => e).length // 소수의 갯수 반환
}
