const areThereDupes = require('../modules/areThereDuplicates');

test(`There are no duplicates for the args 1, 2, 3`, () => {
  expect(areThereDupes.areThereDuplicates(1, 2, 3)).toBe(false)
})
test(`There are duplicates for the args 1, 2, 2`, () => {
  expect(areThereDupes.areThereDuplicates(1, 2, 2)).toBe(true)
})
test(`There are duplicates for the args 'a','b','c','a'`, () => {
  expect(areThereDupes.areThereDuplicates('a', 'b', 'c', 'a')).toBe(true)
})
test(`There are no duplicates for the args 1, 2, 3`, () => {
  expect(areThereDupes.areThereDuplicates2(1, 2, 3)).toBe(false)
})
test(`There are duplicates for the args 1, 2, 2`, () => {
  expect(areThereDupes.areThereDuplicates2(1, 2, 2)).toBe(true)
})
test(`There are duplicates for the args 'a','b','c','a'`, () => {
  expect(areThereDupes.areThereDuplicates2('a', 'b', 'c', 'a')).toBe(true)
})
