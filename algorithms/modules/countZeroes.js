const countZeroes = (arrayOnesZeroes) => {
  let mid = 0;
  let low = 0;
  let high = Math.trunc(arrayOnesZeroes.length - 1);
  let left = -1;
  let right = -1;
  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    if (mid < arrayOnesZeroes.length - 1) {
      left = arrayOnesZeroes[mid];
      right = arrayOnesZeroes[mid + 1];
      if (left === 1 && right === 0) {
        return arrayOnesZeroes.length - (mid + 1);
      }
      else if (left === 1 && right === 1) {
        // search upper range, so set low to mid + 1
        if (mid + 1 === arrayOnesZeroes.length - 1) {
          // mid +1 is the right hand index, so if this is the last element
          // the array must be all 1s, so return 0
          return 0;
        }
        low = mid + 1;
      }
      else {
        if (mid === 0) {
          // mid is the index of the left element, so we're at the start of
          // the array here, so must be all 0s, so just return array length.
          return arrayOnesZeroes.length;
        }
        // Both 0s here, so
        high = mid - 1;
      }
    }
  }
}
console.log(countZeroes([1, 1, 1, 1, 0, 0])) // 2; 
console.log(countZeroes([1, 0, 0, 0, 0])) // 4; 
console.log(countZeroes([0, 0, 0])) // 3; 
console.log(countZeroes([1, 1, 1, 1])) // 0; 
console.log(countZeroes([1, 1, 1, 1, 1])) // 0; 
module.exports = { countZeroes };
