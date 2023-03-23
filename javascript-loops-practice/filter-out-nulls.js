/* exported filterOutNulls */
function filterOutNulls(values) {
  const newArr = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      newArr.push(values[i]);
    }
  }
  return newArr;
}
