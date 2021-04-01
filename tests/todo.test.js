import createTodo from '../src/models/todo';

describe('Todo', () => {
  describe('createTodo', () => {
    test('creates a new Todo object', () => {
      const dueDate = Date.now().toLocaleString();
      const todo = createTodo('title', 'description', dueDate, 'High', 1);

      expect(todo).toEqual({
        title: 'title',
        description: 'description',
        dueDate,
        priority: 'High',
        id: 1,
        completed: false,
      });
    });
  });

  describe('toggleCompleted', () => {
    test('toggles completed property of todo from default false to true', () => {
      const dueDate = Date.now().toLocaleString();
      const todo = createTodo('title', 'description', dueDate, 'High', 1);
      todo.toggleCompleted();
      expect(todo.completed).toBe(true);
    });
    test('toggles completed property of todo from true to false', () => {
      const dueDate = Date.now().toLocaleString();
      const todo = createTodo('title', 'description', dueDate, 'High', 1, true);
      todo.toggleCompleted();
      expect(todo.completed).toBe(false);
    });
  });

  describe('changePriority', () => {
    test('changes priority of todo', () => {
      const dueDate = Date.now().toLocaleString();
      const todo = createTodo('title', 'description', dueDate, 'High', 1);
      todo.changePriority('Low');
      expect(todo.priority).toBe('Low');
    });
  });
});