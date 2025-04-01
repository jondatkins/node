const same = require('./modules/same.js');
// const charFreq = require('../modules/charFrequency');

same.same2([1, 2, 3], [4, 1, 9]) // true
same.same2([1, 2, 3], [1, 9]) // true
same.same2([1, 2, 1], [4, 4, 1])// false
