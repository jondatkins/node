const countZeroes = () => {
      return true;
    }
console.log(countZeroes([1,1,1,1,0,0])) // 2; 
console.log(countZeroes([1,0,0,0,0])) // 4; 
console.log(countZeroes([0,0,0])) // 3; 
console.log(countZeroes([1,1,1,1])) // 0; 
module.exports = { countZeroes };