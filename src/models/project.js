import createTodo from "./todo"
class Project{
    constructor(name){
        this.name = name
        this.todoList = []
    }
    addTodo(todo){
        this.todoList.push(todo)
    }
    deleteTodo(id){
        this.todoList.forEach((todo,index)=>{
            if(todo.id === id){
                this.todoList.splice(index,1)
                return
            }
        })
    }
}

const createProject = ( name ) =>{
    return new Project(name)
}
export default createProject;