const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let lookup = {}
  for (let char of str1) {
    lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
  }
  for (let char of str2) {
    // Can't find letter or letter is 0
    if (!lookup[char]) {
      return false;
    }
    else {
      lookup[char] -= 1;
    }
  }
  return true
}

module.exports = { validAnagram };
