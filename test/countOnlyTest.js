
const assert = require("chai").assert;
const countOnly = require("../countOnly");


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


describe('these are flatten function tests', () => {

  it('returns jason', () => {
    assert(result1["Jason"], 1);
  });
  it('returns undefined', () => {
    assert.isTrue(result1["karima"] === undefined);
  });
  it('returns Fang', () => {
    assert(result1["Fang"], 2);
  });
  it('returns Agouhanna', () => {
    assert.isTrue(result1["Agouhanna"] === undefined);
  });



});

// assert(result1["Jason"], 1);
// assert(result1["Karima"], undefined);
// assert(result1["Fang"], 2);
// assert(result1["Agouhanna"], undefined);