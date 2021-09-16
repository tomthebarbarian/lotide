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
      ans = Key;
      break;
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


assertEqual(exam1, 'noma');