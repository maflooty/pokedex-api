const keyValue = require('./index.js');

const dataSamples = require('../../../data').samples;
const assert = require('assert');

const testCases = [
  {
    name: 'data/samples/1.json, "name", "Weedle"',
    args: [dataSamples.one, 'name', 'Weedle'],
    expected: [
      {
        "num": "013",
        "name": "Weedle"
      }
    ]
  },
  {
    name: 'data/samples/1.json, "id", "12"',
    args: [dataSamples.one, 'id', "12"],
    expected: [
      {
        "num": "012",
        "name": "Butterfree"
      }
    ]
  },
  {
    name: 'data/samples/2.json, "doesNotExist", "hi!"',
    args: [dataSamples.two, 'doesNotExist', 'hi!'],
    expected: []
  },
  {
    name: 'data/samples/2.json, "name", "Mew"',
    args: [dataSamples.two, 'name', 'Mew'],
    expected: []
  },
  {
    name: 'data/samples/3.json, "egg", "Not in Eggs"',
    args: [dataSamples.three, 'egg', 'Not in Eggs'],
    expected: [
      {
        "num": "085",
        "name": "Dodrio"
      },
      {
        "num": "087",
        "name": "Dewgong"
      }
    ]
  },
  {
    name: 'data/samples/3.json, "egg", "5 km',
    args: [dataSamples.three, 'egg', '5 km'],
    expected: [
      {
        "num": "083",
        "name": "Farfetch'd"
      },
      {
        "num": "084",
        "name": "Doduo"
      },
      {
        "num": "086",
        "name": "Seel"
      }
    ]
  },
  {
    name: 'data/samples/4.json, "spawn_time", "N/A"',
    args: [dataSamples.four, 'spawn_time', 'N/A'],
    expected: [
      {
        "num": "132",
        "name": "Ditto"
      }
    ]
  },
]

describe("keyValue(pokeData, key, value) -> returns the number and name of all pokemon with the given key/value pair: ", () => {
  testCases.forEach(test => {
    it(test.name, () => {
      assert.deepStrictEqual(keyValue(...test.args), test.expected);
    });
  });
});
