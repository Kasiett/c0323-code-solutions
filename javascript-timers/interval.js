const h1 = document.querySelector('.countdown-display');
let count = 4;
const countDown = setInterval(timer, 1000);

function timer() {
  count = count - 1;
  if (count <= 0) {
    clearInterval(countDown);
    h1.textContent = '~Earth Beeeelooowww Us~';
    return count;
  }
  h1.textContent = count;

}
