const sumZero = require('../modules/sumZero.js');
test(`Should be [-3, 3]`, () => {
  expect(sumZero.sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3].sort())
})
test(`Should be [-2, 2]`, () => {
  expect(sumZero.sumZero([-4, -3, -2, -1, 0, 1, 2, 5])).toEqual([-2, 2].sort())
})
test(`Should be undefined`, () => {
  expect(sumZero.sumZero([-2, 0, 1, 3])).toBeUndefined()
})
test(`Should be undefined`, () => {
  expect(sumZero.sumZero([1, 2, 3])).toBeUndefined()
})
test(`Should be [-3, 3]`, () => {
  expect(sumZero.sumZero2([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3].sort())
})
test(`Should be [-2, 2]`, () => {
  expect(sumZero.sumZero2([-4, -3, -2, -1, 0, 1, 2, 5])).toEqual([-2, 2].sort())
})
test(`Should be undefined`, () => {
  expect(sumZero.sumZero2([-2, 0, 1, 3])).toBeUndefined()
})
test(`Should be undefined`, () => {
  expect(sumZero.sumZero2([1, 2, 3])).toBeUndefined()
})
