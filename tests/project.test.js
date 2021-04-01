import createProject from '../src/models/project';
import createTodo from '../src/models/todo';

describe('Project', () => {
  describe('createProject', () => {
    test('Should create a project', () => {
      const myProject = createProject('Study');
      expect(myProject).toEqual({ name: 'Study', todoList: [] });
    });
  });
  describe('addTodo', () => {
    test('Should add todo to a project', () => {
      const myProject = createProject('Rails');
      const myTodo = createTodo('Rspec', 'Testing with Rspec', '24-01-2021', 'High', 1);
      myProject.addTodo(myTodo);
      expect(myProject).toEqual({ name: 'Rails', todoList: [myTodo] });
    });
  });
  describe('deleteTodo', () => {
    test('Should delete todo from a project', () => {
      const myProject = createProject('Rails');
      const myTodo = createTodo('Rspec', 'Testing with Rspec', '24-01-2021', 'High', 1);
      const anotherTodo = createTodo('Rspec', 'Testing with Rspec', '24-01-2021', 'High', 2);
      myProject.addTodo(myTodo);
      myProject.addTodo(anotherTodo);
      myProject.deleteTodo(2);
      expect(myProject).toEqual({ name: 'Rails', todoList: [myTodo] });
    });
  });
});
