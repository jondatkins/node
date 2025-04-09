const sameFreq = require('../modules/sameFrequency.js');

test(`182 and 281 have the same frequency of digits`, () => {
  expect(sameFreq.sameFrequency(182, 281)).toEqual(true)
})
test(`34 and 14 do not have the same digit frequency`, () => {
  expect(sameFreq.sameFrequency(34, 14)).toEqual(false)
})
test(`3589578, 5879385 have the same frequency of digits`, () => {
  expect(sameFreq.sameFrequency(3589578, 5879385)).toEqual(true)
})
test(`22 and 222 do not have the same frequency of digits`, () => {
  expect(sameFreq.sameFrequency(22, 222)).toEqual(false)
})
