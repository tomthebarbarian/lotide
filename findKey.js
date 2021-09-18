const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// Implement the function findKey which takes in an object (inObj)and a function (callback)
//  and returns the first key for which the callback returns a truthy value.
// If no key is found, then findKey returns undefined.

const findKey = (inObj, callback) => {
  let ans = undefined;

  for (let Key in inObj) {
    if (callback(inObj[Key])) {
      return Key;
    }
  }
  return ans;
};

// Tests
let exam1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
// => "noma"


let exam2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 7);

let exam3 = findKey([
  { stars: 1 },
  { stars: 3 },
  { stars: 2 },
  {stars: 3 },
  { stars: 2 },
  { stars: 3 }
], x => x.stars === 7);

// let exam4 = findKey([
//   { stars: 1 },
//   { stars: 3 },
//   { stars: 2 },
//   {stars: 3 },
//   { stars: 2 },
//   { stars: 3 }
// ]);


assertEqual(exam1, 'noma');
assertEqual(exam2, undefined);
assertEqual(exam3, undefined);
// console.log(exam4);