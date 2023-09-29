// Asych - Await
// ALternativa de manejar asicronicamente las funciones

// laverRopa(), lavarPlatos(). LeerLibro():


// Funcion para ñlavar los platos

async function lavarPlatos(){
    console.log(`Lavando los platos...`)
    await new Promise( (res) =>{
        setTimeout(res,4000);
    });
    console.log(`Los platos estan limpios ...`)
}


async function lavarRopa(){
    console.log(`Lavando ropa ...`);
    await new Promise ( (res) => setTimeout(res,4000));
    console.log(`La ropa esta lavada ...`);


}

function leerLibro(){
    console.log(`Estoy leyendo un libro...`);
}


async function realziarTareas(){
    await lavarPlatos();
    await lavarRopa();
}


// Primero ejecutamos esta actividad
    realziarTareas();
// Segundo ejecuamos esta actividad
    leerLibro();



