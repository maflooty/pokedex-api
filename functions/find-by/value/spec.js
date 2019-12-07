const value = require('./index.js');

const dataSamples = require('../../../data').samples;
const assert = require('assert');

const testCases = [
  {
    name: 'value: data/samples/5.json, "null"',
    args: [dataSamples.five, "null"],
    expected: [
      {
        name: 'Moltres',
        num: '146'
      },
      {
        name: 'Dragonite',
        num: '149'
      },
      {
        name: 'Mewtwo',
        num: '150'
      },
      {
        name: 'Mew',
        num: '151'
      }
    ]
  },
  {
    name: 'value: data/samples/4.json, "None"',
    args: [dataSamples.four, 'None'],
    expected: [
      {
        name: 'Mr. Mime',
        num: '122'
      },
      {
        name: 'Scyther',
        num: '123'
      },
      {
        name: 'Jynx',
        num: '124'
      },
      {
        name: 'Electabuzz',
        num: '125'
      },
      {
        name: 'Magmar',
        num: '126'
      },
      {
        name: 'Pinsir',
        num: '127'
      },
      {
        name: 'Tauros',
        num: '128'
      },
      {
        name: 'Lapras',
        num: '131'
      },
      {
        name: 'Ditto',
        num: '132'
      }
    ]
  },
  {
    name: 'value: data/samples/2.json, "Bug"',
    args: [dataSamples.two, 'Bug'],
    expected: []
  },
  {
    name: 'value: data/samples/1.json, "12"',
    args: [dataSamples.one, "12"],
    expected: [
      {
        name: 'Caterpie',
        num: '010'
      },
      {
        name: 'Butterfree',
        num: '012'
      },
      {
        name: 'Weedle',
        num: '013'
      }
    ]
  },
]

describe("value(pokeData, value) -> returns the name and number of all pokemon with this value in any key: ", () => {
  testCases.forEach(test => {
    it(test.name, () => {
      assert.deepStrictEqual(value(...test.args), test.expected);
    });
  });
});
