// Require fs
/**
 * * fs.readdir(path,callback):
 * ? Lee el contenido de un directorio de forma asincrónica
 * @param path = ruta del directorio
 * @param callback Función de devolución de llamada que recibe err (error) y files
(array de nombres de archivos en el directorio).
*/
let fs = require('fs');

fs.readdir(__dirname, (error,files)=>{
    if (error){
        console.log(error);
    }
    else{
        files.forEach((val,id)=>{
            console.log(val);
        })
    }
})




