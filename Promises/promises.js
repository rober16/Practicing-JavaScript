/*
Las promesas en JavaScript son un patrón de diseño que se utiliza para manejar operaciones asíncronas. 
Proporcionan una forma más limpia y estructurada de trabajar con código asíncrono en comparación con los callbacks anidados. 
Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.

Creación de una promesa:
Puedes crear una promesa usando el constructor Promise. 
Este constructor toma una función ejecutora con dos parámetros: resolve y reject.

const miPromesa = new Promise((resolve, reject) => {
  // Lógica asíncrona o tarea
  // Si la tarea es exitosa, llamamos a resolve con el resultado
  // Si hay un error, llamamos a reject con el motivo del error
});

Estados de una promesa:
* Pending (pendiente): Estado inicial, la promesa está en curso.
* Fulfilled (cumplida): La operación se completó con éxito, y la promesa tiene un valor resultante.
* Rejected (rechazada): La operación falló, y la promesa tiene un motivo de rechazo.

Uso básico de una promesa:
*/

//Primer ejemplo
const miPromesa = new Promise((resolve, reject) => {
  // Simulación de tarea asíncrona
  setTimeout(() => {
    const exito = true;

    if (exito) {
      resolve("La tarea se completó exitosamente");
    } else {
      reject("Hubo un error en la tarea");
    }
  }, 2000);
});

// Manejar el resultado usando then y catch
miPromesa
.then((resultado) => {
    console.log("Éxito:", resultado);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


//Segundo ejemplo
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

function getBookByID(id){
    return new Promise((resolve, reject) => {
        const book = books.find(book => book.id === id);

        if(!book){
            //el primer argumento de un callback corresponde a un error
            const error = new Error();
            error.message = "Book not found!";
            reject(error);
        }

        resolve(book);
    })
}

function getAuthorbyID(id){
    return new Promise((resolve, reject) => {
        const author = authors.find(author => author.id === id);

        if(!author){
            const error = new Error();
            error.message = "Author not found!";
            reject(error);
        }
        resolve(author);
    })
}

getBookByID(1).then(book => {
    return getAuthorbyID(book.id);
}).then(author => {
    console.log(author);
}).catch(error => {
    console.log(error.message);
})