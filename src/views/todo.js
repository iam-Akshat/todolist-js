import { formatDistanceToNow } from 'date-fns';
import editTodoForm from './editTodoForm';
import moreImage from '../assets/down_icon.svg';
import delImage from '../assets/delete_icon.svg';
import editImage from '../assets/edit_icon.svg';
import db from '../models/localDb';

const renderTodo = (todo, projectIndex) => {
  const listContainer = document.querySelector('.list-container');

  const todoElement = document.createElement('div'); // main todo element
  todoElement.classList.add('todo-item', 'py-1', 'px-2', 'my-1', 'rounded');

  const todoPreviewWrapper = document.createElement('div'); // wrapper element for title
  todoPreviewWrapper.classList.add('d-flex', 'justify-content-between', 'align-items-center');

  const todoPreview = document.createElement('div'); // element for title and checkbox and more button
  todoPreview.innerText = todo.title;
  todoPreview.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'w-100');

  const completedButton = document.createElement('input'); // checkbox indicating completed or not
  completedButton.classList.add('mr-3', 'p-1');
  completedButton.addEventListener('click', () => {
    todo.toggleCompleted();
  });
  completedButton.type = 'checkbox';
  completedButton.setAttribute('name', 'done');
  completedButton.checked = todo.completed;
  todoPreview.appendChild(completedButton);

  todoPreviewWrapper.appendChild(todoPreview);

  const moreButton = document.createElement('button'); // button to show details
  moreButton.classList.add('more-btn');
  moreButton.style.background = `url('${moreImage}')`;
  todoPreviewWrapper.appendChild(moreButton);

  todoElement.appendChild(todoPreviewWrapper);

  const todoDetail = document.createElement('div'); // detail element with details, due date, and priority
  todoDetail.classList.add('d-none');

  const todoDesc = document.createElement('div'); // todo description
  todoDesc.classList.add('bg-info');
  todoDesc.innerText = todo.description;

  const todoPriority = document.createElement('div'); // todo priority
  todoPriority.classList.add('bg-secondary');
  todoPriority.innerText = todo.priority;

  const todoDue = document.createElement('div'); // todo due date
  todoDue.classList.add('bg-warning');
  todoDue.innerText = `Due ${formatDistanceToNow(new Date(todo.dueDate), { addSuffix: true })}`;

  todoDetail.appendChild(todoDesc);
  todoDetail.appendChild(todoPriority);
  todoDetail.appendChild(todoDue);
  moreButton.addEventListener('click', () => {
    todoDetail.classList.toggle('d-none');
  });
  todoElement.appendChild(todoDetail);

  const ctaContainer = document.createElement('div'); // create delete and edito icon container
  ctaContainer.classList.add('todo-cta');

  const delButton = document.createElement('button'); // delete icon logic and styles
  delButton.style.background = `url("${delImage}") no-repeat center`;
  delButton.classList.add('bg-danger');
  delButton.addEventListener('click', () => {
    db.deleteTodo(projectIndex, todo.id);
    todoElement.remove();
  });
  ctaContainer.appendChild(delButton);

  const editButton = document.createElement('button'); // edit icon logic and styles
  editButton.style.background = `url("${editImage}") no-repeat center`;
  editButton.addEventListener('click', () => {
    editTodoForm(todo, todoElement, projectIndex);
  });
  ctaContainer.appendChild(editButton);

  todoDetail.appendChild(ctaContainer);
  listContainer.appendChild(todoElement);
};
export default renderTodo;