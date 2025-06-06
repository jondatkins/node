const flatten = require('../modules/flatten')

test(`testDescription`, () => {
  expect(flatten.flatten([1, 2, 3, [4, 5]])).toBe([1, 2, 3, 4, 5])
})
test(`testDescription`, () => {
  expect(flatten.flatten([1, [2, [3, 4], [[5]]]])).toBe([1, 2, 3, 4, 5])
})
test(`testDescription`, () => {
  expect(flatten.flatten([[1], [2], [3]])).toBe([1, 2, 3])
})
test(`testDescription`, () => {
  expect(flatten.flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toBe([1, 2, 3])
})
