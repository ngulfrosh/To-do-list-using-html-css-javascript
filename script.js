// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Add event listener to the add button
addButton.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
  const taskText = taskInput.value;

  if (taskText) {
    // Create new list item
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${taskText}</span>&nbsp;<button class="deleteButton">Delete</button>`;

    // Add event listener to the delete button
    const deleteButton = listItem.querySelector('.deleteButton');
    deleteButton.addEventListener('click', deleteTask);

    // Append the new list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
  }
}

// Function to delete a task
function deleteTask(event) {
  const listItem = event.target.parentElement;
  taskList.removeChild(listItem);
}

// Function to mark a task as completed
taskList.addEventListener('click', function(event) {
  const listItem = event.target.parentElement;
  listItem.classList.toggle('completed');
});
