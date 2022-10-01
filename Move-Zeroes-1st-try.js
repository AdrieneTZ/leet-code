// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// https://leetcode.com/problems/move-zeroes/

// Answer:
function moveZeroes(nums) {
  // declare a variable as the new index to the not zero numbers
  let not0Index = 0

  // rearrange the index of the array nums
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]
    if (n !== 0) {
      nums[not0Index] = n
      not0Index++
    }
  }

  // index in an array start from 0
  // not0Index + 0Index < nums.length => not0Index < nums.length
  // as the index of each not zero number is rearranged, other indexs are all for zeroes
  for (not0Index; not0Index < nums.length; not0Index++) {
    nums[not0Index] = 0
  }
  // return nums
}

// Runtime: 138 ms, faster than 62.73% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 46.4 MB, less than 76.33% of JavaScript online submissions for Move Zeroes.

const nums = [2, 0, 1, 0, 8, 3, 9, 0]
console.log(moveZeroes(nums))

// if allow to copy the array:
// ... will shallow copy the array
// function moveZeroes(nums) {
//   const z = []
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       z.push(nums[i])
//       nums.splice(i, 1)
//     }
//   }
//   return nums = [...nums, ...z]
// }
