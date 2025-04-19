const findPair = require('../modules/findPair')
test('num is 2, array contains 6 and 4, so true', () => {
  expect(findPair.findPair([6, 1, 4, 10, 2, 4], 2)).toBe(true)
})
test('num is 1, array contains 4 and 5, so true', () => {
  expect(findPair.findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)).toBe(true)
})
test('num is -6, array contains 4 and -2, so true', () => {
  expect(findPair.findPair([4, -2, 3, 10], -6)).toBe(true)
})
test('num is 22, false', () => {
  expect(findPair.findPair([6, 1, 4, 10, 2, 4], 22)).toBe(false)
})
test('', () => {
  expect(findPair.findPair([], 0)).toBe(false)
})
test('', () => {
  expect(findPair.findPair([5, 5], 0)).toBe(true)
})
test('', () => {
  expect(findPair.findPair([-4, 4], -8)).toBe(true)
})
test('', () => {
  expect(findPair.findPair([-4, 4], 8)).toBe(true)
})
test('', () => {
  expect(findPair.findPair([1, 3, 4, 6], -2)).toBe(true)
})
test('', () => {
  expect(findPair.findPair([0, 1, 3, 4, 6], -2)).toBe(true)
})
test('', () => {
  expect(findPair.findPair([1, 2, 3], 0)).toBe(false)
})
