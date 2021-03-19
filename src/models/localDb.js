import createProject from "./project";
import createTodo from "./todo"

class LocalDb{
    
    constructor(init = ""){
        this._db = window.localStorage
        this.appData = []
    }
    initAppState(){
        this.appData = [
            createProject('Home')
        ]
    }
    rawDataToState(raw){
        const state = []
        raw.forEach((project,idx)=> {
            const projectObject = createProject(project.name)
            project.todoList.forEach(todo=>{
                const {completed,
                    description,
                    dueDate,
                    id,
                    priority,
                    title,} = todo
                const todoObject = createTodo(title,description,dueDate,priority,id,completed)
                projectObject.addTodo(todoObject)
            })
            state.push(projectObject)
        });
        return state
    }
    populateData(){
        const appDataRaw =  JSON.parse(this._db.getItem('PROJECTS'));
        if(appDataRaw == null){
            this.initAppState()
            return this.appData;
        }else{
            const state = this.rawDataToState(appDataRaw)
            this.appData = state  
            return this.appData
        }
        
    }
    saveData(){
        const appData = JSON.stringify(this.appData);
        this._db.setItem('PROJECTS',appData);
        return this.appData;
    }

    getAppData(){
        return this.appData;
    }


}

export default LocalDb;