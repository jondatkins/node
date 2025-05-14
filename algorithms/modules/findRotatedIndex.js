const findRotatedIndex = (numList, num) => {
  let mid = Math.trunc(numList.length / 2);
  let low = 0;
  let high = numList.length - 1;
  while (low <= high) {

  }
  return -1;
}

const findArrayStart = (array) => {
  // binary search for beginning of rotated array
  let mid = Math.trunc(numList.length / 2);
  let low = 0;
  let high = numList.length - 1;
  let left = -1;
  let right = -1;
  while (low <= high) {
    if (mid + 1 > array.length - 1) {
      return -1;
    }
    left = array[mid];
    right = array[mid + 1];

  }
  return -1;

}

console.log(findRotatedIndex([3, 4, 1, 2], 4)) // 1; 
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 2; 
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)) // 6; 
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)) // -1; 
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)) // -1; 
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)) // 5; 
module.exports = { findRotatedIndex };
