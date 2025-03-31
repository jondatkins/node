// For a given input string, get the frequency of characters in the string.

function charFrequency(str) {
  if (!str) {
    console.log(`Function requires a string argument, value passed was ${str}`);
    return;
  }
  let frequency = {};

  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      frequency[char] = ++frequency[char] || 1;
    }
  }
  return frequency;
}

function isAlphaNumeric(char) {
  if (/[a-zA-Z0-9]/.test(char)) {
    return true;
  }
  return false;
}

function isAlphaNumeric2(str) {
  var code;
  for (var i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) &&
      !(code > 64 && code < 91) &&
      !(code > 96 && code < 123)) {
      return false;
    }

  }
  return true;
}

result = charFrequency('hello'); // { h: 1, e: 1, l: 2, o: 1 }
console.log(result);
result = charFrequency('h el!lo'); // { h: 1, e: 1, l: 2, o: 1 }
console.log(result);
result2 = charFrequency('abbcccdddd'); // {a: 1, b: 2, c: 3, d: 4}
console.log(result2);
result3 = charFrequency(); // undefinced
console.log(result3);
result4 = charFrequency(undefined); // undefined
console.log(result4);
result5 = charFrequency(null); // null
console.log(result5);
console.log(isAlphaNumeric("!"))
console.log(isAlphaNumeric("a"))
console.log(isAlphaNumeric2("!"))
console.log(isAlphaNumeric2("a"))

exports.charFrequency = charFrequency;
