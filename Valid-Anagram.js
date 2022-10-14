/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * https://leetcode.com/problems/valid-anagram/
 */

/**
 * First try:
 * sort s and t, then compare two
 */
function isAnagram(s, t) {
  s = s.split('').sort().join('')
  t = t.split('').sort().join('')
  if (!s.localeCompare(t)) return true
  else return false
}
// Runtime: 194 ms
// Memory Usage: 50.8 MB

console.log(isAnagram('dusty', 'study')) // true
console.log(isAnagram('brag', 'grab')) // true
console.log(isAnagram('dog', 'goe')) // true
