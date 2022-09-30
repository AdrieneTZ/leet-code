// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
// Given an integer n, return true if n is an ugly number.
// https://leetcode.com/problems/ugly-number/

// Example 1:

// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:

// Input: n = 1
// Output: true
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
// Example 3:

// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.

// Constraints: 2^31 <= n <= 2^31 - 1

// Answer:
const divide = (n, u) => {
  while (n % u === 0) {
    n = n / u
  }
  return n
}

const isUgly = (n) => {
  if (n <= 0) {
    return false
  } else if (n === 1) {
    return true
  } else if (n > 0) {
    n = divide(n, 2)
    n = divide(n, 3)
    n = divide(n, 5)

    return n === 1 ? true : false
  }
}

console.log(isUgly(1)) // true
console.log(isUgly(8)) // true
console.log(isUgly(7)) // false
console.log(isUgly(14)) // false
console.log(isUgly(-16)) // false

// Runtime: 152 ms, faster than 5.42% of JavaScript online submissions for Ugly Number.
// Memory Usage: 43.6 MB, less than 46.92% of JavaScript online submissions for Ugly Number.
