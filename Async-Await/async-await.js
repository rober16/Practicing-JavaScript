/*
Async y await son características de JavaScript que facilitan el trabajo con código asíncrono y promesas, y son comúnmente utilizadas 
en entornos como Node.js.
*/

const books = [
    {
        id: 1,
        title: "Clean Code",
        authorID: 1
    },
    {
        id: 2,
        title: "Clean Code 2",
        authorID: 2
    },
    {
        id: 3,
        title: "Clean Code 3",
        authorID: 3
    }
];

const authors = [
    {
        id: 1,
        name: "Author 1"
    },
    {
        id: 2,
        name: "Author 2"
    }
];

async function getBookByID(id){
    const book = books.find(book => book.id === id);
    if(!book){
        //el primer argumento de un callback corresponde a un error
        const error = new Error();
        error.message = "Book not found!";
        throw error;
    }
    return book;
}

/*
En JavaScript, la palabra clave throw se utiliza para lanzar una excepción. 
Una excepción es un objeto que representa un error o una situación inesperada que ocurre durante la ejecución de un programa. 
*/

async function getAuthorByID(id){
    const author = authors.find(author => author.id === id);
    if(!author){
        const error = new Error();
        error.message = "Author not found!";
        throw error;
    }
    return author;
}

async function main(){
    try{
        const book = await getBookByID(1);
        const author = await getAuthorByID(book.authorID);
        console.log(`This book ${book.title} was written by ${author.name}`);
    }catch(ex){
        console.log(ex.message)
    }
}

main();


//Ejemplo 2

function tareaAsync1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tarea 1 completada");
    }, 1000);
  });
}
  
function tareaAsync2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tarea 2 completada");
    }, 1500);
  });
}
  
function tareaAsync3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tarea 3 completada");
    }, 2000);
  });
}

//Ahora, aplicamos async y await a la cadena de promesas:

//La función ejecutarTareas es declarada como async, lo que permite el uso de await dentro de ella.
async function ejecutarTareas() {
  //Cada llamada a tareaAsyncX ahora se coloca después de await.
  //Esto hace que JavaScript espere a que la promesa se resuelva antes de continuar con la siguiente línea de código.
  try {
    const resultado1 = await tareaAsync1();
    console.log(resultado1);

    const resultado2 = await tareaAsync2();
    console.log(resultado2);

    const resultado3 = await tareaAsync3();
    console.log(resultado3);

    console.log("Todas las tareas han sido completadas");
  } catch (error) {
    console.error("Al menos una tarea falló:", error);
  }
}
  
//La estructura de manejo de errores se ha simplificado utilizando un bloque try-catch. 
//Cualquier error que ocurra dentro de las funciones await será capturado por el bloque catch.
  
// Llamamos a la función
ejecutarTareas();