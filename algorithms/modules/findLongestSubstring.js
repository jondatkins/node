const findLongestSubstring = (someString) => {
  let start = 0;
  let end = 0;
  let maxLength = 0;
  let uniqueChars = new Set();
  while (end < someString.length) {
    if (!uniqueChars.has(someString[end])) {
      uniqueChars.add(someString[end]);
      end++;
    }
    else {
      // found a duplicate here
      uniqueChars.clear();
      start++;
      end = start;
    }
    let tempLength = end - start;
    maxLength = Math.max(maxLength, tempLength);
  }
  return maxLength;
}
// console.log(findLongestSubstring('')) // 0; 
console.log(findLongestSubstring('rithmschool')) // 7; 
// console.log(findLongestSubstring('thisisawesome')) // 6; 
// console.log(findLongestSubstring('thecatinthehat')) // 7; 
// console.log(findLongestSubstring('bbbbbb')) // 1; 
// console.log(findLongestSubstring('longestsubstring')) // 8; 
// console.log(findLongestSubstring('thisishowwedoit')) // 6; 
module.exports = { findLongestSubstring };
