// function tail takes an array of
// values and returns an array of all but the
// first value in the array, or undefined if there
// are less than 2 values in teh array
// arrayOf var -> arrayOf var

const tail = (anArray) => {
  if (anArray.length > 1) {
    return anArray.slice(1);
  } else {
    return undefined;
  }
};

/*

*/
module.exports = (tail);