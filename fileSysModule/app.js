const fs = require("fs")

//Leer un archivo
const archivo = fs.readFileSync("index.html", "utf-8");
console.log(archivo);

//Cambiar nombre de un archivo
fs.renameSync("index.html", "main.html");

//Agregar contenido al final de un archivo
fs.appendFileSync("main.html", "<p>Hola!</p>");

//Reemplazar todo el contenido de un archivo
fs.writeFileSync("main.html", "Contenido nuevo");

//Eliminar archivo
//fs.unlinkSync("main.html");