let index = 0;
const currentChar = document.querySelectorAll('span');
document.addEventListener('keydown', keyPressed);
console.log(currentChar[index]);

function keyPressed(event) {
  if (currentChar[index].textContent === event.key) {
    currentChar[index].className = 'current-char';
    index++;
    currentChar[index].className = 'underline';
  } else {
    currentChar[index].className = 'wrong-char';
  }

}
