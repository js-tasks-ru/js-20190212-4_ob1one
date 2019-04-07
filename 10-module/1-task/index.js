(function () {
    'use strict';

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
            this.data = data;
            this.init();
        }

        init() {
            this.el.classList.add('pure-table');
            this.createHeadings();
            this.createRows();
            this.removeRow();
        }

        createHeadings() {
            const headings = Object.keys(this.data[0]);
            const thead = this.createElement('thead');
            const tr = this.createElement('tr');
            this.el.appendChild(thead);
            thead.appendChild(tr);

            headings.forEach(name => {
                const td = this.createElement('td');
                if (name !== 'id') {
                    td.innerHTML = name.slice(0, 1).toUpperCase() + name.slice(1);
                    tr.appendChild(td);
                }
            });

            tr.appendChild(this.createElement('td'))
        }

        createRows() {
            const tbody = this.createElement('tbody');
            this.el.appendChild(tbody);

            this.data.forEach(elem => {
                const tr = this.createElement('tr');
                tbody.appendChild(tr);
                
                tr.innerHTML = `
                    <td>${elem.name}</td>
                    <td>${elem.age}</td>
                    <td>${elem.salary}</td>
                    <td>${elem.city}</td>
                    <td><a data-id="${elem.id}" href="#delete">X</a></td>
                `
                tbody.appendChild(tr);
            });
        }

        removeRow() {
            this.el.addEventListener('click', e => {
                if (e.target.getAttribute('href') === '#delete') {
                    const id = +e.target.getAttribute('data-id');
                    e.target.parentNode.parentNode.remove();
                    this.onRemoved(id);
                }
            })
        }


        /**
         * Метод который выщывается после удалении строки
         * @param {number} id - идентификатор удаляемого пользователя
         */
        onRemoved(id) {
            console.log(`Из таблицы удален пользователь ${id}`);
        }

        createElement(nodeName) {
            return document.createElement(nodeName)
        }
    }

    window.ClearedTable = ClearedTable;
})();
