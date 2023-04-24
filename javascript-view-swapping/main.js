const tabContainer = document.querySelector('.tab-container');
const allTab = document.querySelectorAll('.tab');
const allView = document.querySelectorAll('.view');

tabContainer.addEventListener('click', function (e) {
  if (e.target.matches('.tab')) {

    for (let i = 0; i < allTab.length; i++) {
      if (allTab[i] === e.target) {
        allTab[i].className = 'tab active';
      } else {
        allTab[i].className = 'tab';
      }
    }

    const dataView = e.target.getAttribute('data-view');
    for (let i = 0; i < allView.length; i++) {
      if (allView[i].getAttribute('data-view') === dataView) {
        allView[i].className = 'view';
      } else {
        allView[i].className = 'view hidden';
      }
    }
  }
});
