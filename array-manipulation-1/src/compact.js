/* exported compact */
function compact(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {

    if (Boolean(array[i]) === true) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
