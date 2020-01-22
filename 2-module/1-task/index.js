/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
'use strict';

function sumSalary(salaries) {

  let sum = 0;

  for (let prop in salaries) {
    if (typeof salaries[prop] === 'number') {
      sum += salaries[prop];
    }
  }

  return sum;
}

