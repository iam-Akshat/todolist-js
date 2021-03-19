class Todo {
  constructor(title, description, dueDate, priority, id, completed) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.completed = completed
    this.id = id
  }
  toggleCompleted(){
    this.completed = !this.completed
  }
  changePriority(newPriority){
    this.priority = newPriority
  }
}

const createTodo = (title, description, dueDate, priority,id =  Date.now(),completed = false) => {
  let newTodo = new Todo(title, description, dueDate, priority,id,false);
  return newTodo;
}

export default createTodo;
