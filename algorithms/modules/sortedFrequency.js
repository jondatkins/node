const sortedFrequency = (nums, num) => {
  let firstIndex = getFirstIndex(nums, num);
  let lastIndex = getLastIndex(nums, num);
  // console.log(`${nums} array ${num} sub-array`);
  return (firstIndex === -1 || lastIndex === -1) ? -1 : lastIndex - firstIndex + 1;
}

const getFirstIndex = (nums, num) => {
  let mid = 0;
  let low = 0;
  let high = Math.trunc(nums.length - 1);
  let left = -1;
  let right = -1;
  let firstIndex = -1;
  let lastIndex = -1;
  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    left = nums[mid];
    right = nums[mid + 1];
    // if right is greater than array length
    if (mid + 1 > nums.length - 1) {
      // reached end of array without finding first index
      return -1;
    }
    if (left < num && right == num) {
      // return right index, this is the first index we're looking for
      return mid + 1;
    }
    // to look for the first index
    // check if left and right are less than num
    else if (left < num && right < num) {
      // make low equal mid +1
      low = mid + 1;
    }
    // check if left and right are greater than num
    else if (left > num && right > num) {

      // make high = mid -1
      high = mid - 1;
    }
    // check if left and right are equal to num
    else if (left == num && right == num) {
      // We could be at beginning of array
      if (mid == 0) {
        return 0;
      }
      // we're in the sub-array, so look at lower range
      high = mid - 1;
    }
    // left is our number, and right is greater here.
    else {
      // left == num && right > num
      if (mid === 0) {
        // we've reached the beginning of the array, so just return 0
        return 0;
      }
      high = mid - 1;
    }
  }
  return -1;
}

const getLastIndex = (nums, num) => {
  let mid = 0;
  let low = 0;
  let high = Math.trunc(nums.length - 1);
  let left = -1;
  let right = -1;
  let firstIndex = -1;
  let lastIndex = -1;
  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    left = nums[mid];
    right = nums[mid + 1];
    // if right is greater than array length
    if (mid + 1 > nums.length - 1) {
      // We're at the end of the array, if the value at 'mid' is our number
      // Then the end of the array must be the last index.
      if (left === num) {
        return nums.length - 1;
      }
      return -1;
    }
    if (left === num && right > num) {
      // return left index, this is the last index we're looking for
      return mid;
    }
    // to look for the last index
    // check if left and right are less than num
    else if (left < num && right < num) {
      // make low equal mid +1
      low = mid + 1;
    }
    // check if left and right are greater than num
    else if (left > num && right > num) {
      // make high = mid -1
      high = mid - 1;
    }
    // check if left and right are equal to num
    else if (left == num && right == num) {
      // We could be at beginning of array
      if (mid == 0) {
        return 0;
      }
      // Or at the end of the array
      else if (mid + 1 == nums.length - 1) {
        return nums.length - 1;
      }
      // we're in the sub-array, so look at higher range
      low = mid + 1;
    }
    // left is less than num, but right is equal to num, so this is the first index
    else {
      low = mid + 1;
    }
  }
  return -1;
}
// expect '2' for first index
// expect '5' for last index
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)) // 4; 
// expect '6' for first index
// expect '6' for last index
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)) // 1; 
// expect 6 for first index
// expect 7 for last index
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 3], 3)) // 2; 
// expect '0' for first index
// expect '1' for last index
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)) // 2; 
// There's 1 subarray of '1' at the beginning of the array
// console.log(sortedFrequency([1, 2, 2, 2, 2, 2, 3], 1)) // 1; 
// No 1 in this array, so -1.
console.log(sortedFrequency([2, 2, 2, 2, 2, 3], 1)) // 1; 
// 4 is not in this array, so first index is -1
// 4 is not in this array, so last index is -1
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)) // -1; 
module.exports = { sortedFrequency };
