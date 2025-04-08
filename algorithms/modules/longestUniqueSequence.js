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
      i++;
    }
    else {
      if (temp.length > max.length) {
        max = temp;
        temp = "";
        console.log(max)
        // i = temp.length - 1;
        // i--;
        // if (testString.length - i < max.length) {
        //   return max;
        // }
        // testString = testString.slice(i, testString.length - 1);
      }
    }
    // i++;
  }
}

maxUniqueCharacters("hellothereaxzypms");

module.exports = { maxUniqueCharacters };
