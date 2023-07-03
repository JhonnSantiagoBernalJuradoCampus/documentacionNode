// Require http
/**
 * * http.get(options, callback)
 * ?  Realiza una solicitud HTTP GET a través de HTTPS
 * @param options = Opciones de la solicitud, como la url y los encabezados
 * @param callback = funcion de devolucion de llamada que se ejecuta cuando se completa la respuesta.  Recibe el objeto de respuesta
 * * http.request(options, callback)
 * ? Inicia una solicitud http personalizada a través de HTTPS
 * @param options =  Opciones de la solicitud, como la URL, los encabezados y el método HTTP
 * @param callback = Funcion de devolucion de llamada que se ejecuta cuando se completa la respuesta. Recibe el objeto de respuesta
 * * http.createServer(options, requestListener)
 * ? Crea un servidor HTTPS
 * @param options = Opciones para la creacion del servidor, como el certificado y la clave privada
 * @param requestListener = Funcion que se ejecuta cuando se recibe una solicitud en el servidor
*/

const http = require('http');
const requestListener = (req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
}

const server = http.createServer(requestListener);

server.listen(3000, "localhost", ()=>{
    console.log("El servidor esta escuchando en http://localhost:3000/");
})