const pivotHelper = require('../modules/pivotHelper')

let arr1 = [9, 3, 7, 1, 44, 8]
test(`testDescription`, () => {
  expect(pivotHelper.pivotHelper(arr1)).toEqual([3, 7, 1, 9, 44, 8])
})
