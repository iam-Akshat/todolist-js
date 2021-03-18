class Todo {
  constructor(title, description, dueDate, priority, id) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.completed = false
    this.id = id
  }
}

const createTodo = (title, description, dueDate, priority,id =  Date.now()) => {
  let newTodo = new Todo(title, description, dueDate, priority,id);
  return newTodo;
}

export default createTodo;
