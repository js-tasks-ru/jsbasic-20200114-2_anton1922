/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
'use strict';

function isEmpty(obj) {
  let i = 0;

  for (let prop in obj) {
    i++;
  }

  if (i == 0) {
    return true;
  }

  return false;
}