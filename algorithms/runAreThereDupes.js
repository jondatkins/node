const areThereDupes = require('./modules/areThereDuplicates.js')

// console.log(areThereDupes.areThereDuplicates(1, 2, 3)) // false
console.log(areThereDupes.areThereDuplicates(1, 2, 2)) // true
console.log(areThereDupes.areThereDuplicates('a', 'b', 'c', 'a')) // true
