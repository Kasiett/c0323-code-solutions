/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const result = person.firstName[0] + person.lastName[0];
  return result;
}
