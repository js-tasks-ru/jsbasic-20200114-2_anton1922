/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
'use strict';

function SortableTable(items) {
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');
  //add class 'table' for <table>
  this.el.classList.add('table');

  //get rows
  this.rows = items;

  //create template <thead>
  let templateTableHead = `
  <thead class="table__head">
  <tr class="table__row">
  <td class="table__cell">Name</td>
  <td class="table__cell">Age</td>
  <td class="table__cell">Salary</td>
  <td class="table__cell">City</td>
  </tr>
  </thead>`;
  //add thead to table
  this.el.insertAdjacentHTML('beforeend', templateTableHead);

  //add method for create <tbody>
  this.createTbody = function() {
    //create <tbody>
    this.tBody = document.createElement('tbody');
    //add class 'table__body' to <tbody>
    this.tBody.classList.add('table__body');

    //add to <tbody> tr from this.rows
    for (let row of this.rows) {
      //crate template <tr>
      let templateRow = `
      <tr class="table__row">
      <td class="table__cell">${row.name}</td>
      <td class="table__cell">${row.age}</td>
      <td class="table__cell">${row.salary}</td>
      <td class="table__cell">${row.city}</td>
      </tr>`;

      this.tBody.insertAdjacentHTML('beforeend', templateRow);
    }

    return this.tBody;
  };
  
  //add <tbody> to <table>
  this.el.appendChild(this.createTbody());
  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    //remove <tbody> from <table>
    this.el.removeChild(this.tBody);

    //check sort conditions and sort this.rows
    if (column === 0) {
      this.rows.sort((a, b) => {

        if (a.name < b.name && desc) {
          return 1;
        } 
        if (a.name > b.name && desc) {
          return -1;
        }
        if (a.name == b.name && desc) {
          return 0;
        }
        
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        if (a.name == b.name) {
          return 0;
        }
      });
    }

    if (column === 2) {
      this.rows.sort((a, b) => {
        return desc ? b.salary - a.salary : a.salary - b.salary;
      });
    }
    //create <tbody> with sorted this.rows and add to <table>
    this.el.appendChild(this.createTbody());

    //return new sorted <table>
    return this.el;
  };
}
