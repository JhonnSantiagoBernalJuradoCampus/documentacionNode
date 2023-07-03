// http
/**
 * * request.url
 * ? La url de la solicitud
 * * request.method
 * ? El metodo HTTP utilizado en la solicitud(GET,POST, etc)
 * * request.headers
 * ? Un obejto que contiene los encabezados de la solicitud
 * * request.params
 * ? Los parametros de ruta si estas utlizando un enrutador
 * * request.query
 * ? Los parametros de consulta si estan presentes en la URL
 * * request.body
 * ? El cuerpo de la solicitud (datos enviados en una solicitud POST o PUT)
 */

import { createServer } from "http";
const http = createServer((req,res)=>{
    /**
     * @var {req.headers} * Obtenemos los encabezados de la solicitud enviada
     */
    console.log(`Origen de la solicitud "Consola: ${req.headers["user-agent"]}"`);
    res.end(`Origen de la solicitud HTML: ${req.headers["user-agent"]}`);
})
/**
 * * Servido de escucha habilitado http://127.222.06:5510/
 * @var {hostname} Dominio * Por defecto es localhost pero lo cambiamos al rango de ip de pruebas 127
 * @var {port} Puerto
 */
const config = {
    hostname: '127.222.06',
    port: 5510
}
http.listen(config, ()=>{
    console.log(`Servidor: http://${config.hostname}:${config.port}/`);
});