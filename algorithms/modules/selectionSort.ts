const selectionSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    let newMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[newMin]) {
        newMin = j;
      }
    }
    if (arr[min] !== arr[newMin]) {
      console.log(`***********************************`);
      console.log(arr);
      console.log(`Swapping To:`);
      swap(arr, min, newMin);
      console.log(arr);
      console.log(`***********************************`);
    }
  }
  return arr;
}

function swap(arr: number[], x: number, y: number): void {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}
console.log(selectionSort([5, 8, 2, 1, 9])) // [1,2,5,8,9]; 
// console.log(selectionSort([8, 2, 1, 9])) // [1,2,8,9]; 
// console.log(selectionSort([1, 2, 1, 9])) // [1,1,2,9]; 
module.exports = { selectionSort };
