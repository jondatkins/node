const maxSubarraySum = require('../modules/maxSubarraySum.js');
test(``, () => {
  expect(maxSubarraySum.maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(2)
})
test(``, () => {
  expect(maxSubarraySum.maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 17)).toBe(17)
})
test(``, () => {
  expect(maxSubarraySum.maxSubarraySum([4, 2, 1, 6], 1)).toBe(6)
})
test(``, () => {
  expect(maxSubarraySum.maxSubarraySum([4, 2, 1, 6, 2], 4)).toBe(13)
})
test(``, () => {
  expect(maxSubarraySum.maxSubarraySum([], 4)).toBe(null)
})
