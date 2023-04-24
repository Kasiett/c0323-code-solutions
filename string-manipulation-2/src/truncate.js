/* exported truncate */
function truncate(length, string) {
  let newStr = '';
  newStr = string.slice(0, length) + '...';
  return newStr;
}
