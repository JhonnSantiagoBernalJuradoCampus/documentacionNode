//app.js
import dotenv from "dotenv";
/**
 * * Cargamos el archivo .env 
 * ? Todo por defecto, la ruta del archivo se encuentra en la raiz del proyecto 
 */

dotenv.config();

//* Mostramos los datos guardados en el archivo .env

console.log(process.env.HOSTNAME);
console.log(process.env.PORT);