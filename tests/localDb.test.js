import createTodo from '../src/models/todo';
import globalDb from '../src/models/localDb';

describe('LocalDb', () => {
  const newDb = globalDb;
  describe('initAppState', () => {
    test('LocalDb should have Home project', () => {
      newDb.initAppState();
      expect(newDb.appData).toEqual([{ name: 'Home', todoList: [] }]);
    });
  });
  describe('populateData', () => {
    test('Should populate the data', () => {
      newDb.populateData();
      expect(newDb.appData).toEqual([{ name: 'Home', todoList: [] }]);
    });
  });
  describe('getAppData', () => {
    test('Should get the saved app data', () => {
      expect(newDb.getAppData()).toEqual(newDb.appData);
    });
  });
  describe('addProject', () => {
    test('Should add project to Db', () => {
      newDb.addProject('Rails');
      expect(newDb.appData).toEqual(expect.arrayContaining([{ name: 'Rails', todoList: [] }]));
    });
  });
  describe('saveData', () => {
    test('should save data', () => {
      expect(newDb.saveData()).toEqual(newDb.getAppData());
    });
  });
  describe('addTodo', () => {
    test('adds todo to project at given project index', () => {
      const todo = createTodo('t', 't', Date.now(), 'High', 1);
      newDb.addTodo(0, todo);
      expect(newDb.getAppData()[0].todoList).toEqual(expect.arrayContaining([todo]));
    });
  });
  describe('deleteTodo', () => {
    test('deletes the todo with given todoID from project at given project index', () => {
      newDb.deleteTodo(0, 1);
      expect(newDb.getAppData()[0].todoList).toEqual([]);
    });
  });
});
