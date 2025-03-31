const charFreq = require('./charFrequency');

test('', () => {
  expect(charFreq.charFrequency('Hello')).toEqual({ 'h': 1, 'e': 1, 'l': 2, 'o': 1 })
})
