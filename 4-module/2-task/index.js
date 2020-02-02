/**
 * @param {HTMLTableElement} table
 * @return {void}
 */

'use strict';

function makeDiagonalRed(table) {
  //set and reset a counter
  let i = 0;

  //iterate a collection rows of 'tbody'
  for (let tr of table.querySelector('tbody').rows) {
    
    //in each 'tr-row' get a collection 'td-cells' and 
    //change a background color of a 'td-cell' with index 'i' to red
    tr.cells[i].style.backgroundColor = 'red';

    i++;
  }

  return table;
}
