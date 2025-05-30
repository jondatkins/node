// This function should return the minimal length of a 
// contiguous subarray of which the sum is greater than 
// or equal to the integer passed to the function. If 
// there isn't one, return 0 instead.
const minSubArrayLen = (intArray, num) => {
  let tempSum = intArray[0];
  let subarrayLength = intArray.length + 1;
  let start = 0;
  let end = 0;
  while (end < intArray.length) {
    if (tempSum >= num) {
      let tempSubarrayLength = end - start + 1;
      subarrayLength = Math.min(tempSubarrayLength, subarrayLength);
      // If we're looking at a 1 length subarray, this is the smallest possible.
      if (start === end) {
        return subarrayLength;
      }
      tempSum = tempSum - intArray[start];
      start++;
    }
    else {
      end++;
      tempSum += intArray[end];
    }
  }
  return subarrayLength === intArray.length + 1 ? 0 : subarrayLength;
}
// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 -> because [4,3] is the smallest subarray; 
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)) // 2 -> because [5,4] is the smallest subarray; 
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) // 1 -> because [62] is greater than 52; 
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)) // 3; 
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)) // 5; 
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2; 
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)) // 0; 

module.exports = { minSubArrayLen };
