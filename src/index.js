import createTodo from "./models/todo.js";
import createProject from "./models/project.js";
import addProjectFormHandler from "./helpers/addProjectForm"
import LocalDb from "./models/localDb.js"
const db = new LocalDb()
const projects = db.populateData()
const homeTodoList = projects[0].todoList

const addProjectButton = document.getElementById('add-project');



addProjectButton.addEventListener('click', (e) => {
    addProjectFormHandler(e, db)
})




