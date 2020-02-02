/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */

'use strict';

function highlight(table) {

  //iterate over rows collection
  for (let tr of table.querySelector('tbody').rows) {

    //check for the attribute 'hidden' and add it 
    if (!tr.hasAttribute('hidden')) {
      tr.setAttribute('hidden', '');
    }

    //check the value of the cell 'age'
    if (tr.cells[1].innerHTML < 18) {
      tr.setAttribute('style', 'text-decoration: line-through');
    }

    //check the value of the cell 'gender'
    if (tr.cells[2].innerHTML === 'm') {
      tr.classList.add('male');
    } else {
      tr.classList.add('female');
    }

    //check the value of the attribute 'data-available'
    if (tr.cells[3].dataset.available === 'true') {
      tr.classList.add('available');
    } else if (tr.cells[3].dataset.available === 'false') {
      tr.classList.add('unavailable');
    }
  }
}
