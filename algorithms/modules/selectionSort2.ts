type CallBackFunc = (a: any, b: any) => number;

interface Kitty {
  name: string;
  age: number;
}

const selectionSort2 = <Type>(arr: Type[], callback?: CallBackFunc): Type[] => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {

      if (callback && callback(arr[min], arr[j]) > 0) {
        min = j;
      }
      else if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      swap(arr, i, min);
    }
  }
  return arr;
}

function swap<Type>(arr: Type[], x: number, y: number): void {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

// console.log(selectionSort2([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
// console.log(selectionSort2([0, -10, 7, 4])); // [-10, 0, 4, 7]
// console.log(selectionSort2([1, 2, 3])); // [1, 2, 3]
// console.log(selectionSort2([]));

var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
// console.log(selectionSort2(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a: string, b: string) {
  if (a < b) { return -1; }
  else if (a > b) { return 1; }
  return 0;
}

console.log(selectionSort2(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

var moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];

function oldestToYoungest(a: Kitty, b: Kitty) {
  return b.age - a.age;
}

// console.log(selectionSort2(moarKittyData, oldestToYoungest)); // sorted by age in descending order

module.exports = { selectionSort2 };
