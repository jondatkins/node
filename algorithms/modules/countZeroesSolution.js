function countZeroes(arr) {
  // add whatever parameters you deem necessary - good luck!
  let firstZero = findFirst(arr)
  if (firstZero === -1) return 0;

  return arr.length - firstZero
}

function findFirst(arr, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2)
    if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      return mid;
    } else if (arr[mid] === 1) {
      return findFirst(arr, mid + 1, high)
    }
    return findFirst(arr, low, mid - 1)
  }
  return -1;
}

console.log(countZeroes([1, 1, 1, 1, 0, 0])) // 2; 
console.log(countZeroes([1, 0, 0, 0, 0])) // 4; 
console.log(countZeroes([0, 0, 0])) // 3; 
console.log(countZeroes([1, 1, 1, 1])) // 0; 
console.log(countZeroes([1, 1, 1, 1, 1])) // 0; 
