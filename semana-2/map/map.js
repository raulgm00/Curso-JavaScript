const numeros_i = [1, 2, 3];
const multiplicados = numeros_i.map(numero => numero * 2);

console.log(multiplicados);

const numeros_j = [1, 2, 3, 4, 5];
const pares = numeros_j.filter(numero => numero % 2 === 0);
console.log(pares);

const personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 35 }
];
const persona = personas.find(persona => persona.edad === 25);
console.table(persona);


const numeros = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const numerosOrdenados = numeros.sort((a, b) => b - a);

console.log (`------`)
console.table(numerosOrdenados);