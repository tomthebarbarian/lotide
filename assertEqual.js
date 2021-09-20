// Assert equal takes 2 values(actual, expected)
// and compares them to each other. If they
// are equivalent, it logs a success message to console
// or a failiure message if a fail

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE
/*
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
assertEqual('test', 'test');
assertEqual('1', 1);
assertEqual(true, 1);
*/

module.exports = assertEqual;