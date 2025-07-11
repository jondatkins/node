const getDigit = (num: number, digit: number) => {
  if (digit > 0) {
    num = Math.abs(num);
    num = Math.floor(num / (10 ** digit)); // gets you the second digit
  }
  return num % 10;
}

const digitCount = (num: number) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (nums: number[]) => {
  let maxDigits = digitCount(nums[0]);
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// Define a function that takes a list of numbers
// Get the number of digits of the largest number
// loop from k=0 up to this largest number of digits
// For each iteration of the loop
//   Create buckets for each digit 0-9
//   place each number in the corresponding bucket based on the kthd digit.
function radixSort(nums: number[]) {
  let maxDigits = mostDigits(nums);
  for (let i = 0; i < maxDigits; i++) {
    let buckets = createBuckets();
    for (let j = 0; j < nums.length; j++) {
      let num = nums[j];
      let digit = getDigit(num, i);
      buckets[digit].push(num);
    }
    nums = buckets.flat();
    // buckets = createBuckets();

  }
  return nums;
}

function radixSort2(nums: number[]) {
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, (): number[] => [])
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    let flatArray: number[] = [];
    nums = flatArray.concat(...digitBuckets);

    // Argument of type 'number[]' is not assignable to parameter of type 'ConcatArray<never>'.
  }
  return nums;
}

function createBuckets(): number[][] {
  let buckets = [];
  for (let i = 0; i < 10; i++) {
    buckets[i] = [];
  }
  return buckets;
}

console.log(radixSort2([23, 345, 5467, 12, 2345, 9852]));
// console.log(radixSort([1234, 56, 7])); // [7,56,1234]
// console.log(radixSort([100, 21, 9, 20009, 58])); // [9,21,58,100,20009] 
// console.log(radixSort([12, 78, 56, 34])); // [12, 34,56, 78]

// console.log(mostDigits([1234, 56, 7])); // 4
// console.log(mostDigits([1, 1, 11111, 1])); // 5
// console.log(mostDigits([12, 34, 56, 78])); // 2
// console.log(digitCount(123)); // 3
// console.log(digitCount(12)); // 2
// console.log(digitCount(1)); // 1

// console.log(getDigit(12345, 0)) // 5; 
// console.log(getDigit(12345, 1)) // 4; 
// console.log(getDigit(12345, 2)) // 3; 
// console.log(getDigit(12345, 3)) // 2; 
// console.log(getDigit(12345, 4)) // 1; 
// console.log(getDigit(12345, 5)) // 0; 
// console.log(getDigit(-12345, 5)) // 0; 
module.exports = { getDigit, digitCount, mostDigits, radixSort };
