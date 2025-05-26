const power = require('../modules/power')

test(`testDescription`, () => {
  expect(power.power(2, 2)).toBe(4)
})
test(`testDescription`, () => {
  expect(power.power(4, 2)).toBe(16)
})
test(`testDescription`, () => {
  expect(power.power(1, 10)).toBe(1)
})
test(`testDescription`, () => {
  expect(power.power(3, 2)).toBe(9)
})
