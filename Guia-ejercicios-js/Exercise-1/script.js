// Pido al usuario su nombre y apellido
let userName = prompt("Escriba su nombre: ", "");
let userSurname = prompt("Escriba su apellido: ", "");

// Creo variables para el manejo de la sentencia toUpperCase que se encarga de convertir la primer letra a mayuscula
let firstWord = userName[0].toUpperCase();
let restSentence = userName.slice(1);
let fullSentence = firstWord + restSentence;

// Imprimo el saludo en consola el nombre con la primer letra en mayuscula y el apellido completamente en mayuscula
console.log("¡Buenos días " + userSurname.toUpperCase() + ", " + fullSentence + "!");