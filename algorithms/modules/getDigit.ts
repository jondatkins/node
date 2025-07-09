const getDigit = (num: number, digit: number) => {
  if (digit > 0) {
    num = Math.floor(num / (10 ** digit)); // gets you the second digit
  }
  return num % 10;
}

console.log(getDigit(12345, 0)) // 5; 
console.log(getDigit(12345, 1)) // 4; 
console.log(getDigit(12345, 2)) // 3; 
console.log(getDigit(12345, 3)) // 2; 
console.log(getDigit(12345, 4)) // 1; 
console.log(getDigit(12345, 5)) // 0; 
module.exports = { getDigit };
