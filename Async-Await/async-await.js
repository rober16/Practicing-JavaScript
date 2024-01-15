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