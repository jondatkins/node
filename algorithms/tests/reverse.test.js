const reverse = require('../modules/reverse')

test(`testDescription`, () => {
  expect(reverse.reverse('awesome')).toBe('emosewa')
})
test(`testDescription`, () => {
  expect(reverse.reverse('rithmschool')).toBe('loohcsmhtir')
})
