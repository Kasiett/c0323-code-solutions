/* exported lastChars */

function lastChars(length, string) {
  let newStr = '';
  if (string.length < length) {
    return string;
  } else {
    for (let i = string.length - 1; i >= string.length - length; i--) {
      newStr = string[i] + newStr;
    }
  }
  return newStr;
}
