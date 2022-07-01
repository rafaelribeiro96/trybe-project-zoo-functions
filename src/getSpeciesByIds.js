const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  /* if (ids.length === 0) {
    return []
  }
  return ids.map((id) => data.species.find((specie) => (specie.id --- id))); */
  const getSpecies = species.filter((specie) => ids.find((id) => id === specie.id));
  return getSpecies;
}

module.exports = getSpeciesByIds;
