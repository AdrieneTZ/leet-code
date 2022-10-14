/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 *https://leetcode.com/problems/search-insert-position/
 */

/**
 * Analysis Question:
 * nums is a sorted array
 * target number is in the array: return the index
 * target number is not in the array: insert it and return the index
 */

// First try: define each possible condition
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

// Second try: use Binary Search
// target number === nums[mid]: mid
// target > nums[mid]: mid to end index
// target < nums[mid]: 0 to mid
function searchInsert(nums, target) {
  let head = 0
  let end = nums.length - 1
  while (head <= end) {
    const mid = Math.floor((head + end) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      end = mid - 1
    } else if (nums[mid] < target) {
      head = mid + 1
    }
  }
  return end + 1
}
// Runtime: 64 ms, faster than 92.55% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 42.2 MB, less than 58.25% of JavaScript online submissions for Search Insert Position.

/**
 * Run 1:
 * head = 0, end = 3, head <= end, go in while loop
 * mid = 1
 * nums[mid] = nums[1] = 2, target = 0: nums[mid] > target
 * end = 1 - 1 = 0
 *
 * Run 2:
 * head = 0, end = 0, head <= end, go in while loop
 * mid = 0
 * nums[mid] = nums[0] = -1, target = 0: nums[mid] < target
 * head = 0 + 1 = 1
 *
 * Run 3:
 * head = 1, end = 0, head > end
 * return end + 1, that is 0 + 1 = 1
 */
console.log(searchInsert([-1, 2, 4, 8], 0)) // 1
// console.log(searchInsert([1, 2, 4, 8], 0)) // 0
// console.log(searchInsert([0, 1, 2, 4], 4)) // 3
// console.log(searchInsert([1, 3, 5, 6], 7)) // 4
// console.log(searchInsert([3, 6, 7, 8, 10], 5)) // 1
