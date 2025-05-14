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
  let mid = Math.trunc(numList.length / 2);
  let low = 0;
  let high = numList.length - 1;
  let left = -1;
  let right = -1;
  let midValue = -1;
  while (low <= high) {
    left = numList[low];
    right = numList[high];
    midValue = numList[mid];
    if (low === high - 1) {
      if (left < midValue) {
        return mid;
      }
      else if (right > midValue) {
        return mid;
      }
    }
    if (right > midValue) {
      if (low === high - 1) {
        return mid;
      }
      low = mid + 1;
    }
    else if (right < midValue) {
      high = mid - 1;
    }

    // if(left > right){
    //   return mid+1;
    // }

  }
  return -1;

}

console.log(findPivot([3, 4, 1, 2], 4)) // 1; 
// console.log(findRotatedIndex([3, 4, 1, 2], 4)) // 1; 
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 2; 
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)) // 6; 
// console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)) // -1; 
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)) // -1; 
// console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)) // 5; 
module.exports = { findRotatedIndex };
