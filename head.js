const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// function head.js returns the first
// element in an array or undefined
// if the array is empty
// arrayOf var -> var
const head = (anArr) => {
  return anArr[0];
};


/*
assertEqual(head([1,3]), head([1]));

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([]), undefined);
*/