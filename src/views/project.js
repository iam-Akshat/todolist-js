import renderTodo from "./todo";
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
    console.log(project.todoList,projectIndex);
}
export default loadProject;