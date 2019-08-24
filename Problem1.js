/**
 *  1. TWO SUM
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *  FAST : 70.99% MEMORY : 93.80%
 */
var twoSum = function(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in obj) {
      return [nums.indexOf(obj[nums[i]]), i];
    } else {
      obj[target - nums[i]] = nums[i];
    }
  }
};
