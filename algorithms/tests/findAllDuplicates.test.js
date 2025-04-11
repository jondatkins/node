const findAllDupes = require('../modules/findAllDuplicates');

test(`Expect an array with 2 and 3`, () => {
  expect(findAllDupes.findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]).sort()).toEqual([2, 3])
})
test(`Expect an array with nothing`, () => {
  expect(findAllDupes.findAllDuplicates([4, 3, 2, 1, 0]).sort()).toEqual([])
})
test(`Expect an array with 1, 2, 3`, () => {
  expect(findAllDupes.findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]).sort()).toEqual([1, 2, 3])
})
