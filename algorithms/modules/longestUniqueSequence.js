// Count the unique values in a sorted array, and return that value
const maxUniqueCharacters = (testString) => {
  if (testString.length === 0) {
    return "";
  }
  let max = "";
  let temp = "";
  let i = 0;
  // for (let i = 0; i < testString.length; i++) {
  while (i < testString.length) {

    let currChar = testString.charAt(i)

    if (temp.indexOf(currChar) == -1) {
      temp += currChar;
    }
    else {
      if (temp.length > max.length) {
        max = temp;
        temp = currChar;
      }
    }
    i++;
  }
  if (temp.length > max.length) {
    max = temp;
  }
  return max;
}

console.log(maxUniqueCharacters("hellothereaxzypms"));

module.exports = { maxUniqueCharacters };
