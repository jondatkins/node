const uniqueValues = require('../modules/uniqueValues.js');
test(`Should be [-3, 3]`, () => {
  expect(uniqueValues.countUniqueValues([1, 1, 1, 1, 1, 2]).toBe(2))
})
test(`Should be [-3, 3]`, () => {
  expect(uniqueValues.countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]).toBe(7))
})
test(`Should be [-3, 3]`, () => {
  expect(uniqueValues.countUniqueValues([]).toBe(0))
})
test(`Should be [-3, 3]`, () => {
  expect(uniqueValues.countUniqueValues([-2, -1, -1, 0, 1]).toBe(4))
})
