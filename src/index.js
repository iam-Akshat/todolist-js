import createTodo from "./models/todo.js";
import createProject from "./models/project.js";
import LocalDb from "./models/localDb.js"
const db = new LocalDb()
const projects = db.populateData()
const homeTodoList = projects[0].todoList

const addProjectForm = document.querySelector('form.add-project');
const addProjectButton = document.getElementById('add-project');
const createProjectBtn = document.querySelector('.btn.create-project');
const toggleDisplay = () => {
    addProjectForm.classList.toggle('d-none');
}
const resetCreateProjectForm = () => {
    toggleDisplay()
    const nameEr = document.querySelector('.project-name-error')
    nameEr.innerText = ""
}
createProjectBtn.addEventListener('click', toggleDisplay);
addProjectButton.addEventListener('click', (e) => {
    e.preventDefault()
    const name = document.getElementById('createProject')
    if (name.value.length === 0) {
        const nameEr = document.querySelector('.project-name-error')
        nameEr.innerText = "name cant be empty"
    } else {
        resetCreateProjectForm()
        db.addProject(name.value)
    }


})




