let $container = document.querySelector('.container');
let $bulb = document.querySelector('.bulb');
// console.log($bulb);

$bulb.addEventListener('click', lightSwitch);

function lightSwitch(event) {
  $container = 'container container - off';
  $bulb = 'bulb bulb-off';
}
lightSwitch($container, $bulb);
