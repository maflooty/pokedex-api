// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)

const keyValue = (pokeArray, key, value) => {
   
    const keyValueObject = pokeArray.find(element => element[key] == value);
    
    if(!keyValueObject) return [];

    const resultArray = pokeArray.filter(element => element[key] == value);
   
    const resultArrayExpected = [];

    resultArray.forEach(element => {
        
        resultArrayExpected.push({'num': element.num, 'name': element.name})
        
    });
    
    return resultArrayExpected;
};


module.exports = keyValue;
