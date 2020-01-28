/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

'use strict';

function showSalary(data, age) {
  let string = '';

  data.filter(item => {
    return item.age <= age;
  }).forEach((item, index, array) => {
    string += index === array.length - 1 ? 
      `${item.name}, ${item.balance}` : 
      `${item.name}, ${item.balance}\n`;
  });

  return string;
}
