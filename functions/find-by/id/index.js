const id = (pokeData, id) => {

    return pokeData.find(pokemon => pokemon.id === id);

}

module.exports = id;
