const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = (inArr1, inArr2) => {

  console.log('Array1: ', inArr1, " Array 2: ", inArr2);
  // Not arr
  if (inArr1.length !== inArr2.length) {
    return false;
  } else {
    for (let i = 0; i < inArr1.length; i++) {
      // console.log('Array1: ', inArr1[i], " Array 2: ", inArr2[i]);
      if (Array.isArray(inArr1[i])) {
        if (!eqArrays(inArr1[i], inArr2[i])) {
          return false;
        }
      } else if (inArr1[i] !== inArr2[i]) {
        return false;
      }
    }
    return true;
  }
};
 
//Testing

// const test1 = eqArrays([1, 2, 3], [1, 2, 3]); // => true
// const test2 = eqArrays([1, 2, 3], [3, 2, 1]); // => false

// const test3 = eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
// const test4 = eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

// assertEqual(test1, true);
// assertEqual(test2, false);
// assertEqual(test3, true);
// assertEqual(test4, false);


assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]) , true);// => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]) , false);// => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false

assertEqual(eqArrays([[4]], [[4]]), true);