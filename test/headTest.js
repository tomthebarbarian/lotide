// const assertEqual = require("../assertEqual");

const assert = require('chai').assert;
const head = require("../head");

// assertEqual(head([1,3]), head([1]));

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// assertEqual(head([]), undefined);

describe('this the extract head function', () => {

  it('returns 1 for [1,2,3]', () => {
    assert.strictEqual(head([1,2,3]), 1);
  });
  it('returns 5 for [5,6,7]', () => {
    assert.strictEqual(head([5,6,7]), 5);
  });
  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello');
  });
  it('returns undefined for []', () => {
    assert.strictEqual(head([]), undefined);
  });

});