const areThereDuplicates = (...theArgs) => {
  let argsFrequency = {};
  for (const arg of theArgs) {
    if (argsFrequency[arg]) {
      return true;
    }
    else {
      argsFrequency[arg] = 1;
    }
  }
  return false;
}

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 

const areThereDuplicates2 = (...theArgs) => {
  let i = 0;
  let j = i + 1;
  while (i < theArgs.length) {
    if (j > theArgs.length - 1) {
      // compare i and j
      j = 0;
      if (theArgs[i] === theArgs[j]) {
        return true;
      }
    }
    if (theArgs[i] === theArgs[j]) {
      return true;
    }
    i++;
    j++;
  }
  return false;
}

areThereDuplicates2(1, 2, 3) // false
areThereDuplicates2(1, 2, 2) // true 
areThereDuplicates2('a', 'b', 'c', 'a') // true 

module.exports = { areThereDuplicates, areThereDuplicates2 };
