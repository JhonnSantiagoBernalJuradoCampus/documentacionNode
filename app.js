import express from "express";

const appExpress = express();


/**
 * * Configuracion del middleware
 * ? Habilitamos la entrada de datos de tipo json y text
 * @var {express.json(), express.text()}
 */
appExpress.use(express.json());
appExpress.use(express.text());

appExpress.post('/campus/:nombre', (req, res) => {
    let obj = {
        data: req.body,
        'URL-GET': req.query,
        parametros: req.params
    };
    res.send(obj);
})

let config = {
    hostname: "127.100.07.12",
    port: 5510
}

appExpress.listen(config, () => {
    console.log(`http://${config.hostname}:${config.port}/campus`);
});