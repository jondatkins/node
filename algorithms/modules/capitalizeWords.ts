let words = ['i', 'am', 'learning', 'recursion'];
const capitalizeWords = (arr: string[]): string[] => {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  // remove the first array element, make the recursive call
  var newArray = capitalizeWords(arr.slice(1));
  // Add the first word of the array back with the word capitalized.
  newArray.unshift(arr[0].toUpperCase());
  return newArray;
}
console.log(capitalizeWords(words));

module.exports = { capitalizeWords };

