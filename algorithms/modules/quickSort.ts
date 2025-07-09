type CallBackFunc = (a: any, b: any) => number;

interface Cat {
  name: string;
  age: number;
}

const pivot = <Type>(arr: Type[], callback?: CallBackFunc, left = 0, right = arr.length - 1): number => {
  let pivotValue = arr[left];
  // let i = left;
  let pivotIndex = left;
  let i = left + 1;
  // if the current element is greater than the pivot,
  // incremet the pivot index then swap current with
  // element at pivot index
  while (i <= right) {
    if (callback) {

      if (callback(pivotValue, arr[i]) > 0) {
        pivotIndex++;
        swap(arr, pivotIndex, i);
      }
    }
    else if (pivotValue > arr[i]) {
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
function quickSort<Type>(arr: Type[], callback?: CallBackFunc, left = 0, right = arr.length - 1): Type[] {
  if (left < right) {
    let pivotIndex = pivot(arr, callback, left, right);
    quickSort(arr, callback, left, pivotIndex - 1);
    quickSort(arr, callback, pivotIndex + 1, right);
  }
  return arr;
}

function swap<Type>(arr: Type[], x: number, y: number): void {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strLength(a: string, b: string) {
  return a.length - b.length
}

// console.log(pivot(arr1)); // 3
// console.log(pivot(arr2)); // 4
// console.log(pivot(arr3, undefined, undefined, strLength)); // 1
console.log(pivot(arr3, strLength)); // 1
//
// console.log(arr1.slice(0, 3).sort((a, b) => a - b)); // [2, 3, 4]
// console.log(arr1.slice(3).sort((a, b) => a - b)); // [5, 7, 8, 9, 10, 20]
//
// console.log(arr2.slice(0, 4).sort((a, b) => a - b)); // ''[0, 2, 4, 5]
// console.log(arr2.slice(4).sort((a, b) => a - b)); // [8, 10, 11, 12, 13, 16]
//
// console.log(arr3.slice(0, 1).sort(strLength)); // ["Blue"]
// console.log(arr3.slice(1).sort(strLength)); // ["LilBub", "Grumpy", "Garfield", "Heathcliff"]

// let arr1 = [9, 3, 12, 7, 1, 44, 8]
// let arr2 = [22, -22, 9, 3, 12, 15, 99999, 7, 33, 1, 44, 8]
// let arr3 = [4, 8, 2, 1, 5, 7, 6, 3];
// let arr4 = [5, 2, 1, 8, 4, 7, 6, 3];
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
module.exports = { pivot, quickSort };
