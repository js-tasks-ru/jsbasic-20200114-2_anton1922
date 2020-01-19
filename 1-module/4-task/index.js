/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
'use strict';

function checkSpam(str) {

  if (str === null) {
    return false;
  }

  str = str.toLowerCase();

  if (str.indexOf('1xbet') != -1 || str.indexOf('xxx') != -1) {
    return true;
  }

  return false;
}
