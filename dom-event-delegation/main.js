const taskList = document.querySelector('.task-list');
taskList.addEventListener('click', function (e) {
  console.log('event.target => ', e.target);
  console.log('event.target.tagName => ', e.target.tagName);
  if (e.target.matches('BUTTON')) {
    const taskListItem = e.target.closest('.task-list-item');
    console.log(taskListItem);
    taskListItem.remove();
  }
});
