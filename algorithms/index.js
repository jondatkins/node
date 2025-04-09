// const anagrams = require('./modules/anagrams.js');
// const sumZero = require('./modules/sumZero.js');
// const sumZero2 = require('./modules/sumZero.js');
// const uniqueValues = require('./modules/uniqueValues.js');
// const uniqueValues2 = require('./modules/uniqueValues.js');

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

// console.log(uniqueValues.countUniqueValues2([1, 1, 1, 1, 1, 2])) // 2
// console.log(uniqueValues.countUniqueValues2([1, 2, 3])) // 2
// console.log(uniqueValues.countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
// console.log(uniqueValues.countUniqueValues([])) // 0
// console.log(uniqueValues.countUniqueValues([-2, -1, -1, 0, 1])) // 4
// const maxSubarraySum = require('./modules/maxSubarraySum.js');

// console.log(maxSubarraySum.maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
// console.log(maxSubarraySum.maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
// console.log(maxSubarraySum.maxSubarraySum([4, 2, 1, 6], 1)) // 6
// console.log(maxSubarraySum.maxSubarraySum([4, 2, 1, 6, 2], 4)) // 13
// console.log(maxSubarraySum.maxSubarraySum([], 4)) // null
// console.log(maxSubarraySum.maxSubarraySum3([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))


const longestUniqueSequence = require('./modules/longestUniqueSequence.js');
// console.log(longestUniqueSequence.maxUniqueCharacters("hellothere"));
// console.log(longestUniqueSequence.maxUniqueCharacters("helothere"));
// console.log(longestUniqueSequence.maxUniqueCharacters("llhelothere"));
// console.log(longestUniqueSequence.maxUniqueCharacters("hlelothere"));
// console.log(longestUniqueSequence.maxUniqueCharacters("hellothereeaxzypms"));

const binSearch = require('./modules/binarySearch.js');
// console.log(binSearch.binarySearch([1, 2, 3, 4, 5, 6], 4)) // 3
// console.log(binSearch.binarySearch([1, 2, 3, 4, 5, 6], 6)) // 5
console.log(binSearch.binarySearch([1, 2, 3, 4, 5, 6], 11)) // -1
