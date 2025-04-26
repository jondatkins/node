const findLongestSubstring = require('../modules/findLongestSubstring')

test('', () => {
  expect(findLongestSubstring.findLongestSubstring('')).toBe(0)
})
test('', () => {
  expect(findLongestSubstring.findLongestSubstring('rithmschool')).toBe(7)
})
test('', () => {
  expect(findLongestSubstring.findLongestSubstring('thisisawesome')).toBe(6)
})
test('', () => {
  expect(findLongestSubstring.findLongestSubstring('thecatinthehat')).toBe(7)
})
test('', () => {
  expect(findLongestSubstring.findLongestSubstring('bbbbbb')).toBe(1)
})
test('', () => {
  expect(findLongestSubstring.findLongestSubstring('longestsubstring')).toBe(8)
})
test('', () => {
  expect(findLongestSubstring.findLongestSubstring('thisishowwedoit')).toBe(6)
})
