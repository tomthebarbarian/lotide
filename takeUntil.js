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

// Function takeUntil creates a slice of an array (inArray) with elements taken from the beginning.
// Elements are taken until callbakc(callBack) returns falsey.
// The callBack is invoked with 1 value from inArray

const takeUntil = (inArr, callback) => {
  let iter = 0;
  let ansArr = [];
  while ((iter < inArr.length) && !callback(inArr[iter])) {
    ansArr.push(inArr[iter]);
    iter++;
  }
  return ansArr;
};


// Input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// OUtput
// [ 1, 2, 5, 7, 2 ]
// // ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);