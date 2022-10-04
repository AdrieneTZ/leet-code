// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.
// https://leetcode.com/problems/power-of-two/

// Constraints: -2^31 <= n <= 2^31 - 1
/**
 * @param {number} n
 * @return {boolean}
 */

// First try
const isPowerOfTwo = function (n) {
  if (n > 0) {
    const getBaseLog = Math.log2(Math.abs(n))
    if (Number.isInteger(getBaseLog)) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

// Runtime: 129 ms, faster than 24.11% of JavaScript online submissions for Power of Two.
// Memory Usage: 43.9 MB, less than 31.98% of JavaScript online submissions for Power of Two.

// Second try
// const isPowerOfTwo = function (n) {
//   if (n > 0) {
//     const getBaseLog = Math.log2(Math.abs(n))
//     if (Number.isInteger(getBaseLog)) {
//       return true
//     } else {
//       return false
//     }
//   } else {
//     return false
//   }
// }

// Runtime: 132 ms, faster than 20.13% of JavaScript online submissions for Power of Two.
// Memory Usage: 43.1 MB, less than 86.07% of JavaScript online submissions for Power of Two.

console.log(isPowerOfTwo(0)) // false
console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(3)) // false
console.log(isPowerOfTwo(-16)) // false
