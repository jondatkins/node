const radixSort2 = require('../modules/radixSort')

test(`testDescription`, () => {
  expect(radixSort2.radixSort([1234, 56, 7])).toEqual([7, 56, 1234])
})
test(`testDescription`, () => {
  expect(radixSort2.radixSort([100, 21, 9, 20009, 58])).toEqual([9, 21, 58, 100, 20009])
})
test(`testDescription`, () => {
  expect(radixSort2.radixSort([12, 78, 56, 34])).toEqual([12, 34, 56, 78])
})
