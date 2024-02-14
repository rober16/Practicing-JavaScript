// -------------------------------
// Extraer informacion de una URL  
// -------------------------------

// Crear un objeto URL a partir de una cadena de caracteres.
const miUrl = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

// Nombre del host
console.log(miUrl.hostname);

// Path (camino)
console.log(miUrl.pathname);

// Protocolo
console.log(miUrl.protocol);

// Parametros Query

// Retorna un objeto URLSearchParams que representa los parámetros
// query (de búsqueda) de la URL. 
console.log(miUrl.searchParams);
console.log(typeof miUrl.searchParams);

console.log(miUrl.searchParams.get('ordenar'));
console.log(miUrl.searchParams.get('nivel'));
console.log(miUrl.searchParams.get('ordenarPor'));


// ---------------------------
// Extra: crear una URL
// ---------------------------

const nuevaURL = new URL('https://www.ejemplo.org');

nuevaURL.pathname = '/cursos/programacion';
nuevaURL.search = '?ordenar=vistas&nivel=1';

console.log(nuevaURL.toString());