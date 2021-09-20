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

module.exports = assertEqual;