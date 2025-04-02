const anagrams = require('./modules/anagrams.js');

// console.log(same.same4([1, 2, 3], [4, 1, 9])) // true
// console.log(same.same3([1, 2, 3], [1, 9])) // false
// console.log(same.same3([1, 2, 1], [4, 4, 1]))// false

// console.log(anagrams.validAnagram('', '')) //true
console.log(anagrams.validAnagram('aaz', 'zza')) //false
// console.log(anagrams.validAnagram('anagram', 'nagaram')) //true
// console.log(anagrams.validAnagram('rat', 'car')) //false
// console.log(anagrams.validAnagram('awesome', 'awesom')) //false
// console.log(anagrams.validAnagram('qwerty', 'qeywrt')) //true
// console.log(anagrams.validAnagram('texttwisttime', 'timetwisttext')) //true
