//app.js
import express from "express";
import dotenv from "dotenv";
import appUser from "./routers/user.js";
import { nanoid } from "nanoid"
/**
 * ? Genera un hast de 21 caracteres
 * @var {nanoid(10)} * Si deseamos mas o menos caracteres
 */
const id = nanoid(10);
console.log(`id nanoid: ${id}`);

dotenv.config();

let appExpress = express(); 
appExpress.use(express.json());
appExpress.use("/campus", appUser);


let myConfig = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(myConfig, () => {
    console.log(`http://${myConfig.hostname}:${myConfig.port}`);
}) 