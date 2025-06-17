const capitalizeFirst = require('../modules/capitalizeFirstCourse')

test(`testDescription`, () => {
  expect(capitalizeFirst.capitalizeFirst(['car', 'taco', 'banana'])).toEqual(['Car', 'Taco', 'Banana'])
})
