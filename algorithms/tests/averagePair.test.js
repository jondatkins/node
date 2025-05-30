const avPair = require('../modules/averagePair');

test(`2.5 is the average of 2 and 3, so true`, () => {
  expect(avPair.averagePair([1, 2, 3], 2.5)).toBe(true)
})
test(`8 is the average of 6 and 10, so true`, () => {
  expect(avPair.averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true)
})
test(`4.1 is not the average of any of these  numbers, so false`, () => {
  expect(avPair.averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false)
})
test(`There are no numbers here, so false`, () => {
  expect(avPair.averagePair([], 4)).toBe(false)
})
