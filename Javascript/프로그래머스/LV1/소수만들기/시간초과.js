function solution(nums) {
  let answer = 0
  const output = []

  function combination(combi, rests, choice_num) {
    //combi조합이 3개로 차면 output에 push
    if (combi.length === choice_num) {
      output.push(combi)
    }

    // rest를 돌면서, 아이템을 하나씩 combi에 넣고
    // 아이템 이후 부터가 다시 rests가 된다.
    rests.forEach((item, index) => {
      const rest = rests.slice(index + 1)
      combination([...combi, item], rest, choice_num)
    })
  }
  combination([], nums, 3)

  // output을 돌면서 각 원소들의 합이 소수 인지 판별한다.
  output.forEach((combi, index) => {
    //combi의 합이 소수이면
    const sum = combi.reduce((a, c) => a + c)
    if (isPrime(sum)) {
      //True, False 반환
      answer += 1
    }
  })

  return answer
}

function isPrime(num) {
  //주어진 숫자가 소수인지 확인
  if (num === 1) return false
  // Math.sqrt 함수를 사용하여 제곱근까지만 반복하도록 한다.
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false
  }
  return true
}

/***
 * 배운점.
 *
 */
