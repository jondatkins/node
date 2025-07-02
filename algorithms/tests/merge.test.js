const merge = require('../modules/merge')

test(`testDescription`, () => {
  expect(merge.mergeHelper([1, 10, 50], [2, 14, 99, 100])).toEqual([1, 2, 10, 14, 50, 99, 100])
})
test(`testDescription`, () => {
  expect(merge.mergeHelper([1, 10, 50, 77], [2, 8, 14, 99, 100])).toEqual([1, 2, 8, 10, 14, 50, 77, 99, 100])
})
test(`testDescription`, () => {
  expect(merge.mergeHelper([1, 10, 50, 77], [14, 99, 100])).toEqual([1, 10, 14, 50, 77, 99, 100])
})
