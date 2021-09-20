const assert = require("chai").assert;
const middle = require("../middle");


// Test Cases

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1,2]), []);

// assertArraysEqual(middle([1,3,2]), [3]);

// assertArraysEqual(middle([1,2,7,3]), [2,7]);

// assertArraysEqual(middle([1,[1],2]), [[1]]);


describe('these are the middle function tests', () => {

  it('returns [] for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('returns [] for [1,2]', () => {
    assert.deepEqual(middle([1,2]), []);
  });

  it('returns 3 for [1,3,2]', () => {
    assert.deepEqual(middle([1,3,2]), [3]);
  });
  it('returns "Lighthouse" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });
  it('returns [] for []', () => {
    assert.deepEqual(middle([]), []);
  });

});