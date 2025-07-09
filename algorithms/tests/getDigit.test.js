const getDigit = require('../modules/getDigit')

test(`testDescription`, () => {
  expect(getDigit.getDigit(12345, 0)).toEqual(5)
})
test(`testDescription`, () => {
  expect(getDigit.getDigit(12345, 1)).toEqual(4)
})
test(`testDescription`, () => {
  expect(getDigit.getDigit(12345, 2)).toEqual(3)
})
test(`testDescription`, () => {
  expect(getDigit.getDigit(12345, 3)).toEqual(2)
})
test(`testDescription`, () => {
  expect(getDigit.getDigit(12345, 4)).toEqual(1)
})
test(`testDescription`, () => {
  expect(getDigit.getDigit(12345, 5)).toEqual(0)
})
test(`testDescription`, () => {
  expect(getDigit.getDigit(-12345, 5)).toEqual(0)
})
test(`testDescription`, () => {
  expect(getDigit.digitCount(123)).toEqual(3)
})
test(`testDescription`, () => {
  expect(getDigit.digitCount(12)).toEqual(2)
})
test(`testDescription`, () => {
  expect(getDigit.digitCount(1)).toEqual(1)
})
test(`testDescription`, () => {
  expect(getDigit.digitCount(0)).toEqual(1)
})
test(`testDescription`, () => {
  expect(getDigit.mostDigits([1234, 56, 7])).toEqual(4)
})
test(`testDescription`, () => {
  expect(getDigit.mostDigits([1, 1, 11111, 1])).toEqual(5)
})
test(`testDescription`, () => {
  expect(getDigit.mostDigits([12, 34, 56, 78])).toEqual(2)
})
