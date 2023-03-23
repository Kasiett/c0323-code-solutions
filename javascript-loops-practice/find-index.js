/* exported findIndex */
function findIndex(array, value) {
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    } else {
      num = -1;
    }
  }
  return num;
}

console.log(findIndex([1, 3, 2, 2, 6, 10, 6], 6));
