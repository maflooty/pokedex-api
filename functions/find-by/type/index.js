const type = (pokeArray, type) => {

    let results = pokeArray.filter(p => p.type.includes(type));

    results = results.map(p => ({ name: p.name, num: p.num }));

    return results;
};

module.exports = type;
