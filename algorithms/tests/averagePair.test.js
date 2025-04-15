const avPair = require('../modules/averagePair');

test(``, () => {
  expect(avPair.averagePair([1, 2, 3], 2.5)).toBe(true)
})
test(``, () => {
  expect(avPair.averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true)
})
test(``, () => {
  expect(avPair.averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false)
})
test(``, () => {
  expect(avPair.averagePair([], 4)).toBe(false)
})
