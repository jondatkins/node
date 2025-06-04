const fib = require('../modules/fib')

test(`testDescription`, () => {
expect( fib.fib(4)).toBe(3)
})
test(`testDescription`, () => {
expect( fib.fib(10)).toBe(55)
})
test(`testDescription`, () => {
expect( fib.fib(28)).toBe(317811)
})
test(`testDescription`, () => {
expect( fib.fib(35)).toBe(9227465)
})
