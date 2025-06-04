const productOfArray = require('../modules/productOfArray')

test(`testDescription`, () => {
  expect(productOfArray.productOfArray([1, 2, 3])).toBe(6)
})
test(`testDescription`, () => {
  expect(productOfArray.productOfArray([1, 2, 3, 10])).toBe(60)
})
