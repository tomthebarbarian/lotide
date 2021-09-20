// const eqArrays = require('./eqArrays');
// const assertArraysEqual = (arr1, arr2) => {
//   if (eqArrays(arr1,arr2) === true) {
//     console.log(`🟢🟢🟢 Equal Arrays Assertion Passed`);
//   } else {
//     console.log(`🔴🔴🔴 Different Arrays Assertion Failed`);
//   }
// };

//  Function letterPositions takes in a string(sentence) and returns an object
// containing the location index(es) of each letter
// str -> obj
const letterPositions = (sentence) => {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] === undefined) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  // logic to update results here
  return results;
};


// Tests
module.exports = letterPositions;