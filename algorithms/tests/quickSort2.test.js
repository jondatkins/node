const quickSort2 = require('../modules/quickSort')

var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

let pivotIndex1 = quickSort2.pivot(arr1)  // 3
let pivotIndex2 = quickSort2.pivot(arr2)  // 4
let pivotIndex3 = quickSort2.pivot(arr3, 0, arr3.length - 1, strLength)
function strLength(a, b) {
  return a.length - b.length
}

test(`testDescription`, () => {
  expect(pivotIndex1).toEqual(3)
})
test(`testDescription`, () => {
  expect(pivotIndex2).toEqual(4)
})
test(`testDescription`, () => {
  expect(pivotIndex3).toEqual(1)
})
test(`testDescription`, () => {
  expect(arr1.slice(0, 3).sort((a, b) => a - b)).toEqual([2, 3, 4])
})
test(`testDescription`, () => {
  expect(arr1.slice(3).sort((a, b) => a - b)).toEqual([5, 7, 8, 9, 10, 20])
})
test(`testDescription`, () => {
  expect(arr2.slice(0, 4).sort((a, b) => a - b)).toEqual([0, 2, 4, 5])
})
test(`testDescription`, () => {
  expect(arr2.slice(4).sort((a, b) => a - b)).toEqual([8, 10, 11, 12, 13, 16])
})
test(`testDescription`, () => {
  expect(arr3.slice(0, 1).sort(strLength)).toEqual(["Blue"])
})
test(`testDescription`, () => {
  expect(arr3.slice(1).sort(strLength)).toEqual(["LilBub", "Grumpy", "Garfield", "Heathcliff"])
})
