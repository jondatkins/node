// multi pointer version
const findPair2 = (arrayOfInts, num) => {
  if (arrayOfInts < 2) {
    console.log(`No match for ${arrayOfInts} when looking for diff of ${num}`)
    return false;
  }
  arrayOfInts.sort((a, b) => {
    return a - b;
  });
  num = Math.abs(num);
  // console.log(arrayOfInts);
  var i = 0;
  var j = 1;
  while (i < arrayOfInts.length && j < arrayOfInts.length) {
    let diff = Math.abs(arrayOfInts[i] - arrayOfInts[j]);
    if (diff === num && i != j) {
      console.log(`diff between ${arrayOfInts[i]} and ${arrayOfInts[j]} is ${diff}, which equals ${num}`)
      return true;
    }
    if (diff > num) {
      // diff is too big, so increase first pointer
      i++;
    }
    else {
      // diff is too small, so increase 2nd pointer.
      j++;
    }
  }
  console.log(`No match for ${arrayOfInts} when looking for diff of ${num}`)
  return false;
}
console.log(findPair2([6, 1, 4, 10, 2, 4], 2)) // true; 
console.log(findPair2([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)) // true; 
console.log(findPair2([4, -2, 3, 10], -6)) // true; 
console.log(findPair2([6, 1, 4, 10, 2, 4], 22)) // false; 
console.log(findPair2([], 0)) // false; 
console.log(findPair2([5, 5], 0)) // true; 
console.log(findPair2([-4, 4], -8)) // true; 
console.log(findPair2([-4, 4], 8)) // true; 
console.log(findPair2([1, 3, 4, 6], -2)) // true; 
console.log(findPair2([0, 1, 3, 4, 6], -2)) // true; 
console.log(findPair2([1, 2, 3], 0)) // false; 
module.exports = { findPair2 };
