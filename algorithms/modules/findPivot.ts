const findPivot = (array: number[]) => {
  let length: number = array.length;
  let left = 0;
  let right = length - 1;

  while (left < right) {
    let mid = (left + right) >> 1;
    if (array[mid] > array[right]) {
      left = mid + 1;
    }
    else {
      right = mid;
    }
  }
  return left;
}
console.log(findPivot([3, 4, 1, 2])) // 2; 
console.log(findPivot([6, 7, 8, 9, 1, 2, 3, 4])) // 4; 
console.log(findPivot([6, 7, 8, 9, 1, 2, 3, 4])) // 4; 
console.log(findPivot([37, 44, 66, 102, 10, 22])) // 4; 
console.log(findPivot([6, 7, 8, 9, 1, 2, 3, 4])) // 4; 
console.log(findPivot([11, 12, 13, 14, 15, 16, 3, 5, 7, 9])) // 6; 
module.exports = { findPivot };
