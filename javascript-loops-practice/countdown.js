/* exported countdown */
function countdown(number) {
  const array = [];
  for (let i = number; i >= 0; i--) {
    array.push(i);
  }
  return array;
}
console.log(countdown(10));
