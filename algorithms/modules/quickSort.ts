const pivotHelper = <Type>(arr: Type[], left = 0, right = arr.length - 1): number => {
  let pivot = arr[left];
  // let i = left;
  let pivotIndex = left;
  let i = left + 1;
  // if the current element is greater than the pivot,
  // incremet the pivot index then swap current with
  // element at pivot inde
  while (i <= right) {
    if (pivot > arr[i]) {
      pivotIndex++;
      if (i !== pivotIndex) {
        swap(arr, pivotIndex, i);
      }
    }
    i++;
  }
  // swap starting elem with elem at pivot index
  swap(arr, left, pivotIndex);
  // console.log(`pivot helper ${arr}`);
  return pivotIndex;
}

// QuickSort takes an array as an argument, and calls the helper function.
// With your pivot in place, make recursive calls to quick sort with the
// values to the left and right of the pivot, excluding the pivot.
//
// If I subtract the end index from the start, and the value is less than 2,
// this is the base case, so just return from here.
function quickSort<Type>(arr: Type[], left = 0, right = arr.length - 1): Type[] {
  if (right - left < 1) {
    return arr;
  }
  let pivotIndex = pivotHelper(arr, left, right);
  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);
  return arr;
}

function swap<Type>(arr: Type[], x: number, y: number): void {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

let arr1 = [9, 3, 12, 7, 1, 44, 8]
// let arr2 = [22, -22, 9, 3, 12, 15, 99999, 7, 33, 1, 44, 8]
// let arr3 = [4, 8, 2, 1, 5, 7, 6, 3];
let arr4 = [5, 2, 1, 8, 4, 7, 6, 3];
// console.log(``);
console.log(`unsorted: ${arr1}`);
console.log(`sorted:   ${quickSort(arr1)}`) // [3,7,1,9,44,8]; 
console.log();
console.log(`unsorted: ${arr4}`);
console.log(`sorted:   ${quickSort(arr4)}`) // [3,7,1,9,44,8]; 
console.log();
// console.log(`${arr2}`);
// console.log(`pivot index: ${quickSort(arr2)}`) // [3,7,1,9,44,8]; 
// console.log(`${arr2}`);
// console.log();
// console.log(`${arr4}`);
// console.log(`pivot index: ${pivotHelper(arr4)}`) // [3,7,1,9,44,8]; 
// console.log(`${arr4}`);
// let arr5 = [3, 2, 1, 4];
// console.log(`${arr5}`);
// console.log(`pivot index: ${pivotHelper(arr5)}`) // [3,7,1,9,44,8]; 
// console.log(`${arr5}`);
// left subarray should be '3,2,1'
// let leftArr = [3, 2, 1];
// let rightArr = [7, 5, 8, 6];

// console.log(`pivot index: ${pivotHelper(leftArr, 0, 3)}`) // [3,7,1,9,44,8]; 
// console.log(`${leftArr}`);
// console.log(`pivot index: ${pivotHelper(rightArr, 0, 3)}`) // [3,7,1,9,44,8]; 
// console.log(`${rightArr}`);
module.exports = { pivotHelper, quickSort };
