const subSeq = require('../modules/isSubsequence');

test(`hello is a substring of 'hello world', so true`, () => {
  expect(subSeq.isSubsequence('hello', 'hello world')).toBe(true)
})
test(`sing isn a substring of 'sting', so true`, () => {
  expect(subSeq.isSubsequence('sing', 'sting')).toBe(true)
})
test(`abc is a substring of abracadabra, so true`, () => {
  expect(subSeq.isSubsequence('abc', 'abracadabra')).toBe(true)
})
test(`abc is not a subtstring of 'acb', so false.`, () => {
  expect(subSeq.isSubsequence('abc', 'acb')).toBe(false)
})
