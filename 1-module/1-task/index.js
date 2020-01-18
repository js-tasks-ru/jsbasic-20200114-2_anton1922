/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
'use strict';

let x = +(prompt('Введите число', ''));
let p = Math.round(+(prompt('Введите степень - целое число больше 1', '')));
let result = pow(x, p);

function pow(m, n) {
  if (n < 1) {
    alert('Степень должна быть больше, либо равна 1');
    return 'Ошибка!';
  }

  return m ** n;
}

let message = `${x} в степени ${p} =  ${result}`;

if (result === 'Ошибка!') {
  message = result;
}

alert(message);