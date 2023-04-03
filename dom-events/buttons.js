function handleClick(event) {
  console.log('button clicked');
  console.log('event==> ', event);
  console.log('event.target ==>', event.target);
}

const clickBtn = document.querySelector('.click-button');
clickBtn.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event==> ', event);
  console.log('event.target ==>', event.target);
}

const hover = document.querySelector('.hover-button');
hover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event==> ', event);
  console.log('event.target ==>', event.target);
}

const doubleClick = document.querySelector('.double-click-button');
doubleClick.addEventListener('dblclick', handleDoubleClick);
