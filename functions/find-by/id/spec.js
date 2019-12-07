const id = require('./index.js');

const dataSamples = require('../../../data').samples;
const assert = require('assert');

const testCases = [
  {
    name: 'id: data/samples/1.json, 13',
    args: [dataSamples.one, 13],
    expected: {
      "id": 13,
      "num": "013",
      "name": "Weedle",
      "img": "http://www.serebii.net/pokemongo/pokemon/013.png",
      "type": [
        "Bug",
        "Poison"
      ],
      "height": "0.30 m",
      "weight": "3.2 kg",
      "candy": "Weedle Candy",
      "candy_count": 12,
      "egg": "2 km",
      "spawn_chance": 7.12,
      "avg_spawns": 712,
      "spawn_time": "02:21",
      "multipliers": [
        1.01,
        1.09
      ],
      "weaknesses": [
        "Fire",
        "Flying",
        "Psychic",
        "Rock"
      ],
      "next_evolution": [
        {
          "num": "014",
          "name": "Kakuna"
        },
        {
          "num": "015",
          "name": "Beedrill"
        }
      ]
    }
  },
  {
    name: 'id: data/samples/1.json, 16',
    args: [dataSamples.one, 16],
    expected: {}
  },
  {
    name: 'id: data/samples/2.json, 46',
    args: [dataSamples.two, 46],
    expected: {
      "id": 46,
      "num": "046",
      "name": "Paras",
      "img": "http://www.serebii.net/pokemongo/pokemon/046.png",
      "type": [
        "Bug",
        "Grass"
      ],
      "height": "0.30 m",
      "weight": "5.4 kg",
      "candy": "Paras Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 2.36,
      "avg_spawns": 236,
      "spawn_time": "01:42",
      "multipliers": [
        2.02
      ],
      "weaknesses": [
        "Fire",
        "Ice",
        "Poison",
        "Flying",
        "Bug",
        "Rock"
      ],
      "next_evolution": [
        {
          "num": "047",
          "name": "Parasect"
        }
      ]
    }
  },
  {
    name: 'id: data/samples/2.json, 42',
    args: [dataSamples.two, 42],
    expected: {}
  },
  {
    name: 'id: data/samples/3.json, 84',
    args: [dataSamples.three, 84],
    expected: {
      "id": 84,
      "num": "084",
      "name": "Doduo",
      "img": "http://www.serebii.net/pokemongo/pokemon/084.png",
      "type": [
        "Normal",
        "Flying"
      ],
      "height": "1.40 m",
      "weight": "39.2 kg",
      "candy": "Doduo Candy",
      "candy_count": 50,
      "egg": "5 km",
      "spawn_chance": 0.52,
      "avg_spawns": 52,
      "spawn_time": "05:10",
      "multipliers": [
        2.19,
        2.24
      ],
      "weaknesses": [
        "Electric",
        "Rock"
      ],
      "next_evolution": [
        {
          "num": "085",
          "name": "Dodrio"
        }
      ]
    }
  },
  {
    name: 'id: data/samples/3.json, 85',
    args: [dataSamples.three, 85],
    expected: {
      "id": 85,
      "num": "085",
      "name": "Dodrio",
      "img": "http://www.serebii.net/pokemongo/pokemon/085.png",
      "type": [
        "Normal",
        "Flying"
      ],
      "height": "1.80 m",
      "weight": "85.2 kg",
      "candy": "Doduo Candy",
      "egg": "Not in Eggs",
      "spawn_chance": 0.22,
      "avg_spawns": 22,
      "spawn_time": "02:12",
      "multipliers": null,
      "weaknesses": [
        "Electric",
        "Rock"
      ],
      "prev_evolution": [
        {
          "num": "084",
          "name": "Doduo"
        }
      ]
    }
  }
]

describe("id(pokeData, id) -> returns the pokemon object with the given id, or an empty object: ", () => {
  testCases.forEach(test => {
    it(test.name, () => {
      assert.deepStrictEqual(id(...test.args), test.expected);
    });
  });
});
