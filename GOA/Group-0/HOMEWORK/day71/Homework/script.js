const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText) {
    addTodoItem(todoText);
    todoInput.value = '';
  }
});

function addTodoItem(todoText) {
  const todoItem = document.createElement('li');
  todoItem.innerHTML = `
    <span class="todo-text">${todoText}</span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;
  todoList.appendChild(todoItem);

  const deleteButton = todoItem.querySelector('.delete-btn');
  deleteButton.addEventListener('click', () => todoItem.remove());

  const editButton = todoItem.querySelector('.edit-btn');
  editButton.addEventListener('click', () => {
    const span = todoItem.querySelector('.todo-text');
    const newText = prompt('Enter new text:', span.textContent);
    if (newText !== null) {
      span.textContent = newText;
    }
  });
}

