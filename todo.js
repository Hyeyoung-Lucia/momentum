const toDoForm = document.getElementById('todo-form')
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.getElementById('todo-list')

const TODOS_KEYS = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEYS, JSON.stringify(toDos))
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos()

}

function paintToDo(newToDoObj) {
    const li = document.createElement('li');
    li.id = newToDoObj.id;
    const span = document.createElement('span');
    span.innerText = newToDoObj.text;
    const button = document.createElement('button')
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
    
function handleToDoSubmit(event) {
    event.preventDefault()
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    };
    toDos.push(newToDoObj)
    paintToDo(newToDoObj)
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEYS)
console.log(savedToDos);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)
}