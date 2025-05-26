function findRotatedIndex(nums: number[], target: number): number {
  const length = nums.length;
  let leftIndex = 0;
  let rightIndex = length - 1;

  // Use binary search to find the target
  while (leftIndex < rightIndex) {
    // Calculate the middle index
    const midIndex = (leftIndex + rightIndex) >> 1;
    // Is the lower part of the array a sorted sub-array?
    if (nums[0] <= nums[midIndex]) {
      // If target is between the first element and middle element
      if (target >= nums[0] && target <= nums[midIndex]) {
        // Narrow down the right bound
        rightIndex = midIndex;
      } else {
        // Target must be in the second half
        leftIndex = midIndex + 1;
      }
    } else { // This part of the array includes the pivot point.
      // If target is between the middle element and the last element
      if (target > nums[midIndex] && target <= nums[length - 1]) {
        // Narrow down the left bound
        leftIndex = midIndex + 1;
      } else {
        // Target must be in the first half
        rightIndex = midIndex;
      }
    }
  }
  // Check if we have found the target
  return nums[leftIndex] == target ? leftIndex : -1;
}

// console.log(findRotatedIndex([3, 4, 1, 2], 4)) // 1; 
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 2; 
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)) // 6; 
// console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)) // -1; 
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)) // -1; 
// console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)) // 5; 
module.exports = { findRotatedIndex };
