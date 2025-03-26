// For a given input string, get the frequency of characters in the string.

function charFrequency(str) {
  let frequency = {};

  [...str].forEach((element) => {
    if (Object.hasOwn(frequency, element)) {
      frequency[element] += 1;
    }
    else {
      frequency[element] = 1;
    }
  })
  return frequency;
}

result = charFrequency('hello'); // { h: 1, e: 1, l: 2, o: 1 }
console.log(result);
result2 = charFrequency('abbcccdddd'); // { h: 1, e: 1, l: 2, o: 1 }
console.log(result2);
