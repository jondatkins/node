const capitalizeFirst = require('../modules/capitalizeFirst')

test(`testDescription`, () => {
  expect(capitalizeFirst.capitalizeFirst(['car', 'taco', 'banana'])).toEqual(['Car', 'Taco', 'Banana'])
})
