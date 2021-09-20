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

const assertArraysEqual = require('./assertArraysEqual');
// function flatten takes an array of arrays/including nested arrays of n levels and
// and returns a flattened version of the array.

const flatten = (inArr, outArr = []) => {
  // single val
  // console.log(outArr);
  if (!Array.isArray(inArr)) {
    return outArr.push(inArr);
    // An arr
  } else {

    // Single elem
    if (inArr.length === 1) {
      outArr.concat(flatten(inArr[0],outArr));
      return outArr;
    }
    // rest
    if (inArr.length > 1) {
      outArr.concat(flatten(inArr[0],outArr));
      return flatten(inArr.slice(1), outArr);
    }
    

    // return flatten(inArr[0], outArr).join(flatten(inArr.slice(1),outArr), '');


  // for (let elem of inArr) {
  //   if (Array.isArray(elem)) {
  //     for (let x of elem) {
  //       ansArr.push(x);
  //     }
  //   } else {
  //     ansArr.push(elem);
  //   }
  // }
  // return outArr;
  }
};


console.log(flatten([1, 2, [[3], 4], 5, [6]]));
console.log(flatten(["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]]));

// come back when you know recursion