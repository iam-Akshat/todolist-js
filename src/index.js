import createTodo from "./models/todo.js";
import createProject from "./models/project.js";
import LocalDb from "./models/localDb.js"
const mmy = new LocalDb()
mmy.populateData()



