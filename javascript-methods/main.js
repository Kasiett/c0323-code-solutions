const num1 = 1;
const num2 = 44;
const num3 = 144;

const maximumValue = Math.max(num1, num2, num3);
console.log('Output of maximumValue ==> ', maximumValue);

const heroes = ['Thor', 'Iron Man', 'Dr Strange', 'Capitan America'];
let randomNumber = Math.random();

// console.log('Output of randomNumber ==> ', randomNumber);

randomNumber *= heroes.length;

const randomIndex = Math.floor(randomNumber);

console.log('Output of randomIndex ==> ', randomIndex);

const randomHero = heroes[randomIndex];

console.log('output of randomHero ==> ', randomHero);

const library = [
  {
    title: 'Brain Saver',
    author: 'Anthony Williams'
  },
  {
    title: 'Celery Juice',
    author: 'Anthony Wiliams'
  },
  {
    title: 'Liver Rescue',
    author: 'Anthony Williams'
  }
];

const firstBook = library.shift();
console.log('Output of firstBook ==>', firstBook);
const lastBook = library.pop();
console.log('Output of lastBook ==> ', lastBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Output of library ==> ', library);

const fullName = 'Kasiet Rakhimdinova';
const firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log(sayMyName);
