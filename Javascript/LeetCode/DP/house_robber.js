/**
 * @link https://leetcode.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 얼리리턴
  if (nums.length <= 3) {
    switch (nums.length) {
      case 1:
        return nums[0];
      case 2:
        return nums[0] < nums[1] ? nums[1] : nums[0];
      case 3:
        const sum = nums[0] + nums[2];
        return nums[1] < sum ? sum : nums[1];
    }
  }

  nums[2] = nums[0] + nums[2];
  for (let i = 3; i < nums.length; i++) {
    const big = Math.max(nums[i - 2], nums[i - 3]);
    nums[i] += big;
  }

  return nums[nums.length - 1] > nums[nums.length - 2]
    ? nums[nums.length - 1]
    : nums[nums.length - 2];
};
