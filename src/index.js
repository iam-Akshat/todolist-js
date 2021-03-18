import createTodo from "./models/todo.js";
import createProject from "./models/project.js";

const defaultProject = createProject("de")
const newTodo = createTodo("test", "testing", "today", "high")

const body = document.querySelector('.todo');
const newDiv = document.createElement('div');
newDiv.innerHTML = `<p>${newTodo.title}</p><p>${newTodo.description}</p><p>${newTodo.dueDate}</p><p>${newTodo.priority}</p>`
body.appendChild(newDiv);
