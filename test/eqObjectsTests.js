const { assert } = require("chai");
const eqObjects = require("../eqObjects");


// Eq1: have obj be equal when.
// They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// assertEqual(eqObjects(ab, ba), true);


// assertEqual(eqObjects(ab, abc), false);

// // Eq2: have obj be equal when an array element is array.
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

describe('these are eqObjects function tests', () => {
  it('given same object', () => {
    assert.isTrue(eqObjects(
      { a: { z: 1 }, b: 2 },
      { a: { z: 1 }, b: 2 }));
  });

  it('slightly different objects', () => {
    assert.isFalse(eqObjects(
      { a: { y: 0, z: 1 }, b: 2 },
      { a: { z: 1 }, b: 2 }));
  });
  it('1 nested object', () => {
    assert.isFalse(eqObjects(
      { a: { y: 0, z: 1 }, b: 2 },
      { a: 1, b: 2 }));
  });
  it('diff in last value', () => {
    assert.isFalse(eqObjects(
      { a: { z: 1, b: 3 , c: 5}, b: 2 },
      { a: { z: 1, b: 3 , c: 4}, b: 3 }));
  });
  it('multikey vals', () => {
    assert.isFalse(eqObjects(
      { a: { z: 1, b: 3 , c: {20: 4, 3: 22}}, b: 3,  h:[1,2,3] },
      { a: { z: 1, b: 3 , c: {20 : 4}}, h: [1,2,3], b: 3 }));
  });
});


