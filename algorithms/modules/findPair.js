// For an unordered array of numbers and a further number 'num', find a pair of numbers
// whose difference matches num.
const findPair = (arrayOfInts, num) => {
  let freqObj = {};
  let isDuplicate = false;
  arrayOfInts.forEach((elem, index) => {
    // Find a duplicate
    if (freqObj[elem]) {
      isDuplicate = true;
      // if there's a duplicate value, and the difference we're looking for is
      // 0, just return true here, because we're effectively just looking for
      // a duplicate. The code will still work without this if statement.
      if (num === 0) {
        return true;
      }
    }
    freqObj[elem] = [elem + num, elem - num]
  });
  // If there are no duplicates, and the difference we're looking for is 0,
  // there can't be a pair of numbers with 0 difference. This block is needed,
  // because the final for loop will not work for unique values with 0 difference.
  if (!isDuplicate && num === 0) {
    return false;
  }
  for (key in freqObj) {
    let low, high;
    [low, high] = freqObj[key];
    if (freqObj[low] || freqObj[high]) {
      return true;
    }
  }
  return false;
}

console.log(findPair([6, 1, 4, 10, 2, 4], 2)) // true
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)) // true
console.log(findPair([4, -2, 3, 10], -6)) // true
console.log(findPair([6, 1, 4, 10, 2, 4], 22)) // false
console.log(findPair([], 0)) // false
console.log(findPair([5, 5], 0)) // true
console.log(findPair([-4, 4], -8)) // true
console.log(findPair([-4, 4], 8)) // true
console.log(findPair([1, 3, 4, 6], -2)) // true
console.log(findPair([0, 1, 3, 4, 6], -2)) // true
console.log(findPair([1, 2, 3], 0)) // false
module.exports = { findPair };
