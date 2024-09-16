

let todoArr = []
let input = document.querySelector(".input")
let btn = document.querySelector("button")
let div = document.querySelector('.main');


function todo() {
    div.innerHTML = ""
    for(let i = 0; i < todoArr.length; i++){
        div.innerHTML += `
        <div class = "list">
        <h2 class = "h2">${todoArr[i]}</h2>
        <div class = "icons">
        <div onclick = "deleteTodo(${i})">
        <i class="fa-solid fa-2 fa-trash"></i>
        </div>
        <div onclick = "editTodo(${i})">
        <i class="fa-solid fa-1 fa-pen-to-square"></i>
        </div>
        </div>
        </div>
        `
    }
}

function addTodo() {
    todoArr.push(input.value)
    console.log(todoArr);
    input.value = ""
    todo()
}
function deleteTodo(index) {
    todoArr.splice(index , 1)
    console.log(todoArr);
    todo()
}
function editTodo(index) {
    let edit = prompt("Enter Updated Value" , todo[index])
    todoArr.splice(index , 1 , edit)
    console.log(todoArr);
    todo()
}






















