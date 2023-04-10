/* exported includes */
function includes(array, value) {
  let isTrue = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      isTrue = true;
    }
  }
  return isTrue;
}
