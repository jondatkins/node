const bubbleSort = (arr: number[]): number[] => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
function swap(arr: number[], x: number, y: number): void {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}
console.log(bubbleSort([3, 9, 7, 1])) // [1,3,4,7,7,9]; 
console.log(bubbleSort([7, 4, 3, 9, 7, 1])) // [1,3,4,7,7,9]; 
console.log(bubbleSort([6, 9, 3, 9, 7, 1])) // [1,3,6,7,9]; 
console.log(bubbleSort([7, 4, 5, 9, 7, 6])) // [4,5,6,7,7,9]; 
module.exports = { bubbleSort };
