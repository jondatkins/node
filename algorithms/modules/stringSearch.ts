const stringSearch = (str: string, subStr: string) => {
  let matchCount = 0;

  for (let i = 0; i < str.length; i++) {

    if (subStr[0] === str[i]) {
      let j = 1;

      while (j < subStr.length && i + j < str.length) {
        if (subStr[j] !== str[i + j]) {
          break;
        }

        if (j === subStr.length - 1) {
          matchCount++;
        }
        j++;
      }
    }
  }
  return matchCount;
}
console.log(stringSearch("wowomgzomg", "omg")) // 2; 
console.log(stringSearch("wowomgzom", "omg")) // 1; 
module.exports = { stringSearch };
