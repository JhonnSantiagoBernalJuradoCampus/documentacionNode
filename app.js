// http
/**
 * *Cuando se recibe una solicitud HTTP
 * ?Los datos se envian en forma de fragmentos (chunks) 
 */

import { createServer } from "http";
import fs from 'fs';

const http = createServer((req,res)=>{
    /**
     * *Construimos el dato que enviamos por la solicitud HTTP: 'POST, GET, PUT, DELETE'
     * @var {req.on("data", (chunk)=>{...})}*
     */
    let data = "";
    req.on("data", (chunk)=>{
        data +=chunk;
    })
    /**
     * *Una vez terminado la construccion del dato que realizamos lo gardamos en un archivo .txt
     * @var {req.on("end", ()=>{...})}
     */
    req.on("end", ()=>{
        console.log(data);
        res.write(data);
        fs.writeFile("data.txt", data, (err)=>{
            console.log(err);
        })
        res.end();
    })
})
const config = {
    hostname: '127.222.06',
    port: 5510
}
http.listen(config, ()=>{
    console.log(`Servidor: http://${config.hostname}:${config.port}/`);
});