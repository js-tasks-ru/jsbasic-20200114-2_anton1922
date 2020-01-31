/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */

'use strict';

function namify(users) {
  //extract property 'name' from each object, return as item of array and return result
  return users.map(item => {
    return item.name;
  });
}
