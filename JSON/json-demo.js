/*
Introduccion a JSON
Es un formato de texto usado para almacenar y transportar informacion
Nos permite almacenar objetos de Javascript como texto

Cuando enviamos por ejemplo info desde el cliente (desde el browser) al servidor
normalmente presentamos esa info en formato JSON y asi el servidor sabe
como interpretarla y como extraer la informacion enviada

Tambien el servidor puede responder en formato JSON al cliente
y asi podemos en el browser extraer la info que nos envio el servidor

Caracteristicas: Los datos se presentan como pares clave-valor
Puede contener, cadena de caracteres, numeros, arreglos, booleanos y objetos

Para convertir de JSON a un objeto de javascript usamos:
JSON.parse()

Para convertir un objeto de javascriptde a JSON usamos:
JSON.stringify()
*/

// Objeto JavaScript.
let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas": [
      "JavaScript",
      "Node.js"
    ],
    "esPublico": true
  };
  
  console.log(infoCurso);
  console.log(typeof infoCurso);
  
  // Objeto -> Cadena de Caracteres en formato JSON. 
  console.log("===== En formato JSON con JSON.stringify() =====");
  let infoJSON = JSON.stringify(infoCurso);
  
  console.log(infoJSON);
  console.log(typeof infoJSON);
  
  // undefined porque ya no es un objeto, es una cadena
  // de caracteres con el formato JSON.
  console.log(infoJSON.titulo);
  
  // Cadena de caracteres en formato JSON -> Objeto.
  // Nuevamente creamos un objeto de JavaScript.
  console.log("===== Objeto de JavaScript con JSON.parse() =====");
  let infoObjeto = JSON.parse(infoJSON);
  
  console.log(infoObjeto);
  console.log(typeof infoObjeto);
  
  // Ahora si tenemos un objeto de JavaScript.
  console.log(infoObjeto.titulo);