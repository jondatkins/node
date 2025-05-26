function sortedFrequency(arr, num) {
  let firstIdx = findFirst(arr, num);
  if (firstIdx === -1) return firstIdx;
  let lastIdx = findLast(arr, num);
  return lastIdx - firstIdx + 1;
}

function findFirst(arr, num, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2)
    if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
      return mid;
    } else if (num > arr[mid]) {
      return findFirst(arr, num, mid + 1, high)
    } else {
      return findFirst(arr, num, low, mid - 1)
    }
  }
  return -1
}

function findLast(arr, num, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2)
    if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
      return mid;
    } else if (num < arr[mid]) {
      return findLast(arr, num, low, mid - 1)
    } else {
      return findLast(arr, num, mid + 1, high)
    }
  }
  return -1
}
// expect '2' for first index
// expect '5' for last index
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)) // 4; 
// expect '6' for first index
// expect '6' for last index
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)) // 1; 
// expect 6 for first index
// expect 7 for last index
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 3], 3)) // 2; 
// expect '0' for first index
// expect '1' for last index
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)) // 2; 
// There's 1 subarray of '1' at the beginning of the array
console.log(sortedFrequency([1, 2, 2, 2, 2, 2, 3], 1)) // 1; 
// No 1 in this array, so -1.
console.log(sortedFrequency([2, 2, 2, 2, 2, 3], 1)) // -1; 
// 4 is not in this array, so first index is -1
// 4 is not in this array, so last index is -1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)) // -1; 
