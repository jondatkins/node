const findRotatedIndex = require('../modules/findRotatedIndex')

test(`testDescription`, () => {
  expect(findRotatedIndex.findPivot([3, 4, 1, 2], 4)).toBe(2)
})
test(`testDescription`, () => {
  expect(findRotatedIndex.findPivot([6, 7, 8, 9, 1, 2, 3, 4], 8)).toBe(4)
})
test(`testDescription`, () => {
  expect(findRotatedIndex.findPivot([6, 7, 8, 9, 1, 2, 3, 4], 3)).toBe(4)
})
test(`testDescription`, () => {
  expect(findRotatedIndex.findPivot([37, 44, 66, 102, 10, 22], 14)).toBe(4)
})
test(`testDescription`, () => {
  expect(findRotatedIndex.findPivot([6, 7, 8, 9, 1, 2, 3, 4], 12)).toBe(4)
})
test(`testDescription`, () => {
  expect(findRotatedIndex.findPivot([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)).toBe(4)
})
