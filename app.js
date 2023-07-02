// Require fs
/**
 * * fs.mkdirSync(path, options):
 * ?  Crea un directorio de forma sincrónica (bloqueante).
 * @param path = ruta del directorio a crear
 * @param options = Opciones para la creación del directorio.
*/
const fs = require('fs');
const path = require('path');

fs.mkdirSync(path.join(__dirname, "src"));
console.log("El directorio se ha creado correctamente");