const evolutionOf = (pokeArray, name) => {
     
    const pokemon = pokeArray.find(p => p.name === name);
      
    if(!pokemon) return [];
      
    const allEvolutions = [];
     
    if(Array.isArray(pokemon.prev_evolution)) {
        
        allEvolutions.push(...pokemon.prev_evolution);
     
    }
      
    allEvolutions.push({num: pokemon.num, name: pokemon.name});
     
    if(Array.isArray(pokemon.next_evolution)) {
        
        allEvolutions.push(...pokemon.next_evolution);
     
    }
      
    return allEvolutions;
};

module.exports = evolutionOf;
