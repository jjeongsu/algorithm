/**
 * @link https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let D = Array(nums.length).fill(0);
  D[0] = nums[0];
  let max = D[0];

  // O(N)
  for (let i = 1; i < nums.length; i++) {
    D[i] = Math.max(D[i - 1] + nums[i], nums[i]);
    if (max < D[i]) max = D[i];
  }

  return max;
};
