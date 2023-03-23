/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const newArr = [];
  for (let i = 0; i < words.length; i++) {
    newArr.push(words[i] + suffix);
  }
  return newArr;
}
console.log(addSuffixToAll(['equal', 'abnormal', 'civil'], 'ity'));
