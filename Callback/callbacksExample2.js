const books = [
    {
        id: 1,
        title: "Clean Code"
    },
    {
        id: 2,
        title: "Clean Code 2"
    },
    {
        id: 3,
        title: "Clean Code 3"
    }
];


function getBookByID(id, callback){
    const book = books.find(book => book.id === id);

    if(!book){
        //el primer argumento de un callback corresponde a un error
        const error = new Error();
        error.message = "Book not found!";
        return callback(error);
    }

    //Si encontro un libro
    callback(null, book);
}

getBookByID(2, (error, book) => {
    if(error){
        return console.log(error.message);
    }
    return console.log(book);
});