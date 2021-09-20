const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");


// Test Cases

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);

assertArraysEqual(middle([1,3,2]), [3]);

assertArraysEqual(middle([1,2,7,3]), [2,7]);

assertArraysEqual(middle([1,[1],2]), [[1]]);