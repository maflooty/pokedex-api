const valuesForKey = require('./index.js');

const dataSamples = require('../../data').samples;
const assert = require('assert');

const testCases = [
  {
    name: 'valuesForKey: data/samples/2.json, "id"',
    args: [dataSamples.two, 'id'],
    expected: [43, 44, 45, 46, 47]
  },
  {
    name: 'valuesForKey: data/samples/3.json, "num"',
    args: [dataSamples.three, 'num'],
    expected: ['083', '084', '085', '086', '087']
  },
  {
    name: 'valuesForKey: data/samples/4.json, "weaknesses"',
    args: [dataSamples.four, 'weaknesses'],
    expected: [
      ['Bug', 'Ghost', 'Dark'],
      ['Fire', 'Electric', 'Ice', 'Flying', 'Rock'],
      ['Fire', 'Bug', 'Rock', 'Ghost', 'Dark', 'Steel'],
      ['Ground'],
      ['Water', 'Ground', 'Rock'],
      ['Fire', 'Flying', 'Rock'],
      ['Fighting'],
      ['Electric', 'Grass'],
      ['Electric', 'Rock'],
      ['Electric', 'Grass', 'Fighting', 'Rock']
    ]
  },
  {
    name: 'valuesForKey: data/samples/5.json, "next_evolution"',
    args: [dataSamples.five, 'next_evolution'],
    expected: [
      [
        { num: '148', name: 'Dragonair' },
        { num: '149', name: 'Dragonite' }
      ],
      [
        { num: '149', name: 'Dragonite' }
      ]
    ]
  },
  {
    name: 'valuesForKey: data/samples/4.json, "prev_evolution"',
    args: [dataSamples.four, 'prev_evolution'],
    expected: [
      [
        { num: '129', name: 'Magikarp' }
      ]
    ]
  },
  {
    name: 'valuesForKey: data/samples/3.json, "multipliers"',
    args: [dataSamples.three, 'multipliers'],
    expected: [
      null,
      [2.19, 2.24],
      [1.04, 1.96]
    ]
  }, {
    name: 'valuesForKey: data/samples/2.json, "name"',
    args: [dataSamples.two, 'name'],
    expected: [
      'Oddish',
      'Gloom',
      'Vileplume',
      'Paras',
      'Parasect'
    ]
  },
];

describe("valuesForKey(pokeData, key) -> returns all the values stored in the given key: ", () => {
  testCases.forEach(test => {
    it(test.name, () => {
      assert.deepStrictEqual(valuesForKey(...test.args), test.expected);
    });
  });
});
