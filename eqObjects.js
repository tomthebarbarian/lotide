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


// Eq1: have obj be equal when.
// They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// assertEqual(eqObjects(ab, ba), true);


// assertEqual(eqObjects(ab, abc), false);

// // Eq2: have obj be equal when an array element is array.
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(
  { a: { z: 1 }, b: 2 },
  { a: { z: 1 }, b: 2 }),true);// => true

assertEqual(eqObjects(
  { a: { y: 0, z: 1 }, b: 2 },
  { a: { z: 1 }, b: 2 }),false);// => false
assertEqual(eqObjects(
  { a: { y: 0, z: 1 }, b: 2 },
  { a: 1, b: 2 }),false);// => false

assertEqual(eqObjects(
  { a: { z: 1, b: 3 , c: 5}, b: 2 },
  { a: { z: 1, b: 3 , c: 4}, b: 3 }),false);// => true

assertEqual(eqObjects(
  { a: { z: 1, b: 3 , c: {20: 4, 3: 22}}, b: 3,  h:[1,2,3] },
  { a: { z: 1, b: 3 , c: {20 : 4}}, h: [1,2,3], b: 3 }),false);// => true