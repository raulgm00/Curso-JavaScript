// Promesas en JS => pendiente, cumplida, rechazada

// new Promise();
/**
 * 
 * 1.- Pendiente
    2.- Aceptado / Resuelto
    3.- Rechazado
 */

/* Vamos a realizar una tarea asincrona y despues vamos a resolver la preomesa usando 
    "resolve" o "reject"

   

*/

function traerHelado(){
    return new Promise( (resolve, reject) =>{
        // Se inyecta una función anonima
        setTimeout( ()=>{
            const trajoHelado = true;
            if(trajoHelado){
                resolve(`Trajo helado`);
            }else{
                reject(`NO trajo helado`)
            }
        }
        ,2000);
    });

}

// funcion(). Si se resuelve (). si se rechaza()
//traerHelado().then().catch();

traerHelado()
.then( (mensaje) => {
    // se inyecta el resolve
    console.log(` resolve() -> ${mensaje}`);
})
.catch( (mensaje)=>{
    // se inyecta el reject
    console.log(` reject() -> ${mensaje}`);
});