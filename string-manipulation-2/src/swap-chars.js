/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let str = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      str += string[secondIndex];
    } else if (i === secondIndex) {
      str += string[firstIndex];
    } else {
      str += string[i];
    }
  }
  return str;
}
