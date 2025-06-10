const capitalizeFirst = (arr: string[]): string[] => {
  if (arr.length === 1) {
    arr[0] = capitalizeFirstLetter(arr[0]);
    return arr;
  }
  arr[0] = capitalizeFirstLetter(arr[0]);
  // return prepend(arr[0], capitalizeFirst(arr.slice(1)));
  var newArray = capitalizeFirst(arr.slice(1)).slice();
  newArray.unshift(arr[0]);
  return newArray;
}

function capitalizeFirstLetter(val: string): string {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']; 
module.exports = { capitalizeFirst };
