const mainForm = document.querySelector("#main_form");
const todoQuestion = document.querySelector("#main_form h1");
const mainTodoInput = document.querySelector("#main_todo");

const todoList = document.querySelector("#todo_list");
const todos = [];
let doneTodos = [];
//export가 안됨,,,
function doneTodo(event) {
  const target = event.target.parentElement;
  if (!target.classList.contains("o")) {
    target.classList.toggle("o");
    target.querySelector("span").style.textDecoration = "#f2ebe9 line-through";
    doneTodos.push("o");
  } else if (target.classList.contains("o")) {
    target.classList.toggle("o");
    target.querySelector("span").style.textDecoration = "none";
    doneTodos.pop();
  }
}
function removeTodo(event) {
  const target = event.target.parentElement;
  target.remove();
  const toRemove = todos.find((element) => element.id == target.id);
  todos.splice(todos.indexOf(toRemove), 1);
  updateList();
  if (todos.length === 0)
    todoQuestion.innerText = "What is your focus for today?";
}

function updateList() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function createTodo(newTodo) {
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "✔️";
  doneBtn.addEventListener("click", doneTodo);

  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");

  const removeBtn = document.createElement("button");
  removeBtn.innerText = "❌";
  removeBtn.addEventListener("click", removeTodo);

  li.appendChild(doneBtn);
  li.appendChild(span);
  li.appendChild(removeBtn);
  span.innerText = newTodo.text;
  todoList.appendChild(li);
  todos.push(newTodo);
}

function mainSubmit(e) {
  e.preventDefault();
  const todo = mainTodoInput.value;
  const newTodoObj = {
    id: Date.now(),
    text: todo,
  };

  createTodo(newTodoObj);
  updateList();
  todoQuestion.innerText = "TODAY";
  mainTodoInput.value = "";
}

const savedTodos = localStorage.getItem("todos");

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach(createTodo);
  todoQuestion.innerText = "TODAY";
}

mainForm.addEventListener("submit", mainSubmit);

//localstarage object 접근법
// JSON.parse(localStorage.getItem('todos'))
