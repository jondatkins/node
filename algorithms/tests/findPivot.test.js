const findPivot = require('../modules/findPivot')

test(`testDescription`, () => {
  expect(findPivot.findPivot([3, 4, 1, 2])).toBe(2)
})
test(`testDescription`, () => {
  expect(findPivot.findPivot([6, 7, 8, 9, 1, 2, 3, 4])).toBe(4)
})
test(`testDescription`, () => {
  expect(findPivot.findPivot([6, 7, 8, 9, 1, 2, 3, 4])).toBe(4)
})
test(`testDescription`, () => {
  expect(findPivot.findPivot([37, 44, 66, 102, 10, 22])).toBe(4)
})
test(`testDescription`, () => {
  expect(findPivot.findPivot([6, 7, 8, 9, 1, 2, 3, 4], 12)).toBe(4)
})
test(`testDescription`, () => {
  expect(findPivot.findPivot([11, 12, 13, 14, 15, 16, 3, 5, 7, 9])).toBe(6)
})
