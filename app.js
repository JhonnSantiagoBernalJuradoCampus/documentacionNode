import express from "express";

const appExpress = express();

appExpress.get('/campus', (req, res) => {
    res.send("Hello Developer");
});

let config = {
    hostname: "127.100.07.12",
    port: 5510
}

appExpress.listen(config, () => {
    console.log(`http://${config.hostname}:${config.port}/campus`);
});