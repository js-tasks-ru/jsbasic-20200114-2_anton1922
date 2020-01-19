/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */

'use strict';

function ucFirst(str) {

  if (str === '' || str === null) {
    return str = '';
  }

  let newStr = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    newStr = newStr + str[i];
  }

  return newStr;
}


