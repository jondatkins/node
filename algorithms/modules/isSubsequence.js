const isSubsequence = (string1, string2) => {
  if (string2.length < string1.length) {
    return false;
  }
  let i = 0;
  let j = 0;
  let string3 = "";
  while (i < string1.length && j < string2.length) {
    if (string1.charAt(i) == string2.charAt(j)) {
      string3 += string2.charAt(j);
      i++;
      j++;
    }
    else {
      j++;
    }
  }
  if (string3 == string1) {
    return true;
  }
  return false
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
module.exports = { isSubsequence };
