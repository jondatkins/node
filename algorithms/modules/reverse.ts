const reverse = (aString: string) => {
  if (aString.length === 1) {
    return aString;
  }
  return reverse(aString.slice(1)) + aString.slice(0, 1);
}
console.log(reverse('awesome')) // 'emosewa'; 
console.log(reverse('rithmschool')) // 'loohcsmhtir'; 
module.exports = { reverse };
