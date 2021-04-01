import db from '../models/localDb';
import loadProject from '../views/project';

const editTodoFormHandler = (todoObject, todoElement, editTodoForm, projectIndex) => {
  const title = document.getElementById('editTodoTitle');
  const priority = document.getElementById('editTodoPriority');
  const desc = document.getElementById('editTodoDescription');
  const dueDate = document.getElementById('editTodoDueDate');
  todoObject.title = title.value;
  todoObject.priority = priority.value;
  todoObject.description = desc.value;
  todoObject.dueDate = dueDate.value;
  db.saveData();
  loadProject(db.getAppData()[projectIndex], projectIndex);
};

export default editTodoFormHandler;