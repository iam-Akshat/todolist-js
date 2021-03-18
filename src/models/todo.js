class Todo {
  constructor (title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.completed = false
    this.id = Date.now()
  }
}

const createTodo = (title, description, dueDate, priority) => {
  let newTodo = new Todo(title, description, dueDate, priority);
  return newTodo;
}

export default createTodo;
