let words = ['i', 'am', 'learning', 'recursion'];
const capitalizeWords = require('../modules/capitalizeWords')

test(`testDescription`, () => {
  expect(capitalizeWords.capitalizeWords(words)).toEqual(['i', 'am', 'learning', 'recursion'])
})
