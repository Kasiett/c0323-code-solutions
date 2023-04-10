
const inputName = document.getElementById('user-name');
const inputEmail = document.getElementById('user-email');
const textArea = document.getElementById('user-message');

inputName.addEventListener('input', handleInput);
inputName.addEventListener('focus', handleFocus);
inputName.addEventListener('blur', handleBlur);
inputEmail.addEventListener('input', handleInput);
inputEmail.addEventListener('focus', handleFocus);
inputEmail.addEventListener('blur', handleBlur);
textArea.addEventListener('input', handleInput);
textArea.addEventListener('focus', handleFocus);
textArea.addEventListener('blur', handleBlur);

function handleFocus(event) {
  console.log('focus event was fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log(event.target.name);

}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}
