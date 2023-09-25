// UNA LISTA DE TAREAS
const listaTareas = [];
const form = document.querySelector('.form');
const taskInputValue = document.querySelector('#input-task');
const buttom = document.querySelector('#buttom');
let id = 1; 

//console.log({form,taskInputValue,buttom});

// FORMAS EN LAS QUE SE LEVANTA UN EVENTO
form.addEventListener('submit',addTask);
// Evento de enter
buttom.addEventListener('onkeydown',addTask);

//AGREGAR LAS TAREAS en una lista
function addTask(event){
    event.preventDefault();
    //console.log(event);
    if(taskInputValue.value.trim() !== ''){
    const task = {
        id: id,
        status: "toDo",
        value: taskInputValue.value.trim()
    }
    console.table(task);
    listaTareas.push(task);
    id++;
    //Reseteo del form
    form.reset();
    }else{
        alert('Debe rellenar el formulario');
    }

}

// ELIMINAR LAS TAREAS de la lista
function deleteTask(idTask){
    
    // Mirar la lista y solo sacar ese elemento que levanto el evento
    //Creame un nuevo arreglo con respecto a la condición
    const newArray = listaTareas.filter(tarea => tarea.id !== idTask);

}

//ALMACENAR EN LOCALSTORAGE


//CARGAR LISTA DE TAREAS DESDE EL LOCALSTORAGE

