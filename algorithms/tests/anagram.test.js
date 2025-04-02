const anagrams = require('../modules/anagrams.js');

test(``, () => {
  expect(anagrams.validAnagram('', '')).toBe(true)
})
test(``, () => {
  expect(anagrams.validAnagram('aaz', 'zza')).toBe(false)
})
test(``, () => {
  expect(anagrams.validAnagram('anagram', 'nagaram')).toBe(true)
})
test(``, () => {
  expect(anagrams.validAnagram('rat', 'car')).toBe(false)
})
test(``, () => {
  expect(anagrams.validAnagram('awesome', 'awesom')).toBe(false)
})
test(``, () => {
  expect(anagrams.validAnagram('qwerty', 'qeywrt')).toBe(true)
})
test(``, () => {
  expect(anagrams.validAnagram('texttwisttime', 'timetwisttext')).toBe(true)
})
