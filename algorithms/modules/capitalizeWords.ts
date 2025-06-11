let words = ['i', 'am', 'learning', 'recursion'];
const capitalizeWords = (arr: string[]): string[] => {
  if (arr.length === 1) {
    arr[0] = arr[0].toUpperCase();
    return arr;
  }
  var newArray = capitalizeWords(arr.slice(1)).slice();
  newArray.unshift(arr[0].toUpperCase());
  return newArray;
}
console.log(capitalizeWords(words));

module.exports = { capitalizeWords };

