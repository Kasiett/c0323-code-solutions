/* exported capitalize */
function capitalize(word) {
  const lowerCase = word.toLowerCase();
  const capitalized =
    lowerCase.charAt(0).toUpperCase() +
    lowerCase.slice(1);
  return capitalized;
}
