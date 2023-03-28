/* exported getStudentNames */
function getStudentNames(students) {
  const newArr = [];
  for (let i = 0; i < students.length; i++) {
    newArr.push(students[i].name);
  }
  return newArr;
}
