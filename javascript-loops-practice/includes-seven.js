/* exported includesSeven */
function includesSeven(array) {
  let isTrue = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      isTrue = true;
    }
  }
  return isTrue;
}

console.log(includesSeven([77, 200, 700, '7']));
