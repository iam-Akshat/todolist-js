import { format, addHours } from 'date-fns';
import addTodoFormHandler from '../helpers/addTodoForm';

const rendernewTodoForm = (projectIndex) => {
  const projectContainer = document.querySelector('main .project-container');
  const showTodoFormButton = document.createElement('button');
  showTodoFormButton.classList.add('btn', 'btn-success', 'my-3');
  showTodoFormButton.innerText = 'Create Todo';
  showTodoFormButton.addEventListener('click', () => {
    // eslint-disable-next-line no-use-before-define
    newTodoForm.classList.toggle('d-none');
  });
  projectContainer.appendChild(showTodoFormButton);
  const newTodoForm = document.createElement('form');
  newTodoForm.classList.add('d-none');
  const currentDateTime = format(addHours(new Date(), 2), 'yyyy-MM-dd\'T\'HH:mm', { awareOfUnicodeTokens: true });
  newTodoForm.innerHTML = `
    <div class="form-group">
      <label for="newTodoTitle">Title</label>
      <input type="text" class="form-control" id="newTodoTitle" placeholder="Do this">
    </div>
    <div class="form-group">
      <label for="newTodoPriority">Priority</label>
      <select class="form-control" id="newTodoPriority">
        <option selected>Normal</option>
        <option>High</option>
        <option>Low</option>
      </select>
    </div>
    <div class="form-group">
      <label for="newTodoDescription">Description</label>
      <textarea class="form-control" id="newTodoDescription" rows="3"></textarea>
    </div>
    <div class="form-group">
    <label for="newTodoDueDate">Due Date</label>
    <input type="datetime-local" name="newTodoDueDate" id="newTodoDueDate" value="${currentDateTime}">
    </div>
    <button type="submit" class="btn btn-success add-todo">Submit</button>
    `;
  projectContainer.appendChild(newTodoForm);

  const addTodoButton = document.querySelector('button.add-todo');
  addTodoButton.addEventListener('click', (e) => {
    addTodoFormHandler(e, projectIndex);
  });
};

export default rendernewTodoForm;