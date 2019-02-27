/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  let clonedObject = {};

  for (let key in obj) {
    clonedObject[key] = obj[key];
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      clonedObject[key] = clone(obj[key]);
    }
  }

  return clonedObject;
}
