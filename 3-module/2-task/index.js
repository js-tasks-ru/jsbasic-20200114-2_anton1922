/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

'use strict';

function getMinMax(str) {

  let modifiedStr = '';

  for (let i of str) {
    modifiedStr += (i === ',') ? ' ' : i;// remove ',' from string
  }

  let arrayNum = (modifiedStr.split(' '))//transform string to array
  .map(item => parseFloat(item))// transform type of items of array to number              
  .filter(item => isFinite(item))// remove not numbers
  .sort((a, b) => a - b);// sort array ascending

  return {min: arrayNum[0], max: arrayNum[arrayNum.length - 1], }; //return [min, max]
}
