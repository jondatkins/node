const flatten = require('../modules/flatten')

test(`testDescription`, () => {
  expect(flatten.flatten([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5])
})
test(`testDescription`, () => {
  expect(flatten.flatten([1, [2, [3, 4], [[5]]]])).toEqual([1, 2, 3, 4, 5])
})
test(`testDescription`, () => {
  expect(flatten.flatten([[1], [2], [3]])).toEqual([1, 2, 3])
})
test(`testDescription`, () => {
  expect(flatten.flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toEqual([1, 2, 3])
})
