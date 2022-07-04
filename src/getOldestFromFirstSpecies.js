const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const [employ] = employees.filter((employee) => employee.id === id);
  const firstAnimal = employ.responsibleFor[0];
  const [animal] = species.filter((specie) => specie.id === firstAnimal);
  const oldest = animal.residents.sort((y, z) => z.age - y.age)[0];
  const result = [oldest.name, oldest.sex, oldest.age];
  return result;
}

module.exports = getOldestFromFirstSpecies;
