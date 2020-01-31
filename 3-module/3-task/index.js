/**
 * @param {string} str
 * @returns {string}
 */

'use strict';

function camelize(str) {
  //transform string to array without '-'
  return str.split('-')
  //change first letters to upper case
  .map((item, index) => {
    return index == 0 ? item : item[0].toUpperCase() + item.slice(1);
  })
  //transform array to string
  .join('');
}
