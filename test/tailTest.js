const assertEqual = require("../assertEqual");
const tail = require("../tail");


const testArr = [1,2,3,4];
assertEqual(tail(testArr), testArr);

assertEqual(tail([1]), undefined);


assertEqual(tail([1,2,3,4])[0], tail([2,2,3,4])[0]);