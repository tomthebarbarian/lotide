const letterPositions = require('../letterPositions');
const assert = require('chai').assert;


const testObj = letterPositions('hello');

describe('this the extract head function', () => {

  it('returns 0 for h', () => {
    assert(testObj['h'], [0]);
  });
  it('returns 1 for e', () => {
    assert(testObj['e'], [1]);
  });
  it('returns 2,3 for l', () => {
    assert(testObj['l'], [2,3]);
  });
});