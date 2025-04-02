const same = require('../modules/same');

test(`The array 1,2,3 matches the array 4,1,9`, () => {
  expect(same.same([1, 2, 3], [4, 1, 9])).toBe(true)
})
test(`The array 1,2,3 does not match 1,9`, () => {
  expect(same.same([1, 2, 3], [1, 9])).toBe(false)
})
test(`The array 1,2,1 does not match 4,4,1`, () => {
  expect(same.same([1, 2, 1], [4, 4, 1])).toBe(false)
})

test(`The array 1,2,3 matches the array 4,1,9`, () => {
  expect(same.same2([1, 2, 3], [4, 1, 9])).toBe(true)
})
test(`The array 1,2,3 does not match 1,9`, () => {
  expect(same.same2([1, 2, 3], [1, 9])).toBe(false)
})
test(`The array 1,2,1 does not match 4,4,1`, () => {
  expect(same.same2([1, 2, 1], [4, 4, 1])).toBe(false)
})

test(`The array 1,2,3 matches the array 4,1,9`, () => {
  expect(same.same3([1, 2, 3], [4, 1, 9])).toBe(true)
})
test(`The array 1,2,3 does not match 1,9`, () => {
  expect(same.same3([1, 2, 3], [1, 9])).toBe(false)
})
test(`The array 1,2,1 does not match 4,4,1`, () => {
  expect(same.same3([1, 2, 1], [4, 4, 1])).toBe(false)
})

test(`The array 1,2,3 matches the array 4,1,9`, () => {
  expect(same.same4([1, 2, 3], [4, 1, 9])).toBe(true)
})
test(`The array 1,2,3 does not match 1,9`, () => {
  expect(same.same4([1, 2, 3], [1, 9])).toBe(false)
})
test(`The array 1,2,1 does not match 4,4,1`, () => {
  expect(same.same4([1, 2, 1], [4, 4, 1])).toBe(false)
})
