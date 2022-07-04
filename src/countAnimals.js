const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const animals = {};
  if (!animal) {
    data.species.forEach((element) => {
      animals[element.name] = element.residents.length;
    });
    return animals;
  }

  if (!animal.sex) {
    return data.species.find((element) => element.name === animal.specie).residents.length;
  }
  return data.species.find((elment) => elment.name === animal.specie).residents.filter((elment) =>
    elment.sex === animal.sex).length;
}

module.exports = countAnimals;
