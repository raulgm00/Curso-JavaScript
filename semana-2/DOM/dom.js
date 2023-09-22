//Abstraer la etiqueta html
let titulo = document.querySelector("h1");
//Abstraer la clase del elemento;
let header = document.querySelector(".header");
//Abtraer a traves del ID
let title = document.querySelector("#titulo");
// Accediendo al elemento p
let parrafo = document.querySelector("p");
// Accedemos al boton para capturar eventos de agregar parrafos
let sectionListas = document.querySelector("#btnListas");

console.log(titulo);
console.log(header);
console.log(titulo);
console.log(sectionListas);

//ANCHOR  Declaracion de funciones de Manipulacion del DOM
function agregarLista() {
  // STUB Seccion a manipular pore el DOM dinamico
  let sectionListas = document.querySelector("#Listas");
  let cadena = ``;
  // STUB Generacion de etiquetas html
  for (let i = 0; i < 5; i++) {
    cadena += `<p> Mi nombre es ${i} </p>`;
  }
  cadena = `<section> ${cadena} </section>`;
  sectionListas.innerHTML = cadena;
}

//EVENT  de agregacionAgregar listas conforme a evento de boton
sectionListas.addEventListener("click", agregarLista);

//LINK - Manipulacion del DOM
titulo.style.color = "blue";
titulo.textContent = "nuevo titulo";
parrafo.style.backgroundColor = "yellow";

