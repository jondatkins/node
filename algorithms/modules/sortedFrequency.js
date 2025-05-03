const { first, last } = require("lodash");

const sortedFrequency = (nums, num) => {
  let mid = 0;
  let low = 0;
  let high = Math.trunc(nums.length - 1);
  let left = -1;
  let right = -1;
  let firstIndex = -1;
  let lastIndex = -1;
  while (low <= high) {
    if (firstIndex != -1 && lastIndex != -1) {
      return lastIndex - firstIndex + 1;
    }
    mid = Math.floor((high + low) / 2);
    if (mid < nums.length - 1) {
      left = nums[mid];
      right = nums[mid + 1];
      if (left !== num && right === num) {
        // right is the first index of our number
        // So save this, and make low = to this number
        firstIndex = mid + 1;
        low = firstIndex;
      }
      else if (left === num && right !== num) {
        // left is the final index
        lastIndex = mid;
        high = lastIndex;
      }
      else if (left === num && right === num) {
        // we're inside the target subarray
        // So look at lower range?
        // high = mid - 1;
        if (firstIndex != -1) {
          // first found here, so look for second 
          low = mid + 1;
          high = nums.length - 1;
        }
        else {
          // second index != -1
          // look for first index
          high = mid - 1;
          low = 0;
        }
      }
      else {
        // we're outside the target numbers
        if (left < num) {
          // before subarray
          low = mid + 1;
        }
        else {
          // after subarray
          high = mid - 1;
        }
        low = mid + 1;
      }
    }
  }
  return -1;
}
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)) // 4; 
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)) // 1; 
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)) // 2; 
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)) // -1; 
module.exports = { sortedFrequency };
