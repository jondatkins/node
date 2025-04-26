const minSubArrayLen = require('../modules/minSubArrayLen')

test('4 and 3 make the smallest subarray, so 2', () => {
  expect(minSubArrayLen.minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2)
})
test('5 and 4 are the smallest subarray, so 2', () => {
  expect(minSubArrayLen.minSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2)
})
test('62 is the smallest subarray, so 1', () => {
  expect(minSubArrayLen.minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toBe(1)
})
test('16, 22 and 5 are the smallest subarray, so 3', () => {
  expect(minSubArrayLen.minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toBe(3)
})
test('16 to 8 is the smallest subarray, so 5', () => {
  expect(minSubArrayLen.minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toBe(5)
})
test('3 and 8, so 2', () => {
  expect(minSubArrayLen.minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)).toBe(2)
})
test(`There's no subarray here, so 0.`, () => {
  expect(minSubArrayLen.minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toBe(0)
})
