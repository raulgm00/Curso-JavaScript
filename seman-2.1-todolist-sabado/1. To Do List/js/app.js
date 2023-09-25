// TO DO LIST

// Consigna: Crear un programa que muestre una lista de tareas que sean ingresadas mediante un formulario. Ademas cada elemento de la lista tiene que tener la opcion de ser eliminado.

// TEMAS: condicionales, funciones, DOM.

// Pasos:

// 1. Capturar lo que necesito del DOM.

const newTaskInput = document.querySelector("#newTask");
const addTaskButton = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

// 2. Crear las funciones.

// Funcion para agregar una tarea

function addTask(e) {
  e.preventDefault();
  // Obtengo el texto de la nueva tarea (con el .value), eliminando espacios en blanco al princpio y al final (trim())
  const taskText = newTaskInput.value.trim();

  // Verificar si el campo esta vacio

  if (taskText) {
    // Crear HTML de un elemento de la lista de tareas utilizando template strings

    // Guardo el template en una variable/constante.
    const taskItem = `<li class='elementList'>${taskText}<i class='bx bxs-trash'></i></li>`;

    // Agregamos el elemento de la lista al contenido html de la lista usando innerHTML
    taskList.innerHTML += taskItem;

    // Limpiar el campo de entrada despues de agregar la tarea

    newTaskInput.value = "";
  }
}

// 3. Creacion de eventos

addTaskButton.addEventListener("click", addTask);

taskList.addEventListener("click", (e) => {
  // Verificar si el elemento al que le estoy haciendo click es un boton de eliminar (comprando si tiene la clase bxs-trash)

  if (e.target.classList.contains("bxs-trash")) {
    // Eliminamos el elemento de la lista
    e.target.parentElement.remove();
  }
});

// Pensamientos:

// - Lo que ingreso se tiene que guardar en algun lugar (variable o constante).

// - Identificar las piezas con las que cuenta y voy a necesitar usar.

// - Identifcar cuales son las funcionalidades que voy a necesitar.

//      funciones: a. agregar a la lista. b. eliminar de la lista.

// 1 - Capturar la informacion de ese input, (Como?)
// 2 - Guardar el texto ingresado en una variable (Como capturo lo ingresado?)
// 3 - Crear un condicional para saber si esta vacio.
// 4 - Mostrar en la lista, (Como?)

/*

Explicacion detallada: 

1. Se obtienen los elementos del DOM utilizando document.querySelector para el campo de entrada (newTaskInput), el boton "agregar" (addTaskButton) y la lista (taskList) donde se van a mostrar las tareas.

2. Creamos la funcion addTask que se va a encargar de agregar una tarea a la lista. Primero cancelamos el evento por default del button, nos aseguramos de eliminar los espacios en blanco al principio y al final con .trim(), verificamos si el campo esta vacio, luego obtenemos el texto de la nueva tarea y lo almcenamos en una constante (taskText). Si el campo no esta vacio, creamos un elemento de la lista en formato HTML utilizando template strings. Este elemento incluye el texto de la tarea y un icono de eliminar.

3. En la misma funcion agregamos un elemento de la lista utilizando el innerHTML y vaciamos el campo del input.


4. Agregamos los eventos:

 a. Cuando hagamos click en el boton "Agregar", se llama a la funcion addTask.

 b. Cuando presionamos el icono de eliminar verificamos si el elemento al que le dimos click tiene la clase "delete-trash", si es asi, ejecutamos una funcion que elimina al padre del icono (el elemento li).

*/
