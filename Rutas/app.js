/*
Routing
Manejar las solicitudes del cliente en
base a ciertos criterios

El metodos de la solicitud HTTP. 
De esta forma el servidor sabe qeu tipo de operacion se realizara
GET - Para obtener un recurso
POST - Para crear un registro nuevo
PUT - Para modificar un registro
DELETE - Para eliminar un registro
*/

const http = require('http');
const {infoCursos} = require('./cursos');

const server = http.createServer((req, res) => {
  const metodo = req.method;

  switch(metodo) {
    case 'GET':
      return manejarSolicitudGET(req, res);
    case 'POST':
      return manejarSolicitudPOST(req, res);
    default:
      res.statusCode = 501;
      res.end(`El metodo no puede ser manejado por el servidor: ${metodo}`);
  }
});

function manejarSolicitudGET(req, res) {
  const path = req.url;

  if (path === '/') {
    return res.end('Bienvenidos a mi primer servidor y API creados con Node.js.');
  } else if (path === '/cursos') {
    return res.end(JSON.stringify(infoCursos));
  } else if (path === '/cursos/programacion') {
    return res.end(JSON.stringify(infoCursos.programacion));
  }

  res.statusCode = 404; //Codigo de estado 404, recurso no encontrado
  return res.end('El recurso solicitado no existe...');
}

function manejarSolicitudPOST(req, res) {
  const path = req.url;

  //Supongamos que queremos agregar un nuevo registro
  if (path === '/cursos/programacion') {

    let cuerpo = ''; //Va contener el cuerpo de la solicitud

    //cuando se reciba la info del registro nuevo
    //se va convertir ese contenido a string y asignarla al cuerpo
    req.on('data', contenido => {
      cuerpo += contenido.toString();
    });

    //Cuando se termine de recibir la informacion, vamos a procesarla
    req.on('end', () => {
      console.log(cuerpo);
      console.log(typeof cuerpo);

      // Convertir a un objeto de JavaScript.
      cuerpo = JSON.parse(cuerpo);

      console.log(typeof cuerpo);
      console.log(cuerpo.titulo);

      res.end('El servidor recibio una solicitud POST para /cursos/programacion');
    });

    // return res.end('El servidor recibio una solicitud POST para /cursos/programacion');
  }
}

const PUERTO = 8080;

server.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});

//Documentacion de códigos de estado de respuesta HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Status