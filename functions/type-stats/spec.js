const typeStats = require('./index.js');

const dataSamples = require('../../data').samples;
const assert = require('assert');

const testCases = [
  {
    name: 'data/samples/5.json, "Dragon"',
    args: [dataSamples.five, 'Dragon'],
    expected: {
      typeCount: 3,
      typeName: 'Dragon',
      weaknessCount: 3
    }
  },
  {
    name: 'data/samples/5.json, "Fairy"',
    args: [dataSamples.five, 'Fairy'],
    expected: {
      typeCount: 0,
      typeName: 'Fairy',
      weaknessCount: 3
    }
  },
  {
    name: 'data/samples/2.json, "Grass"',
    args: [dataSamples.two, 'Grass'],
    expected: {
      typeCount: 5,
      typeName: 'Grass',
      weaknessCount: 0
    }
  },
  {
    name: 'data/samples/2.json, "Fire"',
    args: [dataSamples.two, 'Fire'],
    expected: {
      typeCount: 0,
      typeName: 'Fire',
      weaknessCount: 5
    }
  },
  {
    name: 'data/samples/4.json, "Normal"',
    args: [dataSamples.four, 'Normal'],
    expected: {
      typeCount: 2,
      typeName: 'Normal',
      weaknessCount: 0
    }
  },
  {
    name: 'data/samples/4.json, "Fighting"',
    args: [dataSamples.four, 'Fighting'],
    expected: {
      typeCount: 0,
      typeName: 'Fighting',
      weaknessCount: 3
    }
  },
]

describe("typeStats(pokeData, type) -> returns how many times a type appears as a type and as a weakness: ", () => {
  testCases.forEach(test => {
    it(test.name, () => {
      assert.deepStrictEqual(typeStats(...test.args), test.expected);
    });
  });
});
