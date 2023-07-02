// Require fs
/**
 * * fs.readdirSync(path):
 * ? Lee el contenido de un directorio de forma sincrónica (bloqueante).
 * @param path = ruta del directorio
*/
let fs = require('fs');

let array = fs.readdirSync(__dirname);
array.forEach((val,id)=>{
    console.log(val);
});