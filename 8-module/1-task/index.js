'use strict';

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
function SortableTable(items) {

    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */

    this.el = document.createElement('table');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');

    this.items = items;

    this.init();

}

SortableTable.prototype.init = function() {
    this.generateHtml();
    this.generateElements();
}

/**
 * Метод выполняет сортировку таблицы
 * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
 * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
 */
SortableTable.prototype.sort = function (column, desc = false) {
    switch(column) {
        case 0:
            this.items.sort((a, b) => {
                if (desc) {
                    return b.name > a.name ? 1 : -1;
                } else {
                    return a.name > b.name ? 1 : -1;
                }
            }); 
            break;
        case 2:
            this.items.sort((a, b) => {
                if (desc) {
                    return b.salary - a.salary;
                } else {
                    return a.salary - b.salary;
                }
            }); 
            break;
        default:
            console.log('no input column');
    }

    this.generateElements();
};

SortableTable.prototype.generateHtml = function() {
    this.el.appendChild(this.thead);
    this.el.appendChild(this.tbody);
    const tr = document.createElement('tr');
    this.thead.appendChild(tr);

    for (let key in this.items[0]) {
        const td = document.createElement('td');
        td.innerHTML = key.charAt(0).toUpperCase() + key.slice(1);
        tr.appendChild(td);
    }
}

SortableTable.prototype.generateElements = function() {
    if (this.tbody.children.length) this.tbody.innerHTML = '';

    this.items.forEach(item => {
        const tr = document.createElement('tr');
        this.tbody.appendChild(tr);
        
        for (let key in item) {
            const td = document.createElement('td');
            td.innerHTML = item[key];
            tr.appendChild(td);
        }
    });
};

