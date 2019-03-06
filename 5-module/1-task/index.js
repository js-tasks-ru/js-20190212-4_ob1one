'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

  const child = table.querySelectorAll('tbody tr');

  child.forEach(node => {
    const td = node.querySelectorAll('td');

    td.forEach((cell, i) => {

      if (cell.hasAttribute('data-available')) {
        cell.dataset.available === 'true' ? node.classList.add('available') : node.classList.add('unavailable');
      }

      if (i === 3 && !cell.hasAttribute('data-available')) {
        node.hidden = true
      }


      if (cell.innerHTML < 18) {
        node.style.textDecoration = 'line-through'
      }

      if (cell.innerHTML === 'm') {
        node.classList.add('male')
      } else if (cell.innerHTML === 'f') {
        node.classList.add('female')
      }
    })

  })
}