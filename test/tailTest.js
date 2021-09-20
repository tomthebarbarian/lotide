// const assertEqual = require("../assertEqual");
const tail = require("../tail");
const assert = require("chai").assert;

const testArr = [1,2,3,4];

describe('these are the tail function tests', () => {

  it('returns 4 for [1,2,3,4]', () => {
    assert.deepEqual(tail(testArr), [2,3,4]);
  });
  it('returns 3 for [1,2,3]', () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  });

  it('returns 7 for [5,6,7]', () => {
    assert.deepEqual(tail([5,6,7]), [6,7]);
  });
  it('returns "Labs" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('returns undefined for []', () => {
    assert.deepEqual(tail([]), undefined);
  });

});