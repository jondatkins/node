const constructNote = require('../modules/constructNote');

test(``, () => {
  expect(constructNote.constructNote('aa', 'abc')).toBe(false)
})
test(``, () => {
  expect(constructNote.constructNote('abc', 'dcba')).toBe(true)
})
test(``, () => {
  expect(constructNote.constructNote('aabbcc', 'bcabcaddff')).toBe(true)
})
test(``, () => {
  expect(constructNote.constructNote('aabbcc', 'bcaabcaddff')).toBe(true)
})
