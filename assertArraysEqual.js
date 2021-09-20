const eqArrays = require("./eqArrays");


// function assertArraysEqual takes in 2 arrays and logs a success message to
// the console if the arrays are equal or an error message otherwise.
const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1,arr2) === true) {
    console.log(`🟢🟢🟢 Equal Arrays Assertion Passed`);
  } else {
    console.log(`🔴🔴🔴 Different Arrays Assertion Failed`);
  }
};

module.exports = (assertArraysEqual);