/* exported getValues */

function getValues(object) {
  const newArr = [];
  for (const property in object) {
    newArr.push(object[property]);
  }
  return newArr;
}
