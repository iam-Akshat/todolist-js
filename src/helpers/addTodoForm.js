import createTodo from '../models/todo';
import db from '../models/localDb';
import renderTodo from '../views/todo';

const validate = (nodes) => {
  let er = false;
  nodes.forEach(node => {
    if (node.value.trim().length === 0) {
      if (!node.nextElementSibling) {
        const emptyError = document.createElement('p');
        emptyError.classList.add('error', 'text-danger');
        emptyError.innerText = 'Cant be empty';
        node.parentNode.appendChild(emptyError);
      }
      er = true;
    } else if (node.nextElementSibling) {
      node.nextElementSibling.remove();
    }
  });
  return er;
};

const addTodoFormHandler = (e, projectIndex) => {
  e.preventDefault();
  const title = document.getElementById('newTodoTitle');
  const priority = document.getElementById('newTodoPriority');
  const desc = document.getElementById('newTodoDescription');
  const dueDate = document.getElementById('newTodoDueDate');
  if (!validate([title, desc])) {
    e.target.parentNode.classList.toggle('d-none'); // close form
    const newTodo = createTodo(title.value, desc.value, dueDate.value, priority.value);
    db.addTodo(projectIndex, newTodo);
    renderTodo(newTodo);
  }
};


export default addTodoFormHandler;