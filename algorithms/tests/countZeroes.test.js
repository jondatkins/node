const countZeroes = require('../modules/countZeroes')

test('', () => {
expect( countZeroes.countZeroes([1,1,1,1,0,0])).toBe(2)
})
test('', () => {
expect( countZeroes.countZeroes([1,0,0,0,0])).toBe(4)
})
test('', () => {
expect( countZeroes.countZeroes([0,0,0])).toBe(3)
})
test('', () => {
expect( countZeroes.countZeroes([1,1,1,1])).toBe(0)
})
