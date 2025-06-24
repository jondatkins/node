const bubbleSort = require('../modules/bubbleSort')

test(`testDescription`, () => {
  expect(bubbleSort.bubbleSort([7, 4, 3, 9, 7, 1])).toEqual([1, 3, 4, 7, 7, 9])
})
test(`testDescription`, () => {
  expect(bubbleSort.bubbleSort([6, 9, 3, 9, 7, 1])).toEqual([1, 3, 6, 7, 9, 9])
})
test(`testDescription`, () => {
  expect(bubbleSort.bubbleSort([7, 4, 5, 9, 7, 6])).toEqual([4, 5, 6, 7, 7, 9])
})
