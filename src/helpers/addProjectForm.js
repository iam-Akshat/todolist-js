const addProjectForm = document.querySelector('form.add-project');
const toggleDisplay = () => {
  addProjectForm.classList.toggle('d-none');
};

const resetCreateProjectForm = () => {
  toggleDisplay();
  const nameEr = document.querySelector('.project-name-error');
  nameEr.innerText = '';
};
const addProjectFormHandler = (e, db) => {
  e.preventDefault();
  const name = document.getElementById('createProject');
  if (name.value.length === 0) {
    const nameEr = document.querySelector('.project-name-error');
    nameEr.innerText = 'name cant be empty';
  } else {
    resetCreateProjectForm();
    db.addProject(name.value);
  }
};

const createProjectBtn = document.querySelector('.btn.create-project');
createProjectBtn.addEventListener('click', toggleDisplay);

export default addProjectFormHandler;