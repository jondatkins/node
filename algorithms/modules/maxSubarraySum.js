// Count the unique values in a sorted array, and return that value
const maxSubarraySum = (intArray, numConsecElems) => {
  if (intArray.length === 0) {
    return 0;
  }
  let i = 0;
  let count = 1;
  let j = 1;
  while (j < intArray.length) {
    j++;
  }
  return count;
}

module.exports = { maxSubarraySum };
