const student = {
  firstName: 'Kasiet',
  lastName: 'Rakhimdinova',
  age: '21'
};
const fullName = student.firstName + ' ' + student.lastName;

console.log('Value of fullName ==> ', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Orthodontist';

console.log('Value of livesInIrvine ==>', student.livesInIrvine);
console.log('Value of previousOccupation ==>', student.previousOccupation);
console.log('Value of student object ==>', student);

const vehicle = {
  make: 'Toyota',
  model: 'Camry',
  year: 2021
};

vehicle['color'] = 'Space teal';
vehicle['isReliable'] = true;

console.log('Value of color property ==>', vehicle['color']);
console.log('Value of isReliable property ==>', vehicle['isReliable']);
console.log('Value of vehicle object ==>', vehicle);

const pet = {
  name: 'Bruno',
  type: 'Cat'
};

delete pet.name;
delete pet.type;

console.log('Value of pet object ==>', pet);
