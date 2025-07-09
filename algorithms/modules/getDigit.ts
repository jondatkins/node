const getDigit = (num: number, digit: number) => {
  if (digit > 0) {
    num = Math.abs(num);
    num = Math.floor(num / (10 ** digit)); // gets you the second digit
  }
  return num % 10;
}

const digitCount = (num: number) => {
  let digitNum = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    digitNum++;
  }
  return digitNum;
}

console.log(digitCount(123)); // 3
console.log(digitCount(12)); // 2
console.log(digitCount(1)); // 1

// console.log(getDigit(12345, 0)) // 5; 
// console.log(getDigit(12345, 1)) // 4; 
// console.log(getDigit(12345, 2)) // 3; 
// console.log(getDigit(12345, 3)) // 2; 
// console.log(getDigit(12345, 4)) // 1; 
// console.log(getDigit(12345, 5)) // 0; 
// console.log(getDigit(-12345, 5)) // 0; 
module.exports = { getDigit, digitCount };
