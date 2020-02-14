/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
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
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.el.classList.add('pure-table');

    this.data = data;

    const templateTableHead = `
    <thead>
    <tr>
    <td>Name</td>
    <td>Age</td>
    <td>Salary</td>
    <td>City</td>
    <td></td>
    </tr>
    </thead>`;

    this.el.insertAdjacentHTML('beforeend', templateTableHead);

    this.tableBody = document.createElement('tbody');

    for (let row of this.data) {
      const templateRow = `
      <tr data-id=${row.id}>
      <td>${row.name}</td>
      <td>${row.age}</td>
      <td>${row.salary}</td>
      <td>${row.city}</td>
      <td><a href="#delete">X</a></td>
      </tr>`;

      this.tableBody.insertAdjacentHTML('beforeend', templateRow);
    }

    this.el.appendChild(this.tableBody);

    this.el.addEventListener('click', (event) => {
      if (event.target.tagName == 'A') {
        this.removeRow();
      }
    });
  }

  removeRow() {
    const row = event.target.closest('tr');

    row.remove();

    this.onRemoved(Number(row.dataset.id));
  }

  /**
   * Метод который выщывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {}
}

window.ClearedTable = ClearedTable;
