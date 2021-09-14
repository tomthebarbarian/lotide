const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = (inArr1, inArr2) => {
  let ans = false;
  if (inArr1.length === inArr2.length) {
    for (let i = 0; i <= inArr1.length; i++) {
      if (i === inArr1.length) {
        ans = true;
        break;
      } else if (inArr1[i] !== inArr2[i]) {
        break;
      }
    }
  }
  return ans;
};
 
//Testing
/*
const test1 = eqArrays([1, 2, 3], [1, 2, 3]); // => true
const test2 = eqArrays([1, 2, 3], [3, 2, 1]); // => false

const test3 = eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
const test4 = eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

assertEqual(test1, true);
assertEqual(test2, false);
assertEqual(test3, true);
assertEqual(test4, false);
*/