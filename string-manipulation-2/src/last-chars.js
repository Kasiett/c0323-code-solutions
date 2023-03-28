/* exported lastChars */
// function lastChars(length, string) {
//   let newStr = '';
//   if (string.length < length) {
//     return string;
//   } else {
//     for (let i = string.length - 1; i >= length; i--) {
//       newStr = string[i] + newStr;
//       if (newStr.length === length) {
//         break;
//       }

//     }
//   }
//   return newStr;
// }

function lastChars(length, string) {
  let newStr = '';
  if (string.length < length) {
    return string;
  } else {
    for (let i = string.length - 1; i >= string.length - length; i--) {
      newStr = string[i] + newStr;
    }
  }
  return newStr;
}

console.log(lastChars(16, 'LearningFuze'));
