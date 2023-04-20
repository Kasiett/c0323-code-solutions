let index = 0;
const arrowLeft = document.querySelector('.fa-chevron-left');
const arrowRight = document.querySelector('.fa-chevron-right');
const allImg = document.querySelectorAll('img');
const allIcons = document.querySelectorAll('.fa-circle');

function handleArrowRight() {
  clearInterval(interval);

  if (index < allImg.length - 1) {
    index++;
  } else {
    index = 0;
  }
  renderImg();
  setInterval(handleInterval, 3000);
}

arrowRight.addEventListener('click', handleArrowRight);

arrowLeft.addEventListener('click', function () {
  clearInterval(interval);

  if (index > 0) {
    index--;
  } else {
    index = allImg.length - 1;
  }
  renderImg();
  setInterval(handleInterval, 3000);
});

function renderImg() {
  for (let i = 0; i < allImg.length; i++) {
    if (index === i) {
      allImg[i].setAttribute('class', 'show');
      allIcons[i].setAttribute('class', 'fa-solid fa-circle fa-sm ');

    } else {
      allImg[i].setAttribute('class', 'hidden');
      allIcons[i].setAttribute('class', 'fa-regular fa-circle fa-sm');

    }
  }
}

for (let i = 0; i < allIcons.length; i++) {
  allIcons[i].addEventListener('click', function (e) {
    clearInterval(interval);
    index = i;
    renderImg();
    setInterval(handleInterval, 3000);
  });
}

function handleInterval() {
  if (index < allImg.length - 1) {
    index++;
  } else {
    index = 0;
  }
  renderImg();
}
const interval = setInterval(handleInterval, 3000);
