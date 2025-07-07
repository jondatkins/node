const pivotHelper = <Type>(arr: Type[], startIndex = 0, endIndex = arr.length - 1): number => {
  let pivot = arr[0];
  let i = 0;
  let pivotIndex = 0;
  // if the current element is greater than the pivot,
  // incremet the pivot index then swap current with
  // element at pivot inde
  while (i <= endIndex) {
    if (pivot > arr[i]) {
      pivotIndex++;
      swap(arr, i, pivotIndex);
    }
    i++;
  }
  // swap starting elem with elem at pivot index
  swap(arr, 0, pivotIndex);
  console.log(`pivot helper ${arr}`);
  return pivotIndex;

}

function swap<Type>(arr: Type[], x: number, y: number): void {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

let arr1 = [9, 3, 12, 7, 1, 44, 8]
console.log(`${arr1}`);
console.log(pivotHelper(arr1)) // [3,7,1,9,44,8]; 
module.exports = { pivotHelper };
