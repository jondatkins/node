// const anagrams = require('./modules/anagrams.js');
// const sumZero = require('./modules/sumZero.js');
// const sumZero2 = require('./modules/sumZero.js');
const uniqueValues = require('./modules/uniqueValues.js');

// console.log(same.same4([1, 2, 3], [4, 1, 9])) // true
// console.log(same.same3([1, 2, 3], [1, 9])) // false
// console.log(same.same3([1, 2, 1], [4, 4, 1]))// false

// console.log(anagrams.validAnagram('', '')) //true
// console.log(anagrams.validAnagram('aaz', 'zza')) //false
// console.log(anagrams.validAnagram('anagram', 'nagaram')) //true
// console.log(anagrams.validAnagram('rat', 'car')) //false
// console.log(anagrams.validAnagram('awesome', 'awesom')) //false
// console.log(anagrams.validAnagram('qwerty', 'qeywrt')) //true
// console.log(anagrams.validAnagram('texttwisttime', 'timetwisttext')) //true

// console.log(sumZero.sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3,3]
// console.log(sumZero.sumZero([-2, 0, 1, 3])) // undefined
// console.log(sumZero.sumZero([1, 2, 3])) // undefined
// console.log(sumZero.sumZero2([-4, -3, -2, -1, 0, 1, 2, 5]))

console.log(uniqueValues.countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(uniqueValues.countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(uniqueValues.countUniqueValues([])) // 0
console.log(uniqueValues.countUniqueValues([-2, -1, -1, 0, 1])) // 4
