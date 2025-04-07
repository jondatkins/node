// Count the unique values in a sorted array, and return that value
const maxSubarraySum = (intArray, numConsecElems) => {
  if (intArray.length === 0) {
    return null;
  }
  let i = 0;
  let max = 0;
  while (i + numConsecElems - 1 < intArray.length) {
    let newMax = 0;
    for (let j = i; j < i + numConsecElems; j++) {
      newMax += intArray[j];
    }
    if (newMax > max) {
      max = newMax;
    }
    i++;
  }
  return max;
}

// Count the unique values in a sorted array, and return that value
const maxSubarraySum2 = (intArray, num) => {
  if (num > intArray.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < intArray.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += intArray[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// Solution from course.
function maxSubarraySum3(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)

module.exports = { maxSubarraySum, maxSubarraySum2, maxSubarraySum3 };
