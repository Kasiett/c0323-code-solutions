
let counter = 0;
const hotBtn = document.querySelector('.hot-button');
const clickCount = document.querySelector('.click-count');

function increment(event) {
  counter++;
  clickCount.textContent = 'Clicks: ' + counter;
  if (counter < 4) {
    hotBtn.className = 'hot-button cold';
  } else if (counter < 7) {
    hotBtn.className = 'hot-button cool';
  } else if (counter < 10) {
    hotBtn.className = 'hot-button tepid';
  } else if (counter < 13) {
    hotBtn.className = 'hot-button warm';
  } else if (counter < 16) {
    hotBtn.className = 'hot-button hot';
  } else {
    hotBtn.className = 'hot-button nuclear';
  }
}
hotBtn.addEventListener('click', increment);
