const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// Function findKeyByValue takes an object (searchObj) and a value (valToFind) and returns the
// first key containing valToFind, otherwise, returns undefined
const findKeyByValue = (searchObj, valToFind) => {
  let foundVal = undefined;
  for (let elem in searchObj) {
    if (searchObj[elem] === valToFind) {
      foundVal = elem;
    }
  }
  return foundVal;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
