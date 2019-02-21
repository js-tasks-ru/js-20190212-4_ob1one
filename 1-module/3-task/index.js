'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  const reg = /[\d|.|\-]+/g;
  const arrayOfNumbers = str.match(reg);

  let parsedNumbers = [];
  
  for(let i = 0; i < arrayOfNumbers.length; i++) {
    parsedNumbers.push(parseFloat(arrayOfNumbers[i]));
  }

  return {
    min: Math.min(...parsedNumbers),
    max: Math.max(...parsedNumbers)
  };
}

