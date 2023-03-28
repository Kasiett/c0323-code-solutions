/* exported filterOutStrings */
function filterOutStrings(values) {
  const newArr = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      newArr.push(values[i]);
    }
  }
  return newArr;
}

console.log(filterOutStrings([1, 'a', 'b', 2, 3, 'c']));
