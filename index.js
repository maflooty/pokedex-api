const express = require("express");
const app = express();
const cors = require('cors');

const path = require('path');

const { pokedex, schemas } = require('./data');

const functions = require("./functions");
const mochaReport = require('./functions/report.json');


app.use(cors());

app.use((req, res, next) => {
  console.log("\n", req.method + ": ", req.path);
  next();
});

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/docs', (req, res) => {
  const welcomeAndRoutes = {
    message: 'welcome to the pokedex api',
    routes: app._router.stack
      .filter(r => r.route && r.route.path)
      .map(r => 'GET: ' + r.route.path)
  };
  res.json(welcomeAndRoutes);
});



app.get('/pokemon-schema', (req, res) => {
  res.json(schemas.pokemon);
});


app.get('/all-pokemon', (req, res) => {
  res.json(pokedex.pokemon);
});


app.get('/values-for-key/:key', (req, res) => {
  console.log(req.params);
  const key = req.params.key;
  const result = functions.valuesForKey(pokedex.pokemon, key);
  console.log({ result });
  res.json(result);
});


app.get('/evolutions-of/:name', (req, res) => {
  console.log(req.params);
  const name = req.params.name;
  const result = functions.evolutionsOf(pokedex.pokemon, name);
  console.log({ result });
  res.json(result);
});


app.get('/type-stats/:type', (req, res) => {
  console.log(req.params);
  const type = req.params.type;
  const result = functions.typeStats(pokedex.pokemon, type);
  console.log({ result });
  res.json(result);
});


app.get('/find-by/id/:id', (req, res) => {
  console.log(req.params);
  const id = Number(req.params.id);
  const result = functions.findBy.id(pokedex.pokemon, id);
  console.log({ result });
  res.json(result);
});

app.get('/find-by/type/:type', (req, res) => {
  console.log(req.params);
  const type = req.params.type;
  const result = functions.findBy.type(pokedex.pokemon, type);
  console.log({ result });
  res.json(result);
});


app.get('/find-by/weakness/:type', (req, res) => {
  console.log(req.params);
  const type = req.params.type;
  const result = functions.findBy.weakness(pokedex.pokemon, type);
  console.log({ result });
  res.json(result);
});


app.get('/find-by/value/:value', (req, res) => {
  console.log(req.params);
  const value = req.params.value;
  const result = functions.findBy.value(pokedex.pokemon, value);
  console.log({ result });
  res.json(result);
});


app.get('/find-by/key-value/:key/:value', (req, res) => {
  console.log(req.params);
  const key = req.params.key;
  const value = req.params.value;
  const result = functions.findBy.keyValue(pokedex.pokemon, key, value);
  console.log({ result });
  res.json(result);
});



app.get('/mocha-report', (req, res) => {
  res.json(mochaReport);
});



const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`pokedex API: running on port ${port}`);
});

