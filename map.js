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


const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
// console.log(results1);
const results2 = map([{test:'hard'},{work:'slow'},{woe:'me'}], elem => Object.keys(elem)[0]);
const results3 = map([34,-89,54], elem => elem + 500);

assertArraysEqual(results1, ['g','c','t','m','t']);
console.log(results2);
assertArraysEqual(results2,[ 'test', 'work', 'woe' ]);

console.log(results3);
assertArraysEqual(results3,[ 534, 411, 554 ]);