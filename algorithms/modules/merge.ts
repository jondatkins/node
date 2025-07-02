
type CallBackFunc = (a: any, b: any) => number;


const mergeHelper = <Type>(arr1: Type[], arr2: Type[], callback?: CallBackFunc): Type[] => {
  let sortedArray: Type[] = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (callback) {
      if (callback(arr1[i], arr2[j]) > 0) {
        sortedArray.push(arr1[i]);
        i++;
      }
      else {
        sortedArray.push(arr2[j]);
        j++;
      }
    }
    else {
      if (arr1[i] < arr2[j]) {
        sortedArray.push(arr1[i]);
        i++;
      }
      // i is greater than or equal to j
      else {
        sortedArray.push(arr2[j]);
        j++;
      }
    }
  }
  while (i < arr1.length) {
    sortedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    sortedArray.push(arr2[j]);
    j++;
  }
  return sortedArray;
}

function merge(arr: number[]): number[] {
  if (arr.length === 1) {
    return arr;
  }
  let arr1 = merge(arr.slice(0, arr.length / 2));
  let arr2 = merge(arr.slice(arr.length / 2, arr.length));
  return mergeHelper(arr1, arr2);
}

// console.log(mergeHelper([1, 10, 50], [2, 14, 99, 100])) // [1,2,14,50,99,100]; 
// console.log(mergeHelper([1, 10, 50, 77], [2, 8, 14, 99, 100])) // [1, 10, 2, 8,14,50,99,100]; 
// console.log(mergeHelper([1, 10, 50, 77], [14, 99, 100])) // [1, 10, 14,50,99,100]; 
let testArr1 = [5, 2, 9, 1]; // [1,2,5,9]
let testArr2 = [22, 5, 13, 2, 9, 1]; // [1,2,5,9,13,22]
console.log(merge(testArr1));
console.log(merge(testArr2));
module.exports = { merge, mergeHelper };
