const uniqueValues = require('../modules/uniqueValues.js');
test(`There are 2 unique values in this array`, () => {
  expect(uniqueValues.countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2)
})
test(`There are 7 unique values in this array`, () => {
  expect(uniqueValues.countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7)
})
test(`There are 0 unique values in this array`, () => {
  expect(uniqueValues.countUniqueValues([])).toBe(0)
})
test(`There are 4 unique values in this array`, () => {
  expect(uniqueValues.countUniqueValues([-2, -1, -1, 0, 1])).toBe(4)
})

const uniqueValues2 = require('../modules/uniqueValues.js');
test(`There are 2 unique values in this array`, () => {
  expect(uniqueValues.countUniqueValues2([1, 1, 1, 1, 1, 2])).toBe(2)
})
test(`There are 7 unique values in this array`, () => {
  expect(uniqueValues.countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7)
})
test(`There are 0 unique values in this array`, () => {
  expect(uniqueValues.countUniqueValues2([])).toBe(0)
})
test(`There are 4 unique values in this array`, () => {
  expect(uniqueValues.countUniqueValues2([-2, -1, -1, 0, 1])).toBe(4)
})
