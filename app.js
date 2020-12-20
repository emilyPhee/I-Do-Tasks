
const ulElement = document.querySelector('.unorder-list');
const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('.task-input');

// Load all event listners
loadEventListeners();

function loadEventListeners() {
  taskForm.addEventListener('submit', addTaskToList);
  document.body.addEventListener('click', handleDeleteTask);
}

function addTaskToList(e) {
  if (taskInput.value === '') {
    alert('Please add a task :)');
  } else {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = listElementGenerator(taskInput.value);
    ulElement.appendChild(li);
    taskInput.value = '';
  }
  e.preventDefault();
}

function listElementGenerator(task) {
  const liElementChild =`
    <input type="checkbox" class="list-check-box">
    <span>${task}</span><button class="btn"><i class="fas fa-trash trash-icon"></i></button>
  `;
  return liElementChild;
}


function handleDeleteTask(e) {
  if (e.target.parentElement.parentElement.className === 'task-item') {
    e.target.parentElement.parentElement.remove();
  }
}