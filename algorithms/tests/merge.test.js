const merge = require('../modules/merge')

test(`testDescription`, () => {
  expect(merge.merge([1, 10, 50], [2, 14, 99, 100])).toEqual([1, 2, 10, 14, 50, 99, 100])
})
