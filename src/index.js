import createTodo from "./models/todo.js";
import createProject from "./models/project.js";
import "./assets/main.css"
import loadProject from "./views/project"
import addProjectFormHandler from "./helpers/addProjectForm"
import db from "./models/localDb.js"
import renderProjectsNav from "./views/projectsNav"
const projects = db.populateData()
const projectNames = () =>{
  return db.getAppData().map(project=>{
    return project.name
  })
}
loadProject(projects[0],0)

const addProjectButton = document.getElementById('add-project');
const renderProjectsNavHelper = () =>{
  renderProjectsNav(projectNames(),(e)=>{
    const projectIndex = +e.dataset.index
    loadProject(projects[projectIndex],projectIndex)
  })
}
renderProjectsNavHelper()

addProjectButton.addEventListener('click', (e) => {
    addProjectFormHandler(e, db)
    renderProjectsNavHelper()
})

