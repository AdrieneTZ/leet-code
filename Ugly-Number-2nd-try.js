const divide = (n, u) => {
  while (n % u === 0) {
    n = n / u
  }
  return n
}

const isUgly = (n) => {
  if (n <= 0) {
    return false
  } else if (n <= 10 && n !== 7) {
    return true
  } else if (n > 0) {
    n = divide(n, 2)
    n = divide(n, 3)
    n = divide(n, 5)

    return n === 1 ? true : false
  }
}

// Runtime: 106 ms, faster than 55.79% of JavaScript online submissions for Ugly Number.
// Memory Usage: 43.6 MB, less than 46.92% of JavaScript online submissions for Ugly Number.
