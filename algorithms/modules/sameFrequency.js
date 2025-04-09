const sameFrequency = (number1, number2) => {
  let numDigits1 = Math.floor(Math.log10(number1)) + 1;
  let numDigits2 = Math.floor(Math.log10(number2)) + 1;
  // Digit frequency can't be the same if numbers are different lengths
  if (numDigits1 != numDigits2) {
    return false
  }
  let numFreq1 = {};
  let numFreq2 = {};

  let i = 0;
  // Use remainder of division to extract digits from each number
  // and add them to a frequency object.
  while (i < numDigits1) {
    let digit1 = number1 % 10;
    number1 = Math.floor(number1 / 10);
    let digit2 = number2 % 10;
    number2 = Math.floor(number2 / 10);
    numFreq1[digit1] = ++numFreq1[digit1] || 1;
    numFreq2[digit2] = ++numFreq2[digit2] || 1;
    i++;
  }
  for (const prop in numFreq1) {
    if (!(prop in numFreq2)) {
      return false;
    }
    if (numFreq1[prop] !== numFreq2[prop]) {
      return false;
    }
  }
  return true;
}

// sameFrequency(182, 281) // true
module.exports = { sameFrequency };
