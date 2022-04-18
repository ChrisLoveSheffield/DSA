// @flow
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  const dp = new Array(nums.length)
    .fill()
    .map(() => new Array(nums.length).fill());

  const maxCoinsHelper = (left, right) => {
    if (left > right) return 0;

    if (dp[left][right]) return dp[left][right];

    let max = 0;
    for (let i = left; i <= right; i++) {
      let temp =
        maxCoinsHelper(left, i - 1) +
        maxCoinsHelper(i + 1, right) +
        (nums[left - 1] ?? 1) * nums[i] * (nums[right + 1] ?? 1);
      max = Math.max(temp, max);
    }
    dp[left][right] = max;
    return max;
  };
  return maxCoinsHelper(0, nums.length - 1);
};
let nums = [3, 1, 5, 8];
console.log(maxCoins(nums));
