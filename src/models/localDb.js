import createProject from './project';
// eslint-disable-next-line import/no-cycle
import createTodo from './todo';

class LocalDb {
  constructor() {
    this.db = window.localStorage;
    this.appData = [];
  }

  initAppState() {
    this.appData = [
      createProject('Home'),
    ];
  }

  static rawDataToState(raw) {
    const state = [];
    raw.forEach((project) => {
      const projectObject = createProject(project.name);
      project.todoList.forEach(todo => {
        const {
          completed,
          description,
          dueDate,
          id,
          priority,
          title,
        } = todo;
        const todoObject = createTodo(title, description, dueDate, priority, id, completed);
        projectObject.addTodo(todoObject);
      });
      state.push(projectObject);
    });
    return state;
  }

  populateData() {
    const appDataRaw = JSON.parse(this.db.getItem('PROJECTS'));
    if (appDataRaw == null) {
      this.initAppState();
      return this.appData;
    }
    const state = LocalDb.rawDataToState(appDataRaw);
    this.appData = state;
    return this.appData;
  }

  saveData() {
    const appData = JSON.stringify(this.appData);
    this.db.setItem('PROJECTS', appData);
    return this.appData;
  }

  getAppData() {
    return this.appData;
  }

  addProject(name) {
    const newProject = createProject(name);
    this.appData.push(newProject);
    this.saveData();
  }

  addTodo(projectIndex, todo) {
    this.appData[projectIndex].addTodo(todo);
    this.saveData();
  }

  deleteTodo(projectIndex, todoId) {
    this.appData[projectIndex].deleteTodo(todoId);
    this.saveData();
  }
}
const globalDB = new LocalDb();
export default globalDB;