const findRotatedIndex = (numList, num) => {
  let mid = Math.trunc(numList.length / 2);
  let low = 0;
  let high = numList.length - 1;
  while (low <= high) {

  }
  return -1;
}

const findPivot = (numList) => {
  // binary search for beginning of rotated array
  let low = 0;
  let high = numList.length - 1;
  while (low <= high) {
    let mid = Math.trunc(low + high / 2);
    if (numList[mid] > numList[high]) {
      // pivot is to right of mid
      low = mid + 1;
    }
    else if (numList[mid] <= numList[high]) {
      high = mid;
    }
  }
  return low;
}

console.log(findPivot([3, 4, 1, 2], 4)) // 1; 
// console.log(findRotatedIndex([3, 4, 1, 2], 4)) // 1; 
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 2; 
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)) // 6; 
// console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)) // -1; 
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)) // -1; 
// console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)) // 5; 
module.exports = { findRotatedIndex };
