import moreImage from "../assets/down_icon.svg"
const renderTodo = (todo,projectIndex) =>{
    const listContainer =  document.querySelector('.list-container')
    const todoElement = document.createElement('div')
    todoElement.classList.add('todo-item', 'py-1', 'px-2')

    const todoPreviewWrapper = document.createElement('div') 
    todoPreviewWrapper.classList.add('d-flex','justify-content-between','align-items-center')
    const todoPreview = document.createElement('div')
    todoPreview.innerText = todo.title
    todoPreview.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'w-100')

    const completedButton = document.createElement('input')
    completedButton.classList.add('mr-3')
    completedButton.addEventListener('click',(e)=>{
        todo.toggleCompleted()
    })
    completedButton.type = 'checkbox'
    completedButton.checked = todo.completed    
    todoPreview.appendChild(completedButton)

    todoPreviewWrapper.appendChild(todoPreview)

    const moreButton = document.createElement('button')
    moreButton.classList.add('more-btn')
    moreButton.style.background = `url('${moreImage}')`
    todoPreviewWrapper.appendChild(moreButton)

    todoElement.appendChild(todoPreviewWrapper)

    const todoDetail = document.createElement('div')
    todoDetail.classList.add('d-none')
    const todoDesc = document.createElement('div')
    todoDesc.classList.add('bg-info')
    todoDesc.innerText = todo.description
    const todoPriority = document.createElement('div')
    todoPriority.classList.add('bg-secondary')
    todoPriority.innerText = todo.priority
    const todoDue =  document.createElement('div')
    todoDue.classList.add('bg-warning')
    todoDue.innerText = todo.dueDate //set later

    todoDetail.appendChild(todoDesc)
    todoDetail.appendChild(todoPriority)
    todoDetail.appendChild(todoDue)
    moreButton.addEventListener('click',()=>{
        todoDetail.classList.toggle('d-none')
    })
    todoElement.appendChild(todoDetail)
    listContainer.appendChild(todoElement)
}
export default renderTodo; 