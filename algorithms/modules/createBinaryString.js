function createBinaryString(nMask) {
  // nMask must be between -2147483648 and 2147483647
  for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
    nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
  return sMask;
}
var p = createBinaryString(7);
console.log(p); //"00000000000000000000000000000111"

function createBinaryString2(num) {
  var result = '';
  // var num = 7;
  var shiftBuffer = num;
  for (var i = 0; i < 32; i++) {
    result += String(shiftBuffer >>> 31);
    shiftBuffer <<= 1;
  }
  return result;
}
// console.log(result); //"00000000000000000000000000000111"

var x = createBinaryString2(7);
console.log(x);
module.exports = { createBinaryString, createBinaryString2 };
