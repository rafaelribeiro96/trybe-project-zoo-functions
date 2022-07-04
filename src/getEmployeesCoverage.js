const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getSpecieID(specieID) {
  return specieID.responsibleFor.map((ids) => species.find((specie) => (specie.id === ids)));
}

function getEmployees() {
  return data.employees.map((employ) => {
    const animals = getSpecieID(employ);
    return {
      id: employ.id,
      fullName: `${employ.firstName} ${employ.lastName}`,
      species: animals.map(({ name }) => name),
      locations: animals.map(({ location }) => location),
    };
  });
}

function getEmployee(employ) {
  return employees.find((employee) => (employ.name === employee.firstName
    || employ.name === employee.lastName || employ.id === employee.id));
}

function getEmployeesCoverage(employ) {
  // seu código aqui
  if (!employ) return getEmployees();
  const employee = getEmployee(employ);
  if (!employee) throw new Error('Informações inválidas');
  const animals = getSpecieID(employee);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: animals.map(({ name }) => name),
    locations: animals.map(({ location }) => location),
  };
}

module.exports = getEmployeesCoverage;
