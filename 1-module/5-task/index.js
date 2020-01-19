/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
'use strict'

function truncate(str, maxlength) {

  if (str === null) {
    return str = '';
  }

  if (str.length <= maxlength || maxlength === null) {
    return str;
  }

  let truncStr = '';

  for (let i = 0; i < maxlength - 1; i++) {
    truncStr += str[i];
  }

  truncStr += '…';

  return truncStr;
  }

  
