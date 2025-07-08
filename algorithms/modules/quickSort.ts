const pivotHelper = <Type>(arr: Type[], left = 0, right = arr.length - 1): number => {
  let pivot = arr[left];
  // let i = left;
  let pivotIndex = left;
  let i = left + 1;
  // if the current element is greater than the pivot,
  // incremet the pivot index then swap current with
  // element at pivot index
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

// This is a recursive function which takes an array, a start and end
// argument.The idea is to find the pivot for the subarray between left and
// right.Then make a recursive call for the left and right side of the subarray,
// excluding the pivot.If the subarray is 0 length, just return the array.
function quickSort<Type>(arr: Type[], left = 0, right = arr.length - 1): Type[] {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function swap<Type>(arr: Type[], x: number, y: number): void {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

let arr1 = [9, 3, 12, 7, 1, 44, 8]
let arr2 = [22, -22, 9, 3, 12, 15, 99999, 7, 33, 1, 44, 8]
let arr3 = [4, 8, 2, 1, 5, 7, 6, 3];
let arr4 = [5, 2, 1, 8, 4, 7, 6, 3];
// console.log(`unsorted: ${arr1}`);
// console.log(`sorted:   ${quickSort(arr1)}`)
// console.log();
// console.log(`unsorted: ${arr2}`);
// console.log(`sorted:   ${quickSort(arr2)}`)
// console.log();
// console.log(`unsorted: ${arr3}`);
// console.log(`sorted:   ${quickSort(arr3)}`)
// console.log();
// console.log(`unsorted: ${arr4}`);
// console.log(`sorted:   ${quickSort(arr4)}`)
module.exports = { pivotHelper, quickSort };
