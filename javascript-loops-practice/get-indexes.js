/* exported getIndexes */
function getIndexes(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(i);
  }
  return newArr;
}

getIndexes(['meow', 'woof', 'squeak', 'shazoo']);
