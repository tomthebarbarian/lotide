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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  let equalQ = true;
  // console.log('keys1: ' + keys1);
  // console.log('keys2: ' + keys2);

  if (keys1.length === keys2.length) {
    for (let i = 0; i < keys1.length; i++) {
      // console.log('obj1 key: ' + object1[keys1[i]]);
      if (object1[keys1[i]] instanceof Array) {
        if (!(eqArrays(object1[keys1[i]], object2[keys1[i]]))) {
          equalQ = false;
          break;
        }
      } else if (object1[keys1[i]] !== object2[keys1[i]]) {
        equalQ = false;
        break;
      }
    }
    return equalQ;
  } else {
    equalQ = false;
    return equalQ;
  }
};


// Eq1: have obj be equal when.
// They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);


assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);


assertEqual(eqObjects(cd, cd2), false);