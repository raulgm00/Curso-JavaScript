const productos = ["celular","zapatillas","ramera","notebook","monitor", "celular"];


//foreach
productos.forEach(producto => console.log(`Este es el producto = ${producto}`));

// map

let nuevo = productos.map( producto => `Producto: ${producto}`);
console.table(nuevo);


// filter
const numeros = [4,5,6,1,2.3];
const pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares);

const productosFiltrados = productos.filter(producto => producto === 'celular');
console.table(productosFiltrados);

// find
// retorna el primero que encuentra
 const findValor = productos.find( producto => producto === 'celular');
console.log( `¿Encontro el celular ?  ${findValor}`) 

// sort

const numerosOrdenados = numeros.sort();
console.table(numerosOrdenados);
