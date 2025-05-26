const findRotatedIndex = (numList, num) => {
  // binary search for beginning of rotated array
  let left = 0;
  let right = numList.length - 1;

  while (left < right) {
    let mid = Math.trunc(right - left / 2);
    if (numList[0] <= numList[mid]) {
      //
      if (num >= numList[0] && num <= numList[mid]) {
        // if target num is in this subarray (5)
        right = mid;
      }
      else {
        // num is not here (6)
        left = mid + 1;
      }
    }
    else if (numList[mid] < numList[numList.length - 1]) { // sorted portion is right half
      if (num > numList[mid] && num <= numList[numList.length - 1]) {
        // is num in right subarray
        left = mid + 1;
      }
      else {
        right = mid;
      }
    }

  }
  if (numList[left] === num) {
    return left;
  }
  return -1
}

console.log(findRotatedIndex([3, 4, 1, 2], 4)) // 1; 
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 2; 
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)) // 6; 
// console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)) // -1; 
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)) // -1; 
// console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)) // 5; 
module.exports = { findRotatedIndex };
