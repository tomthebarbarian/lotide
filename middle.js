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

// Middle takes an array (inArr) and returns an array of the middle element in the array,
// or middle 2 elements if the array has an even number of elements
// or and empty array if the input array length is less than 2
// arrayOf var -> arrayOf var
const middle = (inArr) => {
  let ansArr = [];
  if (inArr.length > 2) {
    let midVal = Math.floor(inArr.length / 2);

    if (inArr.length % 2 === 0) {
      ansArr.push(inArr[midVal - 1]);
    }
    ansArr.push(inArr[midVal]);

  }
  return ansArr;
};
// Test Cases
/*
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);

assertArraysEqual(middle([1,3,2]), [3]);

assertArraysEqual(middle([1,2,7,3]), [2,7]);

assertArraysEqual(middle([1,[1],2]), [[1]]);
*/