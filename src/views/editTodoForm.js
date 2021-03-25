import { format } from 'date-fns';
import editTodoFormHandler from '../helpers/editTodoForm';

const editTodoForm = (todo, todoElement, projectIndex) => {
  const editTodoForm = document.createElement('form');
  // editTodoForm.classList.add('d-none');
  const currentDateTime = format((new Date(todo.dueDate)), 'yyyy-MM-dd\'T\'HH:mm', { awareOfUnicodeTokens: true });
  editTodoForm.innerHTML = `
    <div class="form-group">
      <label for="editTodoTitle">Title</label>
      <input type="text" class="form-control" id="editTodoTitle" placeholder="Do this" value=${todo.title}>
    </div>
    <div class="form-group">
      <label for="editTodoPriority">Priority</label>
      <select class="form-control" id="editTodoPriority">
        <option ${todo.priority === 'Normal' ? 'selected' : null}>Normal</option>
        <option ${todo.priority === 'High' ? 'selected' : null}>High</option>
        <option ${todo.priority === 'Low' ? 'selected' : null}>Low</option>
      </select>
    </div>
    <div class="form-group">
      <label for="editTodoDescription">Description</label>
      <textarea class="form-control" id="editTodoDescription" rows="3"> ${todo.description}</textarea>
    </div>
    <div class="form-group">
    <label for="editTodoDueDate">Due Date</label>
    <input type="datetime-local" name="editTodoDueDate" id="editTodoDueDate" value="${currentDateTime}">
    </div>
    <button type="submit" class="btn btn-success edit-todo">Save edit</button>
    `;
  todoElement.replaceWith(editTodoForm);
  const saveEdit = document.querySelector('button.edit-todo');
  saveEdit.addEventListener('click', (e) => {
    e.preventDefault();
    editTodoFormHandler(todo, todoElement, editTodoForm, projectIndex);
  });
  return editTodoForm;
};

export default editTodoForm;