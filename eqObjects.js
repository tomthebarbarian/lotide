// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
//   }

// };

const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // Diff num key
  // console.log('object1: ',object1, 'vs object2: ', object2);
  // not obj
  if (typeof object1 !== 'object') {
    // console.log('not obj');
    return (object1 === object2);
    // is Arr
  } else {
    let obj1keys = Object.keys(object1);
    // only key values matter
    // console.log('keys length', obj1keys.length, Object.keys(object2).length);
    if (obj1keys.length !== Object.keys(object2).length) {
      return false;
    } else {
      for (let key in object1) {
        // console.log('obj1 key: ' + object1[key]);
        // if array
        if (Array.isArray(object1[key])) {
          // console.log('in obj array');

          if (!(eqArrays(object1[key], object2[key]))) {
            return false;
          }
          //  if not array, then obj?
        } else if (typeof object1[key] === 'object' && object1[key] !== null) {
          // console.log('in obj obj');

          if  (!eqObjects(object1[key], object2[key])) {
            return false;
          }
          // if not obj or array
        } else if (object1 !== object2) {
          // console.log('in obj not obj');

          if (!eqObjects(object1[key], object2[key])) {
            return false;
          }
        }
      }
    }
  }
    

  return true;
};

module.exports = eqObjects;

