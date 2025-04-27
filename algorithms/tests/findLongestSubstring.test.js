const findLongestSubstring = require('../modules/findLongestSubstring')

test('0 length string, so expect 0', () => {
  expect(findLongestSubstring.findLongestSubstring('')).toBe(0)
})
test('rithmsc is the longest substring, so 7', () => {
  expect(findLongestSubstring.findLongestSubstring('rithmschool')).toBe(7)
})
test('isawesom is the substring, so 6', () => {
  expect(findLongestSubstring.findLongestSubstring('thisisawesome')).toBe(6)
})
test('hecatin is the substring, so 7', () => {
  expect(findLongestSubstring.findLongestSubstring('thecatinthehat')).toBe(7)
})
test(`All b's, so 1`, () => {
  expect(findLongestSubstring.findLongestSubstring('bbbbbb')).toBe(1)
})
test('ubstring is the substring, so 8', () => {
  expect(findLongestSubstring.findLongestSubstring('longestsubstring')).toBe(8)
})
test('wedoit is the substring, so 6', () => {
  expect(findLongestSubstring.findLongestSubstring('thisishowwedoit')).toBe(6)
})
