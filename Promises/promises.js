/*
La promesa es un objeto que representa la terminacion o el fracaso eventual de una operacion asincrona.
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