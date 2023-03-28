/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  } else {
    const newArr = string.split(' ');
    return newArr;
  }

}
