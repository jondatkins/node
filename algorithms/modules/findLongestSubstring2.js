
const printObject = (someObject) => {
  for (let key in someObject) {
    console.log('char is %s, index is %i', key, someObject[key]);
  }
}

const findLongestSubstring = (someString) => {
  let start = 0;
  let end = 0;
  let maxLength = 0;
  let loopCount = 0;
  // let uniqueChars = new Set();
  let charIndices = {};
  while (end < someString.length) {
    loopCount++;
    // Add character to set if it isn't there already, and increment
    // end pointer.
    if (!charIndices.hasOwnProperty(someString[end])) {
      charIndices[someString[end]] = end;
      end++;
    }
    else {
      // Get the index of the duplicate character.
      start = charIndices[someString[end]] + 1;
      end = start;
      charIndices = {};
    }
    let tempLength = end - start;
    maxLength = Math.max(maxLength, tempLength);
  }
  // console.log('For string %s loop count is %s', someString, loopCount);
  return maxLength;
}
console.log(findLongestSubstring('')) // 0; 
console.log(findLongestSubstring('rithmschool')) // 7; 
console.log(findLongestSubstring('thisisawesome')) // 6; 
console.log(findLongestSubstring('thecatinthehat')) // 7; 
console.log(findLongestSubstring('bbbbbb')) // 1; 
console.log(findLongestSubstring('longestsubstring')) // 8; 
console.log(findLongestSubstring('thisishowwedoit')) // 6; 
module.exports = { findLongestSubstring };
