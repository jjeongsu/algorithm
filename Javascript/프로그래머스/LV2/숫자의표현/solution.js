function solution(n) {
  //1혹은 2라면 Early return
  if (n === 1 || n === 2) {
    return 1;
  }

  const nums = Array.from({ length: n }, (_, i) => i + 1);
  let left = 0,
    right = 1,
    count = 0;
  let sum = nums[left] + nums[right];
  while (left <= right && right < nums.length) {
    if (sum < n) {
      right++;
      sum += nums[right];
    } else if (sum > n) {
      sum = sum - nums[left];
      left++;
    } else {
      count++;
      sum = sum - nums[left];
      left++;
    }
  }
  return count;
}
solution(15);
