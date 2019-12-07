# PokeDex API

A "little" project for introducing you to API's, working on large code bases, TDD, and Node.js.  It's built around [Biuni's PokeDex Data Set](https://github.com/Biuni/PokemonGO-Pokedex/blob/master/pokedex.json).

Enjoy!


### Index
* [Learning Objectives](#learning-objectives)
    * [Programming Skills](#programming-skills)
    * [Other People's Code](#other-peoples-code)
    * [Working with Data](#working-with-data)
    * [API's](#apis)
* [Getting Started](#getting-started)
    * [Install & Dependencies](#install--dependencies)
    * [Running the API](#running-the-api)
    * [Running the Tests](#running-the-tests)
* [Your Task](#your-task)
    * [values-for-key.js](#values-for-keyjs)
    * [evolutions-of.js](#evolutions-ofjs)
    * [type-stats.js](#type-statsjs)
    * [find-by/id.js](#find-by/idjs)
    * [find-by/key-value.js](#find-by/key-valuejs)
    * [find-by/type.js](#find-by/typejs)
    * [find-by/value.js](#find-by/valuejs)
    * [find-by/weakness.js](#find-by/weaknessjs)
* [Extra Challenge](#extra-challenge)
* [Helpful Links](#helpful-links)

---

## Learning Objectives


#### Programming Skills
* Debugging JavaScript in VSC
* Running tests from the terminal with _mocha_
* Building report logs
* Using `npm`: installing dependencies, running scripts
* Understanding what "fullstack" means
* Working with modular code
* Using branches


#### Other People's Code
* Navigating larger directory structures
* Understanding code you didn't write
* Setting up and running other people's projects


#### Working with Data
* Exploring and understanding large data sets
* Reading and understanding JSON data
* Processing more data than you can read at once
* Deciphering JSON schemas


#### API's
* Explaining why you can't run an API with the browser
* Running API's with Node.js & VSC
* Testing them with the browser and Postman
* Understanding the need for CORS
* URL Request parameters

---

## Getting Started

Before you start passing tests, you should install all dependencies and practice using the app.  It'll be much easier to solve the challenges after you are comfortable running and exploring the code base.

> all scripts should be run in terminal from the top level of this project

#### Install & Dependencies
1. clone the repo
2. `npm install`
3. `npm install -g mocha` (if you don't have it)
3. `npm install -g nodemon` (if you don't have it)

#### Running the API
* `npm run dev`
* Studying in Postman:
    1. go to `localhost:xxxx/docs` for API documentation
    1. explore!
* Studying in the Browser:
    1. go to `localhost:xxx/` for the simple frontend & docs
    1. open your console to study the API's responses
    1. explore!

#### Running the Tests
* To test a single function at a time while writing your solutions:
    * `mocha functions/path-to-function/spec.js`
* To test all functions at once:
    * `npm run test`
* To build an updated `report.json` in the `./functions` directory
    * `npm run report`


[TOP](#pokedex-api)

---

## Your Task

> Psst. don't forget to use branches!  Develop each of these functions on their own branch, only merging them to master when all of the test pass.

The good news is _almost_ all of the code is already written, and it already works!  All you need to write is the bodies for the 8 functions in `./functions`.  Each of the functions are used by the API to process the PokeDex data and return just the information a user needs.  

Each function lives in it's own small directory with a descriptive name, with three files:
1. `index.js`: Contains the empty function you need to write.  Your function is exported from this file for testing, development, and deployment.
2. `spec.js`: Test cases and mocha suites for each function are described in this file.  The test data is pulled from the sample data sets in `./data`.
3. `sandbox.js`:  An empty file for your experiments.  It's not connected to any build or testing scripts, the API doesn't use it, it's just there for you to debug and play around with your function.  Each sandbox has 4 dependencies:
    * `./index.js`: the function you are currently working on
    * `pokedex`: the full pokedex data set
    * `pokeData`: the complete array of pokemon objects used by the API
    * `samples`: the sample data sets used by the test cases
    * `assert`: a [native Node.js module](https://nodejs.org/api/assert.html) for asserting, you can think of it like `console.assert` on steroids


Below are the 8 functions you need to write:

#### values-for-key.js

* _ARGS:_
    1. `pokeArray`: An array of Pokemon objects.
    1. `key`: A string
* _RETURNS:_ Array of values
* _BEHAVIOR:_ This function will create a new array containing every unique value associated with the given `key`.  If two pokemon objects have the same value for the `key`, then the value will not be added twice.


#### evolutions-of.js

* _ARGS:_
    1. `pokeArray`: An array of Pokemon objects.
    1. `name`: A string
* _RETURNS:_ Array of objects -> `{name: "string", num: "string"}`
* _BEHAVIOR:_ This function will return an array indicating all evolutions of the pokemon with `name`.  Each object in the array will contain only the .name and .num of each evolution.  If there is no pokemon with `name`, the function will return an empty array.

#### type-stats.js

* _ARGS:_
    1. `pokeArray`: An array of Pokemon objects.
    1. `type`: A string
* _RETURNS:_ an object with three properties -> `{typeName: "string", typeCount: "number", weaknessCount: "number"}`
* _BEHAVIOR:_ This function will check every pokemon to build up the return value. The `.typeCount` property in the return value is a count of how many pokemon have this `type` in the .type array.  The `.weaknessCount` property shows how many pokemon have this `type` in their .weaknesses array.



#### find-by/id.js

* _ARGS:_
    1. `pokeArray`: An array of Pokemon objects.
    1. `id`: A number
* _RETURNS:_ A pokemon object
* _BEHAVIOR:_ This function returns the pokemon object with the given `id`.  If no such pokemon exists, it returns an empty object.


#### find-by/key-value.js

* _ARGS:_
    1. `pokeArray`: An array of Pokemon objects.
    1. `key`: A string
    1. `value`: A string
* _RETURNS:_ Array of objects -> `{name: "string", num: "string"}`
* _BEHAVIOR:_ This function returns an array indicating which pokemon objects have a key/value pair matching the `key` and `value` arguments. Because your req.params will always be strings (until you learn about req.body ;), the function will cast all saved values to String before comparing with `value`.

#### find-by/type.js

* _ARGS:_
    1. `pokeArray`: An array of Pokemon objects.
    1. `type`: A string
* _RETURNS:_ Array of objects -> `{name: "string", num: "string"}`
* _BEHAVIOR:_ This function returns an array indicating which pokemon objects have the given `type` in their .type array. If there are no pokemon with this `type`, just return an empty array.


#### find-by/value.js

* _ARGS:_
    1. `pokeArray`: An array of Pokemon objects.
    1. `value`: A string
* _RETURNS:_ Array of objects -> `{name: "string", num: "string"}`
* _BEHAVIOR:_ This function returns an array indicating which pokemon objects have  the given `value` stored in _any_ of their keys. Because your req.params will always be strings (until you learn about req.body ;), the function will cast all saved values to String before comparing with `value`.


#### find-by/weakness.js

* _ARGS:_
    1. `pokeArray`: An array of Pokemon objects.
    1. `weakness`: A string
* _RETURNS:_ Array of objects -> `{name: "string", num: "string"}`
* _BEHAVIOR:_ This function returns an array indicating which pokemon objects have the given `weakness` in their .weaknesses array. If there are no pokemon with this `weakness`, just return an empty array.




[TOP](#pokedex-api)

---

## Extra Challenge

If you've finished all 7 functions and are comfortable testing your API locally (using Postman and the Browser), the next step is to deploy your project.


Follow the steps [in this tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs) to push your Pokemon API to Heroku for your first live, fullstack web app!

[TOP](#pokedex-api)

---

## Helpful Links

> hi!

[TOP](#pokedex-api)

---
---
### <a href="https://hackyourfuture.be" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/63941625-4c7c3d00-ca6c-11e9-9a76-8d5e3632fe70.jpg" width="100" height="100" alt="Hack Your Future: Belgium"></a>

