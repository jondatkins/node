type CallBackFunc = (a: any, b: any) => number;

interface Kitty {
  name: string;
  age: number;
}

const insertionSort = <Type>(arr: Type[], callback?: CallBackFunc): Type[] => {
  for (let i = 1; i < arr.length; i++) {

    for (let j = 0; j < i; j++) {

      if (callback && callback(arr[j], arr[i]) > 0) {
        arr.splice(j, 0, arr[i]);
        arr.splice(i + 1, 1);
        break;
      }
      else if (arr[i] < arr[j]) {
        // i goes to position j, shift j and sorted elements up 1 index
        arr.splice(j, 0, arr[i]);
        // Now delete duplicate element 'i' from array.
        arr.splice(i + 1, 1);
        break;
      }
    }
  }
  return arr;
}

function swap<Type>(arr: Type[], x: number, y: number): void {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

console.log(insertionSort([5, 3, 4, 1, 2])); // [1,2,3,4,5]
console.log(insertionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(insertionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(insertionSort([1, 2, 3])); // [1, 2, 3]
console.log(insertionSort([]));

var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(insertionSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a: string, b: string) {
  if (a < b) { return -1; }
  else if (a > b) { return 1; }
  return 0;
}

console.log(insertionSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

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

console.log(insertionSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
module.exports = { insertionSort };
