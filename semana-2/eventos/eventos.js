// Atrapar eventos desde la pagina html
const buttom = document.querySelector("#agregar");
const alerta = () =>{
    alert("Hola Mundo");
    // Agregar um valor al localstorage
    localStorage.setItem('dato1',Math.random());
    localStorage.setItem('dato2',Math.random());
    localStorage.setItem('dato3',Math.random());
    localStorage.setItem('dato4',Math.random());
}
// Evento atrapado
buttom.addEventListener("click", alerta);

// Obtener el valor de localstorage
const dato = localStorage.getItem('dato1');
console.log(`EL dato recolectado del localstorage es ${dato}`);

// ¿Como remuevo el dato?
localStorage.removeItem('dato1');

const limpiarLocalStorage = () =>{
    //Remover todo el storage
    localStorage.clear();
}

const buttom_limpiar = document.querySelector('#limpiar')
buttom_limpiar.addEventListener('click', limpiarLocalStorage);