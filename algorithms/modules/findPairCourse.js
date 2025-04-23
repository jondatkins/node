// findPair Solution
// O(n) space + O(n) time
function findPair(arr, n) {
  // if n is 0, we just need to see if there's any duplicate in the array
  if (n === 0) {
    const seen = new Set();
    for (let num of arr) {
      if (seen.has(num)) {
        return true;
      }
      seen.add(num);
    }
    return false;
  }

  // for non-zero n, place all elements in a set
  const setVals = new Set(arr);

  // check for val + n or val - n in the set
  for (let val of arr) {
    if (setVals.has(val + n) || setVals.has(val - n)) {
      return true;
    }
  }

  return false;
}

// console.log(findPair([6, 1, 4, 10, 2, 4], 2)) // true
// console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)) // true
// console.log(findPair([4, -2, 3, 10], -6)) // true
// console.log(findPair([6, 1, 4, 10, 2, 4], 22)) // false
// console.log(findPair([], 0)) // false
// console.log(findPair([5, 5], 0)) // true
// console.log(findPair([-4, 4], -8)) // true
// console.log(findPair([-4, 4], 8)) // true
console.log(findPair([1, 3, 4, 6], -2)) // true
console.log(findPair([0, 1, 3, 4, 6], -2)) // true
console.log(findPair([1, 2, 3], 0)) // false
module.exports = { findPair };
