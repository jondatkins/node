// Count the unique values in a sorted array, and return that value
const binarySearch = (searchArray, numbToSearch) => {
  if (searchArray.length === 0) {
    return -1;
  }
  // let mid = Math.trunc((searchArray.length / 2));
  let mid = 0;
  let low = 0;
  let high = Math.trunc(searchArray.length - 1);

  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    // look in left half, excluding middle
    if (searchArray[mid] < numbToSearch) {
      low = mid + 1;
    }
    else if (searchArray[mid] > numbToSearch) {
      high = mid - 1;
    }
    else {
      return mid;
    }
  }
  return -1;
}

// binarySearch([1, 2, 3, 4, 5, 6], 4) // 3
// binarySearch([1, 2, 3, 4, 5, 6], 6) // 5
// binarySearch([1, 2, 3, 4, 5, 6], 11) // -1
// binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)

const arr = [1, 2, 3, 4, 5, 6]

function findMe(target, start, end) {
  if (start > end) {
    return -1;
  }
  const middle = Math.floor((start + end) / 2);
  if (arr[middle] === target) {
    return middle;
  }

  if (arr[middle] > target) {
    return findMe(target, start, middle - 1);
  }

  if (arr[middle] < target) {
    return findMe(target, middle + 1, end)
  }
}
// console.log(findMe(3, 0, arr.length - 1));
console.log(findMe(5, 0, arr.length - 1));
// console.log(findMe(1, 0, arr.length - 1));
// console.log(findMe(7, 0, arr.length - 1));

module.exports = { binarySearch, findMe };
