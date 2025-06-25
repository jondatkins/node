const bubbleSort = (arr: number[]): number[] => {
  var noSwap;
  let count = 0;
  for (let i = arr.length - 1; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i; j++) {
      console.log(`${count} ,${arr}, ${arr[j]}, ${arr[j + 1]}`);
      count++;
      if (arr[j] > arr[j + 1]) {
        swap2(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

function swap(arr: number[], x: number, y: number): void {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

// XOR swap function, only works for numbers.
function swap2(arr: number[], x: number, y: number): void {
  console.log(`${createBinaryString(arr[x]).substring(28, 32)} / ${arr[x]}, ${createBinaryString(arr[y]).substring(28, 32)} / ${[y]}`);
  arr[x] = arr[x] ^ arr[y];
  arr[y] = arr[x] ^ arr[y];
  arr[x] = arr[x] ^ arr[y];
}


function swap3(x: number, y: number): any {
  console.log(`x and y are:`);
  console.log(`${x}, ${createBinaryString(x).substring(28, 32)}`);
  console.log(`${y}, ${createBinaryString(y).substring(28, 32)}`);
  x = x ^ y;
  console.log(`x and y are:`);
  console.log(`${x}, ${createBinaryString(x).substring(28, 32)}`);
  console.log(`${y}, ${createBinaryString(y).substring(28, 32)}`);
  y = x ^ y;
  console.log(`x and y are:`);
  console.log(`${x}, ${createBinaryString(x).substring(28, 32)}`);
  console.log(`${y}, ${createBinaryString(y).substring(28, 32)}`);
  x = x ^ y;
  console.log(`x and y are:`);
  console.log(`${x}, ${createBinaryString(x).substring(28, 32)}`);
  console.log(`${y}, ${createBinaryString(y).substring(28, 32)}`);
  return { 'a': x, 'b': y };
}

let a = 1;
let b = 8;
swap3(a, b);

function convertDecimalToBinary(decimalNumber: number): string {
  if (decimalNumber === 0) {
    // Base case: Return "0" if the number is 0
    return "0";
  } else {
    // Recursive case: Divide the number by 2, 
    //append the remainder to the result of the recursive call
    return convertDecimalToBinary(
      Math.floor(decimalNumber / 2)) + (decimalNumber % 2);

  }
}

function createBinaryString(num: number): string {
  var result = '';
  // var num = 7;
  var shiftBuffer = num;
  for (var i = 0; i < 32; i++) {
    // In a 32 bit binary number, grab the most signifcant bit.
    result += String(shiftBuffer >>> 31);
    // Shift your number left (i.e. double it);
    shiftBuffer <<= 1;
  }
  return result;
}
// console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])) // [1,2,3,4,5,6,7,8]; 
// console.log(bubbleSort([3, 77, 34])) // [1,2,3,4,5,6,7]; 
// console.log(bubbleSort([3, 9, 7, 1])) // [1,3,4,7,7,9]; 
// console.log(bubbleSort([7, 4, 3, 9, 7, 1])) // [1,3,4,7,7,9]; 
// console.log(bubbleSort([6, 9, 3, 9, 7, 1])) // [1,3,6,7,9]; 
// console.log(bubbleSort([7, 4, 5, 9, 7, 6])) // [4,5,6,7,7,9]; 
module.exports = { bubbleSort };
