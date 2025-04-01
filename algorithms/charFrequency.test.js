const charFreq = require('./charFrequency');

test(`Hello should return an object {'h': 1, 'e': 1, 'l': 2, 'o': 1}`, () => {
  expect(charFreq.charFrequency('Hello')).toEqual({ 'h': 1, 'e': 1, 'l': 2, 'o': 1 })
})
test(`Hello should return an object {'h': 1, 'e': 1, 'l': 2, 'o': 1}`, () => {
  expect(charFreq.charFrequency('Hel!lo')).toEqual({ 'h': 1, 'e': 1, 'l': 2, 'o': 1 })
})
test('', () => {
  expect(charFreq.charFrequency('abbcccdddd')).toEqual({ 'a': 1, 'b': 2, 'c': 3, 'd': 4 })
})
test('', () => {
  expect(charFreq.charFrequency()).toBeUndefined(undefined)
})
