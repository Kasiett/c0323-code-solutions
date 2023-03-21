function convertMinutesToSeconds(minutes) {
  const result = minutes * 60;
  return result;
}

console.log('Output of function convertMinutesToSeconds ==>', convertMinutesToSeconds(5));

function greet(name) {
  const result = 'Hello ' + name + ' !';
  return result;
}

console.log('Output of function greet ==> ', greet('Beavis'));

function getArea(width, height) {
  const result = height * width;
  return result;
}

console.log('Output of function getArea ==> ', getArea(17, 42));

function getFirstName(person) {
  const result = person.firstName;
  return result;
}
console.log('Output of function getFirstName ==>', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  const lastElement = array[array.length - 1];
  const result = lastElement;
  return result;
}
console.log('Output of function getLastElement ==> ', getLastElement(['propane', 'and', 'propane', 'accessories']));
