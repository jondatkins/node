const radixSort = require('../modules/radixSort')

test(`The 0 digit of 12345 should be 5`, () => {
  expect(radixSort.getDigit(12345, 0)).toEqual(5)
})
test(`The 1 digit of 12345 should be 4`, () => {
  expect(radixSort.getDigit(12345, 1)).toEqual(4)
})
test(`The 2 digit of 12345 should be 3`, () => {
  expect(radixSort.getDigit(12345, 2)).toEqual(3)
})
test(`The 3 digit of 12345 should be 2`, () => {
  expect(radixSort.getDigit(12345, 3)).toEqual(2)
})
test(`testDescription`, () => {
  expect(radixSort.getDigit(12345, 4)).toEqual(1)
})
test(`testDescription`, () => {
  expect(radixSort.getDigit(12345, 5)).toEqual(0)
})
test(`testDescription`, () => {
  expect(radixSort.getDigit(-12345, 5)).toEqual(0)
})
test(`testDescription`, () => {
  expect(radixSort.digitCount(123)).toEqual(3)
})
test(`testDescription`, () => {
  expect(radixSort.digitCount(12)).toEqual(2)
})
test(`testDescription`, () => {
  expect(radixSort.digitCount(1)).toEqual(1)
})
test(`testDescription`, () => {
  expect(radixSort.digitCount(0)).toEqual(1)
})
test(`testDescription`, () => {
  expect(radixSort.mostDigits([1234, 56, 7])).toEqual(4)
})
test(`testDescription`, () => {
  expect(radixSort.mostDigits([1, 1, 11111, 1])).toEqual(5)
})
test(`testDescription`, () => {
  expect(radixSort.mostDigits([12, 34, 56, 78])).toEqual(2)
})
test(`testDescription`, () => {
  expect(radixSort.mostDigits([])).toEqual(0)
})
