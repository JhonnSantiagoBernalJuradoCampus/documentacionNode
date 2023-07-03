// http
/**
 * *Cuando se recibe una solicitud HTTP
 * ?Los datos se envian en forma de fragmentos (chunks) 
 */

import { createServer } from "http";
import https from 'https';
import fs from 'fs';



const http = createServer((req,res)=>{
    let fechaActual = new Date();

    let año = fechaActual.getFullYear();
    let mes = ("0" + (fechaActual.getMonth() + 1)).slice(-2);  // El mes comienza en 0, por lo que se le suma 1
    let dia = ("0" + fechaActual.getDate()).slice(-2);
    let fechaHoy = `${año}-${mes}-${dia}`;
    if (Number(dia) < 10){
        dia = `0${(Number(dia)+1)}`;
    }
    else{
        dia = (Number(dia)+1);
    }
    let fechaMañana = `${año}-${mes}-${dia}`;
    let data = "";
    let uri = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${fechaHoy}&end_date=${fechaMañana}&api_key=mgqT0cV04ejlKfk01uKrsaWcen4fdQG6F3JyHTKQ`;
    let key = "/asteroids";
    if (req.url == key){
        https.get(`${uri}`, (peticion)=>{
            peticion.on("data", (chunk)=>{
                data += chunk;
            })
            peticion.on("end",()=>{
                let json = JSON.parse(data);
                json = json.near_earth_objects;
                let plantilla = ``;
                plantilla += fs.readFileSync("index.html", "utf-8")
                plantilla += `<main class= "container">`
                json[fechaHoy].forEach((val,id) => {
                    plantilla += `<h1 class= "bg-warning">Nombre: ${val.name}</h1>
                    <p>Id: ${val.id}</p>
`
                });
                json[fechaMañana].forEach((val,id) => {
                    plantilla += `<h1 class= "bg-secondary">Nombre: ${val.name}</h1>
                    <p>Id: ${val.id}</p>
`
                });
                plantilla+= `</main></body></html>`
                res.end(plantilla)
                res.end(JSON.stringify(json));
            })
        })
    }
    else{
        res.end("<h1>Ingrese a /asteroids</h1>")
    }
})
const config = {
    hostname: '127.222.06',
    port: 3000
}
http.listen(config, ()=>{
    console.log(`Servidor: http://${config.hostname}:${config.port}/`);
}); 