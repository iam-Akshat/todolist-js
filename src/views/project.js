import renderTodo from "./todo";
import rendernewTodoForm from "./newTodoForm"
const loadProject = (project,projectIndex) =>{
    const projectContainer = document.querySelector('main .project-container')
    projectContainer.innerHTML = ''
    const projectHeading = document.createElement('h1')
   
    projectHeading.innerText = project.name
    projectContainer.appendChild(projectHeading)

    const listContainer = document.createElement('div')
    listContainer.classList.add('list-container')
    
    projectContainer.appendChild(listContainer)
    project.todoList.forEach(todo => {
        renderTodo(todo)
    });
    rendernewTodoForm(projectIndex)
}
export default loadProject;