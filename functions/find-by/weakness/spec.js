const weakness = require('./index.js');

const dataSamples = require('../../../data').samples;
const assert = require('assert');

const testCases = [
  {
    name: 'data/samples/5.json, "Dragon"',
    args: [dataSamples.five, 'Dragon'],
    expected: [
      {
        name: 'Dratini',
        num: '147'
      },
      {
        name: 'Dragonair',
        num: '148'
      },
      {
        name: 'Dragonite',
        num: '149'
      }
    ]
  },
  {
    name: 'data/samples/4.json, "Normal"',
    args: [dataSamples.four, 'Normal'],
    expected: []
  },
  {
    name: 'data/samples/3.json, "Fighting"',
    args: [dataSamples.three, 'Fighting'],
    expected: [
      {
        name: 'Dewgong',
        num: '087'
      }
    ]
  },
  {
    name: 'data/samples/2.json, "Bug"',
    args: [dataSamples.two, 'Bug'],
    expected: [
      {
        name: 'Paras',
        num: '046'
      },
      {
        name: 'Parasect',
        num: '047'
      }
    ]
  },
  {
    name: 'data/samples/1.json, "Electric"',
    args: [dataSamples.one, 'Electric'],
    expected: [
      {
        name: 'Squirtle',
        num: '007'
      },
      {
        name: 'Wartortle',
        num: '008'
      },
      {
        name: 'Blastoise',
        num: '009'
      },
      {
        name: 'Butterfree',
        num: '012'
      }
    ]
  },
]

describe("weakness(pokeData, weakness) -> returns the name and number of all pokemon with this weakness: ", () => {
  testCases.forEach(test => {
    it(test.name, () => {
      assert.deepStrictEqual(weakness(...test.args), test.expected);
    });
  });
});
