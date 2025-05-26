const countZeroes = (array: number[]) => {
  let length: number = array.length;
  let left = 0;
  let right = length - 1;

  if (array[array.length - 1] === 1) {
    return 0;
  }
  while (left < right) {
    let mid = (left + right) >> 1;
    if (array[mid] > array[right]) {
      left = mid + 1;
    }
    else {
      right = mid;
    }
  }
  let zeroesLength = array.length - left;
  return zeroesLength;
}
// console.log(countZeroes([1, 1, 1, 1, 0, 0])) // 2; 
// console.log(countZeroes([1, 0, 0, 0, 0])) // 4; 
console.log(countZeroes([0, 0, 0])) // 3; 
// console.log(countZeroes([1, 1, 1, 1])) // 0; 
// console.log(countZeroes([1, 1, 1, 1, 1])) // 0; 
module.exports = { countZeroes };
