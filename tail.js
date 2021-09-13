const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// function tail takes an array of
// values and returns an array of all but the
// first value in the array, or undefined if there
// are less than 2 values in teh array
// arrayOf var -> arrayOf var

const tail = (anArray) => {
  if (anArray.length > 1) {
    return anArray.slice(1);
  } else {
    return undefined;
  }
};

/*
const testArr = [1,2,3,4];
assertEqual(tail(testArr), testArr);

assertEqual(tail([1]), undefined);


assertEqual(tail([1,2,3,4])[0], tail([2,2,3,4])[0]);
*/