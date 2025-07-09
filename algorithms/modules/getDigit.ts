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
  let numDigs = 0;
  let maxDigits = digitCount(nums[0]);
  for (let i = 0; i < nums.length; i++) {
    numDigs = digitCount(nums[i]);
    if (numDigs > maxDigits) {
      maxDigits = numDigs
    }
  }
  return maxDigits;
}

console.log(mostDigits([1234, 56, 7])); // 4
console.log(mostDigits([1, 1, 11111, 1])); // 5
console.log(mostDigits([12, 34, 56, 78])); // 2
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
module.exports = { getDigit, digitCount, mostDigits };
