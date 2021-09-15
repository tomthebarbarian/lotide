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


// Function assertObjectsEqual takes in 2 objects (compareObj1 and compareObj2)
// and prints a success message if objects are equal and a failiure message otherwise

const assertObjectsEqual =  (compareObj1, compareObj2) => {
  const inspect = require('util').inspect;
  // console.log(`Example label: ${inspect(compareObj1)}`);

  let assertMessage = `🔴🔴🔴 Assertion Failed: ${inspect(compareObj1)} === ${inspect(compareObj2)}`;
  if (eqObjects(compareObj1, compareObj2)) {
    assertMessage = `🟢🟢🟢 Assertion Passed: ${inspect(compareObj1)} !== ${inspect(compareObj2)}`;
  }
  console.log(assertMessage);
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc); // => true