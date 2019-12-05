const assert = require('assert');

// a helper function to test if two data structures are the same
const areTheSame = (first, second) => {
  try {
    assert.deepStrictEqual(first, second);
    return true; // contain the same data
  } catch (err) {
    return false; // do not contain the same data
  }
}

const valuesForKey = (pokeArray, key) => {

};

module.exports = valuesForKey;
