const mergeHelper = (arr1: number[], arr2: number[]): number[] => {
  let sortedArray: number[] = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArray.push(arr1[i]);
      i++;
    }
    // i is greater than or equal to i
    else {
      sortedArray.push(arr2[j]);
      j++;
    }
  }
  if (i < arr1.length - 1) {
    // slice arr 1 at i, and join it to the end of sortedArray
    sortedArray = [...sortedArray, ...arr1.slice(i, arr1.length)];
  }
  if (j < arr2.length - 1) {
    // slice arr 1 at i, and join it to the end of sortedArray
    sortedArray = [...sortedArray, ...arr2.slice(j, arr2.length)];
  }
  return sortedArray;
}

function merge() {
  // body of arrow function
}

console.log(mergeHelper([1, 10, 50], [2, 14, 99, 100])) // [1,2,14,50,99,100]; 
console.log(mergeHelper([1, 10, 50, 77], [2, 8, 14, 99, 100])) // [1, 10, 2, 8,14,50,99,100]; 
console.log(mergeHelper([1, 10, 50, 77], [14, 99, 100])) // [1, 10, 14,50,99,100]; 
module.exports = { mergeHelper };
