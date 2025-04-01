const same = require('../modules/same');

// test(``, () => {
//   expect(same.same([1, 2, 3], [4, 1, 9])).toBe(true)
// })
// test(``, () => {
//   expect(same.same([1, 2, 3], [4, 5, 9])).toBe(false)
// })
// test(``, () => {
//   expect(same.same([1, 2, 1], [4, 4, 1])).toBe(false)
// })
//
test(``, () => {
  expect(same.same2([1, 2, 3], [4, 1, 9])).toBe(true)
})
test(``, () => {
  expect(same.same2([1, 2, 3], [4, 5, 9])).toBe(false)
})
test(``, () => {
  expect(same.same2([1, 2, 1], [4, 4, 1])).toBe(false)
})
