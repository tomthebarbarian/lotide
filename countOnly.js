const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};
// 1438

// Function countOnly takes an array (allItems) and obj (itemsToCount) and returns
// an obj with the count of each time a key in itemsToCount appeared in inArray
// arrayOf var obj -> obj
const countOnly = (allItems, itemsToCount) => {
  const results = {};

  for (const item of allItems) {
    console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] = results[item] + 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};


// Test Cases
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

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

//  done 1458