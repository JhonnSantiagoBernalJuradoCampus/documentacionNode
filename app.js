//app.js
import express from "express";
import dotenv from "dotenv";
dotenv.config();
let appExpress = express();
/**
 * * Obtenemos la cadena de configuracion del servidor
 * ? y la parseamos a un objeto de js
 * @var {process.env.MY_CONFIG}
 */
let config = JSON.parse(process.env.MY_CONFIG);

appExpress.get('/campus', (req, res) => {
    res.send("Campers :)");
});

appExpress.listen(config, () => {
    console.log(`http://${config.hostname}:${config.port}`);
});