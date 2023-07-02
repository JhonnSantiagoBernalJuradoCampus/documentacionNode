// Require fs
/**
 * * fs.rmdir(path, callback):
 * ?  Elimina un directorio de forma sincrónica
 * @param path = ruta del directorio a crear
 * @param callback = Funcion de devolucion de llamada que recibe err cuando se completa la eliminacion
*/
const fs = require('fs');
const path = require('path');

fs.rmdir(path.join(__dirname, "src"), (err)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log("El directorio se ha eliminado correctamente");
    }
})