// campus.js
// Importamos el Router 
import { Router } from "express";

const appCamper = Router();

//Middleware
appCamper.use((req, res, next) => {
    console.log(req);
    next();
})

appCamper.get("/", (req, res) => {
    res.send("GET");
});

appCamper.get("/:id", (req, res) => {
    res.send(`GET: ${req.params.id}`);
});

appCamper.post("/", (req, res) => {
    res.send(`POST`);
})

//*Exportamos el Router
export default appCamper;