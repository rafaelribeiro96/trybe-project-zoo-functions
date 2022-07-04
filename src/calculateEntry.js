const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  let child = 0;
  let adult = 0;
  let senior = 0;
  child = entrants.filter((visitant) => visitant.age < 18).length;
  adult = entrants.filter((visitant) => visitant.age >= 18 && visitant.age < 50).length;
  senior = entrants.filter((visitant) => visitant.age >= 50).length;
  return { child, adult, senior };
}

/* console.log(countEntrants([
  { age: 5 },
  { age: 5 },
  { age: 5 },
  { age: 18 },
  { age: 18 },
  { age: 50 },
])); */

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  let adults = 0;
  let childs = 0;
  let seniors = 0;
  adults = (adult * data.prices.adult);
  childs = (child * data.prices.child);
  seniors = (senior * data.prices.senior);
  return adults + childs + seniors;
}

module.exports = { calculateEntry, countEntrants };
