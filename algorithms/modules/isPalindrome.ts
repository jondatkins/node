const isPalindrome = (str: string) => {
  if (str.length === 1) {
    return true;
  }
  if (str.length === 2) {
    return str[0] === str[1];
  }
  if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1, -1))
  }
  return false;
}

console.log(isPalindrome('awesome')) // false; 
console.log('should be false')
console.log(isPalindrome('foobar')) // false; 
console.log('should be false')
console.log(isPalindrome('tacocat')) // true; 
console.log('should be true')
console.log(isPalindrome('amanaplanacanalpanama')) // true; 
console.log('should be true')
console.log(isPalindrome('amanaplanacanalpandemonium')) // false; 
console.log('should be false')
module.exports = { isPalindrome };
