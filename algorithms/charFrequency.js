// For a given input string, get the frequency of characters in the string.

function charFrequency(str) {
  if (!str) {
    console.log(`Function requires a string argument, value passed was ${str}`);
    return;
  }
  let frequency = {};

  [...str].forEach((element) => {
    // if (Object.hasOwn(frequency, element)) {
    if (frequency[element] > 0) {
      frequency[element]++;
    }
    else {
      frequency[element] = 1;
    }
  })
  return frequency;
}

result = charFrequency('hello'); // { h: 1, e: 1, l: 2, o: 1 }
console.log(result);
result2 = charFrequency('abbcccdddd'); // {a: 1, b: 2, c: 3, d: 4}
console.log(result2);
result3 = charFrequency(); // undefinced
console.log(result3);
result4 = charFrequency(undefined); // undefined
console.log(result4);
result5 = charFrequency(null); // null
console.log(result5);
