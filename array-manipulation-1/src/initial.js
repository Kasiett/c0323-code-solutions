/* exported initial */
function initial(array) {
  const newArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
