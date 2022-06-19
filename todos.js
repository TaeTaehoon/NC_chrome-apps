const mainForm = document.querySelector("#main_form");
const todoQuestion = document.querySelector("#main_form h1");
const mainTodoInput = document.querySelector("#main_todo");

const todoList = document.querySelector("#todo_list");
const todos = [];

function doneTodo() {}
function removeTodo(event) {
  const todoText = event.target.parentElement.querySelector("span").innerText;

  event.target.parentElement.remove();
  const targetIndex = todos.indexOf(todoText);
  todos.splice(targetIndex, 1);
  updateList();
}

function updateList() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function createTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "✔️";
  doneBtn.addEventListener("click", doneTodo);
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "❌";
  removeBtn.addEventListener("click", removeTodo);
  li.appendChild(doneBtn);
  li.appendChild(span);
  li.appendChild(removeBtn);
  span.innerText = newTodo;
  todoList.appendChild(li);
  todos.push(span.innerText);
}

function mainSubmit(e) {
  e.preventDefault();
  const todo = mainTodoInput.value;
  createTodo(todo);
  updateList();
  todoQuestion.innerText = "TODAY";
  mainTodoInput.value = "";
}

const savedTodos = localStorage.getItem("todos");

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach(createTodo);
}

mainForm.addEventListener("submit", mainSubmit);
//localstarage object 접근법
// JSON.parse(localStorage.getItem('todos'))
