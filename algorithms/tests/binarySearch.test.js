const binarySearch = require('../modules/binarySearchRecursive')

test(`testDescription`, () => {
  expect(binarySearch.binarySearch([1, 2, 3, 4, 5], 2)).toBe(1)
})
test(`testDescription`, () => {
  expect(binarySearch.binarySearch([1, 2, 3, 4, 5], 3)).toBe(2)
})
test(`testDescription`, () => {
  expect(binarySearch.binarySearch([1, 2, 3, 4, 5], 5)).toBe(4)
})
test(`testDescription`, () => {
  expect(binarySearch.binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1)
})
test(`testDescription`, () => {
  expect(binarySearch.binarySearch(
    [5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
      40, 44, 64, 79, 84, 86, 95, 96, 98, 99]
    , 10)).toBe(2)
})
test(`testDescription`, () => {
  expect(binarySearch.binarySearch(
    [5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
      40, 44, 64, 79, 84, 86, 95, 96, 98, 99]
    , 95)).toBe(16)
})
test(`testDescription`, () => {
  expect(binarySearch.binarySearch(
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    , 100)).toBe(-1)
})
