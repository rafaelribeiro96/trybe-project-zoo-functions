const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const employees = [''];
  data.employees.forEach((employ) => {
    if (employ.managers.includes(managerId)) {
      employees.push(`${employ.firstName} ${employ.lastName}`);
    }
  });
  return employees;
}
module.exports = { isManager, getRelatedEmployees };
