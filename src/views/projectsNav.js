// eslint-disable-next-line no-console
const renderProjectsNav = (projectList, onClickHandler = () => { }) => {
  const projectsNav = document.querySelector('aside.projects-nav');
  projectsNav.innerHTML = '';
  projectList.forEach((projectName, idx) => {
    const projectButton = document.createElement('button');
    projectButton.classList.add('btn', 'btn-primary', 'ml-3', 'mt-3');
    projectButton.setAttribute('data-index', idx);
    projectButton.innerText = projectName;
    projectsNav.appendChild(projectButton);
    projectButton.addEventListener('click', (e) => {
      onClickHandler(e.target);
    });
  });
};

export default renderProjectsNav;
