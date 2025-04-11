const constructNote = (message, letters) => {
  if (letters.length < message.length) {
    return false;
  }
  let messageFreq = {};
  let lettersFreq = {};

  for (let char of message) {
    messageFreq[char] = ++messageFreq[char] || 1;
  }
  for (let char of letters) {
    lettersFreq[char] = ++lettersFreq[char] || 1;
  }
  for (let key in messageFreq) {
    if (!(key in lettersFreq)) {
      return false;
    }
    if (lettersFreq[key] < messageFreq[key]) {
      return false;
    }
  }
  return true;
}

console.log(constructNote('aa', 'abc')) // false
console.log(constructNote('abc', 'dcba')) // true
console.log(constructNote('aabbcc', 'bcabcaddff')) // true
console.log(constructNote('aabbcc', 'bcaabcaddff')) // true

module.exports = { constructNote };
