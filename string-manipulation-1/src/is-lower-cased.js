/* exported isLowerCased */
function isLowerCased(word) {
  if (word.toLowerCase() === word) {
    return true;
  } else {
    return false;
  }
  // eslint-disable-next-line no-unreachable
  return word;
}
