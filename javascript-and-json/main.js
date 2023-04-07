const newArr = [
  {
    isbn: '978-1-940313-09-2',
    title: 'Harry Potter',
    author: 'J. K. Rowling'
  },
  {
    isbn: '879-1-940313-90-2',
    title: 'The New Yorker',
    author: 'Bill Brown'
  },
  {
    isbn: '789-1-940413-80-2',
    title: 'Myths and Legends',
    author: 'Sally Smith'
  }
];

console.log('newArr==>', newArr);
console.log('typeof ==>', typeof newArr);

console.log('JSON.stringify(newArr) ==>', JSON.stringify(newArr));
console.log(' typeof JSON.stringify(newArr) ==>', typeof JSON.stringify(newArr));

const user = '{"name": "John", "id": "30"}';

console.log('JSON str==>', user);
console.log('typeof JSON =>', typeof user);

const jsonParse = JSON.parse(user);
console.log('JSON.parse(json) ==> ', jsonParse);
console.log('typeof jsonParse ==>', jsonParse);
