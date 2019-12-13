const evolutionOf = (pokeArray, name) => {
      const pokeman = pokeArray.find(pokeman => pokeman.name === name);
      if(!pokeman) return [];
      const allEvolutions = [];
      if(Array.isArray(pokemon.prev_evolution)) {
          allEvolutions.push(...pokeman.prev_evolution);
      }
      allEvolutions.push({num: pokeman.num, name: pokeman.name});
      if(Array.isArray(pokeman.next_evolution)) {
          allEvolutions.push(...pokeman.next_evolution);
      }
      return allEvolutions;
};

module.exports = evolutionOf;
