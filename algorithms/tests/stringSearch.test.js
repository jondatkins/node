const stringSearch = require('../modules/stringSearch')

test(`testDescription`, () => {
  expect(stringSearch.stringSearch("wowomgzomg", "omg")).toBe(2)
})
