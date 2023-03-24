/* exported getValue */

const dave = { firstName: 'David', lastName: 'Thomas' };

function getValue(object, key) {
  return object[key];
}
getValue(dave, 'firstName');
