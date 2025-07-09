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
