/* exported capitalizeWord */
function capitalizeWord(word) {
  let newStr = '';
  let firstChar = '';
  newStr = word.toLowerCase();
  if (newStr === 'javascript') {
    return 'JavaScript';
  } else {
    firstChar = newStr.slice(0, 1).toUpperCase();
    newStr = newStr.slice(1, word.length);
    const result = firstChar += newStr;
    return result;
  }

}
