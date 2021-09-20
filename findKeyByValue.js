// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
//   }

// };


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


module.exports = findKeyByValue;