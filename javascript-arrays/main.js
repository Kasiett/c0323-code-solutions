const colors = ['red', 'white', 'blue'];

console.log('Value of colors[0] ==> ', colors[0]);
console.log('Value of colors[1] ==> ', colors[1]);
console.log('Value of colors[2] ==> ', colors[2]);

const str = 'America is ' + colors[0] + ' ' + colors[1] + ' and ' + colors[2] + '.';

console.log(str);

colors[2] = 'green';
const str1 = 'Mexico is ' + colors[0] + ' ' + colors[1] + ' and ' + colors[2] + '.';

console.log(str1);
console.log('Value of array colors ==>', colors);

const students = ['Joe', 'Donald', 'Barak', 'George'];
const numberOfStudents = students.length;
const str2 = ' There are 4 students in the class.' + ' \n The last student in the array is ' + students[3];

console.log(str2);
console.log('Vatue of numberOfStudents ==>', numberOfStudents);

const lastIndex = numberOfStudents - 1;
// console.log(lastIndex);

const lastStudent = students[lastIndex];

console.log('Value of lastStudent ==>', lastStudent);
console.log('Value of students ==> ', students);
