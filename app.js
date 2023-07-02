// Require fs
/**
 * * fs.rmdirSync(path):
 * ?  Elimina un directorio de forma sincrónica
 * @param path = ruta del directorio a crear
*/
const fs = require('fs');
const path = require('path');

fs.rmdirSync(path.join(__dirname, "src"));
console.log("El directorio se ha eliminado correctamente");