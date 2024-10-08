function solution(numbers, target) {
  let answer = 0

  const dfs = (idx, sum) => {
    if (idx === numbers.length) {
      if (sum === target) answer++
      return
    }

    dfs(idx + 1, sum + numbers[idx]) // sum에 현재 값을 더하거나 빼서 재귀
    dfs(idx + 1, sum - numbers[idx])
  }

  dfs(0, 0) // sum = 0으로 해두고 시작

  return answer
}
