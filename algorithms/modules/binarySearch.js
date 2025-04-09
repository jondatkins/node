// Count the unique values in a sorted array, and return that value
const binarySearch = (searchArray, numbToSearch) => {
  if (searchArray.length === 0) {
    return -1;
  }
  let i = Math.trunc((searchArray.length / 2));
  let range = Math.trunc((searchArray.length / 2) - 1);
  while (i >= 0 && i < searchArray.length) {
    if (searchArray[i] === numbToSearch) {
      return i;
    }
    else if (searchArray[i] > numbToSearch) {
      i = i - range;
    }
    else {
      i = i + range;
    }
    range = Math.trunc(range / 2) - 1;
  }
  return -1;
}


// binarySearch([1, 2, 3, 4, 5, 6], 4) // 3
// binarySearch([1, 2, 3, 4, 5, 6], 6) // 5
// binarySearch([1, 2, 3, 4, 5, 6], 11) // -1
binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)

module.exports = { binarySearch };
