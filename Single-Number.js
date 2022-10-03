// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// https://leetcode.com/problems/single-number/

function singleNumber(nums) {
  // sort the given array
  nums = nums.sort()

  // use XOR operator to compare the previous number and the current number
  let s = 0
  for (let i = 0; i < nums.length; i++) {
    s ^= nums[i]
  }
  return s
}

const nums = [2, 0, -1, 0, -1, 3, 5, 3, 6, 5, 6]
console.log('ans:', singleNumber(nums)) // 2
console.log('ans:', singleNumber([2, 2, 1])) // 1
console.log('ans:', singleNumber([1])) // 1

// Runtime: 125 ms, faster than 45.88% of JavaScript online submissions for Single Number.
// Memory Usage: 44.7 MB, less than 67.50% of JavaScript online submissions for Single Number.

// function singleNumber(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     const firstIndex = nums.indexOf(nums[i])
//     for (let j = nums.length - 1; j >= 0; j--) {
//       const lastIndex = nums.lastIndexOf(nums[i])
//       if (firstIndex === lastIndex) return nums[firstIndex]
//     }
//   }
// }

// double for loop would take too much runtime as the array and each number in the array are both large
