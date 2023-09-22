//Destructuracion d eun array
let arr = [1,2,3,4,5];
const  [num1,num2, num3,num4,num5] = arr;
console.table(arr);
console.log(`-------`);
console.table(num1);

// Desestructurando Objetos
const obj ={nombre: "Ulises", edad: 31};
const {nombre,edad}= obj;
console.log(`Desestructurando obj en variables nombre=${nombre}`);

