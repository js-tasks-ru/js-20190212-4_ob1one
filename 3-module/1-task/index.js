/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let users = '';
  const userData = data.filter(user => user.age <= age);
  
  userData.forEach((user, i) => {
    users += `${user.name}, ${user.balance}${i === userData.length - 1 ? '' : '\n'}`
  });
  
  return users;
};