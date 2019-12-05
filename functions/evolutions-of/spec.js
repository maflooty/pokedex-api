const evolutionOf = require('./index.js');

const dataSamples = require('../../data').samples;
const assert = require('assert');

const testCases = [
  {
    name: 'data/samples/1.json, "Squirtle"',
    args: [dataSamples.one, 'Squirtle'],
    expected: [
      { "num": "007", "name": "Squirtle" },
      { "num": "008", "name": "Wartortle" },
      { "num": "009", "name": "Blastoise" }
    ]
  },
  {
    name: 'data/samples/1.json, "Wartortle"',
    args: [dataSamples.one, 'Wartortle'],
    expected: [
      { "num": "007", "name": "Squirtle" },
      { "num": "008", "name": "Wartortle" },
      { "num": "009", "name": "Blastoise" }
    ]
  },
  {
    name: 'data/samples/1.json, "Blastoise"',
    args: [dataSamples.one, 'Blastoise'],
    expected: [
      { "num": "007", "name": "Squirtle" },
      { "num": "008", "name": "Wartortle" },
      { "num": "009", "name": "Blastoise" }
    ]
  },
  {
    name: 'data/samples/5.json, Mew',
    args: [dataSamples.five, 'Mew'],
    expected: [
      { "name": "Mew", "num": "151" }
    ]
  },
  {
    name: 'data/samples/3.json, "DoesNotExist"',
    args: [dataSamples.three, 'DoesNotExist'],
    expected: []
  },
]

describe("evolutionOf(pokeData, name) -> returns all evolutions of a pokemon, given it's name: ", () => {
  testCases.forEach(test => {
    it(test.name, () => {
      assert.deepStrictEqual(evolutionOf(...test.args), test.expected);
    });
  });
});
