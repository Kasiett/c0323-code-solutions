/* exported getDescriptionOfPerson */

function getDescriptionOfPerson(person) {
  const result = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return result;
}
