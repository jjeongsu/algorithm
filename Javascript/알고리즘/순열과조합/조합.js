// 길이와 상관없이 전체 조합을 구하기
function Subsets(nums) {
  if (nums.length === 1) {
    return [[], nums]
  }

  const answer = [[]]

  while (nums.length) {
    const num = nums.pop()

    const len = answer.length

    for (let i = 0; i < len; i++) {
      answer.push([...answer[i], num])
    }
  }
  return answer
}

console.log(Subsets([1, 2, 3, 4, 5]))
