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
module.exports = (middle);