const binarySearch = (arr: number[], num: number, low = 0, high = arr.length - 1): number => {

  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === num) {
    return mid;
  }
  if (low < high) {
    return -1;
  }
  else if (arr[mid] < num) {
    return binarySearch(arr, num, mid + 1, high);
  }
  else {
    return binarySearch(arr, num, low, mid - 1);
  }
}
// console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1; 
// console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2; 
// console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4; 
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1; 
// console.log(binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10)) // 2
// console.log(binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95)) // 16
// console.log(binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100)) // -1
module.exports = { binarySearch };
