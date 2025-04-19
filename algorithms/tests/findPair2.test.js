const findPair2 = require('../modules/findPair2')

test('', () => {
  expect(findPair2.findPair2([6, 1, 4, 10, 2, 4], 2)).toBe(true)
})
test('', () => {
  expect(findPair2.findPair2([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)).toBe(true)
})
test('', () => {
  expect(findPair2.findPair2([4, -2, 3, 10], -6)).toBe(true)
})
test('', () => {
  expect(findPair2.findPair2([6, 1, 4, 10, 2, 4], 22)).toBe(false)
})
test('', () => {
  expect(findPair2.findPair2([], 0)).toBe(false)
})
test('', () => {
  expect(findPair2.findPair2([5, 5], 0)).toBe(true)
})
test('', () => {
  expect(findPair2.findPair2([-4, 4], -8)).toBe(true)
})
test('', () => {
  expect(findPair2.findPair2([-4, 4], 8)).toBe(true)
})
test('', () => {
  expect(findPair2.findPair2([1, 3, 4, 6], -2)).toBe(true)
})
test('', () => {
  expect(findPair2.findPair2([0, 1, 3, 4, 6], -2)).toBe(true)
})
test('', () => {
  expect(findPair2.findPair2([1, 2, 3], 0)).toBe(false)
})
