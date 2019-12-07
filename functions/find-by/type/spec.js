const type = require('./index.js');

const dataSamples = require('../../../data').samples;
const assert = require('assert');

const testCases = [
  {
    name: 'type: data/samples/5.json, "Dragon"',
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
    name: 'type: data/samples/4.json, "Normal"',
    args: [dataSamples.four, 'Normal'],
    expected: [
      {
        name: 'Tauros',
        num: '128'
      },
      {
        name: 'Ditto',
        num: '132'
      }
    ]
  },
  {
    name: 'type: data/samples/3.json, "Water"',
    args: [dataSamples.three, 'Water'],
    expected: [
      {
        name: 'Seel',
        num: '086'
      },
      {
        name: 'Dewgong',
        num: '087'
      }
    ]
  },
  {
    name: 'type: data/samples/2.json, "Bug"',
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
    name: 'type: data/samples/1.json, "Bug"',
    args: [dataSamples.one, 'Bug'],
    expected: [
      {
        name: 'Caterpie',
        num: '010'
      },
      {
        name: 'Metapod',
        num: '011'
      },
      {
        name: 'Butterfree',
        num: '012'
      },
      {
        name: 'Weedle',
        num: '013'
      },
      {
        name: 'Kakuna',
        num: '014'
      },
      {
        name: 'Beedrill',
        num: '015'
      }
    ]
  },
]

describe("type(pokeData, type) -> returns the name and number of all pokemon with this type: ", () => {
  testCases.forEach(test => {
    it(test.name, () => {
      assert.deepStrictEqual(type(...test.args), test.expected);
    });
  });
});
