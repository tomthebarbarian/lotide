const eqArrays = (inArr1, inArr2) => {

  // console.log('Array1: ', inArr1, " Array 2: ", inArr2);
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
 
module.exports = (eqArrays);