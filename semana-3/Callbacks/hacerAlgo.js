//Programacion asincrona

// 1.- Callback


function hacerAlgo( numero, funcionA){
    setTimeout(function (){
        const res = numero*2;
        funcionA(res);

    }
    ,5000);
}

// Llamada No.1
hacerAlgo(2, function (res){
    console.log(`El resultado es : ${res}`)

});

// Llamada No.2, se vera que se ejcuta primero esta ejecucion dado que se esta eejecutando una funcion asincrona
console.log(`Esperando el resultado`);