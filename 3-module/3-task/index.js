/**
 * @param {string} str
 * @returns {string}
 */

'use strict';
let string = 'background-color';

function camelize(str) {
  //transform string to array
  let primaryArray = str.split('');
  //create new array
  let modifiedArray = [];

  //add an element to the beginning of the primaryArray
  primaryArray.unshift(' ');

  //transform symbols after '-' to upper case and add in modifiedArray
  primaryArray.reduce((prevValue, curValue, index, array) => {
    modifiedArray[index] = (curValue === '-') ? primaryArray[index + 1].toUpperCase() :
      primaryArray[index + 1];
  }, '');

  //cut off the last element of the modifiedArray
  modifiedArray.splice(modifiedArray.length - 1);

  //remove '-' from the modifiedArray and return final string
  return modifiedArray.filter((item) => {
    return item !== '-';
  }).join('');
}
