const $container = document.querySelector('.container');
const $bulb = document.querySelector('.bulb');

$bulb.addEventListener('click', lightSwitch);

function lightSwitch(event) {
  console.log('event = >', event);
  if ($bulb.className === 'bulb' && $container.className === 'container') {
    $bulb.className = 'bulb-off';
    $container.className = 'container-off';
  } else {
    $bulb.className = 'bulb';
    $container.className = 'container';
  }
}
