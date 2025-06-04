const recursiveRange = require('../modules/recursiveRange')

test(`testDescription`, () => {
expect( recursiveRange.recursiveRange(6)).toBe(21)
})
test(`testDescription`, () => {
expect( recursiveRange.recursiveRange(10)).toBe(55)
})
