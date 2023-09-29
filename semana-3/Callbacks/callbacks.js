/**!SECTION
 * Callbacks
 * Promesas
 * Asych/Await
 */

//declaración de duncion asincrona con callback
function funcionaAsincrona(callback){
    //Funcion para detener la ejecucón durante unos segundos
    setTimeout( function () {
        const alerta = false;
        
        if(alerta){
            callback(null,"La operación fue exitosa");
        }else{
            callback("La operación fallo ");
        }

    }
        ,2000);
}

funcionaAsincrona( function (error, resultado){
    console.log(`Error: ${error} , Resultado: ${resultado}`);

    // Truthy y Falsy 
        //Falsy : an, null, 0, -0, “”, y false
        //Truthy != Falsy
    if(error){
        // Entra cunado es Trusthy
        console.log(error);
    }else{
        // Entra cunado es Falsy
        console.log(resultado);
    }

});


console.log(`Iniciando una operacion asicnrona con callback ...`);