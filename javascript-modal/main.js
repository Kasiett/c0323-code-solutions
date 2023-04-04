const $openModelBtn = document.querySelector('.container');
const $box = document.querySelector('.container-none');
const $surveyBtn = document.querySelector('.surveyBtn');
$openModelBtn.addEventListener('click', takeSurvey);
$surveyBtn.addEventListener('click', takeSurvey);

function takeSurvey(event) {
  if ($box.className === 'container-none') {
    $box.className = 'container-flex';
  } else {
    $box.className = 'container-none';
  }

}
