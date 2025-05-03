const sortedFrequency = require('../modules/sortedFrequency')

test(`There are 4 2s, so 4`, () => {
  expect(sortedFrequency.sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)).toBe(4)
})
test(`There's 1 3, so 1`, () => {
  expect(sortedFrequency.sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)).toBe(1)
})
test(`There's 2 1s, so 2`, () => {
  expect(sortedFrequency.sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)).toBe(2)
})
test(`There's no 4, so -1`, () => {
  expect(sortedFrequency.sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)).toBe(-1)
})
