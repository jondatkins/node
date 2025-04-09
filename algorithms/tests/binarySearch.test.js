const binSearch = require('../modules/binarySearch');

test(``, () => {
  expect(binSearch.binarySearch([1, 2, 3, 4, 5, 6], 4)).toEqual(3)
})
test(``, () => {
  expect(binSearch.binarySearch([1, 2, 3, 4, 5, 6], 6)).toEqual(5)
})
test(``, () => {
  expect(binSearch.binarySearch([1, 2, 3, 4, 5, 6], 11)).toEqual(-1)
})
test(``, () => {
  expect(binSearch.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual(2)
})
test(``, () => {
  expect(binSearch.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)).toEqual(6)
})
test(``, () => {
  expect(binSearch.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 11)).toEqual(10)
})
