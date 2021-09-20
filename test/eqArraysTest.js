const { assert } = require("chai");
const eqArrays = require("../eqArrays");
 




// const test1 = eqArrays([1, 2, 3], [1, 2, 3]); // => true
// const test2 = eqArrays([1, 2, 3], [3, 2, 1]); // => false

// const test3 = eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
// const test4 = eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false


// assert(eqArrays([1, 2, 3], [1, 2, 3]), true);

// assert(test1, true);
// assert(test2, false);
// assert(test3, true);
// assert(test4, false);


describe('these are eqArrays function tests', () => {
  it('given same object', () => {
    assert.isTrue(eqArrays(
      [[2, 3], [4]],
      [[2, 3], [4]]));
  });

  it('different nested second', () => {
    assert.isFalse(eqArrays(
      [[2, 3], [4]],
      [[2, 3], [4, 5]]));
  });
  it('different nest level second', () => {
    assert.isFalse(eqArrays(
      [[2, 3], [4]],
      [[2, 3], 4]));
  });
  it('same nest single value', () => {
    assert.isTrue(eqArrays(
      [[4]],
      [[4]]));
  });
});