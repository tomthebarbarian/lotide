const assert = require('chai').assert;
const flatten = require("../flatten");

// console.log(flatten([1, 2, [[3], 4], 5, [6]]));
// console.log(flatten(["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]]));



describe('these are flatten function tests', () => {

  it('returns [1,2,3,4,5,6] for [1, 2, [[3], 4], 5, [6]]', () => {
    assert.deepEqual(flatten([1, 2, [[3], 4], 5, [6]]), [1,2,3,4,5,6]);
  });
  it(`returns [ '😎', '💩', '🤗', '😼', '😂' ] for [["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]]]`, () => {
    assert.deepEqual(flatten([["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]]]), [ '😎', '💩', '🤗', '😼', '😂' ]);
  });


});