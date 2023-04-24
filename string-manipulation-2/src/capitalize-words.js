/* exported capitalizeWords */
function capitalizeWords(string) {
  const str = string.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substring(1);
  }
  return str.join(' ');

}
