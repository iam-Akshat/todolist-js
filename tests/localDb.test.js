import createProject from "../src/models/project";
import createTodo from "../src/models/todo";
import globalDb from '../src/models/LocalDb';

describe('LocalDb', () => {
  describe('initAppState', () => {
    test('LocalDb should have Home project', () => {
      const newDb = globalDb;
      newDb.initAppState();
      expect(newDb.appData).toEqual([{name: "Home", todoList: []}]);
    });
  });
  describe('populateData', () => {
    test('Should populate the data', () => {
      const newDb = globalDb;
      newDb.populateData();
      expect(newDb.appData).toEqual([{"name": "Home", "todoList": []}]);
    });
  });
  describe('getAppData', () => {
    test('Should get the saved app data', () => {
      const newDb = globalDb;
      expect(newDb.getAppData()).toEqual(newDb.appData);
    });
  });
  describe('addProject', () => {
    test('Should add project to Db', () => {
      const newDb = globalDb;
      newDb.addProject("Rails");
      expect(newDb.appData).arrayContaining({name:'Rails',todoList:[]});
    });
  });
});
