// Seleção de Elementos
const todoform = document.querySelector ("#todo-form")
const todoinput = document.querySelector ("#todo-input")
const todolist = document.querySelector ("#todo-list")
const editform = document.querySelector ("#edit-form")
const editinput = document.querySelector ("#edit-input")
const canceleditbtn = document.querySelector ("#cancel-edit-btn")

let oldinputvalue;

// Funções
const saveTodo = (Text) => {

    const todo = document.createElement ('div')
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = Text
    todo.appendChild(todoTitle);

    const editbtn = document.createElement ("button");
    editbtn.classList.add("finish-todo");
    editbtn.innerHTML = '<i class="fa-solid fa-check"></i>' 
    todo.appendChild(editbtn);
    
    const donebtn = document.createElement ("button");
    donebtn.classList.add("edit-todo");
    donebtn.innerHTML = '<i class="fa-solid fa-pen"></i>' 
    todo.appendChild(donebtn);

    const deletebtn = document.createElement ("button");
    deletebtn.classList.add("remove-todo");
    deletebtn.innerHTML = '<i class="a-solid fa-xmark"></i>' 
    todo.appendChild(deletebtn); 

    todolist.appendChild(todo);
    todoinput.value = ""
    todoinput.focus = ("")
};

    const toggleforms = () => {
        editform.classList.toggle("hide")
        todoform.classList.toggle("hide")
        todolist.classList.toggle("hide")
    };

    const updatetodo = (Text) => {

        const todos = document.querySelectorAll (".todo")

        todos.forEach((todo) => {

            let todoTitle = todo.querySelector("h3")

            if(todoTitle.innerText === oldinputvalue) {
                todoTitle.innerText = Text;
            }
        })



    }

// Eventos
todoform.addEventListener("submit", (e) => {

    e.preventDefault()

    const inputvalue = todoinput.value;

    if(inputvalue){
        saveTodo(inputvalue);
    
}

});

document.addEventListener ("click", (e) => {

    const targetEl = e.target;
    const parentEl = targetEl.closest("div");    
    let todoTitle;

    if( parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText;
    }
    
    if (targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done");
    }    
        
    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove();
    }

    if (targetEl.classList.contains("edit-todo")) {
        toggleforms();

        editinput.value = todoTitle
        oldinputvalue = todoTitle
    }
});

canceleditbtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleforms();


});

editform.addEventListener("submit", (e) => {
    e.preventDefault()

    const editinputvalue = editinput.value

    if(editinputvalue) {
        updatetodo(editinputvalue)
    }

    toggleforms()
    
    
})