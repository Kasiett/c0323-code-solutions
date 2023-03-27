/* exported ransomCase */
function ransomCase(string) {
  let str = '';
  for (let i = 0; i < string.length; i++) {
    if ((i + 1) % 2 === 0) {
      str += string[i].toUpperCase();
    } else {
      str += string[i].toLowerCase();
    }
  }
  return str;
}
