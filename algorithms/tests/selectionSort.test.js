const selectionSort = require('../modules/selectionSort')

test(`testDescription`, () => {
expect( selectionSort.selectionSort([5, 8, 2, 1, 9])).toBe([1,2,5,8,9])
})
test(`testDescription`, () => {
expect( selectionSort.selectionSort([8, 2, 1, 9])).toBe([1,2,8,9])
})
test(`testDescription`, () => {
expect( selectionSort.selectionSort([1, 2, 1, 9])).toBe([1,1,2,9])
})
