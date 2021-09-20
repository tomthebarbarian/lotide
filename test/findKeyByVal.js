const assert  = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


describe('these are findKeyByVal function tests', () => {
  it('returns drama', () => {
    assert(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it('returns undefined', () => {
    assert.isTrue(findKeyByValue(bestTVShowsByGenre, "That '70s Show") === undefined);

  });
});


