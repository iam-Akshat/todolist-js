import createTodo from "./models/todo.js";
import createProject from "./models/project.js";
import LocalDb from "./models/localDb.js"
const mmy = new LocalDb()
const projects = mmy.populateData()
const homeTodoList = projects[0].todoList

const displayTodo = document.querySelector('.todo');

const display = document.querySelector('form');
const btn = document.querySelector('.btn');
const toggleDisplay = () => {
  display.classList.toggle('d-none');
}

btn.addEventListener('click', toggleDisplay);

const getInput = () => {
  const test = document.getElementbyId('createProject')[0].value
  console.log(test);
}



// const todoListItem = `
//   <div class="card mr-4 mt-2" style="width: 18rem;" data-id="card-${}">
//     <div class="card-body">
//       <h5 class="card-title">${}</h5>
//       <h6 class="card-subtitle mb-2 text-muted">${}</h6>
//       <p class="card-text">${}</p>
//       <p class="card-text read-status">${}</p>

//       <button class="btn btn-danger">Remove</button>
//       <button class="btn btn-success" id="read">Read</button>
//     </div>
//   </div>
// `;

// displayTodo.innerHTML += todoList;


