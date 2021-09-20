const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");


const test1 = eqArrays([1, 2, 3], [1, 2, 3]); // => true
const test2 = eqArrays([1, 2, 3], [3, 2, 1]); // => false

const test3 = eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
const test4 = eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

assertEqual(test1, true);
assertEqual(test2, false);
assertEqual(test3, true);
assertEqual(test4, false);


assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]) , true);// => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]) , false);// => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false

assertEqual(eqArrays([[4]], [[4]]), true);
