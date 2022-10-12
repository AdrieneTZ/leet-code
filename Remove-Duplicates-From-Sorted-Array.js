// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same.
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicates(nums) {
  // store count of the duplicate numbers
  let duplicate = 0
  for (let i = 1; i < nums.length; i++) {
    // start from index 1
    // compare the current number and the previous number
    if (nums[i] === nums[i - 1]) {
      duplicate = duplicate + 1
    } else {
      // reassign the current number(index i) to the place of the previous duplicate number
      nums[i - duplicate] = nums[i]
    }
  }
  return nums.length - duplicate
}
// array length is still the same
// before [-4, 0, 0, 1, 1, 2, 2, 4, 7, 9]
// after  [-4, 0, 1, 2, 4, 7, 9, 4, 7, 9]
// Runtime: 108 ms, faster than 76.30% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 44.5 MB, less than 77.53% of JavaScript online submissions for Remove Duplicates from Sorted Array.

// function removeDuplicates(nums) {
//   let count = 1
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       nums[count] = nums[i]
//       count++
//     }
//   }
//   return count
// }

console.log(removeDuplicates([1, 1, 2])) // [1, 2]
console.log(removeDuplicates([-4, 0, 0, 1, 1, 2, 2, 4, 7, 9])) // [-4, 0, 1, 2, 4, 7, 9]
