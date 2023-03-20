const width = 3;
const height = 6;
const area = width * height;

console.log('variable area ==> ', area);
console.log('typeof ==>', typeof area);

const bill = 10;
const payment = 15;
const change = payment - bill;

console.log('Variable Change ==>', change);
console.log('typeof change ==>', typeof change);

const quizzes = 3;
const midterm = 2;
const final = 5;
const grade = (quizzes + midterm + final) / 3;

console.log('Variable grade ==> ', grade);
console.log('typeof grade ==> ', typeof grade);

const firstName = 'Kasiet';
const lastname = 'Rakhimdinova';
let fullName = firstName + ' ' + lastname;

console.log('Variable fullName==>', fullName);
console.log('typeof fullName ==>', typeof fullName);

const pH = 9;
const isAcidic = pH < 7;

console.log('variable isAcidic ==>', pH);
console.log('typeof isAcidic ==>', typeof isAcidic);

const headCount = 301;
const isSparta = headCount === 300;

console.log('variable isSparta ===>', isSparta);
console.log('typeof isSparta ==>', typeof isSparta);

let motto = fullName;
fullName = motto;
motto += ' is the GOAT';

console.log('Variable motto', motto);
console.log('typeof motto ==>', typeof motto);
