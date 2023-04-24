/* exported numVowels */
function numVowels(string) {
  let num = 0;
  const str = string.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      num++;
    }
  }
  return num;
}
