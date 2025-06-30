const { performance } = require('perf_hooks');

const bubbleSort2 = <Type>(arr: Type[], callback?: CallBackFunc): Type[] => {
  var noSwap;
  for (let i = arr.length - 1; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i; j++) {
      if (callback) {
        if (callback(arr[j], arr[j + 1]) > 0) {
          swap(arr, j, j + 1);
          noSwap = false;
        }
      }
      else if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;

}

function swap<Type>(arr: Type[], x: number, y: number): void {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

// console.log(bubbleSort2([4, 20, 12, 10, 7, 9], undefined)) // [4, 7, 9, 10, 12, 20]; 
// console.log(bubbleSort2([0, -10, 7, 4], undefined)) // [-10, 0, 4, 7]; 
// console.log(bubbleSort2([1, 2, 3], undefined)) // [1, 2, 3]; 

var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a: string, b: string): number {
  if (a < b) { return -1; }
  else if (a > b) { return 1; }
  return 0;
}

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

type CallBackFunc = (a: any, b: any) => number;

interface Person {
  name: string;
  age: number;
}
function oldestToYoungest(a: Person, b: Person) {
  return b.age - a.age;
}
function randomArray(length: number): number[] {
  // let random: number[] = Array.apply(null, { length: 10000 });
  let random = Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));
  // map(Function.call, Math.random);
  return random;
}
var data: number[] = randomArray(999999999999999999);
// console.log(data);
const startTime = performance.now()

bubbleSort2(data, undefined)
// console.log(data);
const endTime = performance.now()
console.log(`Call to bubblesort took ${endTime - startTime} milliseconds`)
// console.log(bubbleSort2(nums, undefined)) // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]; 
// console.log(bubbleSort2(kitties, strComp)) // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]; 
// console.log(bubbleSort2(moarKittyData, oldestToYoungest)) // sorted by age in descending order; 
module.exports = { bubbleSort2 };
