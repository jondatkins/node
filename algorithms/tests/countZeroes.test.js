const countZeroes = require('../modules/countZeroes2')

test('2 zerores here', () => {
  expect(countZeroes.countZeroes([1, 1, 1, 1, 0, 0])).toBe(2)
})
test('4 zeroes', () => {
  expect(countZeroes.countZeroes([1, 0, 0, 0, 0])).toBe(4)
})
test('3 zeroes', () => {
  expect(countZeroes.countZeroes([0, 0, 0])).toBe(3)
})
test('0 zeroes', () => {
  expect(countZeroes.countZeroes([1, 1, 1, 1])).toBe(0)
})
