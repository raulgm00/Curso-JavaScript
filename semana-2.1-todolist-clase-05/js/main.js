const formulario = document.querySelector('.form');
// Es global por si quiero o deseo borra ro seguir agregando productos

const listaTareas = [];
let contador = 1;

formulario.addEventListener('submit',function(event){
    
    event.preventDefault();

    const tarea = formulario.querySelector('input[placeholder="Tarea"]').value;
    const descripcion = formulario.querySelector('textarea[placeholder="Descripcion"]').value;
    const precioProducto = formulario.querySelector('input[placeholder="Precio Producto"]').value;
    const cantidad = formulario.querySelector('input[placeholder="Cantidad"]').value;

    // console.log(tarea);
    // console.log(descripcion);
    // console.log(precioProducto);
    // console.log(cantidad);

    listaTareas.push({id: contador, tarea, descripcion, precioProducto, cantidad});
    contador++;
    //console.table(listaTareas);
    mostrarTarea();


})

// MOSTRAR MI LISTA EN PANTALLA EN FORMA DE TARJETA
function mostrarTarea(){
    // mAPEAR CONTENDOR QUE SE UTILIZARA SOLO CUANOD SE DESEA EJECUTAR LA OPERACION DE MOSTRAR
    const contenedor = document.querySelector('.container');
     // Limpiar el contenedor
     contenedor.innerHTML = '';
    listaTareas.forEach( producto => {
        contenedor.innerHTML += `<p>${producto.id} / ${producto.tarea} / ${producto.descripcion} </p>`;
    });

   


}