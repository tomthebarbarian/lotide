const exp = require('constants');
const assertEqual = require('./assertEqual');


// function head.js returns the first
// element in an array or undefined
// if the array is empty
// arrayOf var -> var
const head = (anArr) => {
  return anArr[0];
};

module.exports = head;