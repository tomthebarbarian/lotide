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

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1,arr2) === true) {
    console.log(`🟢🟢🟢 Equal Arrays Assertion Passed`);
  } else {
    console.log(`🔴🔴🔴 Different Arrays Assertion Failed`);
  }
};

// function flatten takes an array of arrays/including nested arrays of n levels and
// and returns a flattened version of the array.

const flatten = (inArr) => {
  let ansArr = [];
  for (let elem of inArr) {
    if (Array.isArray(elem)) {
      for (let x of elem) {
        ansArr.push(x);
      }
    } else {
      ansArr.push(elem);
    }
  }
  return ansArr;
};


console.log(flatten([1, 2, [3, 4], 5, [6]]));
// come back when you know recursion.