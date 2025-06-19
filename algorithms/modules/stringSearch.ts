const stringSearch = (str: string, subStr: string) => {
  for (let i = 0; i < str.length; i++) {
    if (subStr[0] === str[i]) {
      console.log(`${subStr[0]} matches ${str[i]}`);

      for (let j = 1; j < subStr.length; j++) {
        if (subStr[j] === str[i + j]) {
          console.log(`substring j is ${subStr[j]} string i + j is ${str[i + j]}`)
        }
      }
    }
  }
}
console.log(stringSearch("wowomgzomg", "omg")) // 2; 
module.exports = { stringSearch };
