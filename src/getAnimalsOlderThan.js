const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = data.species.find((element) => element.name === animal).residents;
  return animals.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
