// Store tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container', 'alert', 'alert-primary');
    taskContainer.innerHTML = `
      <h5>Title: ${task.title}</h5>
      <h6>Description:</h6>
      <p>${task.description}</p>
      <h6>Code:</h6>
      <pre><code>${task.code}</code></pre>
      <h4>File:</h4>
      <p>${task.fileName}</p>
      <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">
            <i class="fas fa-trash"></i>
        </button>
    `;
    taskList.appendChild(taskContainer);
  });
}

// Function to add a task
function addTask() {
  const titleInput = document.getElementById('titleInput');
  const descriptionInput = document.getElementById('descriptionInput');
  const codeInput = document.getElementById('codeInput');
  const fileInput = document.getElementById('fileInput');
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  const code = codeInput.value.trim();
  const file = fileInput.files[0];
  
  if (title !== '' && description !== '' && code !=='') {
    const task = { title, description, code, fileName: file.name};
    tasks.push(task);
    renderTasks();
    titleInput.value = '';
    descriptionInput.value = '';
    codeInput.value = '';
    fileInput.value = '';
  }
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Event listener for Add Task button
const addTaskBtn = document.getElementById('addTaskBtn');
addTaskBtn.addEventListener('click', addTask);
