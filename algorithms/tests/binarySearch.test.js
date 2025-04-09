const binSearch = require('../modules/binarySearch');

test(`4 should be at index 3 for array 1,2,3,4,5,6`, () => {
  expect(binSearch.binarySearch([1, 2, 3, 4, 5, 6], 4)).toEqual(3)
})
test(`6 should be at index 5 for array 1,2,3,4,5,6`, () => {
  expect(binSearch.binarySearch([1, 2, 3, 4, 5, 6], 6)).toEqual(5)
})
test(`11 should be at index -1 for array 1,2,3,4,5,6`, () => {
  expect(binSearch.binarySearch([1, 2, 3, 4, 5, 6], 11)).toEqual(-1)
})
test(`3 should be at index 2 for array 1,2,3,4,5,6`, () => {
  expect(binSearch.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual(2)
})
test(`7 should be at index 6 for array 1,2,3,4,5,6`, () => {
  expect(binSearch.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)).toEqual(6)
})
test(`11 should be at index 10 for array 1,2,3,4,5,6`, () => {
  expect(binSearch.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 11)).toEqual(10)
})

const testArray = [1, 2, 3, 4, 5, 6]
test(`5 should be at index 4 for array 1,2,3,4,5,6`, () => {
  expect(binSearch.findMe(testArray, 5, 0, testArray.length - 1)).toEqual(4)
})
test(`2 should be at index 1 for array 1,2,3,4,5,6`, () => {
  expect(binSearch.findMe(testArray, 2, 0, testArray.length - 1)).toEqual(1)
})
test(`7 should be at index -1 for array 1,2,3,4,5,6`, () => {
  expect(binSearch.findMe(testArray, 7, 0, testArray.length - 1)).toEqual(-1)
})
