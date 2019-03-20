/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find (obj, value) {
  
  let storage = [];

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      const parent = find(obj[key], value);
      if (parent !== null) {
       storage.push(`${key}.${parent}`)
      }
    }
    if (obj[key] === value) {
      return key;
    }
  }
  
  if (storage.length) {
   return storage.length === 1 ? storage[0] : storage;
  } else {
    return null;
  }
}