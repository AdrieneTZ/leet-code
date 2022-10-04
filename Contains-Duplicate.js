// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.
// https://leetcode.com/problems/contains-duplicate/

// Answer:
// seperate the situation:
// only one or two number in the nums array
// more than two numbers in the nums array
function containsDuplicate(nums) {
  if (nums.length === 1) {
    return false
  } else if (nums.length === 2) {
    return nums[0] === nums[1] ? true : false
  } else {
    // use Set and its method to check if the number in the nums array shows twice
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
      if (set.has(nums[i])) {
        return true
      }
      set.add(nums[i])
    }
    return false
  }
}
// second try:
// Runtime: 86 ms, faster than 96.48% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 50.1 MB, less than 86.19% of JavaScript online submissions for Contains Duplicate.

// function containsDuplicate(nums) {
//   const ln = nums.length
//   if (ln === 1) {
//     return false
//   } else if (ln === 2) {
//     return nums[0] === nums[1] ? true : false
//   } else {
//     // use Set and its method to check if the number in the nums array shows twice
//     let set = new Set()
//     for (let i = 0; i < ln; i++) {
//       if (set.has(nums[i])) {
//         return true
//       }
//       set.add(nums[i])
//     }
//     return false
//   }
// }
// first try:
// Runtime: 97 ms, faster than 89.78% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 50.3 MB, less than 82.03% of JavaScript online submissions for Contains Duplicate.

console.log('ans:', containsDuplicate([1])) // false
console.log('ans:', containsDuplicate([1, 2])) // false
console.log('ans:', containsDuplicate([5, 4, 3, 2, 1])) // false
console.log('ans:', containsDuplicate([3, 7, 4, 4, 8, 5])) // true
console.log('ans:', containsDuplicate([2, 0, -1, 0, -1, 3, 5, 3, 6, 5, 6])) // true
console.log('ans:', containsDuplicate([0, 0, 1, 1])) // true
