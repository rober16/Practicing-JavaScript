const http = require("http");

const servidor = http.createServer((req, res) => {
    console.log("=====> req (Solicitud)");
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    console.log(req.headers.accept);
    res.end("Hola Mundo");
});

servidor.listen(8080, () => {
    console.log("Escuchando por el puerto 8080")
});