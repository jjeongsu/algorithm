function solution(nums) {
  let result = []

  const size = nums.length

  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      for (let k = j + 1; k < size; k++) {
        const num = nums[i] + nums[j] + nums[k]
        //오히려 콤비네이션 안만들고 간단하게 가는게 시간 초과 안나는군..
        if (isPrime(num)) {
          result.push(num)
        }
      }
    }
  }

  return result.length
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
