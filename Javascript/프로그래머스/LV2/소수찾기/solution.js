function solution(numbers) {
  const number = numbers.split('')
  //1 number들로  만들수 있는 숫자 조합 만들기
  const 조합 = [] //  [ [ '1' ], [ '7' ], [ '1', '7' ] ]
  for (let i = 1; i <= number.length; i++) {
    combination([], [...number], i, 조합)
  }
  //2.조합들로 각자 순열 만들기
  const permutation = []
  조합.forEach((item, index) => {
    permu([], [...item], permutation)
  })
  const trimed_permut = permutation.map((item, index) =>
    parseInt(item.join(''))
  )
  const set = new Set(trimed_permut) //set으로 중복 제거하기
  const unique_number = [...set].sort((a, b) => b - a) // number로 만들수 잇는 유니크한 숫자들

  //3. 소수 여부 판별하기
  const prime_arr = isPrime(unique_number[0]) //가장 큰 수 까지의 소수여부를 판별하는 배열 만들기

  // 만들어진 숫자들로 소수 여부 판별 & count
  let count = 0
  unique_number.forEach((item, index) => {
    if (prime_arr[item]) {
      count++
    }
  })
  return count
}
function isPrime(n) {
  let arr = Array(n + 1).fill(true)
  arr[0] = false
  arr[1] = false

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false
      }
    }
  }
  return [...arr]
}
const combination = (comb, rests, choice_num, output) => {
  if (comb.length === choice_num) {
    output.push(comb)
  }

  rests.forEach((v, idx) => {
    // const rest = [...rests.slice(0,idx), ...rests.slice(idx+1)]
    const rest = rests.slice(idx + 1)
    combination([...comb, v], rest, choice_num, output)
  })
}
function permu(prev, rest, permutation) {
  if (rest.length === 0) {
    permutation.push(prev)
  }

  rest.forEach((item, index) => {
    const new_rest = [...rest.slice(0, index), ...rest.slice(index + 1)]
    permu([...prev, item], new_rest, permutation)
  })
}
