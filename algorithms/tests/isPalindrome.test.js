const isPalindrome = require('../modules/isPalindrome')

test(`testDescription`, () => {
expect( isPalindrome.isPalindrome('awesome')).toBe(false)
})
test(`testDescription`, () => {
expect( isPalindrome.isPalindrome('foobar')).toBe(false)
})
test(`testDescription`, () => {
expect( isPalindrome.isPalindrome('tacocat')).toBe(true)
})
test(`testDescription`, () => {
expect( isPalindrome.isPalindrome('amanaplanacanalpanama')).toBe(true)
})
test(`testDescription`, () => {
expect( isPalindrome.isPalindrome('amanaplanacanalpandemonium')).toBe(false)
})
