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

// function assertArraysEqual takes in 2 arrays and logs a success message to
// the console if the arrays are equal or an error message otherwise.
const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1,arr2) === true) {
    console.log(`🟢🟢🟢 Equal Arrays, Assertion Passed`);
  } else {
    console.log(`🔴🔴🔴 Different Arrays, Assertion Failed`);
  }
};
// function without takes an input array (inArr) and an array of values (removes)and
// returns a new array equivalent to the inputarray with all values of exlude
// array excluded

const without = (inArr, removes) => {
  let ansArr = [];
  for (let elem of inArr) {
    if (removes.includes(elem)) {
      continue;
    } else {
      ansArr.push(elem);
    }
  }
  return ansArr;
};

// Test Cases
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1','2']);

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), true);

assertArraysEqual(without(["1", "2", "3"], []), ["1", "2", "3"]);



const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
