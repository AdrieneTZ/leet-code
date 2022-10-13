/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 *
 * Example 2:
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 *
 * Example 3:
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 */

// nums is a sorted array
// target number is in the array: return the index
// target number is not in the array: insert it and return the index

function searchInsert(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i
    else if (i === 0 && target < nums[i]) return 0
    else if (nums[i] < target && nums[i + 1] > target) return i + 1
    else if (nums[nums.length - 1] < target) return nums.length
  }
}
// Runtime: 95 ms, faster than 49.62% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 42.1 MB, less than 71.67% of JavaScript online submissions for Search Insert Position.

console.log(searchInsert([-1, 2, 4, 8], 0)) // 1
console.log(searchInsert([1, 2, 4, 8], 0)) // 0
console.log(searchInsert([0, 1, 2, 4], 4)) // 3
console.log(searchInsert([1, 3, 5, 6], 7)) // 4
console.log(searchInsert([3, 6, 7, 8, 10], 5)) // 1
