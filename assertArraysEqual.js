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

// function assertArraysEqual takes in 2 arrays and logs a success message to
// the console if the arrays are equal or an error message otherwise. 
const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1,arr2)) {
    console.log();
  } else {
    console.log();
  }
};