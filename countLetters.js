const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};
// 15:04

// Funciton countLetters takes in a string (strToCount) and returns a count of each letter in
// that string
const countLetters = (strToCount) => {
  const ansObj = {};
  //need alphobj to be alph order
  const alphObj = {
    a:0,
    b:0,
    c:0,
    d:0,
    e:0,
    f:0,
    g:0,
    h:0,
    i:0,
    j:0,
    k:0,
    l:0,
    m:0,
    n:0,
    o:0,
    p:0,
    q:0,
    r:0,
    s:0,
    t:0,
    u:0,
    v:0,
    w:0,
    x:0,
    y:0,
    z:0
  };

  const lowerstr = strToCount.toLowerCase();

  for (let i = 0; i < lowerstr.length; i++) {
    const currLet = lowerstr[i];
    // console.log(currLet);
    if (alphObj[currLet] !== undefined) {
      alphObj[currLet]++;
      // console.log(alphObj[currLet]);
    }

  }
  for (let elem in alphObj) {
    if (alphObj[elem] > 0) {
      ansObj[elem] = alphObj[elem];
    }
  }
  return ansObj;
};

// tests
console.log(countLetters('lighthouse in the house'));