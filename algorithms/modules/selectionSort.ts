const selectionSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      swap(arr, i, min);
    }
  }
  return arr;
}

function swap(arr: number[], x: number, y: number): void {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}
console.log(selectionSort([5, 8, 2, 1, 9])) // [1,2,5,8,9]; 
console.log(selectionSort([8, 2, 1, 9])) // [1,2,8,9]; 
console.log(selectionSort([1, 2, 1, 9])) // [1,1,2,9]; 
module.exports = { selectionSort };
