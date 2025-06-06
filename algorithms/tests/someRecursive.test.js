const someRecursive = require('../modules/someRecursive')

const isOdd = val => val % 2 !== 0;

test(`testDescription`, () => {
  expect(someRecursive.someRecursive([1, 2, 3, 4], isOdd)).toBe(true)
})
test(`testDescription`, () => {
  expect(someRecursive.someRecursive([4, 6, 8, 9], isOdd)).toBe(true)
})
test(`testDescription`, () => {
  expect(someRecursive.someRecursive([4, 6, 8], isOdd)).toBe(false)
})
test(`testDescription`, () => {
  expect(someRecursive.someRecursive([4, 6, 8], val => val > 10)).toBe(false)
})
