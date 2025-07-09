const quickSort = require('../modules/quickSort.ts')
let arr1 = [9, 3, 12, 7, 1, 44, 8]
let arr2 = [22, -22, 9, 3, 12, 15, 99999, 7, 33, 1, 44, 8]
let pivotIndex1 = quickSort.pivot(arr1);
let pivotIndex2 = quickSort.pivot(arr2);

test(`pivot index for [9, 3, 12, 7, 1, 44, 8] should be 4`, () => {
  expect(pivotIndex1).toEqual(4)
})
test(`pivot index for [22, -22, 9, 3, 12, 15, 99999, 7, 33, 1, 44, 8] should be 8`, () => {
  expect(pivotIndex2).toEqual(8)
})
test(`I expect 9 at index 4, with lower values to the left\n${arr1}`, () => {
  expect(arr1).toEqual([8, 3, 7, 1, 9, 44, 12])
})
test(`I expect 22 at index 8, with lower values to the left\n${arr2}`, () => {
  expect(arr2).toEqual([8, -22, 9, 3, 12, 15, 7, 1, 22, 99999, 44, 33])
})
test(`Array 1 ${arr1} should be sorted`, () => {
  expect(quickSort.quickSort(arr1)).toEqual([1, 3, 7, 8, 9, 12, 44])
})
test(`Array 2 ${arr2} should be sorted`, () => {
  expect(quickSort.quickSort(arr2)).toEqual([-22, 1, 3, 7, 8, 9, 12, 15, 22, 33, 44, 99999])
})
