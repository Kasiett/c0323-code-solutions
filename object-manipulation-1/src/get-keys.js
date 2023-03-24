/* exported getKeys */

function getKeys(object) {
  const newArr = [];
  for (const property in object) {
    newArr.push(property);
  }
  return newArr;
}
