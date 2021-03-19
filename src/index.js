import createTodo from "./models/todo.js";
import createProject from "./models/project.js";
import addProjectFormHandler from "./helpers/addProjectForm"
import LocalDb from "./models/localDb.js"
const db = new LocalDb()
const projects = db.populateData()
const homeTodoList = projects[0].todoList
const todo = document.querySelector('.todo');

const addProjectButton = document.getElementById('add-project');

addProjectButton.addEventListener('click', (e) => {
    addProjectFormHandler(e, db)
    displayProject();
})

const displayProject = () => {
  todo.innerHTML = ''
  projects.forEach(pg => {
    const proj = `<div>${pg.name}</div>`
    todo.innerHTML += proj
  })
  }

  displayProject();
