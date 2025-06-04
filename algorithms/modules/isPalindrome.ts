const isPalindrome = (possiblePalindrome: string) => {
  if (possiblePalindrome.length === 0) {
    return true;
  }

  let startChar = possiblePalindrome.charAt(0);
  let endChar = possiblePalindrome.charAt(possiblePalindrome.length - 1);
  possiblePalindrome = possiblePalindrome.slice(1, -1);

  if (startChar === endChar && isPalindrome(possiblePalindrome)) {
    return true;
  }
  return false;
}

console.log(isPalindrome('awesome')) // false; 
console.log(isPalindrome('foobar')) // false; 
console.log(isPalindrome('tacocat')) // true; 
console.log(isPalindrome('amanaplanacanalpanama')) // true; 
console.log(isPalindrome('amanaplanacanalpandemonium')) // false; 
module.exports = { isPalindrome };
