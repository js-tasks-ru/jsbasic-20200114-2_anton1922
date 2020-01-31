/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */

'use strict';

function filterRange(arr, a, b) {
  //filter array and return filtered result
  return arr.filter(item => {
    return item >= a && item <= b;
  });
}
