// app.js
import express from "express";

//*Importamos el modulo que contiene los endpoints
import appCamper from "./routers/campus.js";
const appExpress = express();

appExpress.use(express.json());
appExpress.use("/campus", appCamper);

let config = {
    hostname: "127.100.07.12",
    port: 5510
}

appExpress.listen(config, () => {
    console.log(`http://${config.hostname}:${config.port}/campus`);
});