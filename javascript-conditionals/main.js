/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  if (number >= 5) {
    return false;
  } else if (number < 5) {
    return true;
  }
}
console.log('isUnderFive Output ==>', isUnderFive(4));

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log('isEven Output ==> ', isEven(10));

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

console.log('startsWithJ output ==> ', startsWithJ('javaScript'));

// delete///////////////////////////////////

const bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 3
};
const homer = {
  name: 'Homer Jay Simpson',
  age: 39
};
// delete///////////////////////////////////////

function isOldEnoughToDrink(person) {

  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

console.log('isOldEnoughToDrink output ==> ', isOldEnoughToDrink(bart));

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
console.log('isOldEnoughToDrive output ==>', isOldEnoughToDrive(homer));

function isOldEnoughToDrinkAndDrive(person) {
  if (person) {
    return false;
  }
}
console.log('isOldEnoughToDrinkAndDrive  output ==> ', isOldEnoughToDrinkAndDrive(homer));

function categorizeAcidity(pH) {
  if (pH < 0 || pH > 14) {
    return 'invalid pH level';
  } else if (pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 7) {
    return 'base';
  }
}
console.log('categorizeAcidity output ==> ', categorizeAcidity(14));

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      console.log("We're the warner brothers!");
      break;
    case 'dot':
      console.log("I'm cute~");
      break;
    default:
      console.log('Goodnight everybody!');
  }
}

introduceWarnerBro('cindy');

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      console.log('Die Hard');
      break;
    case 'comedy':
      console.log('The Big Lebowski');
      break;
    case 'horror':
      console.log('Astral');
      break;
    case 'drama' :
      console.log('The Godfather');
      break;
    case 'musical':
      console.log('La la land');
      break;
    case 'sci-fi':
      console.log('Inception');
      break;
    default:
      console.log('Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi');
  }
}

recommendMovie('action');
