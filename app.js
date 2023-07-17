import express from "express";

const appExpress = express();

appExpress.get('/campus', (req, res) => {
    res.send("Hello Developer");
});

/*
*Parametros y headers
*/
appExpress.get('/campus/:idCamper', (req, res) => {
    let obj = {
        "Datos de la url": req.params,
        "Encabezado": req.headers
    }
    res.send(JSON.stringify(obj))
})

let config = {
    hostname: "127.100.07.12",
    port: 5510
}

appExpress.listen(config, () => {
    console.log(`http://${config.hostname}:${config.port}/campus`);
});