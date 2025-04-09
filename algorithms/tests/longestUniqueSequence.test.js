const longestUniqueSequence = require('../modules/longestUniqueSequence.js');
test(``, () => {
  expect(longestUniqueSequence.maxUniqueCharacters("hellothere")).toBe("lother")
})
test(``, () => {
  expect(longestUniqueSequence.maxUniqueCharacters("llhelothere")).toBe("lother")
})
test(``, () => {
  expect(longestUniqueSequence.maxUniqueCharacters("hlelothere")).toBe("lother")
})
test(``, () => {
  expect(longestUniqueSequence.maxUniqueCharacters("hellothereeaxzypms")).toBe("eaxzypms")
})
