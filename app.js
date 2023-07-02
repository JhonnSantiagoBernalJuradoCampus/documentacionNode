// Require fs
/**
 * * fs.mkdir(path, options, callback):
 * ? Crea un directorio de forma asincrónica
 * @param path = ruta del directorio a crear
 * @param options = Opciones para la creación del directorio.
 * @param callback = Función de devolución de llamada que recibe err(error) cuando se completa la creación
*/
const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, "src"), (error)=>{
    if (error){
        console.log(error);
    }
    else{
        console.log('Directory createde successfully');
    }
});