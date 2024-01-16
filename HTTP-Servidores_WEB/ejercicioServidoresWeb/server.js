const http = require('http');

http.createServer((request, response) => { 
    const { url } = request;

    if(url === '/'){
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write("Hola, mundo");
    }else if(url.startsWith('/saludo/')){
        const nombre = url.slice(8); // Obtén el nombre de la ruta
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end(`Hola, ${nombre}\n`);
    }else{
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write('Page not found!');
    }
    
    response.end();
}).listen(8080)