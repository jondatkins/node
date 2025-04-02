const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let string1 = {}
  let string2 = {}
  for (let char of str1) {
    string1[char] = (string1[char] || 0) + 1;
  }
  for (let char of str2) {
    string2[char] = (string2[char] || 0) + 1;
  }
  for (let key in string1) {
    if (!(key in string2)) {
      return false;
    }
    if (string2[key] !== string1[key]) {
      return false;
    }
  }
  return true
}
module.exports = { validAnagram };
