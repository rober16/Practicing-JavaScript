const express = require("express");
const server = express();
const {PORT} = require("./config");
const {HomeRoutes} = require("./routes");

server.use(express.static("./public"));
server.use(express.json());

server.use("/", HomeRoutes);

server.listen(PORT, () => {
    console.log("Entro por el puerto " + PORT);
})

//Middleware: Es un bloque de codigo que se ejecuta entre la peticion que hace el usuario hasta que la peticion llegue al servidor. Se trata de un intermediario


















/*
const express = require("express");
const server = express();

const fs = require('fs');
const home = fs.readFileSync('./index.html');

server.get("/", getHomePage);

server.listen(8080, () => {
    console.log("Server is running on port "+ 8080);
})

function getHomePage(req, res){
    return res.write(home);
}
*/

