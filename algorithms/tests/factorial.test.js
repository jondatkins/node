const factorial = require('../modules/factorial')

test(`testDescription`, () => {
  expect(factorial.factorial(-1)).toBe(0)
})
test(`testDescription`, () => {
  expect(factorial.factorial(1)).toBe(1)
})
test(`testDescription`, () => {
  expect(factorial.factorial(2)).toBe(2)
})
test(`testDescription`, () => {
  expect(factorial.factorial(4)).toBe(24)
})
test(`testDescription`, () => {
  expect(factorial.factorial(7)).toBe(5040)
})
